<html>
    <head>
        <title>Stronka</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <header>
            <?php
                require("../lib/connect.php");
            ?>
        </header>
        <nav>
            nav
        </nav>
        <section>
            <article>
                <?php
                    $sql = "select * from pracownicy;";
                    $result = $conn->query($sql);
                    
                    echo("<table>");
                    while($row = $result->fetch_assoc()) {
                        echo("<tr><td>".$row["id_pracownicy"]."</td><td>".$row["imie"]."</td><td>".$row["zarobki"]."</td><td>"."<form action='delete.php' method='POST'><input class='invisible' type='text' name='deleteid' value='".$row["id_pracownicy"]."'><input type='submit' value='usun'></td></tr>");
                    }
                    echo("</table>");

                    if(count($_POST) == 0) {
                        echo("Nie wysłano zapytania");
                    }
                    else {
                        $sql = "select year(curdate()) - year('".$_POST["date"]."') as wiek;";
                        $result = $conn->query($sql);
                        $row = $result->fetch_assoc();

                        echo("<h3>Zadanie 1</h3>");
                        echo("<li>Dane: ".$_POST["date"]);
                        echo("<li>Zapytanie: ".$sql);
                        echo("<li>Ilość lat: ".$row["wiek"]);
                        echo("<li>Ilość miesięcy: ".($row["wiek"] * 12));

                        $sql = "select datediff(curdate(), '".$_POST["date"]."') as dni;";
                        $result = $conn->query($sql);
                        $row = $result->fetch_assoc();

                        echo("<li>Ilość tygodni: ".(int)($row["dni"] / 7));
                        echo("<li>Ilość dni: ".($row["dni"]));
                        echo("<li>Ilość sekund: ".($row["dni"] * 24 * 60 * 60));
                        $conn->close();
                    }
                ?>
            </article>
        </section>
        <aside>
            <form action="" method="POST">
                <input type="date" name="date">
                <input type="submit" value="wyślij date">
            </form>
        </aside>
        <footer>
            footer
        </footer>
    </body>
</html>