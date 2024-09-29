'use client';
import { Icon } from '@iconify/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import api from '../shared/baseService';
import { useRouter } from 'next/navigation';


export default function Show() {
  const [formData, setFormDate] = useState({
    title: '',
    body: '',
  });

  const { push } = useRouter();

  const [isError, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    e.preventDefault();
    const id = Math.random();

    setError(false);
    if (formData.title == '' && formData.body == '') {
      setError(true);
      return;
    }

    const res = await api.post('/posts', {
      id: id,
      userId: id,
      title: formData.title,
      body: formData.body
    });

    if (res.status) {
      push('/');
    }
  };


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormDate({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <main>
      <div className='h-screen w-full flex p-4 justify-center items-center'>
        <div className="border md:w-6/12 w-full border-white/20 bg-white/10 flex-col justify-center p-2 md:px-8 md:py-4 rounded ">

          <h1 className='text-white font-semibold text-3xl'>Criar Post</h1>

          {
            isError &&
            <div className='border text-[#ff0000] border-[#ff0000] bg-[#ff0000]/20 my-4 py-2 px-4'>
              Preencha todos os campos
            </div>
          }

          <form onSubmit={handleSubmit}>
            <div className='flex flex-col mb-4'>
              <label className='text-white font-semibold'>Autor</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Digite seu autor"
                value={formData.title}
                onChange={handleChange}
                className=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='text-white font-semibold'>Texto</label>
              <textarea
                id="body"
                name="body"
                placeholder="Digite seu texto"
                value={formData.body}
                onChange={handleChange}
                rows={5}
                cols={10}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button type='submit' className="bg-bluish/20 flex items-center hover:bg-bluish/40 md:w-6/12 text-white m-auto p-4 rounded-xl">
              <Icon icon="material-symbols:save-outline" className="text-white text-2xl" />
              <span className="mx-auto">Salvar</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
