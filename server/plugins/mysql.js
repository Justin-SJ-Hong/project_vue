require('dotenv').config();
const mysql = require('mysql2');

function createDatabase() {
    let instance = null;
    return {
        getInstance : function() {
            // 인스턴스가 없을 경우 새로 생성
            if(instance == null) {
                const config = {
                    host : process.env.DB_HOST,
                    user : process.env.DB_USER,
                    password : process.env.DB_PASSWORD,
                    database : process.env.DB_DATABASE
                };
                const pool = mysql.createPool(config);
                instance =pool.promise();
            }
            // 인스턴스가 있을 경우 인스턴스를 반환
            return instance;
        }
    }
}

module.exports = createDatabase().getInstance();