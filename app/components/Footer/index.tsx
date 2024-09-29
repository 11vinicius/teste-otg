

interface ProductType {
  id: number;
  section: string;
  link: string[];
}


const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: ['Home', 'Exchange', 'Features', 'FAQ'],
  }
]

const footer = () => {
  return (
    <div className="w-full ">
      <div className='p-4 border-t border-t-lightblue/30'>
        <h3 className='text-center text-sm md:text-xl text-offwhite'>@2023 - All Rights Reserved by Vinicius Cesar</h3>
      </div>
    </div>
  )
}

export default footer;
