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
  "A",
  "E",
  "B",
  "Am",
  "Em",
  "Dm",
  "Bm",
  "Cm",
  "G7",
  "D7",
  "C7",
  "A7",
  "E7",
  "B7",
  "E5",
  "A5",
  "D5",
  "G5",
  "F5",
  "C5",
];

function change() {
  let random = Math.floor(Math.random() * chordList.length);
  console.log(chordList[random]);
  document.querySelector("#chord").innerHTML = chordList[random];
  let time = speedSlider.value * 40 + 100;

  setTimeout(change, time);
}
change();
