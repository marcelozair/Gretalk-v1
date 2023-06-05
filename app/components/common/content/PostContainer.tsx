'use client'

import React from 'react';

interface PostContainerProps {
  children: React.ReactNode;
}

const PostContainer: React.FC<PostContainerProps> = ({ children }) => {
  return (
    <div className="xl:w-[800px] md:w-[90%] w-[95%] mx-auto">
      {children}
    </div>
  );
}

export default PostContainer;