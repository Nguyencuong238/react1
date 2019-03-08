<?php
require "M_user.php";
header("Access-Control-Allow-Origin: *");

$name = isset($_GET['fullname']) ? $_GET['fullname'] : '';
$user = isset($_GET['username']) ? $_GET['username'] : '';
$pass = isset($_GET['password']) ? $_GET['password'] : '';
$re_pass = isset($_GET['re_password']) ? $_GET['re_password'] : '';


function Signin($name, $user, $pass, $re_pass){
    $m_user = new M_user();
    $idUser = $m_user->setInfo($name, $user, $pass, $re_pass);
    if ($idUser > 0) {
        return ['status'=>true];
    } else {
        return ['error'=> '* Đăng ký không thành công'];
    }
}
echo json_encode(Signin($name, $user, $pass, $re_pass));