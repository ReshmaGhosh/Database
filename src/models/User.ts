import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  name: string;
  age: number;
  height: number;
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<UserDocument>("User", UserSchema);