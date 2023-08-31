import express from "express";
import multer from "multer";
const router = express.Router();

import { allPosts, createPosts, deletePosts } from "../controllers/posts";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },

  filename: function (req: any, file: any, cb: any) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

// router.post("/posts/create", upload.none(), createPosts); // to handle a text-only(not file. coming from formData()) multipart form, you should use the .none()
// router.post("/posts/create", upload.single("files"), createPosts); // can upload single file only. use req.file for this.
router.post("/posts/create", upload.array("files", 5), createPosts); //can upload single or multiple files. use req.files for this.

router.get("/posts", allPosts);
router.delete("/posts/delete/:postId", deletePosts);

export default router;
