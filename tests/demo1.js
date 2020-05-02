var connection1 = require('../pages/logout');

describe('logout page validation',function(){

    console.log('123');

    connection1.homeHeader('Home');

    connection1.valLoggedInText('You\'re logged in!!');

    connection1.clickinglogout();
});

