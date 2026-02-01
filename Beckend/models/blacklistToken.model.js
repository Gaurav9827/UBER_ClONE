const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    requird: true,
    unique: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
    expires: 86400, //24 second in second
  },
});

module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);
