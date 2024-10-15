const { default: autoBind } = require("auto-bind");
const PlanModel = require("./model");

class PlanService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = PlanModel;
  }

  async create() {}
  async update() {}
  async remove() {}
}
module.exports = new PlanService();
