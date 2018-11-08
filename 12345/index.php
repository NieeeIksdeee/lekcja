<html>
    <head>
        <link rel="stylesheet" type"text/css" href="stylephp.css"/>
    </head>
</html>
<?php
    $servername = "172.16.131.125";
    $username = "02_belica";
    $password = "6FY6fz9K";
    $dbname = "02_belica";

    $conn = new mysqli($servername, $username, $password, $dbname);

    $sql = "select * from pracownicy";
    echo("<li>".$sql."<br><br>");
    //print_r('Zmienna $result: '.$result);
    $result = mysqli_query($conn, $sql);
    echo('<table border="1" class="tabela">');
    while($row = mysqli_fetch_assoc($result)) {
        echo("<tr><td>".$row["imie"]."</td><td>".$row["zarobki"]."</td><td>".$row["data_ur"]."</td></tr>");
    }
    echo("</table>")
?>