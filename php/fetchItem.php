<?php
session_start();

if(!isset($_SESSION["username"])){
  exit(json_encode(''));
}

$host = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "rental";

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

if(! $conn ) {
   die('Could not connect: ' . mysql_error());
}

$sql = "select * from `".$_SESSION["username"]."_".$_SESSION["category"]."`";


$retval = mysqli_query($conn, $sql);

if(! $retval ) {
   die('Could not get data: ' . mysqli_error($conn));
}

$result = mysqli_fetch_all($retval, MYSQLI_ASSOC);

exit(json_encode($result));


/*
while($row = mysqli_fetch_assoc($retval)) {
   echo "SNo :{$row['sno']}  <br> ".
      "NAME : {$row['name']} <br> ".
      "RAM : {$row['ram']} <br> ".
      "OS : {$row['os']} <br> ".
      "--------------------------------<br>";
}
*/
?>
