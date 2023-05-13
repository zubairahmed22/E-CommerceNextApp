// import { Pool } from "pg";

// let conn;
// if(!conn){
//     conn = new Pool({
//         user: 'postgres',
//         password: 'Thebalochcoder',
//         host: 'localhost',
//         port: 5432,
//         database: 'testphase'
//     });
 
// }
  
// export { conn };
   

//  CLOUDE CONNECTION 
var pg = require('pg')
//or native libpq bindings
//var pg = require('pg').native

var conString = process.env.DATABASE_URL //Can be found in the Details page
var conn  = new pg.Client(conString);
 conn.connect(function(err) {
  if(err) {
    console.error('could not connect to postgres', err);
    return conn = null;
  }
    conn.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
      console.log("DATABASE CONNECTED")
        
     
     
    
     
    
    // >> output: 2018-08-23T14:02:57.117Z
 
  });
});


export { conn };

// CONNECTION POLLING METHOD


// const { Pool } = require("pg")
// const pool = new Pool()

// async function conn() {
//   const client = await pool.connect()
//   try {
//     const res = await client.query("SELECT * FROM users WHERE id = $1", [1])
//     console.log(res.rows[0])
//   } finally {
//     await client.release()
//     await client.end()
//   }
// }
// export {conn}