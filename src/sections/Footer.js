import React from 'react'
import styled from 'styled-components'
import img from '../assets/Svgs/star_white_48dp.svg'
import { motion } from 'framer-motion'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    margin: 5rem auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};

    position: relative;
`

const LogoComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 10vw;
        height: auto;
    }

    h3{
        font-size: ${props => props.theme.fontxl};
        font-family: 'Kauchan Script'
    }
`

const FooterComponent = styled(motion.footer)`
    width: 80vw;

    ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 4rem;
        padding: 0 1rem;
        border-top: 1px solid ${props => props.theme.text};
        border-bottom: 1px solid ${props => props.theme.text};
    }

    li{
        padding: 2rem;
        font-size: ${props => props.theme.fontlg};
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover{
            transform: scale(1.1);
        }
    }
`

const Bottom = styled.div`
    padding: 0.5rem 0;
    margin: 0 4rem;
    font-size: ${props => props.theme.fontlg};

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Footer = () => {

    const {scroll} = useLocomotiveScroll();

    const handleScroll = (id) => {
        let elem = document.querySelector(id);

        scroll.scrollTo(elem, {
            offset: '0',
            duration: '1500',
            easing: [0.25,0.0,0.35,1.0],
        })
    }

  return (
    <Section>
        <LogoComponent>
            <img 
            data-scroll data-scroll-speed="2"
            
            src={img} alt="logo" />
            <h3 data-scroll data-scroll-speed="-1">Only Good Vibes</h3>
        </LogoComponent>
        <FooterComponent
        initial={{y: "-400px"}}
        whileInView={{y:0}}
        viewport={{once: false}}
        transition={{
            duration: 1.5
        }}
        >
            <ul>
                <li onClick={() => handleScroll('#home')}>home</li>
                <li onClick={() => handleScroll('.about')}>about</li>
                <li onClick={() => handleScroll('#shop')}>shop</li>
                <li onClick={() => handleScroll('#new-arrival')}>new arrival</li>
                <li>
                    <a href="http://google.com" target="_blank" rel="noreferrer">look book</a>
                </li>
                <li>
                    <a href="http://google.com" target="_blank" rel="noreferrer">reviews</a>
                </li>
            </ul>
            <Bottom>
                <span
                data-scroll data-scroll-speed="2" data-scroll-direction="horizontal"
                >&copy; {new Date().getFullYear()}.&nbsp; All Rights Reserved.</span>
                <span
                data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
                >Made with &hearts; by Ann</span>
            </Bottom>
        </FooterComponent>
    </Section>
  )
}

export default Footer