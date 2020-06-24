<?php


  if (isset($_POST['submit'])) {
    // Check if name has been entered
    if (empty($_POST['user'])) {
        $errName = 'Please enter your user name';
    }
    // Check if email has been entered and is valid
    else if (empty($_POST['email'])) {
        $errEmail = 'Please enter a valid email address';
    }
    // check if a password has been entered and if it is a valid password
    else if (empty($_POST['password']) || (preg_match("/^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/", $_POST["password"]) === 0)) {
        $errPass = '<p class="errText">Password must be at least 8 characters and must contain at least one lower case letter, one upper case letter and one digit</p>';
    }
    else {
        echo "You have successfully signed up.";
        session_start();
        $data = array("username" => $_POST['email'], "password" => $_POST['password'], "name" => $_POST['user']);
        $data_string = json_encode($data);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, ":8080/api/users/createUser");
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($data_string))
        );

        echo curl_exec($ch)."\n";
        $result = curl_exec($ch);
        $json = json_decode($result, true);
        curl_close($ch);
        // Set session variables
        $_SESSION["token"] = $json["token"];
        echo "Session variables are set.";

        $time = $_SERVER['REQUEST_TIME'];

        /**
        * for a 30 minute timeout, specified in seconds
        */
        $timeout_duration = 1800;

        /**
        * Here we look for the user's LAST_ACTIVITY timestamp. If
        * it's set and indicates our $timeout_duration has passed,
        * blow away any previous $_SESSION data and start a new one.
        */
        if (isset($_SESSION['LAST_ACTIVITY']) &&
           ($time - $_SESSION['LAST_ACTIVITY']) > $timeout_duration) {
            session_unset();
            session_destroy();
            session_start();
        }

        /**
        * Finally, update LAST_ACTIVITY so that our timeout
        * is based on it and not the user's login time.
        */
        $_SESSION['LAST_ACTIVITY'] = $time;
    }
}
 ?>
