function init() {
  const takeoffButton = document.getElementById("takeoff");
  const landButton = document.getElementById("landing");
  const abortButton = document.getElementById("missionAbort");
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");
  let height = 0;
  const rocket = document.getElementById("rocket");
  const upButton = document.getElementById("up");
  const downButton = document.getElementById("down");
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");

  rocket.style.position = "absolute";
  rocket.style.top = "250px";
  rocket.style.left = "225px";

  takeoffButton.addEventListener("click", () => {
    const userConfirmed = window.confirm(
      "Confirm that the shuttle is ready for takeoff"
    );
    if (userConfirmed) {
      flightStatus.innerHTML = "Shuttle in flight";
      shuttleBackground.style.backgroundColor = "blue";
      rocket.style.top = parseInt(rocket.style.top) - 10 + "px";
      height = height + 10000;
      shuttleHeight.innerHTML = height;
    }
  });

  landButton.addEventListener("click", () => {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed";
    shuttleBackground.style.backgroundColor = "green";
    shuttleHeight.innerHTML = 0;
    rocket.style.top = "250px";
  });

  abortButton.addEventListener("click", () => {
    const userConfirmed2 = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (userConfirmed2) {
      flightStatus.innerHTML = "Mission Aborted";
      shuttleBackground.style.backgroundColor = "green";
      shuttleHeight.innerHTML = 0;
      rocket.style.top = "250px";
    }
  });

  upButton.addEventListener("click", () => {
    rocket.style.top = parseInt(rocket.style.top) - 10 + "px";
    height = height + 10000;
    shuttleHeight.innerHTML = height;
  });

  downButton.addEventListener("click", () => {
    rocket.style.top = parseInt(rocket.style.top) + 10 + "px";
    height = height - 10000;
    shuttleHeight.innerHTML = height;
  });

  rightButton.addEventListener("click", () => {
    rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
  });

  leftButton.addEventListener("click", () => {
    rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
  });
}

window.addEventListener("load", init);

scripts.js;
