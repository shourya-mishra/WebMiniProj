<?php
session_start();

if(!isset($_SESSION["username"])){
  exit(json_encode(''));
}

exit(json_encode("true"));
 ?>
