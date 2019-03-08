<?php
include "./dbCon.php";

	class M_user extends database {
		public function setInfo($fullname, $username, $password, $re_password){
			if (!empty($fullname) && !empty($username) && !empty($password) && $re_password === $password) {
				
				$sql = "INSERT INTO user 
						VALUES( null, '$fullname', '$username', '$password')
					";
				$this->setQuery($sql);
				$this->execute();
			}
			return $this->getLastId();
		}
		public function getInfo($username, $password){
			$sql = "SELECT * FROM user WHERE username = '" . $username . "' AND password = '" . $password . "' ";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		
	}