<?php
session_start();

$username = $_SESSION['username'];
$category = $_POST["category"];

if(!empty($username)&&!empty($category))
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
        $select = "select sno from store where username = ? and category = ?";
        $insert = "INSERT INTO `store` (`sno`, `category`, `username`) VALUES (NULL, ?, ?)";
        $sql = "create table `".$username."_".$category."` ( `sno` INT NOT NULL AUTO_INCREMENT , `img` LONGTEXT , `name` VARCHAR(25) NOT NULL , PRIMARY KEY (`sno`)) ENGINE = MyISAM";

        $stmt = $conn->prepare($select);
        $stmt->bind_param("ss",$username,$category);//s is for string and this email replaces the '?' in select statement(line 16)
        $stmt->execute();
        $stmt->bind_result($username);
        $stmt->store_result();
        $rnum = $stmt->num_rows;
        $stmt->close();

        if($rnum==0){
              $retval = mysqli_query($conn, $sql);

              $stmt = $conn->prepare($insert);
              $stmt->bind_param("ss",$category, $username);//s is for string and this email replaces the '?' in select statement(line 16)
              $stmt->execute();

              echo "<script>window.location.assign('dashboard.html'); </script>";
        }

        else{
            echo "<script>alert('Category already exists'); window.location.assign('addCategory.html'); </script>";
        }
        $stmt->close();
        $conn->close();
    }

}
else{
      echo "<script>alert('Some of the fields are empty.'); window.location.assign('addCategory.html'); </script>";
}

?>
