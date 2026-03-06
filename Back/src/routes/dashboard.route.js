import { Router } from "express";
import DashboardController from "../controllers/dashboard.js";

const DashboardRouter = Router();

DashboardRouter.get(
  "/resumen-inventario",
  DashboardController.getResumenInventario,
);
DashboardRouter.get(
  "/ultimo-producto-ingresado",
  DashboardController.getUltimoProductoIngresado,
);
DashboardRouter.get(
  "/ultimo-producto-modificado",
  DashboardController.getUltimoProductoModificado,
);

DashboardRouter.get(
  "/productos-por-categoria",
  DashboardController.getProductosPorCategoria,
);

DashboardRouter.get(
  "/top-productos-categoria",
  DashboardController.getTopProductosMasVendidos,
);

export default DashboardRouter;
