import { React, useEffect,useState } from 'react'
import Socialicons from './Socialicons'
import '../styles/home.scss'
import { useRef } from 'react';
import gsap from 'gsap';
import { TypeAnimation } from 'react-type-animation';
import {home} from '../constants'

function Home({ name }) {

  const imageRef = useRef(null);
  const socialsRef = useRef(null);

  // demo 
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 822) {
        setShowAnimation(false);
      } else {
        setShowAnimation(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showAnimation]);



  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        { x: -10 },
        { y: 10, duration: 0.5, repeat: -1, yoyo: true, ease: 'power1.inOut' }
      );
    }
  }, []);


  useEffect(() => {
    if (socialsRef.current) {
      gsap.fromTo(socialsRef.current,
        { x: 10 },
        { y: -10, duration: 0.5, repeat: -1, yoyo: true, ease: 'power1.inOut' }
      );
    }
  }, []);


  return (
    <div className="home">

      <main>

        <div className='left'>
          <div className='heading'>
            <h1>Hi all, <br />I'm {name}</h1>
              {

                showAnimation ? <TypeAnimation
                className="paragraph"
                splitter={(str) => str.split(/(?= )/)}
                sequence={[`${home[0].description}`, 1000, '']}
                speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
                omitDeletionAnimation={true}
                repeat={Infinity}
              /> : <p>{home[0].description}</p>

            }
          </div>
          <div className='socials' ref={socialsRef} >
            <Socialicons />
          </div>
        </div>

        <div className='right'>
          <img ref={imageRef} src={home[0].img} alt="helloImage" />
        </div>

      </main>
    </div>
  )
}

export default Home