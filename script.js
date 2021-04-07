
const quotesData = ['You should have seen me reading Marx', 
'Spam! Spam! Spam! Spam! Spam! Spam!', 
'Let me sleep all night in your soul kitchen', 
'Follow the weird naked Indian', 
'Feel the sound of music banging in my belly',
'My hovercraft is full of eels',
'My mother always used to say: The older you get, the better you get, unless you’re a banana',
'Clothes make the man. Naked people have little or no influence in society',
'Before you marry a person, you should first make them use a computer with slow Internet to see who they really are',
'You keep on shouting, you keep on shouting',
'And in the end the love you take is equal to the love you make']

const personaData = ['The Pope', 
'a mockingbird', 
'a vampire', 
'Mark Zuckerberg', 
'a snake', 
'Jim Morrison', 
'a alien', 
'SpiderMan'];

const verbData = ['see', 'talk with', 'dream of'];

const actionData = ['drinking a tea', 
'crossing the red streets', 
'crawling near the dunes', 
'flying in the skies of London', 
'buying some cheap magazines',
'strolling through Duvivier at 5'];

const luckData = ['you will win the lottery', 
'you will find great love', 
'you have a broken heart', 
'you will have a trip'];

const watchOutData = ['a crow can land on your window', 
'a whale may appear in your pool', 
'a bear can show up for dinner',
'a clown can move in next door']


function mixed () {
    /*function randNum (arr){
        return Math.floor(Math.random()* arr.lenght);
    }*/
    const randNum = arr => {
        return Math.floor(Math.random() * arr.length);
    }

    const randLotto = () => {
        return Math.floor(Math.random() * 60);
    }

    let verb = verbData[randNum(verbData)];
    let persona = personaData[randNum(personaData)];
    let action = actionData[randNum(actionData)];
    let luck = luckData[randNum(luckData)];
    let watchOut = watchOutData[randNum(watchOutData)];
    let quotes = quotesData[randNum(quotesData)]; 
    let lotto = [randLotto(), randLotto(), randLotto(), randLotto(), randLotto(), randLotto()];


    let fullstr = `If you ${verb} ${persona} ${action} than ${luck}, but be careful ${watchOut}. 
    Quote of the day: ${quotes}.`

    console.log('Today is your lucky day?');
    console.log(fullstr)

    console.log(`Lucky Numbers: ${lotto}`);


};

mixed();


 

