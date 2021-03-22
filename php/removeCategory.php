<?php
session_start();
$username = $_SESSION["username"];
$category = $_SESSION["category"];

//categoryNames = substr($categoryNames, 0, -1); // Removes the last char ie comma which is redundant from the property name list.

    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "rental";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

    if(mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    }

    else{

      foreach ($_POST as $key => $value) {
        //  var_dump($key);
            $delete = "DELETE FROM 'store' WHERE store.username = ".$username." and store.category = ".$key;
            //var_dump($delete);
            echo($sql = mysqli_query($conn, $delete));
          }


   echo "<script> window.location.assign('../dashboard.html'); </script>";


    }
?>
