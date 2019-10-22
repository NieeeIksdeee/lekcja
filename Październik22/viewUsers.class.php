<?php
    include'user.class.php';

    class viewUser extends User{
        function showAllUsers(){
            $myUsers = $this->getAllUsers();
            foreach($myUsers as $user){
                echo $user['imie'];
            }
            
        }
    }

?>