"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Product } from "@/types/product";
import type { ProductFormData } from "@/types/productForm";
import { useState } from "react";

interface ModalEditFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onUpdate: (id: number, data: ProductFormData) => void;
  onCreate: (data: ProductFormData) => void;
  initialValues?: Product;
  loadProduct?: (id: number) => Promise<void>;
}
function ModalForm({
  open,
  setOpen,
  initialValues,
  onUpdate,
  onCreate,
}: ModalEditFormProps) {
  const [id_product, setId_product] = useState<number | null>(
    initialValues?.id_product ?? null,
  );
  const [name, setNombre] = useState<string>(initialValues?.nombre ?? "");
  const [description, setDescripcion] = useState<string>(
    initialValues?.descripcion ?? "",
  );
  const [stock, setStock] = useState<number>(initialValues?.stock ?? 0);
  const [id_categoria, setCategoria] = useState<string>(
    initialValues?.id_categoria?.toString() ?? "",
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      description,
      stock,
      id_categoria: Number(id_categoria) || null,
    };

    if (id_product === null) {
      onCreate(data);
    } else {
      onUpdate(id_product, data);
    }
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle />
          </DialogHeader>

          <DialogDescription />

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid w-full items-center gap-1.5">
                <Label>Nombre</Label>
                <Input
                  value={name}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label>Descripción</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label>Stock</Label>
                <Input
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(parseInt(e.target.value) || 0)}
                />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label>Categoría</Label>
                <Select value={id_categoria} onValueChange={setCategoria}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Electronica</SelectItem>
                    <SelectItem value="2">Hogar</SelectItem>
                    <SelectItem value="3">Ropa</SelectItem>
                    <SelectItem value="4">Deportes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit">Guardar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalForm;
