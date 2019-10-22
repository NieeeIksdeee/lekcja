<?php
    class Calculator{
        public $dzialanie;
        public $num1;
        public $num2;

        public function __constructor($a,$b,$c){
            echo '<li>Info z KONSTRUKTORA KLASY: ';
            echo '<li>'.$a;
        }
        public function obliczenia(){
            echo '<li> Obliczamy';
            switch($this->dzialanie){
                case 'suma':
                    echo'<li>suma:'.($this->num1 + $this->num2);
            }
        }
    }
?>