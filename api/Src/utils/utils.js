const axios = require('axios');

const getApiData = async () => {  
  const numberOfRequests = 10;
  let offset = 0;
  let auxData = [];
  const generos = [];
  for(let i = 0; i < numberOfRequests; i++) {
    const info = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}`)
    const api_aux = [];
    info.data.data.map((anime) => {
      const id = anime.id;
      const type = anime.type;
      const description = anime.attributes.description;
      const genre = anime.relationships.genres.links.self;
      generos.push({genre});
      api_aux.push({id, type, description});
    });
    
    auxData = [...auxData, ...api_aux];
    offset += 20;
  }
  return generos;
}

exports.getAllGenres = async (limitOfGenres = 62) => {
  let genres = [];

  let apiData = await axios.get(`https://kitsu.io/api/edge/genres?page[limit]=${limitOfGenres}&page[offset]=0`);
  apiData = apiData.data.data;

  genres = apiData.map(genre => {
      return {id: genre.id, name: genre.attributes.name}
  })

  return genres
}
// getApiData().then(info => console.log(info));