<?php
session_start();
$username = $_SESSION["username"];
$category = $_SESSION["category"];



$sno = $_POST['remove']; //string

    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "rental";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

    if(mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    }

    else{


          $delete = "delete from `".$username."_".$category."` where sno = ".$sno;

            $sql = mysqli_query($conn, $delete);

      echo "<script> window.location.assign('../items.html'); </script>";

    }
?>
