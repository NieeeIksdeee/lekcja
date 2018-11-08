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
                    if(count($_POST) == 0) {
                        echo("Nie wysłano zapytania");
                    }
                    else {
                        $sql = "select year(curdate()) - year('".$_POST["date"]."') as wiek;";
                        $result = mysqli_query($conn, $sql);
                        $row = mysqli_fetch_assoc($result);

                        echo("<h3>Zadanie 1</h3>");
                        echo("<li>Dane: ".$_POST["date"]);
                        echo("<li>Zapytanie: ".$sql);
                        echo("<li>Ilość lat: ".$row["wiek"]);
                        echo("<li>Ilość miesięcy: ".($row["wiek"] * 12));

                        $sql = "select datediff(curdate(), '".$_POST["date"]."') as dni;";
                        $result = mysqli_query($conn, $sql);
                        $row = mysqli_fetch_assoc($result);

                        echo("<li>Ilość tygodni: ".(int)($row["dni"] / 7));
                        echo("<li>Ilość dni: ".($row["dni"]));
                        echo("<li>Ilość sekund: ".($row["dni"] * 24 * 60 * 60));
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