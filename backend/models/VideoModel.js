import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    fileId: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    mood: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Video", VideoSchema);
