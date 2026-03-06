"use client";

import { useState, useEffect } from "react";
import {
  getResumenInventario,
  getUltimoProductoInsertado,
  getUltimoProductoModificado,
  getProductosPorCategoria,
  getTopProductosCategoria,
} from "../api/product.api";
import type {
  invertarioResumen,
  ProdAt,
  TotalStock,
  TopProduct,
} from "../types/dashboard.ts";
export function useDashboard() {
  const [resumenInventario, setResumenInventario] =
    useState<invertarioResumen>();
  const [prodInsert, setProdInsert] = useState<ProdAt>();
  const [prodModif, setProdModif] = useState<ProdAt>();
  const [productosPorCategoria, setProductosPorCategoria] = useState<
    TotalStock[]
  >([]);
  const [topProductosCategoria, setTopProductosCategoria] = useState<
    TopProduct[]
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

    getTopProductosCategoria().then((data) => {
      setTopProductosCategoria(data);
    });
  }, []);

  return {
    resumenInventario,
    prodInsert,
    prodModif,
    productosPorCategoria,
    topProductosCategoria,
  };
}
