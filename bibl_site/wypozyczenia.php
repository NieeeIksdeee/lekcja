<?php
    require("conn.php");
    session_start();
    if(isset($_GET['Akcja']) && $_GET['Akcja'] == "Wyloguj"){
        unset($_SESSION['Zalogowany']);
    }   
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Biblioteka</title>
    <link rel="stylesheet" href="style.css" class="css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <script src="https://kit.fontawesome.com/91ac18a2f9.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="socialtab">
                <a class="social sc" href="#"><i class="fab fa-snapchat-square"></i></a>
                <a class="social tt" href="#"><i class="fab fa-twitter-square"></i></a>
                <a class="social yt" href="#"><i class="fab fa-youtube-square"></i></a>
                <a class="social fb" href="#"><i class="fab fa-facebook-square"></i></a>    
            </div>
            <a href="index.php">
                <img class='logo' src="bibl_logo.png">
                
            </a>
        </div>
        <div class="sidebar">
            <a href="autorzy.php">
                <p>Autorzy</p><br/>
                <i class="fas fa-user-alt menu"></i>
            </a>
            <a href="tytuły.php">
                <p>Tytuły</p><br/>
                <i class="fas fa-heading menu"></i>
            </a>
            <a href="ksiazki.php">
                <p>Książki</p><br/>
                <i class="fas fa-book-open menu"></i>
            </a>
            <a href="wypozyczenia.php">
                <p>Wypożyczenia</p><br/>
                <i class="fas fa-address-book menu"></i>
            </a>
            
            <a href="login.php?Akcja=Wyloguj">
                <p>Wyloguj</p><br/>
                <i class="fas fa-sign-out-alt menu"></i>
            </a>
        </div>
        <div class="main">
            <h1>Wypożyczenia!</h1>
            
        <?php
            require("conn.php");
            
            if(isset($_SESSION['Zalogowany']) && $_SESSION['Zalogowany'] == 1){
                $sql = "SELECT * FROM bibl_checkouts,bibl_users,bibl_books,bibl_titles WHERE bibl_checkouts.id_users=bibl_users.id_users AND bibl_checkouts.id_books=bibl_books.id_books AND bibl_books.id_titles=bibl_titles.id_titles";
                $result = $conn -> query($sql);

                $sqla = "SELECT * FROM bibl_books,bibl_titles WHERE bibl_books.id_titles=bibl_titles.id_titles";
                $resulta = $conn -> query($sqla);

                $sqlb = "SELECT * FROM bibl_users";
                $resultb = $conn -> query($sqlb);
                echo("<div class='add_form'>");
                echo("<form method='POST' action='insert.php'>");
                
                    echo("Książka <br/><select name='book'>");
                        while($row = $resulta -> fetch_assoc()){
                            $a++;
                            echo("<option value='".$row['id_books']."'>".$row['title']."</option>");
                        }
                    echo("</select>");

                    echo("<br/>Użytkownik <br/><select name='user'>");
                        while($row = $resultb -> fetch_assoc()){
                            echo("<option class='option' value='".$row['id_users']."'>".$row['login']."</option>");
                        }
                    echo("</select>");

                    echo("<br/>Data przyjęcia<br/><input type='date' name='in'>");
                    echo("<br/>Data zwrotu<br/><input type='date' name='out'>");
                    echo("<br/><input class='submit' type='submit' value='Wypożycz'>");

                echo("</form>");
                echo("</div>");
                echo("<table border='1px'>
                        <tr class='tabh'>
                            <th>id_checkouts</th>
                            <th>title</th>
                            <th>login</th>
                            <th>password</th>
                            <th>date_in</th>
                            <th>date_out</th>
                            <th>Dni do końca</th>
                            <th>-</th>
                        </tr>
                ");
                while($row = $result -> fetch_assoc()){
                    $in=$row['date_in'];
                    $out=$row['date_out'];
                    $date1=date_create(date('Y-m-d'));
                    $date2=date_create("$out");
                    $diff=date_diff($date1,$date2);
                    echo("<tr><td>".$row['id_checkouts']."</td><td>".$row['title']."</td><td>".$row['login']."</td><td>".$row['password']."</td><td>".$row['date_in']."</td><td>".$row['date_out']."</td><td>".$diff->format("%R%a days")."</td><td><form action='delete.php' method='POST'>
                    <input value='".$row['id_checkouts']."' type='text' name='delete' hidden>
                    <input class='delete' type='submit' value='Zwróć'>
                    </form></td></tr>");
                }
                echo("</table>");
                
            }else if(isset($_SESSION['Zalogowany']) && $_SESSION['Zalogowany'] == 0){
                $sql = "SELECT * FROM bibl_checkouts,bibl_users,bibl_books,bibl_titles WHERE bibl_checkouts.id_users=bibl_users.id_users AND bibl_checkouts.id_books=bibl_books.id_books AND bibl_books.id_titles=bibl_titles.id_titles";
                $result = $conn -> query($sql);

                    echo("<table border='1px'>
                            <tr class='tabh'>
                                <th>id_checkouts</th>
                                <th>title</th>
                                <th>login</th>
                                <th>password</th>
                                <th>date_in</th>
                                <th>date_out</th>
                                <th>Dni do końca</th>
                            </tr>
                    ");
                    while($row = $result -> fetch_assoc()){
                        $in=$row['date_in'];
                        $out=$row['date_out'];
                        $date1=date_create(date('Y-m-d'));
                        $date2=date_create("$out");
                        $diff=date_diff($date1,$date2);
                        echo("<tr><td>".$row['id_checkouts']."</td><td>".$row['title']."</td><td>".$row['login']."</td><td>".$row['password']."</td><td>".$row['date_in']."</td><td>".$row['date_out']."</td><td>".$diff->format("%R%a days")."</td></tr>");
                    }
                    echo("</table>");
            }
            else{
                echo("<h1>Niezalogowany</h1>");
                header('Location: login.php');
        }
        ?>
        </div>
        <div class="footer">
                  
        </div>

    </div>
</body>
</html>