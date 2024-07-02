const d = new Date();
//document.getElementById("demo").innerHTML = d.toUTCString();
const isoString = d.toISOString();
const time = isoString.slice(11, 19);
const dayOfWeek = d.toLocaleDateString("en-US", { weekday: "long" });

document.getElementById("currentTime").textContent = time;
document.getElementById("currentDay").textContent = dayOfWeek;
