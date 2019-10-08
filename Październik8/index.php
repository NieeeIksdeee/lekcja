<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css" class="css">
</head>
<body>
    <div class="container">
        <div class="sidebar">
        <a href="index.php"><div class="btn">Głowny</div></a><br/>
            <a href="plik2.php"><div class="btn">Plik2</div></a><br/>
            <a href="plik3.php"><div class="btn">Plik3</div></a><br/>
            <a href="plik4.php"><div class="btn">Plik4</div></a>
        </div>
        <div class="header">
            <h2>Logowanie</h2>
            <form action="login.php" method="POST">
                <input type="text" placeholder="login" name="login" class="text">
                <input type="text" placeholder="password" name="password" class="text">
                <input type="submit" value="Zaloguj">
            </form>
        </div>
        <div class="main">
            <h1>Główny</h1>
            <?php
            session_start();

            require("connect.php");
            if(isset($_GET['akcja'])&& $_GET['akcja']="wyloguj"){
                unset($_SESSION['Zalogowany']);
            }

            if(isset($_POST['password']) && md5($_POST['password'])== $pass){
                $_SESSION["Zalogowany"]=1;
            }
            if(isset($_SESSION['Zalogowany']) && $_SESSION['Zalogowany']==1){
                echo("<div class='green'>Zalogowany</div>");
                echo("<a href='index.php?akcja=wyloguj'>Wyloguj</a>");
            }
            else{
                echo("<div class='red'>Niezalogowany</div>");
            }
        ?>
        </div>
    </div>
</body>
</html>

