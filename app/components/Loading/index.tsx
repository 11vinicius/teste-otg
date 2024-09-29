
import { Icon } from '@iconify/react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 bg-black opacity-80">
            <Icon icon="line-md:coffee-half-empty-twotone-loop" className='w-96 h-96 text-white ' />
        </div>
    );
}


  export default Loading;
  