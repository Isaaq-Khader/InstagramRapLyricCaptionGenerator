function getLyric() {
    // from list of raps, randomly choose a rap lyric
    const raps = ['Ur mum lol', 'git gud nerd'];
    const rap = raps[Math.floor(Math.random() * raps.length)];

    // retrieve the rap-container from the HTML and display it there
    const rapContainer = document.getElementById('rap-container');
    factContainer.innerText = rap;
}