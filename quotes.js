//all quotes from https://www.orionphilosophy.com/stoic-blog/bushido-samurai-quotes#:~:text=Honour%20may%20not%20win%20power,And%20respect%20earns%20power.&text=Today%20is%20victory%20over%20yourself,your%20victory%20over%20lesser%20men.&text=A%20warrior%20is%20worthless%20unless,the%20midst%20of%20a%20storm.
var quotes =[
    '"Honour may not win power, but it wins respect. And respect earns power."',
    '"Today is victory over yourself of yesterday; tomorrow is your victory over lesser men."',
    '"A warrior is worthless unless he rises above others and stands strong in the midst of a storm."',
    '"The Samurai always has to rise and move on, because new challenges will come."',
    '"Everyone feels fear. What a samurai or warrior is, is what you do when you feel fear."',
    '"As a samurai, I must strengthen my character; as a human being I must perfect my spirit"',
    '"It is good to face challenges in your youth. He who has never suffered will not sufficiently temper his character."',
    '"The Samurai is the first to suffer anxiety for human society, and he is the last to seek personal pleasure."'
];

var author =[
    '- Ishida Mitsunari',
    '- Miyamoto Mushashi',
    '- Yamamoto Tsunetomo',
    '- Lyoto Machida',
    '- Enson Inoue',
    '- Yamaoka Tesshu',
    '- Yamamoto Tsunetomo',
    '- Morihei Ueshiba'
];
function randQuote(){
    let randIndex = Math.floor(Math.random() * 8);
    document.write("<div id='quote'><p><i>"+ quotes[randIndex] + "</br>" + author[randIndex] + "</i></p></div>");
}