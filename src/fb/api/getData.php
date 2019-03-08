<?php
require "./phanquyen.php";
header("Access-Control-Allow-Origin: *");

$id_user = isset($_GET['id_user']) ? $_GET['id_user'] : '';
$action_name = isset($_GET['action_name']) ? $_GET['action_name'] : '';

$phanquyen = new phanquyen();

//lay data yeu cau
$result = $phanquyen->checkPermision($id_user, $action_name);

if (!empty($result->check_action)) {
	$data = $phanquyen->getTask();
} else {
	$data = $phanquyen->getTaskByIduser($id_user);
}

// lay ten user dang nhap 
$login_er = $phanquyen->getUsername($id_user);

echo json_encode(["datas" => $data, "login_er" => $login_er]);