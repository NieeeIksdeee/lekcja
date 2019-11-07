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
                Autorzy<br/>
                <i class="fas fa-user-alt"></i>
            </a>
            <a href="tytuły.php">
                Tytuły<br/>
                <i class="fas fa-heading"></i>
            </a>
            <a href="ksiazki.php">
                Książki<br/>
                <i class="fas fa-book-open"></i>
            </a>
            <a href="wypozyczenia.php">
                Wypożyczenia<br/>
                <i class="fas fa-address-book"></i>
            </a>
            
            <a href="login.php?Akcja=Wyloguj">
                Wyloguj<br/>
                <i class="fas fa-sign-out-alt"></i>
            </a>
        </div>
        <div class="main">
        <?php
            require("conn.php");
            
            if(isset($_SESSION['Zalogowany']) && $_SESSION['Zalogowany'] = 1){
                echo("<h1>Tytuły!</h1>");

                $sql = "SELECT * FROM bibl_titles";
                $result = $conn -> query($sql);

                echo("<form method='POST' action='insert_title.php'>
                    <input placeholder='Podaj tytuł' type='text' name='title'>
                    <input class='submit' type='submit' value='Dodaj'>
                </form>");
                echo("<table border='1px'>
                        <tr class='tabh'>
                            <th>id_titles</th>
                            <th>title</th>
                            <th>-</th>
                        </tr>
                ");
                while($row = $result -> fetch_assoc()){
                    echo("<tr><td>".$row['id_titles']."</td><td>".$row['title']."</td><td><form action='delete_title.php' method='POST'>
                    <input value='".$row['id_titles']."' type='text' name='delete_title' hidden>
                    <input class='delete' type='submit' value='Usuń'>
                    </form></td></tr>");
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
            <p>© 2019 NieeeIksdeee</p>
        </div>

    </div>
</body>
</html>