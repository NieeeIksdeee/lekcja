<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>INDEX</title>
    <link rel="stylesheet" href="style.css" class="css">
</head>
<body>
    <h1>INDEX</h1>
    <div class="menu">
        <a href="index.php" class="a">
            <div class="btn">
                INDEX
            </div>
        </a>
        <a href="index2.php" class="b">
            <div class="btn">
                INDEX2
            </div>
        </a>
        <a href="index3.php" class="c">
            <div class="btn">
                INDEX3
            </div>
        </a>
        <a href="index4.php" class="d">
            <div class="btn">
                INDEX4
            </div>
        </a>
        <a href="index5.php" class="e">
            <div class="btn">
                INDEX5
            </div>
        </a>
    </div>
    <div class="container">
        <form action="index2.php" method="POST">
            <input type="text" name="haslo"><br/>
            <input type="submit" value="Zaloguj">
        </form>
        
    </div>
    
</body>
</html>
    <?php
        session_start();
        if(isset($_GET['akcja']) && $_GET['akcja']=="wyloguj"){
            unset($_SESSION['Zalogowany']);
        }
    ?>