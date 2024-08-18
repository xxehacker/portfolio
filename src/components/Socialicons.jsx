import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Socialicons = () => {
  const links = [
    { 
      domain: 'https://www.x.com/',
      path: 'xxehacker0x1',
    },
    { 
      domain: 'https://www.instagram.com/',
      path: 'mridupawan__0x1',
    },
    { 
      domain: 'https://www.github.com/',
      path: 'xxehacker',
    },
    { 
      domain: 'https://www.medium.com/',
      path: '@xxehacker',
    },
    { 
      domain: 'https://in.linkedin.com/in/',
      path: 'mridupawan-bordoloi-xxehacker',
    }
  ];



  return (
    <>
      {links.map((link, index) => (
        <SocialIcon 
          key={index}
          url={`${link.domain}${link.path}`}
          bgColor='white'
          fgColor="#FF195B"
          style={{ height: 55, width: 55 }}

        />
      ))}
    </>
  );
};

export default Socialicons;
