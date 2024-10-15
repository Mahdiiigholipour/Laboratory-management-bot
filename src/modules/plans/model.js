const { Schema, model } = require("mongoose");

const planSchema = new Schema({
  name: { type: Object, required: true, default: { text: "نام طرح درمان" } },
  options: { type: Object, required, default: { text: "جزئیات" } },
});
const PlanModel = model("plan", planSchema);

module.exports = PlanModel;
