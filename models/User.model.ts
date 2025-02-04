import mongoose, { model, Schema, models } from "mongoose";
import bcrypt from "bcryptjs";

export interface UserInterface {
  _id?: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<UserInterface>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = models?.User || model<UserInterface>("User", userSchema);

export default User;
