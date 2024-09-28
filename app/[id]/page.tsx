"use client"; 

export default function Show({params}:{params:any}) {

    return (
      <main>
         <h1 className='text-white'>Admin {params.id}</h1>
      </main>
    )
  }
  