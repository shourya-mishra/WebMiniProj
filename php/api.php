<?php
session_start();

if(!isset($_SESSION["username"])){
  exit(json_encode(''));
}

$user = $_SESSION["username"];

$stmt = "select * from store where username = ".'"'.$user.'"';

$conn = mysqli_connect('localhost', 'root','','rental');

$sql = mysqli_query($conn, $stmt);

$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));

?>
