const axios = require('axios');

exports.getAllAnime = async () => {  
  try {
    const numberOfRequests = 10;
    let offset = 0;
    let auxData = [];
    for(let i = 0; i < numberOfRequests; i++) {
      const info = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=$${offset}`).then(response => response.json()).then(data => data.data);
      const api_aux = [];
      info.map((anime) => {
        const name = anime.attributes.titles.en ? anime.attributes.titles.en : anime.attributes.titles.en_jp;
        const userCount = anime.attributes.userCount;
        const synopsis = anime.attributes.synopsis;
        const averageRating = anime.attributes.averageRating;
        const favoritesCount = anime.attributes.favoritesCount;
        const startDate = anime.attributes.startDate;
        const endDate = anime.attributes.endDate;
        const popularityRank = anime.attributes.popularityRank;
        const ratingRank = anime.attributes.ratingRank;
        const status = anime.attributes.status;
        const posterImage = anime.attributes.posterImage.original; // va original
        const coverImage = anime.attributes.coverImage ? anime.attributes.coverImage.original : null; // va original
        const episodeCount = anime.attributes.episodeCount;
        const episodeLength = anime.attributes.episodeLength;
        const youtubeVideoId = anime.attributes.youtubeVideoId;
        const showType = anime.attributes.showType;
        const ageRatingGuide = anime.attributes.ageRatingGuide;

        api_aux.push({
          name, 
          userCount, 
          synopsis, 
          averageRating,
          favoritesCount, 
          startDate, 
          endDate,
          popularityRank,
          ratingRank,
          status,
          posterImage,
          coverImage,
          episodeCount,
          episodeLength,
          youtubeVideoId,
          showType,
          ageRatingGuide
        });
      });
      auxData = [...auxData, ...api_aux];
      offset += 20;
    }

    return auxData;
  } catch (error) {
    return "ESTO ES ERROR UTILS " + error.message;
  }
}

exports.getAllGenres = async (limitOfGenres = 62) => {
  try {
    let genres = [];
  
    let apiData = await axios.get(`https://kitsu.io/api/edge/genres?page[limit]=${limitOfGenres}&page[offset]=0`);
    apiData = apiData.data.data;
  
    genres = apiData.map(genre => {
        return {id: genre.id, name: genre.attributes.name}
    })
  
    return genres
  } catch (error) {
    return error.message;
  }
}
// getApiData().then(info => console.log(info));