<?php

    /**
     * Nous créons deux variables : $username et $password qui valent respectivement "Sdz" et "salut"
     */
     
    $username = "sdz@sdz";
    $password = "salut";
 
    if( isset($_POST['username']) && isset($_POST['password']) ){
 
        if($_POST['username'] == $username && $_POST['password'] == $password){ // Si les infos correspondent...
            session_start();
            $_SESSION['user'] = $username;
            echo "Success";    
        }
        else{ // Sinon
            echo "Failed";
        }
    }
?>