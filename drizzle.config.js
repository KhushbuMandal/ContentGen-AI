
/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:olw0zRvpQX5y@ep-dark-moon-a5awp0cc.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };