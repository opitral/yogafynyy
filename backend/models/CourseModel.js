import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        discount: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Course", CourseSchema);
