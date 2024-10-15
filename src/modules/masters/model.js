const { Schema, model } = require("mongoose");

const masterSchema = new Schema({
  fullName: {
    type: string,
    required: true,
    default: { text: "نام و نام خانوادگی" },
  },
  address: { type: string, required: true, default: { text: "آدرس" } },
  phoneNumber: {
    type: string,
    required: true,
    default: { text: "شماره تلفن" },
  },
  products: {
    type: Object,
    ref: "products",
    required: false,
    default: { text: "محصولات" },
  },
  isClinic: {
    type: Object,
    required: true,
    default: {
      value: false,
    },
  },
});

const MasterModel = model("master", masterSchema);
module.exports = MasterModel;
