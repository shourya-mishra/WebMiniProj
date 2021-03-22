<?php
session_start();
$username = $_SESSION["username"];
$category = $_SESSION["category"];

foreach (array_keys($_POST) as $key)
{
    if(empty($_POST[$key])&&$key!="img") echo '<script type="text/javascript">alert("'.$key.'"); window.location.assign("../addItem.html"); </script>';
}

    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "rental";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

    if(mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    }

    else{

      $stmt = 'SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = "rental" AND TABLE_NAME = "'.$username."_".$category.'"';
    //  echo "".$stmt;
      $sql = mysqli_query($conn, $stmt); //gives the next value of Sno.
      $nextSnoValue = mysqli_fetch_array($sql, MYSQLI_ASSOC);
      //echo $nextSnoValue["AUTO_INCREMENT"];


        $strkeys = "`";
        $strvalues ="'";

        foreach(array_keys($_POST) as $key)
        {
          if($key=="img") continue;

          $strkeys = $strkeys."".$key."`,`";
          $strvalues = $strvalues."".$_POST[$key]."','";
        }

        $strkeys = rtrim($strkeys, ",` "); //above loop will also put an extra comma and ` at end . this will remove it.
        $strvalues = rtrim($strvalues, ",' ");
        $strkeys = $strkeys."`";
        $strvalues = $strvalues."'";

        $insert = "insert into `".$username."_".$category."` (".$strkeys.") values (".$strvalues.")";

        mysqli_query($conn, $insert);

  if(!empty($_FILES))
          {

          $target_dir = "../user_img/";
            $target_file = $target_dir . basename($_FILES["imgfile"]['name']);
        //$target_file = $username."_".$category . $nextSnoValue["AUTO_INCREMENT"];
        $name = $username."_".$category.$nextSnoValue['AUTO_INCREMENT'].".".pathinfo($target_file,PATHINFO_EXTENSION);
          // Select file type
          $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

          // Valid file extensions
          $extensions_arr = array("jpg","jpeg","png","gif","svg");

          // Check extension
          if( in_array($imageFileType,$extensions_arr) ){

           // Insert record
           $query = "update `".$username."_".$category."` set `img`='".$name."' where `sno`='".$nextSnoValue["AUTO_INCREMENT"]."'";
           //UPDATE `echo_jio` SET `img`='hikaro' WHERE `sno`='8';
          mysqli_query($conn, $query);

           // Upload file
        move_uploaded_file($_FILES['imgfile']['tmp_name'],$target_dir.$name);
      }
      else {
        $query = "update `".$username."_".$category."` set `img`='item.png' where `sno`='".$nextSnoValue["AUTO_INCREMENT"]."'";

        //UPDATE `echo_jio` SET `img`='hikaro' WHERE `sno`='8';
       mysqli_query($conn, $query);
      }
          }

  echo "<script> window.location.assign('../items.html'); </script>";

        }
?>
