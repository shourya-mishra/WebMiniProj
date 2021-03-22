<?php
session_start();
unset($_SESSION["username"]);
unset($_SESSION["password"]);

if(!isset($_SESSION["username"]) && !isset($_SESSION["password"])){
  echo "<script>window.location.assign('../login.html'); </script>";
}


?>
