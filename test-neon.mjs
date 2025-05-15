import ws from 'ws';
globalThis.WebSocket = ws;

import { Pool } from '@neondatabase/serverless';

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_UWS6ymQ5DZOP@ep-shiny-band-a4m5a3jl-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
});

(async () => {
  try {
    const { rows } = await pool.query('SELECT 1 as test');
    console.log('Connection successful:', rows);
  } catch (e) {
    console.error('Connection failed:', e);
  } finally {
    await pool.end();
  }
})();
