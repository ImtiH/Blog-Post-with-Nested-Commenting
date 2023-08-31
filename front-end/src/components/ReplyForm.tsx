import axios from "axios";
import { useState } from "react";

type comments = {
  _id: string;
  text: string;
  parent: string;
  replies?: [comments];
  createdAt: string;
};

type prop = {
  comment: {
    _id: string;
    text: string;
    parent: string;
  };
  postId: string;
  setAllComments: React.Dispatch<React.SetStateAction<comments[]>>;
};

export default function ReplyForm({ comment, postId, setAllComments }: prop) {
  const [replyToComment, SetReplyToComment] = useState<string>("");

  const replyText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    SetReplyToComment(event.target.value as string);
  };
  const submitComment = async (
    event: React.FormEvent<HTMLFormElement>,
    commentId: string
  ) => {
    try {
      event.preventDefault();

      SetReplyToComment("");
      const response = await axios.post("/api/addReply", {
        commentId,
        replyToComment,
      });
      const responseComment = await axios.get(
        `/api/getCommentsWithReplies/${postId}`
      );
      console.log("ReplyForm responseComment", responseComment.data);
      setAllComments(responseComment.data); //after adding a new reply, we are making a HTTP request to get the updated comments/replies of that post.

      console.log("saveReply", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex mt-4 border rounded">
      <div className="flex-shrink-0 ">
        <img
          className="mt-3 ml-1 rounded-full w-5 h-5 sm:w-6 sm:h-6"
          src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
          alt=""
        />
      </div>
      <div className=" flex-1 bg-gray-100 rounded-lg py-2 sm:px-6 leading-relaxed">
        <strong>User</strong>{" "}
        <form onSubmit={(e) => submitComment(e, comment?._id)}>
          <div className="px-3  mt-2">
            <textarea
              placeholder="comment"
              className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              value={replyToComment}
              onChange={replyText}
            ></textarea>
          </div>
          <div className="flex justify-end px-4">
            <input
              type="submit"
              className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 "
              value="Comment"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
