'use client';

import './PostResume.css';
import React from 'react';
import { Lora } from 'next/font/google';
import { Post } from '@/app/interfaces/post';

const font = Lora({ subsets: ['latin'] })

interface PostResumeProps {
  post: Post;
}

const PostResume: React.FC<PostResumeProps> = ({ post }) => {
  return (
    <article className="post-resume">
      <div className="post-resume__content">
        <div className="profile">
          <img
            src={post.user.picture}
            className="profile__image"
          />
          <a href="/" className="profile__names">
            <cite className="profile__username">{post.user.username}</cite>
            <p className="profile__profesion">{post.user.profesion}</p>
          </a>
        </div>
        <a className="text-black-title text-lg font-bold line-clamp-1" href="/">
          {post.title}
        </a>
        <p className={
          font.className +
          " text-black-opacity-70 text-[15px] font-light line-clamp-3"
        }>
          {post.description}
        </p>
        <div className="flex items-center gap-3 text-sm mt-2">
          <span className="text-black-opacity-50">{post.publicationDate}</span>
          <span
            className="text-black-opacity-70 bg-black-opacity-10 rounded-full px-2 py-[2px]"
          >
            {post.category}
          </span>
        </div>
      </div>
      <a className="post-resume__image" href="/">
        <img
          src={post.banner}
          className="w-full h-full object-cover"
        />
      </a>
    </article>
  );
}

export default PostResume;