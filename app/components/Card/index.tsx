import { Post } from '@/app/posts.model';
import Link from 'next/link';


const Card: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link href={`${post.id}`}>
      <div className="border h-60 border-white/20 flex hover:bg-white/10 flex-col justify-center p-8 rounded ">
        <div className='text-center border-b border-b-white text-sm md:text-xl font-semibold text-offwhite mb-4 '>{post.title}</div>
        <div className='text-center text-sm  font-semibold text-offwhite'>{post.summary}</div>
      </div>
    </Link>

  );
};

export default Card;

