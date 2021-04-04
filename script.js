function getLyric() {
    // from list of raps, randomly choose a rap lyric
    const raps = ['"Poopy-di scoop, Scoop-diddy-whoop, Whoop-di-scoop-di-poop" -Kanye West',
        '"I will turn a [friend] into a convertible"- DaBaby', '"gucci gang"- Lil Pump',
        '"I don\'t like \'em figgity fat, I like em stiggity stacked/You wiggity wiggity wack if you ain\'t got biggity back." -mc hammer',
        '"That girl know how to blow something like she played the flute."- Mac Miller',
        '"I\'ma go hard like a motherfucking boner."- will.i.am',
        'An elephant never forgets, so my dick remembers everything."- Childish Gambino',
        '"Swagger tighter than a yeast infection, Fly, go hard, like geese erection."- Lil Wayne',
        '"Never let me slip \'cause if I slip, then I\'m slippin\'."- Dr. Dre',
        '"You done broke my heart into a million pieces/I should have seen it coming, wish I had telekinesis."- LMFAO',
        '"Ain\'t got time for chit chat\; I\'m tryin\' to get this money/So get up out my face\, you doo-doo head dummy."- Soulja Boy',
        '“You know me, I\'m off in the cut\/Always like a squirrel\, looking for a nut"- Pitbull',
        '"Am I asleep? No, I\'m alive." -Jessie J',
        '"My lean cost more than your rent, ooh/Your mama still live in a tent, yeah"- Lil Pump',
        '"treat her like garbage”- Future',
        '"Schwarzenegger I\, straight slaughter [friends]\, I\'m offin [friends] screaming off with [friends] heads." -A$AP Rocky',
        '"I love you like a fat kid love cake"- 50 Cent"',
        '"My wrist deserve a shout-out\, I’m like, what up wrist?"- 2 Chainz',
        '"Baby girl shake it like a paraplegic please believe it"- Nelly',
        '"I go so hard they call me go so hard"- Lil Wayne',
        '"I’m hot \‘cause I\’m fly\, you ain\’t \‘cause you not"- MIMS',
        '"real g\’s move in silence like lasagna"- Lil Wayne',
        '"Picture that with a Kodak\, And\, better yet\, go to Times Square\, take a picture of me with a Kodak"- Pitbull',
        '“you a stupid hoe”- Nicki Minaj',
        'im so lonely',
        'poggers']; 
    const rap = raps[Math.floor(Math.random() * raps.length)];

    // retrieve the rap-container from the HTML and display it there
    const rapContainer = document.getElementById('rap-container');
    rapContainer.innerText = rap;
}