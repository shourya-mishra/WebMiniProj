<?php
session_start();

$username = $_SESSION["username"];
$category = $_SESSION["category"];

$stmt = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = ".'"'.$username."_".$category.'"';

$conn = mysqli_connect('localhost', 'root','','rental');

$sql = mysqli_query($conn, $stmt);

$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));

?>
