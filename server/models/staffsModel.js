import mongoose from "mongoose";
import bcrypt from "bcrypt";
const schema = new mongoose.Schema(
  {
    TenNhanVien: {
      type: String,
      required: true,
    },
    Username: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    Avatar: {
      type: String,
      required: true,
    },
    PhanQuyen: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

schema.pre("save", function (next) {
  if (!this.isModified("Password")) return next();
  bcrypt.hash(this.Password, 10, (err, PasswordHash) => {
    if (err) return next();
    this.Password = PasswordHash;
    next();
  });
});

schema.methods.comparePassword = async function (Password, cp) {
  await bcrypt.compare(Password, this.Password, (err, isMatch) => {
    if (err) return cp(err);
    else {
      if (!isMatch) return cp(null, isMatch);
      return cp(null, this);
    }
  });
};

export const StaffModel = mongoose.model("tai-khoan-nhan-vien", schema);
