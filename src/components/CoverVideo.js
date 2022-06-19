import React from 'react'
import styled from 'styled-components'
import video from '../assets/Walking Girl.mp4'
import video2 from '../assets/Ink Drop 2.mp4'
import { motion } from 'framer-motion'



const VideoContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;

    video{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    .video{
        position: absolute;
        top: 0;
        left: 0;
        mix-blend-mode: screen;
        filter: brightness(2);

        @media (max-width: 48em){
            object-position: center 10%;
        }
    }
        @media (max-width: 30em){
            object-position: center 50%;
        }
`

const DarkCover = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: ${props => `rgba(${props => props.theme.bodyRgba}, 0.9)`};
`

const Title = styled(motion.h1)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.text};

    div{
        display: flex;
        flex-direction: row;
    }

    h1{
        font-family: 'Kaushan Script';
        font-size: ${props => props.theme.fontxxxl};
        text-shadow: 1px 1px 1px ${props => props.theme.body};

        @media (max-width: 30em){
            margin-top: 65%;
            font-size: ${props => props.theme.fontxxl};
        }
    }

    h2{
        font-family: 'Sirin Stencil';
        font-size: ${props => props.theme.fontlg};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
        font-weight: 300;
        text-transform: capitalize;

        @media (max-width: 30em){
            font-size: ${props => props.theme.fonts};
            margin-top: -4.5rem;
        }
    }
`

const container = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,

        transition: {
            delay: 2.5,
            duration: 5,
            ease: 'easeInOut',
        }
    },
}



const CoverVideo = () => {
  return (
    <VideoContainer>
    <DarkCover />
    <Title variants={container} initial='hidden' animate='show'>
        <div>
            <h1  data-scroll data-scroll-delay='0.15' data-scroll-speed='4'>O</h1>
            <h1 data-scroll data-scroll-delay='0.14' data-scroll-speed='4'>n</h1>
            <h1 data-scroll data-scroll-delay='0.13' data-scroll-speed='4'>l</h1>
            <h1 data-scroll data-scroll-delay='0.12' data-scroll-speed='4'>y</h1>
            <h1 data-scroll data-scroll-delay='0.11' data-scroll-speed='4'>&nbsp;</h1>
            <h1 data-scroll data-scroll-delay='0.10' data-scroll-speed='4'>G</h1>
            <h1 data-scroll data-scroll-delay='0.09' data-scroll-speed='4'>o</h1>
            <h1 data-scroll data-scroll-delay='0.08' data-scroll-speed='4'>o</h1>
            <h1 data-scroll data-scroll-delay='0.07' data-scroll-speed='4'>d</h1>
            <h1 data-scroll data-scroll-delay='0.06' data-scroll-speed='4'>&nbsp;</h1>
            <h1 data-scroll data-scroll-delay='0.05' data-scroll-speed='4'>V</h1>
            <h1 data-scroll data-scroll-delay='0.04' data-scroll-speed='4'>i</h1>
            <h1 data-scroll data-scroll-delay='0.03' data-scroll-speed='4'>b</h1>
            <h1 data-scroll data-scroll-delay='0.02' data-scroll-speed='4'>e</h1>
            <h1  data-scroll data-scroll-delay='0.01' data-scroll-speed='4'>s</h1>
        </div>
        <h2 data-scroll data-scroll-delay='0.08' data-scroll-speed='2'>Inspre. Create. Belive.</h2>
    </Title>
        <video src={video} type='video/mp4' autoPlay muted loop />
        <video className='video' src={video2} type='video/mp4' autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo