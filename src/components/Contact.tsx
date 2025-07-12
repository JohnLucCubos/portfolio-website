// src/components/Contact.tsx
import React from 'react';
import Image from "next/image";

interface ContactProps {
    src: string;
    alt: string;
    link: string;
    username: string;
}

const Contact: React.FC<ContactProps> = ({ src, alt, link, username }) => {
    return (
        <div className='inline-flex text-center'>
            <Image
                src={src}
                alt={alt}
                width={50}
                height={50}
                />
            <p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {username}
                </a>
            </p>
        </div>
    );
};

export default Contact;