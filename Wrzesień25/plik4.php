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
        <?php
            session_start();
            if(isset($_POST['login']) && $_POST['login']=="bela"){
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
        <div class="main">
            <h1>Plik3</h1>
        </div>
    </div>
</body>
</html>
