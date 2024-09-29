'use client';
import { useEffect, useState } from 'react';
import { Post } from './posts.model';
import api from './shared/baseService';
import Card from './components/Card';

export default function Home() {

  const [posts, setPosts] = useState<Post[]>([]);


  useEffect(() => {
    const get = async () => {
      const res = await api.get(`/posts?_page=${1}&_limit=${10}`);
      setPosts((prev) => [...prev, ...res.data]);
    };

    get();
  }, []);



  return (
    <main>
      <div className='mx-16 my-8 text-white font-semibold text-xl md:text-6xl'>Posts</div>
      <div className="mx-14 mb-14 min-h-screen grid grid-cols-1 md:grid-cols-3  gap-4 ">
        {posts.map((item, index) => (
          <Card key={index} post={item} />
        ))}
      </div>
    </main>
  );
}
