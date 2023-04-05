let appData = {
    name: 'Gmail',
    mailboxes: [
        'starred',
        'snoozed',
        'drafts',
        'sent',
        'junk'
    ],
    contacts: [
        {name: 'Angel', lastMessage: "I wont be in class today"},
        {name: 'Beren', lastMessage: "Today, we are going to rock it!"},
        {name: 'Daniel', lastMessage: "You must look within to find your true meaning."},
        {name: 'Holly', lastMessage: "HELLO? WHERE AM I?"},
        {name: 'Jay', lastMessage: "Look at me my names Jay"}
    ],
     emails: [
        {type: 'starred', from: 'Shady guy', subject: 'Shady stuff', message: 'Get the job done at 12 am on the dot. No mishaps, we cannot afford to go back to prison.' },
        {type: 'snoozed', from: 'Mom', subject: 'Suprise in Lunch', message: 'Hey I packed a fruit roll up in your lunch' },
        {type: 'drafts', from: 'Me', to: 'Shady Guy', subject: 'RE:Shady stuff', message: 'I WANT MY END OF THE DEAL' },
        {type: 'sent', from: 'Me', to: 'Shady Guy', subject: 'RE:Shady stuff', message: "Got the job done, don't forget that we are in this 50/50" },
        {type: 'junk', from: 'IRS', to: 'Me', subject: 'We are comming', message: "You haven't paid taxes in years, we WILL find you." }
    ] 
    
    
}

console.log(appData.name, '\n');

for(let i = 0; i < appData.mailboxes.length; i++){
    console.log(appData.mailboxes[i])
}

console.log('\n')

for(let i = 0; i < appData.emails.length; i++){
    console.log(appData.emails[i].from+': ', appData.emails[i].subject, '\n')
}

console.log('from: ' + appData.emails[1].from, '     Subject: ' + appData.emails[1].subject);
console.log('message: '+ appData.emails[1].message);

appData.emails[2].type = 'sent';

let draft = {type: 'draft', from: 'Me', to: 'IRS', subject: 'My bad', message: "Im sorry, but i'm in too deep, and owe too much money, I can pay it back in full once Shady Guy gives me my money." }

appData.emails.push(draft);