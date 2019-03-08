<?php 
require "./M_user.php";
header("Access-Control-Allow-Origin: *");


$username = isset($_GET['username']) ? $_GET['username'] : '';
$password = isset($_GET['password']) ? $_GET['password'] : '';

function dangnhap($username, $password){
    $m_user = new M_user();
    $user = $m_user->getInfo($username, $password);

    if($user) {
        $fullname = $user->name_user;
        $iduser = $user->id_user;
        return array('status'=>true,'iduser'=>$iduser, 'name'=>$fullname);
    } else {
        return array('error'=> '* Đăng nhập không thành công');
    }
}
echo json_encode(dangnhap($username, $password));
