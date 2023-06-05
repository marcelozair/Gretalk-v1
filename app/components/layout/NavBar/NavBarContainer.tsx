'use client'

import React from 'react';

interface NacBarContainerProps {
  children: React.ReactNode;
}

const NacBarContainer: React.FC<NacBarContainerProps> = ({ children }) => {
  return (
    <div className="lg:px-12 px-10 w-full">
      {children}
    </div>
  );
}

export default NacBarContainer;