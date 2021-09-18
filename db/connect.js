const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DATABASE
});
// DB_HOST = localhost
// DB_USER = root
// DB_PASS = aNM$(%*^@)
// DATABASE = abunaim1_anms
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting:');
    return;
  }
 
  console.log('connected');
});

module.exports = connection;