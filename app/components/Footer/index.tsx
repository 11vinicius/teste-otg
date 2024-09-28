import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string,
  href: string,
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
    <div className="absolute w-full bottom-0">
      <div className='py-8 px-4 border-t border-t-lightblue/30'>
        <h3 className='text-center text-offwhite'>@2023 - All Rights Reserved by Vinicius Cesar</h3>
      </div>
    </div>
  )
}

export default footer;
