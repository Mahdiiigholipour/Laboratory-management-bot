const { default: autoBind } = require("auto-bind");
const ProductModel = require("./model");

class ProductService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = ProductModel;
  }

  async create() {}
  async update() {}
  async remove() {}
}
module.exports = new ProductService();
