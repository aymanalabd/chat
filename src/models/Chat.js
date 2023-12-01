import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  nick: String,
  msg: String,
  created: { type: Date, default: Date.now },
});

export default mongoose.model("Chat", ChatSchema);
