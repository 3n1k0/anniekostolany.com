import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import {
  Button,
  ButtonContainer,
  GoToTopButton,
  DoubleImageContainer,
  MainContainer,
  Gallery,
  SliderImage,
  CarouselContainer,
} from "../config/Ui";
import { NavLink } from "react-router-dom";
import Image from "../components/Image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class Wedding extends React.Component {
  render() {
    return (
      <div className="Wedding">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Book your wedding photographer in the Netherlands</title>
          <meta
            name="description"
            content="Wedding photography in the Netherlands"
          />
        </Helmet>


        <MainContainer>
          <p>
            It might seem cliché, but it’s still true; a picture paints a
            thousand words. What makes photography such a special medium is its
            ability to distil the essence of a magical day into a single image –
            and on no day is this more important than that of your wedding. As a
            gathering of friends and family celebrating the love between two
            special people, your wedding will be filled with the moments that
            make life worth living, from the biggest events to the sweetest
            little things. A smile, a hug, the look on your fathers face, or
            maybe your mom helping you to get dressed; all these beautiful
            instants may only last a second, but their memories can last a
            lifetime with the right picture.
          </p>
          <p>
            Perfectly catching such precious memories on camera is no easy task
            though, meaning your wedding photographer will be one of the most
            important and valuable suppliers that you book. Having organized my
            own wedding three years ago, I also know that from the moment the
            blushing bride/groom to be say “yes”, there are a host of other
            crucial matters to attend to. <br /> Rest assured if you choose me
            to document your special day, photography is one thing you won’t
            have to worry about anymore.
            <br /> As an accomplished international portrait, wedding and
            lifestyle photographer, I can promise you to give all my
            professional knowledge, my artistic skills and the best equipment
            available to capture the most significant moments of your big day.
          </p>
          <Image src="yalda-en-wesley/Yalda%20en%20Wesley-64.jpg" alt=" " />

          <p>
            While I am currently based in the Netherlands, I am available
            worldwide, so if my services sound right for you, please feel free
            to reach out and send me a message. We can meet for a coffee, or we
            can discuss your ideas via Skype, phone or email.
          </p>

          <p>Click the images to see the full galleries.</p>
          <Gallery isHover={true}>
            <NavLink to={"/blog"}>
              <Image src="yalda-en-wesley/Yalda%20en%20Wesley-91.jpg" alt=" " />
            </NavLink>

            <NavLink to={"/wedding"}>
              <Image
                src="tania-and-victor/Tania+Victor%20wedding-121.jpg"
                alt=" "
              />
            </NavLink>

            <NavLink to={"/solo-travelers"}>
              <Image src="githa-en-allard/wedding-23.jpg" alt=" " />
            </NavLink>
          </Gallery>
          <ButtonContainer>
            <Button to={"/contact"}> Request </Button>
            <GoToTopButton
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Go to top{" "}
            </GoToTopButton>
          </ButtonContainer>
        </MainContainer>
      </div>
    );
  }
}

export default Wedding;
