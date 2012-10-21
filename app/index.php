<?php
$frameworkVersion = 'yii-1.1.12.b600af';

// change the following if necessary

$yiiEnv = apache_getenv('YII_ENVIRONMENT');
if(empty($yiiEnv)) { $yiiEnv = 'main'; }

$yii=dirname(__FILE__).'/../framework/'.$frameworkVersion.'/framework/yii.php';
$config=dirname(__FILE__).'/protected/config/'.$yiiEnv.'.php';

if ($yiiEnv != 'production') {
    // remove the following lines when in production mode
    defined('YII_DEBUG') or define('YII_DEBUG',true);
    // specify how many levels of call stack should be shown in each log message
    defined('YII_TRACE_LEVEL') or define('YII_TRACE_LEVEL',3);
}

require_once($yii);
Yii::createWebApplication($config)->run();
