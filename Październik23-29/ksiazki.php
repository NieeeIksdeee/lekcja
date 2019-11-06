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
                echo("<h1>Książki!</h1>");
                $sql = "SELECT bibl_books.id_books,bibl_authors.name,bibl_titles.title FROM bibl_books,bibl_authors,bibl_titles WHERE bibl_books.id_authors=bibl_authors.id_authors AND bibl_books.id_titles=bibl_titles.id_titles ";
                $result = $conn -> query($sql);
                $sqla = "SELECT * FROM bibl_titles";
                $resulta = $conn -> query($sqla);
                $sqlb = "SELECT * FROM bibl_authors";
                $resultb = $conn -> query($sqlb);
                echo("<form method='POST' action='insert_books.php'>");
                echo("Tytuł <br/><select name='title'>");
                    while($row = $resulta -> fetch_assoc()){
                        $a++;
                        echo("<option value='".$row['id_titles']."'>".$row['title']."</option>");
                    }
                echo("</select>");
                echo("<br/>Autor <br/><select name='author'>");
                    while($row = $resultb -> fetch_assoc()){
                        $a++;
                        echo("<option value='".$row['id_authors']."'>".$row['name']."</option>");
                    }
                echo("</select>");
                echo("<input class='submit' type='submit' value='Dodaj'>
                </form>");
                echo("<table border='1px'>
                        <tr>
                            <th>id_books</th>
                            <th>author</th>
                            <th>title</th>
                            <th>-</th>
                        </tr>
                ");
                
                while($row = $result -> fetch_assoc()){
                    echo("<tr><td>".$row['id_books']."</td><td>".$row['name']."</td><td>".$row['title']."</td><td><form action='delete_books.php' method='POST'>
                    <input value='".$row['id_books']."' type='text' name='delete_books' hidden>
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