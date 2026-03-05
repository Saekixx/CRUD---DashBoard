import Product from "../models/product.js";

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.getAll();
      res.status(200).json(products);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener productos", error: error.message });
    }
  },

  getAllProductsInactivos: async (req, res) => {
    try {
      const products = await Product.getAllInactivos();
      res.status(200).json(products);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error al obtener productos inactivos",
          error: error.message,
        });
    }
  },

  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.getById(id);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      res.status(200).json(product);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener producto", error: error.message });
    }
  },

  createProduct: async (req, res) => {
    const { name, description, stock, id_categoria } = req.body;
    if (!name || !description || !stock || !id_categoria) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }

    if (stock < 0) {
      return res
        .status(400)
        .json({ message: "El stock no puede ser negativo" });
    }

    try {
      await Product.create(name, description, stock, id_categoria);
      res.status(201).json({ message: "Producto creado exitosamente" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al crear producto", error: error.message });
    }
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { name, description, stock, id_categoria } = req.body;
    if (!name || !description || !stock || !id_categoria) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }

    if (stock < 0) {
      return res
        .status(400)
        .json({ message: "El stock no puede ser negativo" });
    }

    try {
      const result = await Product.update(
        id,
        name,
        description,
        stock,
        id_categoria,
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      res.status(200).json({ message: "Producto actualizado exitosamente" });
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error al actualizar producto",
          error: error.message,
        });
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Product.delete(id);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      res.status(200).json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al eliminar producto", error: error.message });
    }
  },

  activateProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Product.activate(id);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      res.status(200).json({ message: "Producto activado exitosamente" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al activar producto", error: error.message });
    }
  },
};

export default ProductController;
