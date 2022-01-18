const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../app");

describe("Movie App API Test Suite", () => {
  it("should get a healthy message", () => {
    return supertest(app).get("/ping").expect(200, "healthy");
  });
  it("should return 200 when /search-movies endpoint is query", () => {
    return supertest(app).get("/search-movies").expect(200);
  });
  it("should return 200 when /movie-details/:imdb_id is queried", () => {
    const mockImbdId = "tt2935510";
    return supertest(app).get(`/movie-details/${mockImbdId}`).expect(200);
  });
  it("should return 404 when /movie-details/:imdb_id is queried and imdbId is not provided", () => {
    return supertest(app).get(`/movie-details`).expect(404);
  });
  it("should return 200 when /movie-images/:imdb_id is queried", () => {
    const mockImbdId = "tt2935510";
    return supertest(app).get(`/movie-images/${mockImbdId}`).expect(200);
  });
  it("should return 404 when /movie-images/:imdbId is queried and imdbId is not provided", () => {
    return supertest(app).get(`/movie-images`).expect(404);
  });
});
