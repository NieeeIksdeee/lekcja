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
                <img src="bibl_logo.png">
                
            </a>
        </div>
        <div class="sidebar">
            <a href="autorzy.php">
                Autorzy<br/>
                <i class="fas fa-user-alt"></i>
            </a>
            <a href="ksiazki.php">
                Książki<br/>
                <i class="fas fa-book"></i>
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
            <h1>Wypożyczenia!</h1>
            
        <?php
            require("conn.php");
            
            if(isset($_SESSION['Zalogowany']) && $_SESSION['Zalogowany'] = 1){
                
                $sql = "SELECT title FROM bibl_books,bibl_titles WHERE bibl_books.id_titles=bibl_titles.id_titles";
                $result = $conn -> query($sql);
                echo("<form>");
                echo("<select>");
                    while($row = $result -> fetch_assoc()){
                        echo("<option>".$row['title']."</option>");
                    }
                echo("</select>");
                echo("</form>");
                echo("<table border='1px'>
                        <tr>
                            <th>id_checkouts</th>
                            <th>title</th>
                            <th>login</th>
                            <th>password</th>
                            <th>date_in</th>
                            <th>date_out</th>
                        </tr>
                ");
                while($row = $result -> fetch_assoc()){
                    echo("<tr><td>".$row['id_checkouts']."</td><td>".$row['title']."</td><td>".$row['login']."</td><td>".$row['password']."</td><td>".$row['date_in']."</td><td>".$row['date_out']."</td></tr>");
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