import { Router } from "express";
import DashboardController from "../controllers/dashboard.js";

const DashboardRouter = Router();

DashboardRouter.get(
  "/resumen-inventario",
  DashboardController.getResumenInventario,
);

export default DashboardRouter;
