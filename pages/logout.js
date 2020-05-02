var logout = function(){

    var home = element(by.css('h1[class="ng-scope"]'));

    var loggedInText = element(by.xpath('//p[@class="ng-scope"][1]'));

    var logout = element(by.css('[href="#/login"]'));
    this.title = function(){
        browser.getTitle().toBe('Protractor practice website - Registration');
    };
    this.homeHeader = function(val){
        expect(home.getText()).toEqual(val)
    };

    this.valLoggedInText = function(val){
        expect(loggedInText.getText()).toEqual(val)
    };

    this.clickinglogout =function(){
        logout.click();
        browser.sleep(6000);
        console.log('Completed Successfully');
        
    };

};
module.exports = new logout();