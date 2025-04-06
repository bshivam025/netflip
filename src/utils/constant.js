export const NETFLIX_LOGO = "https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_small.jpg";
export const NETFLIX_HEADER = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const DEFAULT_AVATAR = "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg";
export const TMDB_READ_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2VhNjMzMzI4OWY4N2U3OWFmNmZmOGZjNTZhZDQzZSIsIm5iZiI6MTc0MDQ4NTM3NC4wNTksInN1YiI6IjY3YmRiMmZlZWY0YWUyOWRmYjJkYjZmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7YguNdhAmbEXWPbwLbUomQFy_clh7YcB-IeeKe1gS3E";
export const TMDB_API_KEY = "87ea6333289f87e79af6ff8fc56ad43e";
export const API_OPTIONS_TMDB = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2VhNjMzMzI4OWY4N2U3OWFmNmZmOGZjNTZhZDQzZSIsIm5iZiI6MTc0MDQ4NTM3NC4wNTksInN1YiI6IjY3YmRiMmZlZWY0YWUyOWRmYjJkYjZmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7YguNdhAmbEXWPbwLbUomQFy_clh7YcB-IeeKe1gS3E'
    }
  };
export const TMDB_APIS = {
  get_now_playing_movies: "https://api.themoviedb.org/3/movie/now_playing?page=1",
  get_movie_video : "https://api.themoviedb.org/3/movie/{MOVIE_ID}/videos?",
  get_popular_movies: "https://api.themoviedb.org/3/movie/popular?page=1",
  get_top_rated_movies: "https://api.themoviedb.org/3/movie/top_rated?&page=1",
  get_search_result: "https://api.themoviedb.org/3/search/movie?query=",
  get_movie_by_id: "https://api.themoviedb.org/3/movie/",
  get_similar_movies: "https://api.themoviedb.org/3/movie/{MOVIE_ID}/similar?language=en-US&page=1"

}
export const YT_VIDEO_LINK = 'https://www.youtube.com/embed/{KEY}?&autoplay=1&mute=1';
export const TITLE_MAP = {
  nowPlayingMovies: "NOW PLAYING",
  popularMovies: "Popular Movies",
  topRatedMovies: "Top Rated",
  similarMovies: "Similar Movies",
};
export const TMDB_IMG_CDN = "https://image.tmdb.org/t/p/w500{IMG_HASH}"
export const SEARCH_ICON_IMAGE = "https://www.citypng.com/public/uploads/preview/png-red-search-icon-button-701751694974779jbcfmubmn9.png";