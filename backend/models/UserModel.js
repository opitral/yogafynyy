import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        telegram: {
            type: String
        },
        lastContent: {
            yoga: {
                lesson: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Lesson",
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
                lesson: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Lesson",
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
                lesson: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Lesson",
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
