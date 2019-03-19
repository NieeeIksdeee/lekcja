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
            <form action="dane.php" method="POST">
                <input type="text" name="imie"><br/>
                <input type="number" name="dzial"><br/>
                <input type="number" name="zarobki"><br/>
                <input type="date" name="data"><br/>
                <input type="submit">
            </form>
        </div>
        <div class="b">
            <div class="b1">
                
                <?php
                    $hn = "172.16.131.125";
                    $us = "z_asd";
                    $ps = "poi";
                    $dbn = "z_asd";

                    $conn = new mysqli($hn,$us,$ps,$dbn);
                    $sql = "SELECT * from pracownicy where imie like '%a' and zarobki > 25;";
                    $sql2 = "SELECT * from pracownicy,organizacja where imie not like'%a' and (dzial=1 or dzial=3) and id_org=dzial;";
                    $result = mysqli_query($conn,$sql);
                    $result2 = mysqli_query($conn,$sql2);
                    echo("<table border=1><tr><td colspan=2 bgcolor=white>1</td></tr>
                    <tr><td bgcolor=white>imie</td><td bgcolor=white>zarobki</td></tr>");
                    while($row = mysqli_fetch_assoc($result)){
                        echo("<tr><td bgcolor=gray>".$row["imie"]."</td><td bgcolor=gray>".$row["zarobki"]."</td></tr>");
                    };
                    echo("</table>");
                    echo("<table border=1><tr><td colspan=2 bgcolor=white>2</td></tr><tr><td bgcolor=white>imie</td><td bgcolor=white>nazwa_dzial</td></tr>");
                    while($row = mysqli_fetch_assoc($result2)){
                        echo("<tr><td bgcolor=gray>".$row["imie"]."</td><td bgcolor=gray>".$row["nazwa_dzial"]."</td></tr>");
                    };
                    echo("</table>");
                ?>
            </div>
            <div class="b2">
                <?php
                    $sql3 = "SELECT * from pracownicy,organizacja where dzial=3 and id_org=dzial;";
                    $result3 = mysqli_query($conn,$sql3);
                    $sql4 = "SELECT * from pracownicy,organizacja where dzial=2 and (zarobki>10 and zarobki<30) and id_org=dzial;";
                    $result4 = mysqli_query($conn,$sql4);
                    echo("<table border=1><tr><td colspan=2 bgcolor=white>3</td></tr><tr><td bgcolor=white>imie</td><td bgcolor=white>nazwa_dzial</td></tr>");
                    while($row = mysqli_fetch_assoc($result3)){
                        echo("<tr><td bgcolor=gray>".$row["imie"]."</td><td bgcolor=gray>".$row["nazwa_dzial"]."</td></tr>");
                    };
                    echo("</table>");
                    echo("<table border=1><tr><td colspan=3 bgcolor=white>4</td></tr><tr><td bgcolor=white>imie</td><td bgcolor=white>zarobki</td><td bgcolor=white>nazwa_dzial</td></tr>");
                    
                    while($row = mysqli_fetch_assoc($result4)){
                        echo("<tr><td bgcolor=gray>".$row["imie"]."</td><td bgcolor=gray>".$row["zarobki"]."</td><td bgcolor=gray>".$row["nazwa_dzial"]."</td></tr>");
                    };
                    echo("</table>");

                ?>
            </div>
        </div>
        
        
    </div>
</body>
</html>