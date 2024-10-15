const { Schema, Types, model } = require("mongoose");
const { productStatus } = require("../../constants/enums");

const productSchema = new Schema(
  {
    fullName: { type: String, required: true, default: { text: "نام بیمار" } },
    master: { type: Types.ObjectId, required: true, default: { text: "" } },
    plan: { type: Types.ObjectId, required: true, default: { text: "" } },
    caption: { type: String, required: false, default: { text: "" } },
    postDate: {
      type: Date,
      required: false,
      default: 0,
      default: { text: "" },
    },
    status: {
      type: String,
      enum: Object.keys(productStatus),
      default: { text: "" },
    },
  },
  { timestamps: true }
);

const ProductModel = model("product", productSchema);

module.exports = ProductModel;
