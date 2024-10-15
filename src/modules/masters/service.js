const { default: autoBind } = require("auto-bind");
const MasterModel = require("./model");

class MasterService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = MasterModel;
  }

  async create() {}
  async update() {}
  async remove() {}
}
module.exports = new MasterService();
