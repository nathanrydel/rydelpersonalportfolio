import { useEffect, useState } from 'react';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
          </h1>
          <p>
            I'm an ambitious developer looking for a role in growing company or startup that offers to the opportunity to grow my skills and
            work with the latest technologies and stacks on challenging and diverse projects.
          </p>
          <p align='LEFT'>
            I'm quietly confident, naturally curious, and perpetually working on leveling up my skills on both the front-end and back-end.
          </p>
        </div>

        <div className='cube-cont'>
          <div className='spinningcube'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default About;
