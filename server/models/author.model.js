const mongoose = require("mongoose");
// const requiredErrMsg = "{PATH} is required.";
const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be at least 3 characters"],
    minlength: [3, "{PATH} must be at lesast {MINLENGTH} characters."],
  },
  {timestamps: true}
});

module.exports.Author = mongoose.model("Author", AuthorSchema);
