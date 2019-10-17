<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        $results_per_page = 5;
        $sql_all = $conn->query($sql_all);
        if($isset($_GET['page'])){
            $page = 1;
        }else{
            $page = $_GET['page'];
        }
        $start_limit = ($page-1)*$results_per_page;
        echo"<li>start:".$start_limit;
        echo"<br>";

        $sql = "SELECT * FROm pracownicy LIMIT ".$start_limit.",".$results_per_page;
        
    ?>
</body>
</html>