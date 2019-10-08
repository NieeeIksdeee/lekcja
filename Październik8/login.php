<?php
 session_start();

 require("connect.php");

    
    $sql = "SELECT password from users where login like '".$_POST['login']."'";
    $result = $conn -> query($sql);
    while($row = $result -> fetch_assoc()){
        $pass = $row['password'];
        echo($pass);
    }
    if(isset($_POST['password']) && md5($_POST['password'])== $pass){
        $_SESSION["Zalogowany"]=1;
    }
    if(isset($_SESSION['Zalogowany']) && $_SESSION['Zalogowany']==1){
        echo("<div class='green'>Zalogowany</div>");
        echo("<a href='index.php?akcja=wyloguj'>Wyloguj</a>");
    }
    else{
        echo("<div class='red'>Niezalogowany </div>");
    }
header("Location:index.php");
?>