<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />  
</head>
<body>
    <div class="main">
        <div class="a">
            <?php
                $hn = "172.16.131.125";
                $un = "z_cxz";
                $pss = "bvc";
                $dbn = "z_cxz";

                $conn = new mysqli($hn, $un, $pss, $dbn);
                $sql = "SELECT * from bibl_wyp,bibl_autor,bibl_tytul,bibl_book WHERE `bibl_autor`.`id_autor`=`bibl_book`.`id_autor` and `bibl_tytul`.`id_tytul`=`bibl_book`.`id_tytul` and `bibl_book`.`id_book`=`bibl_wyp`.`id_book` ";
                $result = mysqli_query($conn, $sql);
                echo("<table border=1><tr><td>autor</td><td colspan='2'>tytul</td></tr>");
                while($row=mysqli_fetch_assoc($result)){
                    echo("<tr><td>".$row["autor"]."</td><td>".$row["tytul"]."</td><td>
                    <form method='POST' action='delete.php'>
                        <input type='text' name='id' value=".$row["id_wyp"]." hidden>
                        <input type='submit' value='Usuń'>
                    </form>
                    ");
                }
                echo("</table>");
                   
                
            ?>
        </div>
        <div class="b">
            <form action="insert.php" method="POST">
                <input type="text" name="imie"><br/>
                <input type="submit" value="Wyślij">
            </form>
            
        </div>
        <div class="c">
            <?php
                $sql2="SELECT * FROM `bibl_autor`;";
                $result2 = mysqli_query($conn,$sql2);
                echo("<table border=1><tr><td>id</td><td>autor</td></tr>");
                while($row=mysqli_fetch_assoc($result2)){
                    echo("<tr><td>".$row["id_autor"]."</td><td>".$row["autor"]."</td></tr>");
                }
                echo("</table>");
                   
            ?>
        </div>
    </div>
</body>
</html>