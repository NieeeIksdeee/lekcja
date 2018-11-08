<?php
echo('<p style="color:purple; font-size:30pt;">');
if ($_POST['calctype'] == 'add') {
    echo($_POST['zmienna1'] + $_POST['zmienna2']);
}
else if ($_POST['calctype'] == 'sub') {
    echo($_POST['zmienna1'] - $_POST['zmienna2']);
}
else if ($_POST['calctype'] == 'mult') {
    echo($_POST['zmienna1'] * $_POST['zmienna2']);
}
else if ($_POST['calctype'] == 'div') {
    echo($_POST['zmienna1'] / $_POST['zmienna2']);
}
echo('</p>');
echo('<br><br><a href="index.html">wróć</a>');
?>
