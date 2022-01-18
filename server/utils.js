const Utils = {
  createOption(params) {
    return {
      method: "GET",
      url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
      params: params,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        "x-rapidapi-key": "8276975cdcmshb7c9353e1ec0139p1d2e37jsn8dac47faa8d1",
      },
    };
  },
};

module.exports = Utils;
