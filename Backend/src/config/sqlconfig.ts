import dotenv from "dotenv";
import mssql from 'mssql'

dotenv.config();


export const sqlConfig = {
  user: "sa" || process.env.DB_USER,
  password: "Bagel@001" || process.env.DB_PWD,
  database: "noteTakingApp" || process.env.DB_NAME,
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 3000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

async function testDBConnection() {
  const pool = await mssql.connect(sqlConfig);

  if (pool.connected) {
    console.log("connection successful");
  }
}
testDBConnection();
