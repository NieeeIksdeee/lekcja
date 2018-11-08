<html>
    <head>
        <style>
            table, tr, td {
                border: 1px solid black;
                margin: auto;
            }
        </style>
        <?php
            echo("<style>body {color: ".$_POST["kolorek"]."}</style>");
        ?>
    </head>
    <body>
        <?php
            require("./lib/connect.php");

            echo("jestem w pliku php");
            echo("<li> Przesłany tekst: ".$_POST["imie"]);
            echo("<li> Przesłany tekst: ".$_POST["liczba"]);

            $sql = "insert into autorzy (nazwisko) values ('".$_POST["imie"]."');";
            echo("<li>".$sql."<br><br>");
            mysqli_query($conn, $sql);

            $sql = "select * from pracownicy where zarobki < ".$_POST["liczba"]." and imie ".$_POST["plec"]." like '%a';";
            echo("<li>".$sql);
            $result = mysqli_query($conn, $sql);
            echo("<table class='tabelka'>");
            while($row = mysqli_fetch_assoc($result)) {
                echo("<tr><td>".$row["imie"]."</td><td>".$row["zarobki"]."</td></tr>");
            }
            echo("</table><br>");
        ?>
        <a href="index.html">Powrot</a>
    </body>
</html>

