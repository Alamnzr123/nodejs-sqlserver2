module.exports = {
    HOST: "ALAMSYAH",
    PORT: "1433",
    USER: "alamnzr",
    PASSWORD: "sas",
    DB: "test-app",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};