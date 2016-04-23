<?php

$hook_version = 1;

$hook_array = array();
$hook_array['before_save'] = array();
$hook_array['before_save'][] = array(
    1,
    'Hook description',
    'custom/modules/Accounts/testhook.php',
    'testhook',
    'testmethod'
);



?>
