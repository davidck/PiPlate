<?php
return CMap::mergeArray(
    require(dirname(__FILE__).'/main.php'),
    array(
        'params'=>array(
            'resourcesDomain' => 'resources.piplate.uipi.es',
            'resourcesEnv' => 'y',
            'googleAnalyticsID' => 'UA-35729851-1' 
        )
    )
);