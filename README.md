PiPlate
=======

PiPlate is a complete template so you can truly just start coding. Uses Yii Framework and MooTools.



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
