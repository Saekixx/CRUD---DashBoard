"use client";

import { useState, useEffect } from "react";
import {
  getResumenInventario,
  getUltimoProductoInsertado,
  getUltimoProductoModificado,
} from "../api/product.api";
import type { invertarioResumen, ProdAt } from "../types/dashboard.ts";
export function useDashboard() {
  const [resumenInventario, setResumenInventario] =
    useState<invertarioResumen>();
  const [prodInsert, setProdInsert] = useState<ProdAt>();
  const [prodModif, setProdModif] = useState<ProdAt>();

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
  }, []);

  return {
    resumenInventario,
    prodInsert,
    prodModif,
  };
}
