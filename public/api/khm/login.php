<?php

require '../cors.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);





if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 
    try {
        $login = $request->login;
        $password = $request->password;

        if ($login == 'admin' && $password == '228228') {
            echo json_encode(array('success' => true, '', 'message' => 'Добро пожаловать'));
        } else {
            echo json_encode(array('success' => false, 'message' => 'Неправильные данные'));
        }

        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(array('success' => false, 'message' => 'Ошибка при запросе' . $e->getMessage()));
    }


} else {
    http_response_code(405);
    echo json_encode(array('success' => false, 'message' => 'Ошибка при запросе'));
}




?>