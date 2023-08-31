import { Request, Response } from "express";
import Comment from "../models/comment";
import Post from "../models/post";

export const createPosts = async (req: Request, res: Response) => {
  try {
    const { postTitle, postDesc } = req.body; //undefined  before setting up multer
    // console.log("files", req.files); // when uploading multiples files. works for single file as well.
    // console.log("files", req.file); //when uploading single file

    const post = await new Post({
      title: postTitle,
      description: postDesc,
      files: req.files, // the key name 'files' should be same as the key name in the form-data in postman and the name used in upload.single("files") or upload.array("files", 5) in routes/posts.ts file and in the models for files. req.files is an array of object and so it's stored in the mongoose database as an array of object though in the model it's defined as a single object and still working fine cause mongoose is smart enough to know that it's an array of object and so it stores it as an array of object(?)
    }).save();

    const posts = await Post.find().sort({ createdAt: -1 }); //.sort({ createdAt: -1 }) wil display the recently added post first
    console.log("all posts", posts);
    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const allPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); //.sort({ createdAt: -1 }) wil display the recently added post first
    console.log("all posts", posts);
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deletePosts = async (req: Request, res: Response) => {
  try {
    // Find the post by ID and populate its comments field
    const { postId } = req.params;
    const post = await Post.findById(postId).populate("comments");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Delete all associated comments
    for (const comment of post.comments) {
      await Comment.findByIdAndDelete(comment._id);
    }

    // Delete the post itself
    const deletedPost = await Post.findByIdAndDelete(postId);

    res.json({
      deletedPost: deletedPost?._id,
      message: "Post and associated comments deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
