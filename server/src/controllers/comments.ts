import { Request, Response } from "express";
import Comment from "../models/comment";
import Post from "../models/post";

async function getNestedReplies(commentId: any) {
  const replies = await Comment.find({ parent: commentId });
  const nestedReplies = [];

  for (const reply of replies) {
    const childReplies: any = await getNestedReplies(reply._id);
    nestedReplies.push({
      ...reply.toObject(),
      replies: childReplies,
    });
  }

  return nestedReplies;
}

export const addComment = async (req: Request, res: Response) => {
  try {
    const { postId, comment: commentText } = req.body;
    const commentSaved = await new Comment({
      text: commentText,
      parent: postId,
    }).save(); //saving the comment

    let commentedPost = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: commentSaved._id } },
      { new: true }
    )
      .populate("comments")
      .lean(); // updating the post by pushing the comment id to the comments array and populating the comments array  to send as response so that we can access the comment text and other details from the frontend

    const commentedPostsWithNestedReplies = [];

    if (commentedPost?.comments) {
      for (const comment of commentedPost.comments) {
        const replies = await getNestedReplies(comment._id);
        commentedPostsWithNestedReplies.push({
          ...comment,
          replies,
        });
      }
    }

    console.log(commentedPostsWithNestedReplies);

    res.status(200).json({ commentedPostsWithNestedReplies });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const addReply = async (req: Request, res: Response) => {
  try {
    const { commentId, replyToComment } = req.body;
    console.log("commentID", commentId);
    console.log("replyToComment", replyToComment);

    const saveReply = await new Comment({
      text: replyToComment,
      parent: commentId,
    }).save();

    res.status(200).json({ saveReply });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getCommentsWithReplies = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    let commentedPost = await Post.findById(postId).populate("comments").lean();

    const commentedPostsWithNestedReplies = [];

    if (commentedPost?.comments) {
      for (const comment of commentedPost.comments) {
        const replies = await getNestedReplies(comment._id);
        commentedPostsWithNestedReplies.push({
          ...comment,
          replies,
        });
      }
    }

    console.log(commentedPostsWithNestedReplies);

    res.json(commentedPostsWithNestedReplies);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;

    console.log("commentId", commentId);

    //find  the comment using the commentId from the Comment collection delete that comment
    const deletedComment = await Comment.findOneAndDelete({ _id: commentId });
    console.log("deleteComment", deleteComment);
    res.status(200).json({
      deletedComment,
      message: "comment is deleted",
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
