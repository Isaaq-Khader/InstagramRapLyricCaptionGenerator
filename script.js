function getLyric() {
    // from list of raps, randomly choose a rap lyric
    const raps = ['"Poopy-di scoop, Scoop-diddy-whoop, Whoop-di-scoop-di-poop" -Kanye West',
        '"I will turn a [friend] into a convertible"- DaBaby', '"gucci gang"- Lil Pump"',
        '"I don\'t like \'em figgity fat, I like em stiggity stacked/You wiggity wiggity wack if you ain\'t got biggity back." -mc hammer',
        '"That girl know how to blow something like she played the flute."- Mac Miller',
        '"I\'ma go hard like a motherfucking boner."- will.i.am',
        'An elephant never forgets, so my dick remembers everything."- Childish Gambino',
        '"Swagger tighter than a yeast infection, Fly, go hard, like geese erection."- Lil Wayne',
        '"Never let me slip \'cause if I slip, then I\'m slippin\'."- Dr. Dre'];
    const rap = raps[Math.floor(Math.random() * raps.length)];

    // retrieve the rap-container from the HTML and display it there
    const rapContainer = document.getElementById('rap-container');
    rapContainer.innerText = rap;
}