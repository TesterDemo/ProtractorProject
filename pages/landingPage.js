//require('./logout');

var landingPage = function(){
    var userName = element(by.name('username'));

    var password = element(by.name('password'));

    var confirmedUserName = element(by.id('formly_1_input_username_0'));

    var btn = element(by.css('[ng-click="Auth.login()"]'));

    this.openingBrowser = function(url){
        browser.get(url);
    };

    this.browserMaximize = function(){
        browser.manage().window().maximize();
    }

    this.enterUserName = function(un){
        userName.sendKeys(un)
    };

    this.enterPassword = function(pass){
        password.sendKeys(pass)
    };

    this.enteringConfirmUserName = function(cun){
        confirmedUserName.sendKeys(cun)
    };

    this.clickingBtn = function(){
        btn.click();
        //return require('./logout.js')
    };
};

module.exports = new landingPage();