import axios from 'axios';
import { useState } from 'react';
import React from 'react';

import Link from 'next/link';



export default function PostButtons({id,
    likesCount:likesCountDefault=0,
    likedByMe:likedByMeDefault = false,
    savedCount:savedCountDefault=0,
    savedByMe: savedByMeDefault = false,
    commentsCount,
    refreshPosts,
    author,
    })
    
    {
    const [likesCount, setLikesCount] = useState(likesCountDefault);
    
    const [likedByMe, setLikedByMe] = useState(likedByMeDefault);

    const [savedCount, setSavedCount] = useState(savedCountDefault);
    const [savedByMe, setSavedByMe] = useState(savedByMeDefault);
    
   

    async function togglelike(){
        const response= await axios.post('/api/like', {id});
        
        if(response.data.liked ){
            setLikesCount(prev=> prev + 1);
            setLikedByMe(true);

    }
        else{
            setLikesCount(prev=> prev - 1);
            setLikedByMe(false);
        }
        if (refreshPosts) refreshPosts();
    }


    async function togglesave(){
        const response= await axios.post('/api/saved', {id});
        
        if(response.data.saved ){
            setSavedCount(prev=> prev + 1);
            setSavedByMe(true);

    }
        else{
            setSavedCount(prev=> prev - 1);
            setSavedByMe(false);
        }
        if (refreshPosts) refreshPosts();
    }

    return (
        <div className="flex justify-between items-center p-2 border-t border-gray-600 pt-6 text-white">

            <button className={(likedByMe?'text-white ml-3 flex text-xl':'text-gray-600 ml-3 flex text-xl ')} onClick={togglelike}>
                <img src={'/swords.png'} className={(likedByMe?'w-7 transition-transform transform hover:scale-130 ':'w-7 transition-transform transform hover:scale-130  filter grayscale')}></img>
                <span className='ml-2 mt-1 '>{likesCount}</span>
            </button>

            <button className="text-xl text-gray-600 flex">
                <img src={'/circular-arrows.png'} className="w-7"></img>
                <span className="ml-3">0</span>
            </button>

            <Link  href={`/${author?.username || "Unknown"}/status/${id}`} className="text-xl text-gray-600 flex  hover: scale-130">
                <   img src={'/manuscript.png'} className="w-7 hover:scale-130"></img>
                <span className="ml-3 ">{commentsCount}</span>
            </Link>

            <button onClick={togglesave} className={(savedByMe?'text-xl text-gray-600 flex mr-3':'text-xl text-gray-600 flex mr-3 filter grayscale')}> 
                <img src={'/bookmark.png'} className="w-7 hover:scale-130"></img>
                <span className="ml-3">{savedCount}</span>
              
            </button>

            

        </div>
    )
}