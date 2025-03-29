import React, { useEffect, useState } from 'react'
import { API_OPTIONS_TMDB, TMDB_APIS, YT_VIDEO_LINK } from '../../utils/constant';

const VideoBackground = ({id}) => {
  const [video, setVideo] = useState(null);
  const getMovieById = async () =>{
    let getMovieVideos = await fetch(
        TMDB_APIS.get_movie_video.replace('{MOVIE_ID}', id) ,
         API_OPTIONS_TMDB
    )
    let videos = await getMovieVideos.json();
    let selectedVid = videos[0];
    const filterTrailer = videos.results.filter( (video) => video.type === "Trailer");

    if(filterTrailer.length){
      let officialTrailer = filterTrailer.filter( (video) => video.name === "Official Trailer")
      selectedVid = officialTrailer.length ? officialTrailer[0] : filterTrailer[0];
    }
    setVideo(selectedVid);
  }

    useEffect(()=>{
      getMovieById();
    }, []);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={YT_VIDEO_LINK.replace('{KEY}', video?.key)}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
    
}

export default VideoBackground