import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import useGif from './useGif';
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
   
const API_KEY = "1hc276w7am7oJ8SVkPO5Yd7eMBIYzeA0"
function Tag() {
  const[tag, setTag]= useState('');
//   const [gif, setGif ] = useState('');
// const [loading, setLoading] = useState(false)
   
//   async function fetchData(){
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     const {data}= await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url;
//     console.log(imageSource);
//     setGif(imageSource);
//     setLoading(false);
//   }
//   useEffect(()=>{
//     fetchData();
//   },[])

const{gif, loading, fetchData} =useGif(tag);
   
  return (   
    <div className="bg-blue-500  w-1/2  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[] " >
        <h1 className='text-2xl font-bold mt-[15px]'>RANDOM {tag} GIF</h1>
      

      {
          loading ? (<Spinner/>) : ( <img src={gif} alt="" width="450px"/>)
        
      }
        
      <input type="text" className="w-10/12 rounded-lg mb-[3px] py-2 text-center " onChange={(event)=>{setTag(event.target.value)}} />
           
     
        <button className ="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[15px]" onClick={()=> fetchData()}>

        GENERATE
        </button>

      
    </div>
  )
  
}

export default Tag