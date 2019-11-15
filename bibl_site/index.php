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
    <link rel="stylesheet" href="slider.css" class="css">
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
        <div class="main index">
            <?php
                require("conn.php");
                require("login_system.php");
                
                
                if(isset($_SESSION['Zalogowany']) && $_SESSION['Zalogowany'] = 1){
                    
                }
                else{
                    echo("<h1>Niezalogowany</h1>");
                    header('Location: login.php');
            }
            ?>
            <br/>
            
            <div class="slider">
                <div class="button left">
                    <i class="fas fa-arrow-circle-left"></i>
                </div>
                <div class="slider_item img_one">
                    <img class="img" src="images/img1.jpg">
                </div>
                <div class="slider_item img_two">
                    <img class="img" src="images/img2.jpeg">
                </div>
                <div class="slider_item img_three">
                    <img class="img" src="images/img3.jpeg">
                </div>
                <div class="slider_item img_four">
                    <img class="img" src="images/img4.jpg">
                </div>
                <div class="slider_item img_five">
                 <img class="img" src="images/img5.jpg">
                </div>
                <div class="button right">
                    <i class="fas fa-arrow-circle-right"></i>
                </div>
                
            </div>
            <div class="dot_menu">
                <span class="dot first">1</span>
                <span class="dot second">2</span>
                <span class="dot third">3</span>
                <span class="dot fourth">4</span>
                <span class="dot fifth">5</span>
            </div>
            <div class="low_width">
                <h1>KUP SE WIEKSZY EKRAN - OBRÓĆ EKRAN</h1>
            </div>
        </div>
        <div class="footer">
            <div>© 2019 NieeeIksdeee</div>
        </div>

    </div>
</body>
<script src="script.js"></script>
</html>

<!-- <img class="slider_item" src="images/img1.jpg">
<img class="img" src="images/img2.jpeg">
<img class="slider_item" src="images/img3.jpeg">
<img class="slider_item" src="images/img4.jpg">
<img class="slider_item" src="images/img5.jpg"> -->
