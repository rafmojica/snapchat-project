import { getAlbums } from "./data.js";
let artists;

async function renderArtists(filter, filteredArtists = null) {
  const allArtists = document.querySelector(".all__artists");
  const artistsList = document.querySelector(".artists__list");

  allArtists.classList += " loading";
  if (!artists) {
    artists = await getAlbums();
  }
  allArtists.classList.remove("loading");

  const artistsToRender = filteredArtists || artists.map(album => album.artist);

  if (filter === "A_TO_Z") {
    artists.sort((a, b) => b.artist.localeCompare(a.artist)).reverse();
  } else if (filter === "Z_TO_A") {
    artists.sort((a, b) => b.artist.localeCompare(a.artist));
  }

  // new array to remove duplicate artists
  const uniqueArtists = Array.from(new Set(artistsToRender));
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

document.getElementById('artistSearch').addEventListener('keyup', function(e) {
  const searchQuery = e.target.value.toLowerCase();

  const filteredArtistNames = artists
    .map(album => album.artist)
    .filter(artist => artist.toLowerCase().includes(searchQuery));

  // remove duplicates, re-render
  renderArtists(null, Array.from(new Set(filteredArtistNames)));
});


window.filterArtists = filterArtists;
