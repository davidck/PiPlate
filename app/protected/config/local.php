<?php
return CMap::mergeArray(
    require(dirname(__FILE__).'/main.php'),
    array(
        'params'=>array(
            'resourcesDomain' => 'local-resources.piplate.uipi.es'
        )
    )
);