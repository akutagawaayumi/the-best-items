var Index = [
    "こんにちは。このページは、私のベストな持ち物を記録するホームページです。<br/>",
    "カバービジュアルには、私の特にお気に入りの私物を掲載します。",
    "写真付きリストには、時にお気に入りの私物を紹介文付きで掲載します。<br/>",
    "abi the best items。"
]

function more() {
    $("#header marquee").html(Index[Math.floor(Math.random() * Index.length)]);
}

function greeting() {
    $("#greeting #text").html(Index);
}

var volume;
var synth;
var notes;
$(document).ready(function(event) {
    // StartAudioContext(Tone.context, window);  
    $(window).click(function() {
        Tone.context.resume();
    });

    volume = new Tone.Volume(-10);
    synth = new Tone.PolySynth(10, Tone.Synth).chain(volume, Tone.Master);
    notes = Tone.Frequency("C4").harmonize([1, 3, 5, 7, 9, 12]);
});

$("#marquee").click(function(e) {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "2");
});

$("._more").click(function(e) {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "1");
});

$("#greeting").click(function(e) {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "1n");
});

$(".label").click(function(e) {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "2n");
});

$(".list_item img").hover(function() {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "4n");
});

$(".list_toggle").hover(function() {
    let randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "8n");
});
