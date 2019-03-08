<?php
require "./dbCon.php";

class phanquyen extends database {
//
//lay danh sac quyen cua user
//
	public function getPermision ($id_user) {
		$sql = "SELECT action_name FROM user as u
				INNER JOIN user_department as up on u.id_user = up.id_user
				INNER JOIN department as d on up.id_dep = d.id_dep
				inner join permision as p on d.id_dep = p.id_dep
				where u.id_user = $id_user and check_action = 1 and licensed = 1
			";
			$this->setQuery($sql);
			return $this->loadAllRows();
	}
//
//kiem tra quyen(xem, sua, xoa) cua user
//
	public function checkPermision($id_user, $action_name){
		$sql = "SELECT check_action from user as u
				INNER JOIN user_department as up on u.id_user = up.id_user
				inner join permision as p on up.id_dep = p.id_dep
				where u.id_user = $id_user and licensed = 1 and action_name = '$action_name'
			";
		$this->setQuery($sql);
		return $this->loadRow();
	}
//
//lay danh sach yeu cau cua user mac dinh co quyen xem
//
	public function getTask() {
		$sql = "SELECT task.*, user.name_user as user_send from task inner join user on task.id_send = user.id_user";
		$this->setQuery($sql);
		return $this->loadAllRows();
	}
//
// lay ds yeu cau cua user duoc cap quyen xem
//
	public function getTaskByIduser($iduser) {
		$sql = "SELECT t.* from user as u 
				inner join user_task as ut on u.id_user = ut.id_user
				inner join (
						SELECT task.*, user.name_user as user_send
						FROM `task` inner join user on task.id_send = user.id_user 
					) 
				as t on ut.id_task = t.id_task
				where u.id_user = $iduser
			";
		$this->setQuery($sql);
		return $this->loadAllRows();
	}
//
// lay ten cua user 
//
	public function getUsername ($iduser) {
		$sql = "SELECT name_user from user where id_user = $iduser";
		$this->setQuery($sql);
		return $this->loadRow();
	}
}
