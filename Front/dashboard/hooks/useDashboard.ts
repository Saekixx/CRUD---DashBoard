"use client";

import { useState, useEffect } from "react";
import {
  getResumenInventario,
  getUltimoProductoInsertado,
  getUltimoProductoModificado,
  getProductosPorCategoria,
} from "../api/product.api";
import type {
  invertarioResumen,
  ProdAt,
  TotalStock,
} from "../types/dashboard.ts";
export function useDashboard() {
  const [resumenInventario, setResumenInventario] =
    useState<invertarioResumen>();
  const [prodInsert, setProdInsert] = useState<ProdAt>();
  const [prodModif, setProdModif] = useState<ProdAt>();
  const [productosPorCategoria, setProductosPorCategoria] = useState<
    TotalStock[]
  >([]);

  useEffect(() => {
    getResumenInventario().then((data) => {
      setResumenInventario(data);
    });

    getUltimoProductoInsertado().then((data) => {
      setProdInsert(data);
    });

    getUltimoProductoModificado().then((data) => {
      setProdModif(data);
    });

    getProductosPorCategoria().then((data) => {
      setProductosPorCategoria(data);
    });
  }, []);

  return {
    resumenInventario,
    prodInsert,
    prodModif,
    productosPorCategoria,
  };
}
