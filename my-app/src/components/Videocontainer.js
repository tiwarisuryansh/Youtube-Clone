import React, { useEffect, useState } from "react";
import { VIDEO_YOUTUBE_API } from "./constant";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const Videocontainer = () => {
 const [videos,setvideos]=useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    
      const data = await fetch(VIDEO_YOUTUBE_API);
      const json = await data.json();
      console.log(json.items);
      setvideos(json.items)
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video)=>(
        <Link key={video.id} to ={"/watch?v="+video.id}><VideoCards  info ={video}/></Link>
        ))}
    
    </div>
  );
};
export default Videocontainer;