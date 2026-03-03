export function validate(Data){
    if(!Data.name || typeof Data.name !== 'string') return {status: false, message: "Nombre invalido"};
    if(!Data.description || typeof Data.description !== 'string') return {status: false, message: "Descripcion invalida"};
    if(!Data.stock || typeof Data.stock !== 'number') return {status: false, message: "Stock invalido"};
    if(Data.stock < 0) return {status: false, message: "Stock no puede ser negativo"};
    if(!Data.category || typeof Data.category !== 'string') return {status: false, message: "Categoria invalida"};

    return {status: true};
}