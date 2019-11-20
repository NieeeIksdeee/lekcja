<?php
    if(isset($_POST['login'])){
        $sql = "SELECT * FROM bibl_users WHERE login like '".$_POST['login']."'";
    $result = $conn -> query($sql);
    if($result->num_rows==1){
        while($row = $result -> fetch_assoc()){
            $name = $row['login'];
            $pass = $row['password'];
            $perm = $row['perm'];
        }

        if(isset($_POST['password']) && $_POST['password'] == $pass){
            $_SESSION["Zalogowany"]=$perm;
        }
    }

    }
    else{


    }
    
?>