import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import ReplyForm from "./ReplyForm";

type comment = {
  _id: string;
  text: string;
  replies?: comment[];
  parent: string;
  createdAt: string;
};

// interface CommentProps {
//   singleComment: comment[];
// }

type comments = {
  _id: string;
  text: string;
  parent: string;
  replies?: [comments]; // works like this. comments[] throws ts error.
  createdAt: string;
};

type props = {
  singleComment: comment[];
  postId: string;
  setAllComments: React.Dispatch<React.SetStateAction<comments[]>>;
};

export default function Reply({
  singleComment,
  postId,
  setAllComments,
}: props) {
  //this is a recursive component that iterates through the array and its nested replies

  const [remainingRepliesData, setRemainingRepliesData] =
    useState(singleComment); //doing this to delete a reply from the ui when a reply is deleted.

  const [openForms, setOpenForms] = useState<{ [key: string]: boolean }>({}); // for toggling reply button of the replies.
  const toggleReplyForm = (commentId: string) => {
    //for toggling reply button of the replies.
    setOpenForms((prevOpenForms) => ({
      ...prevOpenForms,
      [commentId]: !prevOpenForms[commentId],
    }));
  };

  const deleteReply = (singleComment: comment[], targetId: string) => {
    //for deleting the deleted reply from the ui.
    //recursive function
    return singleComment.filter((reply: comment) => {
      if (reply._id === targetId) {
        return false; // Exclude the object with the targetId
      }
      if (reply.replies && reply.replies.length > 0) {
        reply.replies = deleteReply(reply.replies, targetId);
      }
      return true; // Include all other objects
    });
  };

  const handleDeleteReply = async (commentId: string) => {
    try {
      const response = await axios.delete(`/api/deleteComment/${commentId}`); //this will delete the comment from the server. But to reflect it in the ui, we need to delete it from the ui/state as well.
      console.log("handleDeleteReply", response.data);

      const remainingReplies = deleteReply(singleComment, commentId);
      console.log("remainingReplies", remainingReplies);
      setRemainingRepliesData(remainingReplies);

      //calling the updated comment data from the server to update the ui. if I don't call the updated data from the server, the UI doesn't update as expected and give some bugs.
      const responseComment = await axios.get(
        `/api/getCommentsWithReplies/${postId}`
      );
      setAllComments(responseComment.data);
    } catch (error) {
      console.log("Error occurred.");
    }
  };

  const renderComments = (commentsArray: comment[]) => {
    //recursive function to render the nested replies.
    console.log("commentsArray", commentsArray);

    return commentsArray?.map((comment) => (
      <div key={comment._id} className="mt-4">
        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <img
              className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
              src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              alt=""
            />
          </div>
          <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <strong className="mr-2">User</strong>
                <span className="text-xs text-gray-400">
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
                  onClick={() => handleDeleteReply(comment._id)}
                >
                  <AiFillDelete />
                </a>
              </div>
            </div>
            <Tooltip id="my-tooltip" />
            <p>{comment.text}</p>
            <div className="mt-2 text-sm text-gray-500 font-semibold mr-8 ">
              <p
                className="hover:underline cursor-pointer"
                onClick={() => toggleReplyForm(comment._id)}
              >
                Reply
              </p>
              {openForms[comment._id] && (
                <ReplyForm
                  comment={comment}
                  postId={postId}
                  setAllComments={setAllComments}
                />
              )}
            </div>
          </div>
        </div>
        {comment?.replies && comment?.replies.length > 0 && (
          <div className="ml-4">{renderComments(comment?.replies)}</div>
        )}
      </div>
    ));
  };
  return (
    <div className="comment-list">{renderComments(remainingRepliesData)}</div>
  );
}
