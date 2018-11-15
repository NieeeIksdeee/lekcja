<?php
    require("../lib/connect.php");

    $sql = "insert into pracownicy (imie, dzial, zarobki, data_urodzenia) values ('".$_POST["imie"]."', ".$_POST["dzial"].", '".$_POST["zarobki"]."', '".$_POST["data_urodzenia"]."');";
    $conn->query($sql);
    $conn->close();
?>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <a href="index.php"><-- powrót</a>
    </body>
</html>