<?php
class auto{
    private $marka;
    private $kolor ="czerwony";
    private $predkosc;
    private $tab = array();

    function __construct($marka_podana){
        $this ->predkosc = 0;
        $this -> marka = $marka_podana;
        echo("<br>konstruktor marka: ".$this->marka);
        echo("<br>konstruktor kolor: ".$this->kolor);
        echo("<br>konstruktor predkosc: ".$this->predkosc);
    }


    function sprawdzenie(){
        echo("działam");
    }

    function uruchom_auto(){
        $this->predkosc = 5;
        echo("<br>jade".$this->marka);
    }

    function getPredkosc(){
        return $this->predkosc;
    }
    function setPredkosc(){
        $this->predkosc +=5;
    }
    function __toString(){
        return '<li>UWAGA zgłaszam sie';
    }
    function __invoke(){
        return 'DZIAŁAM ale inaczej';
    }

}
$moje_autko = new auto("skoda");

echo $moje_autko->setPredkosc();
echo $moje_autko->getPredkosc();
echo $moje_autko->setPredkosc();
echo $moje_autko->getPredkosc();

?>
