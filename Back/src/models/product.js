import db from "../config/conexion.js";

class Product {
  static async getAll() {
    const [rows] = await db.query("CALL sp_getAllProducts");
    return rows;
  }

  static async getAllInactivos() {
    const [rows] = await db.query("CALL sp_getAllProductsInactivos");
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query("CALL sp_getByIdProduct(?)", [id]);
    return rows[0];
  }

  static async create(name, description, stock, id_categoria) {
    return await db.query("CALL sp_createProduct(?, ?, ?, ?)", [
      name,
      description,
      stock,
      id_categoria,
    ]);
  }

  static async update(id, name, description, stock, id_categoria) {
    return await db.query("CALL sp_updateProduct(?, ?, ?, ?, ?)", [
      id,
      name,
      description,
      stock,
      id_categoria,
    ]);
  }

  static async delete(id) {
    return await db.query("CALL sp_deleteProduct(?)", [id]);
  }

  static async activate(id) {
    return await db.query("CALL sp_activateProduct(?)", [id]);
  }
}

export default Product;
