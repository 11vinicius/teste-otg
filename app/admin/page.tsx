'use client';
import { Icon } from '@iconify/react';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function Show() {
  const [formData, setFormDate] = useState({
    author: '',
    content: '',
    summary: ''
  });

  const [isError, setError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    if (formData.author == '' && formData.content == '' && formData.summary == '') {
      setError(true);
      return;
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
      <div className='h-screen w-full flex justify-center items-center'>
        <div className="border w-6/12 border-white/20 bg-white/10 flex-col justify-center px-8 py-4 rounded ">

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
                id="author"
                name="author"
                placeholder="Digite seu autor"
                value={formData.author}
                onChange={handleChange}
                className=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='text-white font-semibold'>Texto</label>
              <textarea
                id="content"
                name="content"
                placeholder="Digite seu texto"
                value={formData.content}
                onChange={handleChange}
                rows={5}
                cols={10}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='text-white font-semibold'>Resulmo</label>
              <textarea
                id="summary"
                name="summary"
                placeholder="Digite seu resulmo"
                value={formData.summary}
                rows={5}
                cols={10}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button type='submit' className="bg-bluish/20 flex items-center hover:bg-bluish/40 w-6/12 text-white m-auto p-4 rounded-xl">
              <Icon icon="material-symbols:save-outline" className="text-white text-2xl" />
              <span className="mx-auto">Salvar</span>
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}
