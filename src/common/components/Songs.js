const Songs = [
    {
      id: 1,
      songName: "Unholy",
      artist: "Sam Smith",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/3/38/Sam_Smith_and_Kim_Petras_-_Unholy.png?20220923153114",
    },
    {
      id: 2,
      songName: "Anti hero",
      artist: "Taylor Swift",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/b/b9/Taylor_Swift_-_Anti-Hero.png",
    },
    {
      id: 3,
      songName: "Rick flex",
      artist: "Drake",
      imgSrc:
        "data:image/jpeg;base64,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",
    },
    {
      id: 4,
      songName: "La Bachata",
      artist: "Otnicka",
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b273c9f744b0d62da795bc21d04a ",
    },
    {
      id: 5,
      songName: "I'm good",
      artist: "David",
      imgSrc:
        "https://m.media-amazon.com/images/M/MV5BNjA2ZTljYjUtZTg5Yy00MDg0LTk3NTItNjllOWNjZWI2OTczXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 6,
      songName: "As it was",
      artist: "Harry Styles",
      imgSrc:
        "https://images.genius.com/d98059a0f2afd10b04b912355c0e8ceb.1000x1000x1.png",
    },
    {
      id: 7,
      songName: "Quevedo",
      artist: "Bizrrap",
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b2731630dd349221a35ce03a0ccf",
    },
    {
      id: 8,
      songName: "Made you look",
      artist: "Meghan Trainor",
      imgSrc:
        "https://ih1.redbubble.net/image.4377649425.0048/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u1.jpg",
    },
    {
      id: 9,
      songName: "Hey Mama",
      artist: "David Guetta",
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b27322f21ef4e9da48c31170a418",
    },
    {
      id: 10,
      songName: "Miss You",
      artist: "Oliver tree",
      imgSrc:
        "https://i1.sndcdn.com/artworks-WbrlIdsV7ZsTU0RP-dNJrTQ-t500x500.jpg",
    },
  ];
  
export { Songs };