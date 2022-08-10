let speedSlider = document.querySelector("#speedInput");
let time = 500;

speedSlider.addEventListener("change", function () {
  let speed = speedSlider.value;

  document.querySelector("#speed").innerHTML = "Speed: " + speed;
});

let chordList = [
  "C",
  "G",
  "F",
  "D",
  "B♭",
  "A",
  "E♭",
  "E",
  "A♭",
  "B",
  "D♭",
  "F♯",
  "Am",
  "Em",
  "Dm",
  "Bm",
  "Gm",
  "F♯m",
  "Cm",
  "C♯m",
  "Fm",
  "G♯m",
  "B♭m",
  "D♯m",
];

function change() {
  let random = Math.floor(Math.random() * chordList.length);
  console.log(chordList[random]);
  document.querySelector("#chord").innerHTML = chordList[random];
  let time = speedSlider.value * 40 + 100;

  setTimeout(change, time);
}
change();
