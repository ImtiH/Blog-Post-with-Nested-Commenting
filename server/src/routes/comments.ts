import express from "express";
import {
  addComment,
  addReply,
  deleteComment,
  getCommentsWithReplies,
} from "../controllers/comments";
const router = express.Router();

router.post("/addComment", addComment);
router.post("/addReply", addReply);
router.get("/getCommentsWithReplies/:postId", getCommentsWithReplies);
router.delete("/deleteComment/:commentId", deleteComment);

export default router;
