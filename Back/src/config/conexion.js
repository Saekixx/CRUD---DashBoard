import { createPool } from "mysql2/promise.js";

class DataBase {
    constructor() {
        if(DataBase.instance) return DataBase.instance;

        this.pool = createPool({
            host: "localhost",
            user: "root",
            password: "",
            database: "db_negocio",
            waitForConnections: true,
            connectionLimit: 10
    })
        DataBase.instance = this;
    }

    async query(sql, params) {
        const [rows] = await this.pool.execute(sql, params);
        return rows;
    }
}

const instance = new DataBase();
export default instance;