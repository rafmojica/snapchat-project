/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */
import { getAlbums } from "./data.js";
let albums;

async function renderAlbums(filter) {
  const allAlbums = document.querySelector(".all__albums");
  const albumsWrapper = document.querySelector(".albums__wrapper");

  allAlbums.classList += " loading"; // albums is still being fetched. display loading state
  if (!albums) {
    // if albums doesn't exist, await getAlbums() to access the promise and set it to albums.
    albums = await getAlbums();
  }
  allAlbums.classList.remove("loading"); // removes loading animation after dataset loads

  if (filter === "LOW_TO_HIGH") {
    albums.sort((a, b) => a.rating - b.rating);
  } else if (filter === "HIGH_TO_LOW") {
    albums.sort((a, b) => b.rating - a.rating);
  } else if (filter === "ARTIST") {
    albums.sort((a, b) => a.artist.localeCompare(b.artist));
  } else if (filter === "YEAR") {
    albums.sort((a, b) => a.year - b.year);
  } else if (filter === "GENRE") {
    albums.sort((a, b) => {
      const genreA = Array.isArray(a.genre) ? a.genre.join(", ") : a.genre;
      const genreB = Array.isArray(b.genre) ? b.genre.join(", ") : b.genre;
  
      return genreA.localeCompare(genreB);
    });
  }
  

  const albumsHtml = albums
    .map((album) => {
      const albumGenre = Array.isArray(album.genre)
        ? album.genre.join(", ")
        : album.genre;
      // this ternary operator checks if the genre is an array or not.
      // if it is, it will combine the array elements into one string.

      return `<div class="album__card">
      <div class="album__card--content">
        <h2>${album.album}</h2>
        <img src="${album.cover}" alt="Album Cover" />
        <h3>${album.artist}</h3>
        <ul class="album__card--info">
          <li class="card__info--item"><i>(${album.year})</i></li>
          <li class="card__info--item">${albumGenre}</li>
          <li class="card__info--item">
            ${ratingsHtml(album.rating)} 
          </li>
        </ul>
      </div>
    </div>`;
    })
    .join(""); // joins the array into one string, which also removes commas

  albumsWrapper.innerHTML = albumsHtml;
}

function filterAlbums(e) {
  // onchange
  renderAlbums(e.target.value);
}

function ratingsHtml(rating) {
  let ratingHtml = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    // loop stops at the rating rounded down to the nearest integer.
    ratingHtml += '<i class="fas fa-star"></i>';
  }
  if (!Number.isInteger(rating)) {
    // if the rating is NOT an integer, like a decimal.
    ratingHtml += '<i class="fas fa-star-half-alt"></i>';
  }
  return ratingHtml;
}

function getRandomLyric(albums) {
  let allLyrics = albums.reduce((acc, album) => {
    // goes through every lyric in the array
    if (Array.isArray(album.lyrics)) {
      // checks if lyrics is an array, since some aren't.
      acc.push(...album.lyrics);
    } else if (typeof album.lyrics === "string") {
      acc.push(album.lyrics);
    }
    return acc;
  }, []);

  const randomIndex = Math.floor(Math.random() * allLyrics.length);
  return allLyrics[randomIndex];
}

async function lyricAlert() {
  // onclick
  if (!albums) {
    albums = await getAlbums();
  }

  let randomLyric = getRandomLyric(albums);
  alert(randomLyric);
}

setTimeout(() => {
  renderAlbums();
});

// make onclick/onchange functions global, since i am using type="module" in my html
window.filterAlbums = filterAlbums;
window.lyricAlert = lyricAlert;
