import db from '../config/conexion.js';
import { validate } from '../validations/product.validations.js';

class Product {
    constructor(Data){
        // Validar los datos antes de asignarlos
        const validation = validate(Data);
        if(!validation.status) throw new Error(validation.message);
        
        this.id = Data.id_product;
        this.name = Data.nombre;
        this.description = Data.descripcion;
        this.stock = Data.stock;
        this.category = Data.categoria;
    }

    getAllProducts(){

    }
}