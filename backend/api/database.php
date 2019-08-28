<?php
//In all operations, we first require the database.php file for connecting to the MySQL database and then we implement the appropriate logic for the CRUD operation.

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");

// TODO: change these to our actual MySQL credentials and make sure we've created a database with policies table that has two number and amount columns
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'YOUR_PASSWORD');
define('DB_NAME', 'mydb');

// This allows us to create a connection to the MySQL database using the mysqli extension.
function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();
?>
