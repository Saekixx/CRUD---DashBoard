"use client";

import { useState, useEffect } from "react";
import { getResumenInventario } from "../api/product.api";
import type { invertarioResumen } from "../types/dashboard.ts";
export function useDashboard() {
  const [resumenInventario, setResumenInventario] =
    useState<invertarioResumen>();

  useEffect(() => {
    getResumenInventario().then((data) => {
      setResumenInventario(data);
    });
  }, []);

  return {
    resumenInventario,
  };
}
