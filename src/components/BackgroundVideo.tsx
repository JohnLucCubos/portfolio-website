// src/components/BackgroundVideo.tsx
'use client';

import React from 'react';

interface BackgroundVideoProps {
    src: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src }) => {
    return (
        <video
            className="absolute top-0 left-0 w-screen h-[95%] object-cover z-0"
            src={src}
            autoPlay
            muted
            loop
            playsInline
        />
    );
};

export default BackgroundVideo;