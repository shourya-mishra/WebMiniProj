<?php
session_start();

$_SESSION["category"] = $_POST["category"];

echo "<script> window.location.assign('../items.html'); </script>";