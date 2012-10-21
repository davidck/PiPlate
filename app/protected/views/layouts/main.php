<?php $this->beginContent('//layouts/base'); ?>

<div class="header-container">
    <header class="wrapper clearfix">
        <h1 class="title">PiPlate</h1>
        <nav>
<?php $this->widget('zii.widgets.CMenu',array(
	'items'=>array(
		array('label'=>'nav ul li a', 'url'=>array('/site/index')),
		array('label'=>'nav ul li a', 'url'=>array('/site/page', 'view'=>'about')),
		array('label'=>'nav ul li a', 'url'=>array('/site/page', 'view'=>'test'))
	),
)); ?>
        </nav>
    </header>
</div>

<div class="main-container">
<?= $content ?>
</div> <!-- #main-container -->

<div class="footer-container">
    <footer class="wrapper">
        <h3>footer &copy; <?= date('Y') ?></h3>
    </footer>
</div>

<?php $this->endContent(); ?>