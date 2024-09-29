'use client';
import { useEffect, useState } from 'react';
import { Post } from '../posts.model';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import api from '../shared/baseService';


export default function Show({ params }: { params: { id: string } }) {

  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const get = async () => {
      const res = await api.get(`/posts/${params.id}`);
      const data = res.data;
      setPost(data);
    };

    get();
  }, []);

  return (
    <main>
      <div className="p-8 h-screen w-full flex items-center">
        <div className="flex flex-col w-12/12 md:w-6/12 mx-auto my-a">
          <h1 className='text-white text-xl text-center md:text-4xl border-b border-b-w font-bold'>
            {post?.title}
          </h1>
          <p className='text-white text-center my-8'>
            {post?.content}
            {post?.summary}
          </p>

          <Link href="/" className="bg-bluish/20 flex  items-center hover:bg-bluish/40 w-6/12 text-white m-auto p-4 rounded-xl">
            <Icon icon="ep:back" className="text-white text-2xl" />
            <span className="mx-auto">Voltar</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
