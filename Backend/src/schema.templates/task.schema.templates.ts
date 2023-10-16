import { Schema } from "mongoose";

const taskSchemaTemplate = {
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  name: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
    required: true,
  },
};

export default taskSchemaTemplate;
