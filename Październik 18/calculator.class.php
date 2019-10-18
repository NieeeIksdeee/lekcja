<?php
    class Calculator{
        public $dzialanie;
        public $liczba1;
        public $liczba2;

        public function __constructor($a,$b,$c){
            echo '<li>Info z KONSTRUKTORA KLASY: ';
            echo '<li>'.$a;
        }
        public function obliczenia(){
            echo '<li> Obliczamy';
            if($this->dzialanie == 'suma'){
                echo '<li>Suma:'.($num1 + $num2);
            }
        }
    }
?>