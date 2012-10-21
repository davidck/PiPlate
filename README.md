PiPlate
=======

PiPlate is a complete template you can truly just start coding with. Uses Yii Framework and MooTools.

Quick Start
-----------
1. Extract files in your web directory.
2. Set up your vhost.  A sample is at the bottom of this readme file.
3. Start Coding.

Software Requirements
---------------------
1. Apache2
2. PHP 5+
3. Java
4. Apache ANT (should come preinstalled with MacOS X Snow Leopard+

Recommended
-----------
1. NodeJS + npm + LESSC

What's Inside
-------------
1. Yii Framework (PHP MVC framework)
2. MooTools (JavaScript framework)
3. HTML 5 Boilerplate 
4. Build.xml (ANT Build process)
5. YUI Compressor (Minifier)

Sample Virtual Host
-------------------

    <VirtualHost *:80>
        DocumentRoot /Users/uipi.es/Sites/mywebsite.com/app
        ServerName local.mywebsite.com
        ErrorLog /Users/uipi.es/Sites/logs/local.mywebsite.com-error
        SetEnv YII_ENVIRONMENT local
    </VirtualHost>
    
    <VirtualHost *:80>
        ServerAdmin davidck@gmail.com
        DocumentRoot /Users/uipi.es/Sites/mywebsite.com/resources/main
        ServerName local-resources.mywebsite.com
    </VirtualHost>
