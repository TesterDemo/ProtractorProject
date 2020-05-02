var connection = require('../pages/landingPage');
var connection1 = require('../pages/logout');


describe('googleLandingPage',function(){
    
    it('Homepage',function(){
                
        connection.openingBrowser('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        browser.sleep(2000);
        
        connection.browserMaximize();

        connection.enterUserName('angular');
        
        connection.enterPassword('password');
        
        connection.enteringConfirmUserName('angular');
        
        var btn = element(by.css('[ng-click="Auth.login()"]'));
        var logout = connection.clickingBtn();

        browser.sleep(4000);

        //console.log('123');

       connection1.homeHeader('Home');

       connection1.valLoggedInText('You\'re logged in!!');

       connection1.clickinglogout();
       browser.sleep(2000);

    });

});