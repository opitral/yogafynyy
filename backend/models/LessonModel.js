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
      photo: {
          type: String
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
      },
      disable: {
        type: Boolean,
          required: true,
          default: false
      }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Lesson", LessonSchema);
