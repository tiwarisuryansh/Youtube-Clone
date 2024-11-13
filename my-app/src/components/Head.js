import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "./constant";

const Head = () => {
  const[searchQuery,setSearchQuery]=useState("");
  const[suggestions,setSuggestions]=useState([]);
  
  useEffect(()=>{
    
    const timer=setTimeout(()=>getSearchSuggestions(),200);
    return ()=>{
      clearTimeout(timer);
    };
  },[searchQuery]);

  const getSearchSuggestions=async()=>{
    console.log("API CALL-" + searchQuery)
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
   setSuggestions(json[1]);
   
  };

  
  return (
    
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img 
       
        className="h-12" alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
        <a href="/">
        <img className="h-12 mx-2" alt="Youtube" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqpDAlNBhTKmnIcY99fIUZTBjybFasao-8Q&s"/>
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
        <input  className="w-1/2 border border-gray-400 p-2 rounded-l-full"type="text" 
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
        </div>
        <div>
          <ul className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg">
            {suggestions.map((s)=>(
              <li ley={s} className="py-2 shadow-srm hover:bg-gray-100">{s}</li>
            ))}
     
          </ul>
        </div>
      </div>
      <div className="col-apn-1">
        <img className="h-8" alt="usericon" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/>
      </div>
    </div>
  );
};

export default Head;
