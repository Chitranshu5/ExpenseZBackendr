import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  phone: String,
  ownerId: String,
});

// Create a single-field index on ownerId as the primary index
UserSchema.index({ ownerId: 1 });

export default mongoose.model("User", UserSchema);
