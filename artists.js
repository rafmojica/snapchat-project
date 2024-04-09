import { getAlbums } from "./data.js";
let artists;

async function renderArtists(filter) {
  const allArtists = document.querySelector(".all__artists");
  const artistsList = document.querySelector(".artists__list");

  allArtists.classList += " loading";
  if (!artists) {
    artists = await getAlbums();
  }
  allArtists.classList.remove("loading");

  if (filter === "A_TO_Z") {
    artists.sort((a, b) => b.artist.localeCompare(a.artist)).reverse();
  } else if (filter === "Z_TO_A") {
    artists.sort((a, b) => b.artist.localeCompare(a.artist));
  }

  // Some albums are created by the same artist, this creates a new array to ensure that there are no duplicates
  const uniqueArtists = Array.from(new Set(artists.map(artist => artist.artist)))
  const artistsHtml = uniqueArtists
    .map((artist) => {
      return `<li class="artists__item">${artist}</li>`;
    })
    .join("");
  artistsList.innerHTML = artistsHtml;
}

function filterArtists(e) {
  renderArtists(e.target.value);
}

setTimeout(() => {
  renderArtists();
});

window.filterArtists = filterArtists;
