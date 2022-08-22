const øl = document.querySelector("#knapØl");
const snaps = document.querySelector("#knapSnaps");
const citronSodavand = document.querySelector("#knapCitronSodavand");
const sportSodavand = document.querySelector("#knapSportSodavand");

øl.addEventListener("click", funktionDerKaldesVedKlik);
snaps.addEventListener("click", funktionDerKaldesVedKlik);
citronSodavand.addEventListener("click", funktionDerKaldesVedKlik);
sportSodavand.addEventListener("click", funktionDerKaldesVedKlik);

function funktionDerKaldesVedKlik() {
  if (this == øl) {
    console.log("alkohol");
  } else if (this == snaps) {
    console.log("alkohol");
  } else if (this == citronSodavand) {
    console.log("alkoholfri");
  } else {
    console.log("alkoholfri");
  }
}
