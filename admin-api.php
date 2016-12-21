<?php
 // $command = $_GET['cmd']
 //  $as_json = '{"command":'.$command.'"}';
 //
 // $myfile = file_put_contents('/db/users.json', $as_json.PHP_EOL , FILE_APPEND | LOCK_EX);

 $file = 'people.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current .= "John Smith\n";
// Write the contents back to the file
file_put_contents($file, $current);

?>
