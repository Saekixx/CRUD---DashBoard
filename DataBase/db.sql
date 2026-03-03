drop database if exists db_negocio;
create database db_negocio;
use db_negocio;

create table categoria(
	id_categoria int auto_increment primary key,
    nombre char(40) not null,
    descripcion char(200) not null
);

create table product(
	id_product int auto_increment primary key,
    nombre char(40) not null,
    descripcion char(200) not null,
    stock int not null,
    id_categoria int,
    activo tinyint(1) default 0, -- 1 = activo  0 = inactivo
    create_at timestamp default current_timestamp,
    update_at timestamp default current_timestamp,
    constraint fk_categoria foreign key (id_categoria) 
    references Categoria(id_categoria)
);

insert categoria(nombre, descripcion) values ('Electrónica', 'Dispositivos, gadgets y componentes de hardware'),
('Hogar', 'Artículos de cocina, decoración y muebles'),
('Ropa', 'Vestimenta para caballeros, damas y niños'),
('Deportes', 'Equipamiento deportivo y suplementos');

insert product (nombre, descripcion, stock, id_categoria, activo) values 
('Laptop Pro 15', 'Procesador i7, 16GB RAM, 512GB SSD', 10, 1, 0),
('Audífonos Bluetooth', 'Cancelación de ruido activa, 20h batería', 25, 1, 0),
('Monitor 4K 27"', 'Panel IPS, 144Hz para diseño y gaming', 8, 1, 0);

insert product (nombre, descripcion, stock, id_categoria, activo) values 
('Cafetera Express', 'Presión 15 bares, espumador de leche', 12, 2, 0),
('Lámpara de Escritorio', 'LED con carga inalámbrica para móvil', 40, 2, 0),
('Juego de Cuchillos', 'Acero inoxidable, set de 6 piezas', 15, 2, 0);

insert product (nombre, descripcion, stock, id_categoria, activo) values 
('Chaqueta de Mezclilla', 'Corte clásico, color azul lavado', 20, 3, 0),
('Zapatillas Urbanas', 'Suela antideslizante, lona reforzada', 35, 3, 0),
('Pantalón Chino', 'Corte slim fit, color beige', 50, 3, 0);

insert product (nombre, descripcion, stock, id_categoria, activo) values 
('Mancuernas 5kg', 'Recubiertas en neopreno antideslizante', 18, 4, 0),
('Mat de Yoga', 'Espesor 6mm, material ecológico TPE', 30, 4, 0),
('Bicicleta de Montaña', 'Cuadro de aluminio, 21 velocidades', 5, 4, 0);

create procedure sp_getAllProducts()
	select p.*, c.nombre, c.descripcion from product p
    join categoria c on p.id_categoria = c.id_categoria;

create procedure sp_getByIdProduct(_id int)
	select p.*, c.nombre, c.descripcion from product p
    join categoria c on p.id_categoria = c.id_categoria
    where id_product = _id;
    
create procedure sp_createProduct(_nombre char(40), _descripcion char(200), _stock int, _id_categoria int)
	insert product(nombre,descripcion,stock,id_categoria) values (_nombre, _descripcion, _stock, _id_categoria);

create procedure sp_updateProduct(_id_product int,_nombre char(40), _descripcion char(200), _stock int, _id_categoria int)
	update product 
    set nombre = _nombre, descripcion = _descripcion, stock = _stock, id_categoria = _id_categoria, update_at = current_timestamp()
    where id_product = _id_product;
    
create procedure sp_deleteProduct(_id_product int)
	update product set activo = 1 where id_product = _id_product;
    





