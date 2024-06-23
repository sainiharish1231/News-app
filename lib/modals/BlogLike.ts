import { Schema, model, models } from "mongoose";

const blogLikeSchema = new Schema({
  urlkey: { type: String, unique: false },
  username: String,
  userlike: Boolean,
});

const BlogLike = models.blogLike || model("blogLike", blogLikeSchema);

export default BlogLike;
