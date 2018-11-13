<?php
    require("../lib/connect.php");

    $sql = "delete from pracownicy where id_pracownicy = ".$_POST["deleteid"].";";
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