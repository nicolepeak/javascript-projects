function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  button.addEventListener("click", (event) => {
    paragraph.innerHTML = "Houston! We have liftoff!";
  });

  missionAbort.addEventListener("mouseover", (event) => {
    missionAbort.style.cursor = "red";
  });

  missionAbort.addEventListener("mouseover", () => {
    missionAbort.style.backgroundColor = "red";
  });

  missionAbort.addEventListener("mouseout", () => {
    missionAbort.style.backgroundColor = "";
  });

  missionAbort.addEventListener("click", () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to abort the mission?"
    );

    if (userConfirmed) {
      paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
    }
  });
}

window.addEventListener("load", init);

script.js;
