<?php
session_start();

$username = $_SESSION["username"];
$category = $_SESSION["category"];

$stmt = "SELECT category FROM store WHERE username = ".'"'.$username.'"';

$conn = mysqli_connect('localhost', 'root','','rental');

$sql = mysqli_query($conn, $stmt);

$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));

?>
