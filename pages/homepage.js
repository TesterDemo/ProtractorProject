var homepage = function () {

    var firstNumber = element(by.model('first'));

    var secondNumber = element(by.model('second'));

    var goButton = element(by.css('[ng-click="doAddition()"]'));

    this.launchUrl = function (url) {
        browser.get(url)
    };

    this.enterFirstNumber = function (firstno) {
        firstNumber.sendKeys(firstno)

    };

    this.enterSecondNumber = function (secondNo) {
        secondNumber.sendKeys(secondNo)
    };

    this.clickBtn = function () {
        goButton.click()

    };

    this.verifyResult = function (result) {
        var val = element(by.cssContainingText('[class="ng-binding"]', result));
        expect(val.getText()).toEqual(result);
    };



};

module.exports = new homepage();