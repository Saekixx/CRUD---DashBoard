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
};

export default DashboardController;
