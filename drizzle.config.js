/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_UWS6ymQ5DZOP@ep-shiny-band-a4m5a3jl-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
    }
};