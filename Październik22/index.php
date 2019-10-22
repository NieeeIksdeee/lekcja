<?php
    include'viewUsers.class.php';
    include'user.class.php';
    include'db.class.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Polaczenie z baza danych</h1>
<?php
    include'viewUsers.class.php';
    $user = new viewUser();
    $user->showAllUsers();

?>
</body>
</html>