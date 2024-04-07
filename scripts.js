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

let albums;

async function renderAlbums(filter) {
    const albumsWrapper = document.querySelector('.all__albums');

    albumsWrapper.classList += ' albums__loading'
    if (!albums) {
        albums = await getAlbums();
    }
    albumsWrapper.classList.remove('albums__loading');
}

setTimeout(() => {
    renderAlbums();
});

// Fake data set 
function getAlbums() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            album: "Kid A",
            cover: "assets/Kid A.jpg",
            artist: "Radiohead",
            year: "2000",
            genre: ["Art Rock", "Electronic"],
            rating: 5,
          },
          {
            id: 2,
            album: "Loveless",
            cover: "assets/Loveless.jpg",
            artist: "my bloody valentine",
            year: "1991",
            genre: ["Shoegaze", "Noise Pop"],
            rating: 4.5,
          },
          {
            id: 3,
            album: "Heaven or Las Vegas",
            cover: "assets/Heaven or Las Vegas.jpg",
            artist: "Cocteau Twins",
            year: "1990",
            genre: "Dream Pop",
            rating: 4,
          },
          {
            id: 4,
            album: "The Queen Is Dead",
            cover: "assets/The Queen Is Dead.jpg",
            artist: "The Smiths",
            year: "1986",
            genre: ["Jangle Pop", "Indie Pop"],
            rating: 4,
          },
          {
            id: 5,
            album: "Wish You Were Here",
            cover: "assets/Wish You Were Here.png",
            artist: "Pink Floyd",
            year: "1975",
            genre: ["Progressive Rock", "Art Rock"],
            rating: 4.5,
          },
        ])
      }, 2000);
    })
  }

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 0) {
            imageURL = FRESH_PRINCE_URL;
        } else if (i == 1) {
            imageURL = CURB_POSTER_URL;
        } else if (i == 2) {
            imageURL = EAST_LOS_HIGH_POSTER_URL;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
