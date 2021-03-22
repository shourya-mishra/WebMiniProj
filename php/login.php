<?php
$username = $_POST['username'];
$pass = $_POST['password'];

session_start();
$_SESSION["username"] = $username;
$_SESSION['pass'] = $pass;

if(!empty($username)&&!empty($pass))
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

        $select = "select username from users where username = ? Limit 1";
        $select2 = "select pass from users where username = ? Limit 1";

        $stmt = $conn->prepare($select);
        $stmt->bind_param("s",$username);//s is for string and this email replaces the '?' in select statement(line 16)
        $stmt->execute();
        $stmt->bind_result($username);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if($rnum==0){
            echo "<script>alert('No User Found'); window.location.assign('../login.html'); </script>";
            $stmt->close();
            $conn->close();
        }
        else{
          $stmt2 = $conn->prepare($select2);
          $stmt2->bind_param("s",$username);//s is for string and this email replaces the '?' in select statement(line 16)
          $stmt2->execute();
          $result = $stmt2->get_result();
          $num_of_rows = $result->num_rows;
          $row = $result->fetch_assoc();
          if($pass==$row['pass'])
          {
              if($username=='admin' && $pass == 'admin'){
                echo "<script>window.location.assign('../admin/dashboard.html'); </script>";
              }
              else
                {
                  echo "<script>window.location.assign('../dashboard.html'); </script>";
                }
          }
          else{
            echo "<script>alert('Wrong password'); window.location.assign('../login.html'); </script>";
          }
        }
        $stmt->close();
        $conn->close();
    }

}
else{
    echo "<script>alert('Some of the fields are empty.'); window.location.assign('../login.html'); </script>";
    die();
}

?>
