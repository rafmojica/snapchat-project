export function getAlbums() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          album: "Kid A",
          cover: "./assets/Kid A.jpg",
          artist: "Radiohead",
          year: "2000",
          genre: ["Art Rock", "Electronic"],
          lyrics: [
            "You can try the best you can. The best you can is good enough",
            "I'm not here. This isn't happening",
          ],
          rating: 5,
        },
        {
          id: 2,
          album: "Loveless",
          cover: "./assets/Loveless.jpg",
          artist: "my bloody valentine",
          year: "1991",
          genre: ["Shoegaze", "Noise Pop"],
          lyrics: [
            "When I look at you. I don't know what's real.",
            "Pretty boys with their sunshine faces, carrying their heads down",
            "Sleep as a pillow, comfort there. Where she won't dare anywhere. Look in the mirror, she's not there. Where she won't care somewhere",
          ],
          rating: 4.5,
        },
        {
          id: 3,
          album: "Heaven or Las Vegas",
          cover: "./assets/Heaven or Las Vegas.jpg",
          artist: "Cocteau Twins",
          year: "1990",
          genre: "Dream Pop", // purposely made some items in my dataset a string/array.
          lyrics:
            "Singing on the famous street. I want to love a boy that won't love me",
          rating: 4,
        },
        {
          id: 4,
          album: "The Queen Is Dead",
          cover: "./assets/The Queen Is Dead.jpg",
          artist: "The Smiths",
          year: "1986",
          genre: ["Jangle Pop", "Indie Pop"],
          lyrics: [
            "And if a double decker bus crashes into us. To die by your side, is such a heavenly way to die.",
            "Oh mother I can feel the soil falling over my head.",
          ],
          rating: 3.7,
        },
        {
          id: 5,
          album: "Wish You Were Here",
          cover: "./assets/Wish You Were Here.png",
          artist: "Pink Floyd",
          year: "1975",
          genre: ["Progressive Rock", "Art Rock"],
          lyrics:
            "How I wish, how I wish you were here. We're just two lost souls swimming in a fish bowl",
          rating: 4.3,
        },
        {
          id: 6,
          album: "IGOR",
          cover: "./assets/IGOR.jpg",
          artist: "Tyler, The Creator",
          year: "2019",
          genre: ["Neo Soul", "Alternative R&B", "Experimental Hip Hop"],
          lyrics: [
            "I hate wasted potential. That shit crushes your spirit, it really does it crushes your soul.",
            "Thank you for the love. Thank you for the joy. But I don't ever wanna fall in love again.",
          ],
          rating: 4.2,
        },
        {
          id: 7,
          album: "In Rainbows",
          cover: "./assets/In Rainbows.jpg",
          artist: "Radiohead",
          year: "2007",
          genre: ["Art Rock", "Alternative Rock"],
          lyrics: [
            "You're all I need.",
            "In the deepest ocean. The bottom of the sea. Your eyes. They turn me.",
          ],
          rating: 4.5,
        },
        {
          id: 7,
          album: "OK Computer",
          cover: "./assets/OK Computer.jpg",
          artist: "Radiohead",
          year: "1997",
          genre: ["Art Rock", "Alternative Rock"],
          lyrics: [
            "In an interstellar burst, I am back to save the universe.",
            "No alarms and no surprises.",
          ],
          rating: 4.7,
        },
        {
          id: 8,
          album: "To Pimp A Butterfly",
          cover: "./assets/To Pimp A Butterfly.jpg",
          artist: "Kendrick Lamar",
          year: "2015",
          genre: ["Conscious Hip Hop", "West Coast Hip Hop", "Jazz Rap"],
          lyrics: [
            "I know how people work, I know the price of life, I’m knowin’ how much it’s worth. I know what I know and I know it well not to ever forget, until I realized I didn’t know shit. The day I came home.",
            "I remember you was conflicted.",
            "Alls my life I has to fight",
          ],
          rating: 5,
        },
        {
          id: 9,
          album: "good kid, m.A.A.d city",
          cover: "./assets/GKMC.jpg",
          artist: "Kendrick Lamar",
          year: "2012",
          genre: ["Conscious Hip Hop", "West Coast Hip Hop"],
          lyrics: [
            "Martin had a dream. Kendrick had a dream.",
            "A dollar might just fuck your main bitch, that's just how I feel.",
          ],
          rating: 4.4,
        },
        {
          id: 10,
          album: "Blonde",
          cover: "./assets/Blonde.jpg",
          artist: "Frank Ocean",
          year: "2016",
          genre: ["Alternative R&B", "Art Pop", "Neo-Soul"],
          lyrics: [
            "That's the way every day goes, every time we've no control. If the sky is pink and white. If the ground is black and yellow.",
            "I thought that I was dreaming when you said you loved me.",
          ],
          rating: 4,
        },
        {
          id: 11,
          album: "Unknown Pleasures",
          cover: "./assets/Unknown Pleasures.jpg",
          artist: "Joy Division",
          year: "1979",
          genre: "Post-Punk",
          lyrics: "I've lost control again.",
          rating: 4,
        },
        {
          id: 12,
          album: "My Beautiful Dark Twisted Fantasy",
          cover: "./assets/MBDTF.jpg",
          artist: "Kanye West",
          year: "2010",
          genre: ["Pop Rap", "Hip Hop"],
          lyrics: "And I always find, yeah I always find something wrong.",
          rating: 4.1,
        },
        {
          id: 13,
          album: "Abbey Road",
          cover: "./assets/Abbey Road.jpg",
          artist: "The Beatles",
          year: "1969",
          genre: "Pop Rock",
          lyrics: [
            "You're asking me, will my love grow? I don't know.",
            "Something in the way she moves attracts me like no other lover.",
          ],
          rating: 5,
        },
        {
          id: 14,
          album: "Aja",
          cover: "./assets/Aja.jpg",
          artist: "Steely Dan",
          year: "1977",
          genre: ["Jazz-Rock", "Yacht Rock", "Pop Rock"],
          lyrics: null,
          rating: 4,
        },
        {
          id: 15,
          album: "channel ORANGE",
          cover: "./assets/channel ORANGE.jpg",
          artist: "Frank Ocean",
          year: "2012",
          genre: ["Alternative R&B", "Contemporary R&B"],
          lyrics: [
            "She's working on the pyramids tonight.",
            "Super rich kids with nothing but loose ends. Super rich kids with nothing but fake friends.",
          ],
          rating: 4,
        },
        {
          id: 16,
          album: "Dirt",
          cover: "./assets/Dirt.jpg",
          artist: "Alice in Chains",
          year: "1992",
          genre: ["Grunge", "Alternative Metal"],
          lyrics: null,
          rating: 3.9,
        },
        {
          id: 17,
          album: "Twin Fantasy",
          cover: "./assets/Twin Fantasy.jpg",
          artist: "Car Seat Headrest",
          year: "2018",
          genre: "Indie Rock",
          lyrics: "My boy, we don't see each other much.",
          rating: 3.9,
        },
        {
          id: 18,
          album: "The Glow Pt. 2",
          cover: "./assets/TGP2.jpg",
          artist: "The Microphones",
          year: "2001",
          genre: ["Indie Folk", "Psychedelic Folk", "Slacker Rock"],
          lyrics: null,
          rating: 4,
        },
        {
          id: 19,
          album: "In the Aeroplane Over the Sea",
          cover: "./assets/ITAOTS.jpg",
          artist: "Neutral Milk Hotel",
          year: "1998",
          genre: ["Indie Folk", "Indie Rock"],
          lyrics: null,
          rating: 4.1,
        },
        {
          id: 20,
          album: "Girl With Fish",
          cover: "./assets/Girl With Fish.jpg",
          artist: "feeble little horse",
          year: "2023",
          genre: ["Noise Pop", "Slacker Rock", "Indie Pop"],
          lyrics: "Do you wanna be in my pocket?",
          rating: 3.8,
        },
        {
          id: 21,
          album: "So Tonight That I Might See",
          cover: "./assets/STTIMS.jpg",
          artist: "Mazzy Star",
          year: "1993",
          genre: ["Dream Pop", "Neo-Psychadelia"],
          lyrics: "I wanna hold the hand inside you.",
          rating: 3,
        },
        {
          id: 22,
          album: "Pink Tape",
          cover: "./assets/Pink Tape.jpg",
          artist: "Lil Uzi Vert",
          year: "2023",
          genre: ["Trap", "Pop Rap"],
          lyrics: null,
          rating: 0.5,
        },
        {
          id: 23,
          album: "Astroworld",
          cover: "./assets/Astroworld.jpg",
          artist: "Travis Scott",
          year: "2018",
          genre: ["Trap", "Pop Rap", "Southern Hip Hop"],
          lyrics: "Checks over stripes.",
          rating: 2.5,
        },
        {
          id: 24,
          album: "The Velvet Underground & Nico",
          cover: "./assets/TVU&N.png",
          artist: "The Velvet Underground",
          year: "1967",
          genre: ["Art Rock", "Experimental Rock"],
          lyrics: null,
          rating: 4,
        },
        {
          id: 25,
          album: "Squeeze",
          cover: "./assets/Squeeze.jpg",
          artist: "The Velvet Underground",
          year: "1973",
          genre: "Pop Rock",
          lyrics: null,
          rating: 1,
        },
      ]);
    }, 1000);
  });
}
