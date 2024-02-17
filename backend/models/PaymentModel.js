import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        },
        token: {
            type: String,
            required: true
        },
        payed: {
            type: Boolean,
            required: true,
            default: false
        },
        key: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Payment", PaymentSchema);
