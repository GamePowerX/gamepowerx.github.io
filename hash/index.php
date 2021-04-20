<html>
  <head>
    <link rel="stylesheet" href="main.css">
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon"/> 
    <title>GamePowerX | Hash Generator</title>
    <form method="post">    
    <input type="submit" id="home" name="home" value="Home">
    <input type="submit" id="register" name="register" value="Register">
    <input type="submit" id="login" name="login" value="Login">
    </form>
    <?php
      if(array_key_exists('home', $_POST)){
        header('Location: /../');
        exit();
      }elseif(array_key_exists('register', $_POST)){
        header("Location: /../register.php");
        exit();
      }elseif(isset($_GET['login'])){
        header('Location: login.php')
        exit();
      }
    ?>
  <br>
    <form method="post">
    <textarea name="text" id="text" rows="2" style="width: 75%" spellcheck="false"></textarea>
    <br>
    <input type="submit" id="submit" name="submit" value="Generieren">
    </form>
    <?php
      if(array_key_exists('submit', $_POST)){
        $hash = password_hash($_POST['text'], PASSWORD_DEFAULT);
        echo ("<p>Hash: $hash </p>");
      }
    ?>
  </head>
</html>