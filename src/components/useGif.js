
import React, { useState , useEffect} from 'react'
import axios from 'axios';

const API_KEY = "1hc276w7am7oJ8SVkPO5Yd7eMBIYzeA0";
function useGif(tag) {
    const[gif, setGif]=useState('');
    const[loading, setLoading] = useState('false');

    const randomMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const tagMemeUrl =  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data}= await axios.get(tag ? tagMemeUrl : randomMemeUrl);
        const imageSource = data.data.images.downsized_large.url;
        console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
      }

      useEffect(()=>{
        fetchData();
      },[])
    
    
  return {gif, loading, fetchData};
   

}

export default useGif