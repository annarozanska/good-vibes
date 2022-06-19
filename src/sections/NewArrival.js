import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'

import img1 from '../assets/Images/1.webp'
import img2 from '../assets/Images/2.webp'
import img3 from '../assets/Images/3.webp'
import img4 from '../assets/Images/4.webp'



const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
`

const Overlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    height: 90vh;

    border: 3px solid ${props => props.theme.body};
    box-shadow: 0 0 0 3vw ${props => props.theme.text};
    z-index: 11;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Kaushan Script';
    font-weight 300;

    color: ${props => props.theme.body};
    text-shadow: 1px 1px 1px ${props => props.theme.text};
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 11;
`

const Text = styled.div`
    width: 20%;
    font-size: ${props => props.theme.fontlg};
    font-weight 300;
    position: absolute;
    padding: 2rem;
    top: 0;
    right: 0;
    z-index: 11;
`

const Container = styled.div`
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 25vw;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;

    img{
        width: 100%;
        height: auto;
        z-index: 5;
    }
`

const Product = ({img, title = ''}) => {
    return(
        <Item>
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </Item>
    )
}

const NewArrival = () => {

    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
    const ScrollingRef = useRef(null);


    useLayoutEffect(() => {
        let element = ref.current;
        let tl = gsap.timeline();
        let scrollingElement = ScrollingRef.current;
    
    
        setTimeout(() => {
            tl.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: 'bottom+=100% top-=100%',
                    scroller: '.App',
                    scrub: true,
                    pin: true,
                    //markers: true,
                },
                ease: 'none',
            })
           
            tl.fromTo(scrollingElement, 
                {
                    y: '0',
                },
                
                {
                y: '-100%',
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: 'bottom top',
                    scroller: '.App',
                    scrub: true,
                    //markers: true,
                },
                
            })
    
            ScrollTrigger.refresh();
    
        }, 1000)
    
    return () => {
        tl.kill();
        ScrollTrigger.kill();
    };
    }, [])




  return (
    <Section ref={ref} id='new-arrival'>
    <Overlay />
        <Title data--scroll data-scroll-speed="-2" 
        data-scroll-direction="horizontal"
        >New Arrivals</Title>

        <Container ref={ScrollingRef}>
           <Product img={img1} title='xyz' />
           <Product img={img2} title='xyz' />
           <Product img={img3} title='xyz' />
           <Product img={img4} title='xyz' />
        </Container>

        <Text data-scroll data-scroll-speed="-4">
        There is new collection available for cool clothes in all sizes. 
        This collection is a great way to find a new look for you. 
        It offers a variety of cool apparel styles to fit your taste, while you can also find some cool clothes that you can wear everyday.
        <br />
        <br />
        The first line of clothing you will see on this collection is for men. 
        The collection also includes three new styles for women.
        <br />
        <br />
        Give it a try and experience a new look.
        </Text>



    </Section>
  )
}

export default NewArrival