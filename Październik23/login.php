<?php
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
    <link rel="stylesheet" href="login.css" class="css">
    <script src="https://kit.fontawesome.com/91ac18a2f9.js" crossorigin="anonymous"></script>
    
</head>
<body>
    <div class="container">
        <div class="header">
            <a href="login.html">
                <img src="bibl_logo.png">
                
            </a>
        </div>
        <div class="main">
            <form action="index.php" method="POST">
                <input type="text" name="login" placeholder="Login"><br/>
                <input type="password" name="password" placeholder="Hasło"><br/>
                <input type="submit" value="Zaloguj" class="submit">
            </form>
        </div>
        <div class="footer">
            <p>© 2019 NieeeIksdeee</p>
        </div>

    </div>
</body>
</html>
