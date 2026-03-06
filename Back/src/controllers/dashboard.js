import Product from "../models/product.js";

const DashboardController = {
  getResumenInventario: async (req, res) => {
    try {
      const resumen = await Product.resumenInventario();
      res.status(200).json(resumen);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener resumen", error: error.message });
    }
  },

  getUltimoProductoIngresado: async (req, res) => {
    try {
      const producto = await Product.ultimoProductoIngresado();
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener último producto ingresado",
        error: error.message,
      });
    }
  },

  getUltimoProductoModificado: async (req, res) => {
    try {
      const producto = await Product.ultimoProductoModificado();
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener último producto modificado",
        error: error.message,
      });
    }
  },
};

export default DashboardController;
