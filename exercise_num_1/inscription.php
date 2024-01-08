<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $conn = mysqli_connect('localhost','root','','mobile_id');
    if(isset($_POST['submit'])){
        $cin = $_POST['cin'];
        $gsm = $_POST['gsm'];
        $email = $_POST['email'];
        function mobile_id(){
            $num = strval(rand(100000,999999));
            $l1 = chr(rand(ord("A"),ord("Z")));
            $l2 = chr(rand(ord("A"),ord("Z")));
            return $num. $l1. $l2;
        }
        $mobile_id = mobile_id();
        echo "$cin. $gsm. $email. $mobile_id";
        $query = "INSERT INTO mobile_id VALUES('', $cin , $gsm, $email, $mobile_id,'')";
        mysqli_query($conn, $query);
        echo"<script>alert(Data Inserted Succeed)</script>";
    }
?>
</body>
</html>




