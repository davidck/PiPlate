<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?= $this->pageTitle ?></title>
        <meta name="description" content="<?= $this->metaDescription ?>">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="<?= $this->resources('c', true) ?>/b/styles.css">
        <script src="<?= $this->resources('j', true) ?>/b/mootools.js"></script>
        <script src="<?= $this->resources('j') ?>/x/modernizr-2.6.1-respond-1.1.0.min.js"></script>
    </head>
    <body id="<?= $this->bodyId ?>">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
        <![endif]-->
        
        <?= $content ?>

        <script src="<?= $this->resources('j', true) ?>/b/script.js"></script>
        <script>
            var _gaq=[['_setAccount','<?= Yii::app()->params['googleAnalyticsID']; ?>'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
