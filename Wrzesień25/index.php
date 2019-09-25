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
            <form action="plik2.php" method="POST">
                <input type="text" placeholder="login" name="login" class="text">
                <input type="submit" value="zaloguj">
            </form>
        </div>
        <div class="main">
            <h1>Główny</h1>
        </div>
    </div>
</body>
</html>
<?php
    session_start();
    if(isset($_GET['akcja'])&& $_GET['akcja']="wyloguj"){
        unset($_SESSION['Zalogowany']);
    }
?>
