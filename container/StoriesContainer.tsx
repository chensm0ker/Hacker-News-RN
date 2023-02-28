import React, { useState, useEffect } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";

export const StoriesContainer = () => {

   
    const [storyIds, setStoryIds] = useState([]);
  
    useEffect(() => {
      getStoryIds().then(data => setStoryIds(data));
    },[])

    const shuffle = (array: any[]) => {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }}

      // const data = await Promise.all(storyIds);
      shuffle(storyIds);
      

    return( 
        storyIds.slice(0, 10).map(storyId => <Story storyId={storyId} />)
    )
  
}