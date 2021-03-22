<?php
session_start();

$username = $_SESSION['username'];
$category = $_SESSION['category'];
$propertyName = $_POST["propertyName"];
$dataSize = $_POST["dataSize"];

if(!empty($username)&&!empty($category)&&!empty($dataSize)&&!empty($propertyName))
{
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "rental";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

    if(mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    }
    else{
        $select = "ALTER TABLE `".$username."_".$category."` ADD `".$propertyName."` VARCHAR(".$dataSize.")";

        $stmt = mysqli_query($conn, $select);

        echo "<script>window.location.assign('../items.html'); </script>";
        }

        $conn->close();
    }

else{
  if(empty($category)) echo "<script>alert('category')</script>";
  if(empty($dataSize)) echo  "<script>alert('datasize')</script>";
  if(empty($propertyName)) echo  "<script>alert('property name')</script>";
  if(empty($username)) echo  "<script>alert('username')</script>";
      echo "<script>alert('Some of the fields are empty.'); window.location.assign('../addProperty.html'); </script>";
}

?>
