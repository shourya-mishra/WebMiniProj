<?php
$username = $_POST['username'];
$fname = $_POST['fname'];
$lname = $_POST['lastname'];
$pass = $_POST['pass'];
$repass = $_POST['repass'];
if(!empty($username)&&!empty($pass)&&!empty($fname)&&!empty($lname)&&!empty($repass))
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
      if($pass!=$repass){
        echo "<script>alert('Passwords do not match'); window.location.assign('../signup.html'); </script>";
      }
        $select = "select username from users where username = ? Limit 1";
        $insert = "insert into users(username,fname,lname,pass) values (?,?,?,?)";

        $stmt = $conn->prepare($select);
        $stmt->bind_param("s",$username);//s is for string and this email replaces the '?' in select statement(line 16)
        $stmt->execute();
        $stmt->bind_result($username);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if($rnum==0){
            $stmt->close();
            $stmt = $conn->prepare($insert);
            $stmt->bind_param("ssss",$username,$fname,$lname,$pass);
            $stmt->execute();
            echo "<script> window.location.assign('../login.html'); </script>";
        }
        else{
            echo "<script>alert('Already there'); window.location.assign('../signup.html'); </script>";
        }
        $stmt->close();
        $conn->close();
    }

}
else{
      echo "<script>alert('Some of the fields are empty.'); window.location.assign('../signup.html'); </script>";
    die();
}

?>
