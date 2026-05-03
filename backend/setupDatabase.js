const fs = require("fs")
const path = require("path")
const mysql = require("mysql2/promise")

const envPath = path.join(__dirname, ".env")
const envExamplePath = path.join(__dirname, ".env.example")

if (!fs.existsSync(envPath)) {
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath)
    console.log("Created backend/.env from backend/.env.example.")
    console.log("Update backend/.env with your MySQL credentials and rerun: npm run setup-db")
    process.exit(1)
  }
  console.error("Missing backend/.env and backend/.env.example. Please create one before continuing.")
  process.exit(1)
}

require("dotenv").config({ path: envPath })

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env

if (!DB_HOST || !DB_USER || DB_PASSWORD === undefined || !DB_NAME) {
  console.error("Missing required database environment variables in backend/.env.")
  console.error("Please set DB_HOST, DB_USER, DB_PASSWORD, and DB_NAME.")
  process.exit(1)
}

console.log(`Using DB_USER: ${DB_USER}, DB_PASSWORD: ${DB_PASSWORD.replace(/./g, '*')}`)

const schemaPath = path.join(__dirname, "scripts", "schema.sql")
const seedPath = path.join(__dirname, "scripts", "seed.sql")

async function runSqlFile(connection, filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`SQL file not found: ${filePath}`)
  }

  const sql = fs.readFileSync(filePath, "utf8").trim()
  if (!sql) return

  await connection.query(sql)
}

async function main() {
  console.log(`Attempting to connect to MySQL server ${DB_HOST}:${DB_PORT || 3306} as ${DB_USER}`)
  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT || 3306,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
    insecureAuth: true,
  })

  console.log(`Connected successfully to MySQL server`)

  console.log(`Creating database if not exists: ${DB_NAME}`)
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`)
  console.log(`Database created or already exists: ${DB_NAME}`)

  console.log(`Switching to database: ${DB_NAME}`)
  await connection.query(`USE \`${DB_NAME}\`;`)

  console.log("Running schema script...")
  await runSqlFile(connection, schemaPath)
  console.log("Schema imported successfully.")

  console.log("Running seed script...")
  await runSqlFile(connection, seedPath)
  console.log("Seed data imported successfully.")

  await connection.end()
  console.log("Database setup complete.")
}

main().catch((err) => {
  console.error("Database setup failed:", err.message)
  console.error("Error code:", err.code)
  console.error("Error errno:", err.errno)
  process.exit(1)
})
