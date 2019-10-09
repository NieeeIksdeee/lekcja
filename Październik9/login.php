<?php
    // ROZPOCZĘCIE SESJI
        session_start();
    // ROZPOCZEĘCIE SESJI

    // LOGOWANIE DO BAZY DANYCH
        $hn = "172.16.131.125";
        $un = "02_grzelak";
        $ps = "3639457A";
        $dbn = "02_grzelak";

        $conn = new mysqli($hn,$un,$ps,$dbn);
    // LOGOWANIE DO BAZY DANYCH

    // ZAPYTANIE DO BAZY DANYCH
        $sql = "SELECT password FROM users WHERE login like '".$_POST['login']."'";
        $result = $conn -> query($sql);
        while($row = $result -> fetch_assoc()){
            $pass = $row['password'];
        }
    // ZAPYTANIE DO BAZY DANYCH

    
    // SPRAWDZANIE POPRAWNOŚĆI HASŁA
        if(isset($_POST['haslo']) && md5($_POST['haslo']) == $pass){
            $_SESSION["Zalogowany"]=1;
        }
    // SPRAWDZANIE POPRAWNOŚĆI HASŁA

   

        header("Location: index.php");
?>