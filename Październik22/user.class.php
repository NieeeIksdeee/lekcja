<?php
include'db.class.php';

    class User extends dbconnect{
        function getAllUsers(){
            $sql = "SELECT * FROM pracownicy";
            $result = $this->connect()->query($sql);
            // echo($result->num_rows);
            while($row=$result->fetch_assoc()){
                $data[]=$row;
            }
            return $data;
        }
    }

?>