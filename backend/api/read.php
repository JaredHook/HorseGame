<?php
// This will fetch the list of policies from the database and return them as a JSON response. If there is an error it will return a 404 error.

require 'database.php';

$policies = [];
$sql = "SELECT id, number, amount FROM policies";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $policies[$i]['id']    = $row['id'];
    $policies[$i]['number'] = $row['number'];
    $policies[$i]['amount'] = $row['amount'];
    $i++;
  }

  echo json_encode($policies);
}
else
{
  http_response_code(404);
}
