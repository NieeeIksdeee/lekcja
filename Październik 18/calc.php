<?php
    include'calculator.class.php';
    $wynik = new Calculator($działanie, $num1, $num2);

    $wynik->liczenie();
    $wynik->obliczenia();
?>