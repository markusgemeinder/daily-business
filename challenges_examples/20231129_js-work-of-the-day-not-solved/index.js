const favouriteAlbums = [
  {
    artist: "Kate Bush",
    title: "Hounds Of Love",
    year: 1985,
  },
  {
    artist: "Iron Maiden",
    title: "Seventh Son Of A Seventh Son",
    year: 1985,
  },
  {
    artist: "Joy Division",
    title: "Unknown Pleasures",
    year: 1979,
  },
  {
    artist: "Kraftwerk",
    title: "Die Mensch Maschine",
    year: 1978,
  },
  {
    artist: "Radiohead",
    title: "OK Computer",
    year: 1997,
  },
];

// Ex. 1
// write a function called getAlbumsByDecade

function getAlbumsByDecade(album, number) {}

// that takes two parameters - an array of albums and a number (70, 80 or 90)
// that returns all the albums of the given decade
//
// it might be helpful to write a function called isYearInDecade
// that takes two numbers as parameters - decade and year (e.g. 1983 and 80)
// and returns true if the year belongs to the decade
// and use it inside the filter operation

// Ex. 2
// write a function called getAlbumsWithWordyTitle
// that takes one argument - an array of albums
// an returns all the albums whose title has *three* or more words
// hint: String.prototype.split is your friend!
