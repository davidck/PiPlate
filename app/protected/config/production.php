<?php
return CMap::mergeArray(
    require(dirname(__FILE__).'/main.php'),
    array(
        'params'=>array(
            'resourcesSub' => 'resources.',
            'resourcesEnv' => 'y',
            'googleAnalyticsID' => 'UA-35729851-1' 
        )
    )
);