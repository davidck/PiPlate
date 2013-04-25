<?php
class Controller extends CController
{
	public $layout='//layouts/main';
	public $menu=array();
	public $breadcrumbs=array();
	public $metaDescription = '';
	public $bodyId = 'gen';

    public function resources($type, $isOutputEnv = false) {
        $sub = Yii::app()->params['resourcesSub'];
        $domain = Yii::app()->params['resourcesDomain'];
        $types  = (object)Yii::app()->params['resourcesTypes'];
        $env    = ($isOutputEnv) ? '/'.Yii::app()->params['resourcesEnv'] : '';
        return 'http://'.$sub.$domain.$types->$type.$env;
    }
}