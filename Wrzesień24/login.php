<?php
        session_start();
        if(isset($_GET['akcja']) && $_GET['akcja']=="wyloguj"){
            unset($_SESSION['Zalogowany']);
        }
        if(isset($_POST['haslo']) && $_POST['haslo'] == '123'){
            $_SESSION['Zalogowany']=1;
        }
        if(isset($_SESSION['Zalogowany']) && $_SESSION['Zalogowany']==1){
            echo("Zalogowany");
            echo("<a href='index.php?akcja=wyloguj'>Wyloguj</a>");
            echo("<div class='green'></div>");
        }
        else{
            echo("Niezalogowany");
            echo("<a href='index.php'>Wróć</a>");
            echo("<div class='red'></div>");
        }
?>