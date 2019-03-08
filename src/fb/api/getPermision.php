<?php
require "./phanquyen.php";
header("Access-Control-Allow-Origin: *");

$iduser = $_GET['iduser'];

$phanquyen = new phanquyen();
$result = $phanquyen->getPermision($iduser);

echo json_encode($result);