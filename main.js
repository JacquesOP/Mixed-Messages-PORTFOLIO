const messageObject = {

        subject : ['You', 'People', 'They'],

        mainPart : ['are never too old to set another goal or to dream a new dream.',
                'are never too late to be what you might have been.',
                'look for a beautiful place. Others make a place beautiful.',
                'must be willing to let go of the life we planned so as to have the life that is waiting for us.',
                'begin to become successful the minute they decide to be.']

}

const messageObject2 = {

    subject : ['It', 'That', 'This'],

    mainPart : ['is never too late to set another goal or to dream a new dream.',
                'is never too late to be what you might have been.',
                'is not enough to have a good mind; the important thing is to use it well.',
                'happiness is not by chance, but by choice.',
                'mission in life is not merely to survive, but to thrive.']

}

const planMessageObject = {

    mainPart : ['Lay plans for something big by starting with it when small.',
                'Every strike brings me closer to the next home run.',
                "One's destination is never a place, but a new way of seeing things.",
                'Do anything, but let it produce joy.',
                'No one is useless in this world who lightens the burdens of another.',
                'look for a beautiful place. Others make a place beautiful.']

}



const messageGenerator = (obj1) =>{

    const newMessage = [];

    for(const part in obj1){

        const randomMessage = Math.floor(Math.random() * obj1[part].length);

        newMessage.push(obj1[part][randomMessage]);

    }

    if((newMessage[0]==='People' || newMessage[0]==='They') && (newMessage[1].includes('us'))){
            
            newMessage[1] = 'must be willing to let go of the life we planned so as to have the life that is waiting for them.';

        }else if(newMessage[0]==='You' && newMessage[1].includes('they')){

            newMessage[1] = 'begin to become successful the minute you decide to be.';

    }

    return newMessage.join(' ');

};

console.log(messageGenerator(messageObject));