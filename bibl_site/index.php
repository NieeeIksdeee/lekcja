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
            <?php
                require("conn.php");
                require("login_system.php");
                
                
                if(isset($_SESSION['Zalogowany']) && $_SESSION['Zalogowany'] = 1){
                    echo("<h1>Witamy!</h1>");
                }
                else{
                    echo("<h1>Niezalogowany</h1>");
                    header('Location: login.php');
            }
            ?>
            <img class='bibl' src="http://3.bp.blogspot.com/-_ifLBpy5zS4/VKAlA-0NMmI/AAAAAAAAB7k/4gnixpJD47Q/s1600/27arc-u-2091_cph_bogsamler_interior.jpg">
        </div>
        <div class="footer">
            <div>© 2019 NieeeIksdeee</div>
        </div>

    </div>
</body>
</html>