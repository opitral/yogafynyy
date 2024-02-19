import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema(
  {
    files: {
      high: {
          type: String,
          required: true,
      },
      low: {
          type: String
      }
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
      type: {
          type: String,
          required: true,
      }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Lesson", LessonSchema);
