import React, { useState } from 'react';
import { device } from './mediaquery'
import styled, { createGlobalStyle } from 'styled-components/macro';
import { fonts } from './config';


const TextBox = styled.div`
margin: 50px auto;
display: flex;
flex-flow: column nowrap;
width: 600px;
`

const TextTitle = styled.div`
margin: 0 auto;
font-family: ${fonts.kacskaringos};
font-size: 3em;
padding-bottom: 20px;
`


const Text = styled.div`
margin: 0 auto;
font-family: ${fonts.mindenmas};
`

export const ImageContainer = styled.div`
width: 900px;
margin: 0 auto;
`
export const Image = styled.img`
width: 900px;
height: 600px;
`

const Img = styled.div`
background: url('https://ucarecdn.com/ebb062f7-cfc1-4f6a-a380-6b64cfc8838b/header.jpg');
width: 50%;
height: 350px;
`

const CardsContainer = styled.div`
display: flex;
width: 60%;
margin: 0 auto;
padding: 100px 0px;
justify-content: flex-start;

`


const CardTitle = styled.div`
text-align: center;
`


const h2 = styled.div`
font-family: ${fonts.focim};
font-size: 1em;
color: grey;
letter-spacing: 2px;
`

const CardInnerContainer = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center; 
line-height: 2;
padding: 0px 50px;
width: 50%;
`

const Button = styled.button`
    border: 2px solid black;
    background: transparent;
    color: black;
    height: 42px;
    width: 101px;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1em;
    padding: 0;
    margin: 0 auto;
    width: 190px;
    margin-top: 35px;
`



const Img3 = styled.div`
/* height: ${({magassag}) => magassag}px; */
background: url('https://ucarecdn.com/ebb062f7-cfc1-4f6a-a380-6b64cfc8838b/header.jpg');
width: 50%;
height: 550px;
`

const Testimonials = styled.div`
display: flex;
flex-flow: column;
align-items: center;
width: 60%;
margin: 0 auto;
`

const Testimonial = styled.div`
padding: 20px;
`


class Home extends React.Component {

    render() {
        return (
            <div className="Home">

                <TextBox>
                    <TextTitle><p>Let’s create magic!</p></TextTitle>
                    <Text><p>Annie Kostolany is a portrait and lifestyle photographer, based in the Netherlands, and available worldwide.
                        Her signature style combines magazine portraiture with a soft and dreamy touch.</p></Text>
                </TextBox>
                <ImageContainer>
                    <Image src='https://ucarecdn.com/ebb062f7-cfc1-4f6a-a380-6b64cfc8838b/header.jpg'></Image>
                    <Image src='https://ucarecdn.com/ebb062f7-cfc1-4f6a-a380-6b64cfc8838b/header.jpg'></Image>
                    <Image src='https://ucarecdn.com/ebb062f7-cfc1-4f6a-a380-6b64cfc8838b/header.jpg'></Image>
                </ImageContainer>

                <CardsContainer>
                    <Img></Img>
                    <CardInnerContainer>
                        <CardTitle><h2>FOR COUPLES AND FAMILIES</h2>
                            <p>We all know that time goes by too fast and before we know it, the kids are all grown up.
Don’t let time pass you by without documenting the most important milestones!</p></CardTitle>
                        <Button>Learn more</Button>
                    </CardInnerContainer>
                </CardsContainer>

                <CardsContainer style={{ flexFlow: "row-reverse"}}>
                    <Img></Img>
                    <CardInnerContainer>
                        <CardTitle><h2>FOR TRAVELERS</h2>
                            <p>Whether you’re looking for travel photos, elegant portraits or something else, my jewel-toned,
                                true to life coloured photography style will ensure you remember your Dutch adventure for years to come, with the perfect set of pictures.</p></CardTitle>
                        <Button>Read more</Button>
                    </CardInnerContainer>
                </CardsContainer>

                <CardsContainer style={{borderTop: "1px solid grey"}}>
                    <Img style={{ height: '500px' }}></Img>
                    <CardInnerContainer>
                        <CardTitle><h2>FASHION</h2>
                            <p>WFashion might change but style is eternal.</p></CardTitle>
                        <Button>See fashion portfolio</Button>
                    </CardInnerContainer>
                </CardsContainer>
                
              
                <Testimonials>    
                <h2>Testimonials</h2>
                        <Testimonial>A friend and I scheduled a joint boudoir shoot with Annie during my visit to Amsterdam, and in addition to having SO MUCH fun that afternoon, the photos ended up being more breath-taking than I ever could have imagined. Annie was terrific to work with, and made us feel comfortable immediately; her cues and tips make posing easy, and her sense of what will look incredible on camera (even if not intuitive to me) is spot on. I can't stop scrolling through my photos. Thank you, Annie!  — Kate Z.</Testimonial>

                        <Testimonial>I worked with Annie two times and both are amazing experiences. Most of beautiful pictures on my instagram is her worked. I dont have sense/idea of how to make good pictures, but i want to have one for my social media. luckily she have the best taste in taking pictures... always love to shoot with her and never disappoint with the result. I will book her again definitely for the fall shoot! — Anna B.</Testimonial>

                        <Testimonial>Annie is such a great person to work with. She really listens to what you want, gives tips and makes you feel very relaxed. Thinking 'bout doing another session with her already!!  — Agatha C.</Testimonial>

                        <Testimonial>Yesterday we had an engagement photoshoot with Annie. Annie recommended us a great place, Zaanse Schans. We have never been in a photoshoot before, but Annie made the whole session really easy and fun. She helped us with the poses and her great personality made the photoshoot even better. Cannot wait to see the photos!! Highly recommended for every couple!!❤️ — Dora N.</Testimonial>

                        <Testimonial>The way Annie works is authentic and simple yet so effective. The whole day was a vibe. When I first saw my photos I was GOBSMACKED!! I enjoyed every minute of the shoot and would do it again 10x over. Thank you Annie for a beautiful experience ❤️ — Amanda C.</Testimonial>

                </Testimonials>


      );



            </div>

        );
    }
}

export default Home