import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    paymentToken: {
      type: String,
    },
    botToken: {
      type: String,
    },
    telegramId: {
      type: String,
    },
    paid: {
      type: Date,
    },
    lastGetVideo: {
      yoga: {
        video: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Video",
        },
        datetime: {
          type: Date,
        },
        count: {
          type: Number,
          default: 0,
        },
      },
      breath: {
        video: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Video",
        },
        datetime: {
          type: Date,
        },
        count: {
          type: Number,
          default: 0,
        },
      },
      meditation: {
        video: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Video",
        },
        datetime: {
          type: Date,
        },
        count: {
          type: Number,
          default: 0,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
