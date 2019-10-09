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
        <div class="header">
        <?php
            // ROZPOCZĘCIE SESJI
                session_start();
            // ROZPOCZEĘCIE SESJI

            // WYLOGOWANIE POCZĄTEK
            // Jeśli zmienna 'Akcja' posiada wartość 'Wyloguj', to sesja 'Zalogowany' zostanie wyłączona.
                if(isset($_GET['Akcja']) && $_GET['Akcja'] == "Wyloguj"){
                    unset($_SESSION['Zalogowany']);
                }
            // WYLOGOWANIE  KONIEC

            // ZADANIA LOGOWANIA POCZĄTEK
            // Jeśli zalogowany to dodaj napis 'Zalogowany' i przycisk do wylogowania.
            // Jeśli niezalogowany to dodaj napis 'Niezalogowany'.
                if(isset($_SESSION['Zalogowany']) && $_SESSION['Zalogowany'] = 1){
                    echo("<h1>Zalogowany</h1>");
                    echo("<a href='index.php?Akcja=Wyloguj'>Wyloguj</a>");
                }
                else{
                    echo("<h1>Niezalogowany</h1>");
             }
            // ZADANIA LOGOWANIA KONIEC
            
        ?>
        </div>
        <div class="main">
            <!-- Formularz do logowania -->
                <form action="login.php" method="POST">
                    <input type="text" placeholder="Login" name="login"><br/>
                    <input type="text" placeholder="Hasło" name="haslo"><br/>
                    <input type="submit" value="Zaloguj">
                </form>
            <!-- Formularz do logowania  -->

            <?php
                // ZADANIA LOGOWANIA POCZĄTEK
                // Jeśli zalogowany to dodaj blok 'Zalogowany' z klasą green i przycisk do wylogowania.
                // Jeśli niezalogowany to dodaj blok 'Niezalogowany' z klasą red.
                    if(isset($_SESSION['Zalogowany']) && $_SESSION['Zalogowany'] = 1){
                        echo("<div class='l green'>GREEN</div>");
                    }
                    else{
                        echo("<div class='l red'>RED</div>");
                    }
                // ZADANIA LOGOWANIA KONIEC
        
            ?>
            
        </div>
        <div class="footer">
            <a href="index.php">Plik1</a>
            <a href="plik2.php">Plik2</a>
            <a href="plik3.php">Plik3</a>
        </div>
    </div>
</body>
</html>