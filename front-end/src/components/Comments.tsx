import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { ImReply } from "react-icons/im";
import { Tooltip } from "react-tooltip";
import Reply from "./Reply";
import ReplyForm from "./ReplyForm";

type Props = {
  postId: string;
};

type comments = {
  _id: string;
  text: string;
  parent: string;
  replies?: [comments];
  createdAt: string;
};

function Comments({ postId }: Props) {
  const [comment, setComment] = useState<string>("");
  const [allComments, setAllComments] = useState<comments[]>([]);
  const [replyFormsOpen, setReplyFormsOpen] = useState<boolean[]>([]);
  const [repliesOpen, setRepliesOpen] = useState<boolean[]>([]);

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get(`/api/getCommentsWithReplies/${postId}`);
      setAllComments(response.data);

      console.log("response comments", response.data);

      const initialReplyFormsState = response.data.map(() => false);
      setReplyFormsOpen(initialReplyFormsState);
      setRepliesOpen(initialReplyFormsState);
    };
    getComments();
  }, [postId]);

  console.log("replyFormsOpen", replyFormsOpen);

  const toggleReplyForm = (commentIndex: number) => {
    const updatedReplyForms = [...replyFormsOpen];
    updatedReplyForms[commentIndex] = !updatedReplyForms[commentIndex];
    setReplyFormsOpen(updatedReplyForms);
  };

  const toggleReplies = (commentIndex: number) => {
    const updatedReplies = [...repliesOpen];
    updatedReplies[commentIndex] = !updatedReplies[commentIndex];
    setRepliesOpen(updatedReplies);
  };

  const commentText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // setComment(event.target.value as never); //works
    setComment(event.target.value as string);
  };

  const submitComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("comment", comment);
    setComment("");

    const response = await axios.post("/api/addComment", {
      postId,
      comment,
    });

    setAllComments(response.data.commentedPostsWithNestedReplies);
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      const response = await axios.delete(`/api/deleteComment/${commentId}`);
      const newArray = allComments.filter(
        (comment) => comment._id !== response.data.deletedComment._id
      );

      setAllComments(newArray);
    } catch (error) {
      console.log("Error occured. ");
    }
  };
  return (
    <>
      <div>
        <form
          className="max-w-2xl bg-white rounded-lg border p-2 mx-auto mt-5"
          onSubmit={submitComment}
        >
          <div className="px-3 mb-2 mt-2">
            <textarea
              placeholder="comment"
              className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              value={comment}
              onChange={commentText}
            ></textarea>
          </div>
          <div className="flex justify-end px-4">
            <input
              type="submit"
              className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
              value="Comment"
            ></input>
          </div>
        </form>
      </div>
      {/* nested comment */}
      <div>
        <div className="antialiased mx-auto max-w-screen-sm">
          <h3 className="mb-2 mt-2 first-letter:text-lg font-semibold text-gray-900">
            Comments
          </h3>

          <div className="space-y-4">
            {allComments.map((comment, commentIndex: number) => (
              <>
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <img
                      className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                      src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                      alt=""
                    />
                  </div>
                  <>
                    <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <strong className="mr-2">User</strong>
                          <span className="text-xs text-gray-400">
                            {" "}
                            {moment(comment.createdAt).format(
                              "MMMM D, YYYY [at] hh:mm A"
                            )}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Edit"
                            className="text-blue-500 hover:text-blue-700 cursor-pointer"
                          >
                            <AiFillEdit />
                          </a>
                          <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Delete"
                            className="text-red-500 hover:text-red-700 cursor-pointer"
                            onClick={() => handleDeleteComment(comment._id)}
                          >
                            <AiFillDelete />
                          </a>
                        </div>
                      </div>

                      <Tooltip id="my-tooltip" />
                      <p className="text-sm" key={commentIndex}>
                        {comment?.text}
                      </p>
                      <div className="mt-4 flex items-center">
                        <FaCommentAlt className="mr-1 text-sm mt-1" />
                        <div className="text-sm text-gray-500 font-semibold mr-8 cursor-pointer">
                          <p
                            className="hover:underline"
                            onClick={() => toggleReplyForm(commentIndex)}
                          >
                            Reply
                          </p>
                        </div>
                        {comment?.replies && comment?.replies?.length > 0 && (
                          <>
                            <ImReply className="mr-1 transform scale-x-[-1]" />
                            <div className="flex -space-x-2 mr-2">
                              <img
                                className="rounded-full w-6 h-6 border border-white"
                                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                                alt=""
                              />
                              <img
                                className="rounded-full w-6 h-6 border border-white"
                                src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                                alt=""
                              />
                            </div>
                            <div className="text-sm text-gray-500 font-semibold">
                              <p
                                className="hover:underline cursor-pointer"
                                onClick={() => toggleReplies(commentIndex)}
                              >
                                {comment.replies.length}{" "}
                                {comment.replies.length > 1
                                  ? "Replies"
                                  : "Reply"}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                      {replyFormsOpen[commentIndex] && (
                        <ReplyForm
                          comment={comment}
                          postId={postId}
                          setAllComments={setAllComments}
                          key={Math.random()}
                        />
                      )}
                      {repliesOpen[commentIndex] && comment.replies && (
                        <div>
                          <div>
                            <Reply
                              singleComment={comment.replies}
                              postId={postId}
                              setAllComments={setAllComments}
                              key={Math.random()}
                            />
                          </div>
                          {/* // ))} */}
                        </div>
                      )}
                      {/* for displaying replies */}
                    </div>
                  </>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      {/* nested comment */}
    </>
  );
}
export default Comments;
