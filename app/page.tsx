"use client"; 
import { useEffect, useState } from 'react';
import { Post } from './posts.model';
import Card from './components/Card';
import api from './shared/baseService';


export default function Home() {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(()=>{
    const get = async ()=>{
       const res = await api.get(`/posts?_page=${1}&_limit=${10}`)
       const data = res.data
       setPosts(data) 
    }
    
    get()
  },[])

  return (
    <main>
        <div className="m-14 min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 my-24">
          {posts.map((item, index)=>(
            <Card key={index} post={item} />
          ))}
        </div>
    </main>
  )
}
