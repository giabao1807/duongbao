import React from 'react'
import Button from './Button';
import Image from 'next/image';

interface BlockCardProps {
    post: {
        id: string;
        slug: string;
        title: string;
        excerpt: string;
        image: string;
    }
}

function BlogCard({post}: BlockCardProps) {
    return (
        <div className="bg-third p-2 pb-5 my-3 flex flex-col items-center">
            <div className="relative w-full h-40">
                <Image src={post.image}
                layout="fill"
                objectFit="cover"
                alt="description of image"
                />
            </div>
                <h1 className='text-lg my-3'>{post.title}</h1>
                <p className="text-center text-sm font-light text-gray-400">{post.excerpt}</p>
                <Button text="Read more"  href={`/posts/${post.slug}`} type={"tertiary"} ></Button>
        </div>
    )
}

export default BlogCard