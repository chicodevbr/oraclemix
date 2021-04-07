
const quotesData = ['You should have seen me reading Marx', 'Spam! Spam! Spam! Spam! Spam! Spam!', 
    'Let me sleep all night in your soul kitchen', 'Follow the weird naked Indian' ]

const personaData = ['The Pope', 'a mockingbird', 'a vampire', 'Mark Zuckerberg', 'a snake', 'Jim Morrison'];

const verbData = ['see', 'talk with', 'dream of'];

const actionData = ['drinkin a tea', 'crossing the streets', 'crawling', 'flying in the skies of london'];

const luckData = ['then you will win the lottery', 'then you will find great love', 'so you have a broken heart', 'then you will have a trip'];

const watchOutData = ['a crow can land on your window', 'a whale may appear in your pool', 'a bear can show up for dinner']


function mixed () {
    function randNum (arr) {
        return Math.floor(Math.random()* arr.lenght);
    }

    let verb = verbData[randNum(verbData)];
    let persona = personaData[randNum(personaData)];
    let action = actionData[randNum(actionData)];
    let luck = luckData[randNum(luckData)];
    let watchOut = watchOutData[randNum(watchOutData)]; 

};


//if you see the pope drinking tea, then you will win the lottery.


let fullstring = `If you ${verb} ${persona} ${action}, than you ${luck}, but be careful ${watchOut}. Your lucky phrase is: ${quotes}.`
 

