import app from '../app.js';
import request from 'supertest';

describe('GET /products', () => {
    test("Deberia devolver un status 200 si todo es correcto",async () => {
        const response = await request(app).get('/products').send()
        expect(response.statusCode).toBe(200);
    })
})

describe('GET /products/:id', () => {
    test("Deberia devolver un status 200 si el producto existe",async () => {
        const response = await request(app).get('/products/1').send()
        expect(response.statusCode).toBe(200);
    })
    test("Deberia devolver un status 404 si el producto no existe",async () => {
        const response = await request(app).get('/products/9999').send()
        expect(response.statusCode).toBe(404);
    })
})

describe('POST /products', () => {
    let habCorrect = {
        name: "Producto de prueba",
        description: "Descripción del producto de prueba",
        stock: 10,
        id_categoria: 1
    }

    let habIncorrect = {
        name: "Producto de prueba",
        description: "Descripción del producto de prueba",
        stock: -10,
        id_categoria: 1
    }

    let habIncorrect2 = {
        name: "Producto de prueba",
        description: "Descripción del producto de prueba",
        stock: 10,
    }

    test("Deberia devolver un status 201 si el producto se crea correctamente",async () => {
        const response = await request(app).post('/products').send(habCorrect)
        expect(response.statusCode).toBe(201);
    })
    test("Deberia devolver un status 400 si el producto no se crea correctamente",async () => {
        const response = await request(app).post('/products').send(habIncorrect)
        expect(response.statusCode).toBe(400);
    })
    test("Deberia devolver un status 400 si el producto no se crea correctamente",async () => {
        const response = await request(app).post('/products').send(habIncorrect2)
        expect(response.statusCode).toBe(400);
    })
})

describe('PUT /products/:id', () => {
    let habCorrect = {
        name: "Producto de prueba",
        description: "Descripción del producto de prueba",
        stock: 10,
        id_categoria: 1
    }

    let habIncorrect = {
        name: "Producto de prueba",
        description: "Descripción del producto de prueba",
        stock: -10,
        id_categoria: 1
    }

    let habIncorrect2 = {
        name: "Producto de prueba",
        description: "Descripción del producto de prueba",
        stock: 10,
    }

    test("Deberia devolver un status 200 si el producto se actualiza correctamente",async () => {
        const response = await request(app).put('/products/1').send(habCorrect)
        expect(response.statusCode).toBe(200);
    })
    test("Deberia devolver un status 400 si el producto no se actualiza correctamente",async () => {
        const response = await request(app).put('/products/1').send(habIncorrect)
        expect(response.statusCode).toBe(400);
    })
    test("Deberia devolver un status 400 si el producto no se actualiza correctamente",async () => {
        const response = await request(app).put('/products/1').send(habIncorrect2)
        expect(response.statusCode).toBe(400);
    })
    test("Deberia devolver un status 404 si el producto no existe",async () => {
        const response = await request(app).put('/products/9999').send(habCorrect)
        expect(response.statusCode).toBe(404);
    })
})

describe('DELETE /products/:id', () => {
    test("Deberia devolver un status 200 si el producto se elimina correctamente",async () => {
        const response = await request(app).delete('/products/1').send()
        expect(response.statusCode).toBe(200);
    })
    test("Deberia devolver un status 404 si el producto no existe",async () => {
        const response = await request(app).delete('/products/9999').send()
        expect(response.statusCode).toBe(404);
    })
})
