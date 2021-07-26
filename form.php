<?php
echo(mail("Artem35953@gmail.com", "заявка Василенко", "e-mail: ${_POST["email"]}\nphone: ${_POST["phone"]}"));