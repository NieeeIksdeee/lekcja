<?php
class dbconnect{
    private $servername;
    private $user;
    private $pass;
    private $dbname;

    function connect(){
        $this->servername = "172.16.131.125";
        $this->user = "02_grzelak";
        $this->pass = "3639457A";
        $this->dbname = "02_grzelak";

        $conn = new mysqli(
            $this->servername,
            $this->user,
            $this->pass,
            $this->dbname);

        return $conn;
    }
}

?>