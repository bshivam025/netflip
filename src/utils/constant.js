const hostbaseUrl = process.env.REACT_APP_HOST_BASE_URL;
export const NETFLIX_LOGO = "https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_small.jpg";
export const NETFLIX_HEADER = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const DEFAULT_AVATAR = "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg";

export const TMDB_APIS = {
  get_now_playing_movies: hostbaseUrl+"api/movies/now-playing",
  get_movie_video : hostbaseUrl + "api/movies/fetch-movie-video/" ,
  get_popular_movies: hostbaseUrl+"api/movies/popular",
  get_top_rated_movies: hostbaseUrl+"api/movies/top-rated",
  get_search_result: hostbaseUrl+"api/movies/fetch-movie-by-search/",
  get_movie_by_id: hostbaseUrl+"api/movies/fetch-movie-by-id/",
  get_similar_movies: hostbaseUrl + "api/movies/fetch-similar-movie/"

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