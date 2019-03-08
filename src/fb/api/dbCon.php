<?php
class database{
    public $_dbh = '';
    public $_sql = '';
    public $_cursor = NULL;        
    
    public function database() {
        $this->_dbh = new PDO('mysql:host=localhost; dbname=phanquyen','root','');
        $this->_dbh->query('set names "utf8"');
    }
    
    public function setQuery($sql) {
        $this->_sql = $sql;
    }
    
    //Function execute the query 
    public function execute() {
        $this->_cursor = $this->_dbh->prepare($this->_sql);
        $this->_cursor->execute();
        return $this->_cursor;
    }
    
    //Funtion load datas on table
    public function loadAllRows() {
        $result = $this->execute();
        return $result->fetchAll(PDO::FETCH_OBJ);
    }
    
    //Funtion load 1 data on the table
    public function loadRow() {
       $result = $this->execute();
        return $result->fetch(PDO::FETCH_OBJ);
    }
    public function getLastId(){
        return $this->_dbh->lastInsertId();
    }
  
    public function disconnect() {
        $this->_dbh = NULL;
    }
}