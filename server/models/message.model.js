import { model, Schema } from "mongoose";

const messageSchema = new Schema({
  message_id: {
    type: String,
    required: true,
    unique: true,
  },

  wa_id: {
    type: String,
  },
  name: {
    type: String,
  },
  message: {
    type: String,
  },
  direction: {
    type: String,
    enum: ["incoming", "outgoing"],
  },
  status: {
    type: String,
    enum: ["sent", "delivered", "read"],
  }
}, { timestamps: true });

const Message = model("Message", messageSchema);

export default Message;
