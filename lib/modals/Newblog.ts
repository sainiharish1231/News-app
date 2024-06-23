import { Schema, model, models } from "mongoose";
const NewblogSchema = new Schema({
  Image: String,
  Category: String,
  uploadTime: String,
  title: String,
  description: String,
  article: String,
  profilName: String,
  Comments: Object,
  Views: String,
  Likes: Number, // Ensure this is defined as a Number
  disLikes: String,
  saveData: String, // renamed to avoid conflict with reserved keyword
  share: String,
  downlode: String,
  urlkey: { type: String, unique: true },
});

// Initialize the model only if it hasn't been initialized already
const Newblog = models.newblog || model("newblog", NewblogSchema);

export default Newblog;
