<?php
session_start();
$username = $_SESSION["username"];
$category = $_SESSION["category"];

$propertyNames = '';

foreach ($_POST as $key => $value) {
    $propertyNames = $propertyNames.' drop `'.$key.'`,';
}

$propertyNames = substr($propertyNames, 0, -1); // Removes the last char ie comma which is redundant from the property name list.

    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "rental";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

    if(mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    }

    else{

          $delete = "alter table `".$username."_".$category."`".$propertyNames;

            echo($sql = mysqli_query($conn, $delete));



   echo "<script> window.location.assign('../items.html'); </script>";


    }
?>
