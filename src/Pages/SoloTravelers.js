import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import {
  Button,
  ButtonContainer,
  GoToTopButton,
  DoubleImageContainer,
  MainContainer,
  StyledButton,
  ReviewContainer
} from "../config/Ui";
import Image from "../components/Image";

class Travelers extends React.Component {
  render() {
    return (
      <div className="Travelers">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Book your travelphotographer in Amsterdam</title>
          <meta
            name="description"
            content="Travel photography - Amsterdam-based professional photographer"
          />
        </Helmet>

        <MainContainer>
          <p>
            Whether you’re looking to explore the hidden beauty spots of
            Amsterdam, or you’re keen to get to know the nearby gem of Haarlem,
            I can show you a world of fantastical imagery you might otherwise
            have missed, as your guide and photographer.
          </p>
          <DoubleImageContainer data-aos="flip-left">
            <Image src="betsy/betsy-27.jpg" alt=" " />
            <Image src="betsy/betsy-26.jpg" alt=" " />
          </DoubleImageContainer>
          <p>
            When people think of the Netherlands, their imaginations are often
            limited to a few clichés: wooden clogs, windmills, bicycles… you get
            the picture. <br />
            The fact is that Amsterdam’s web of canals, the stunning works of
            Old Masters, unique Delft Blue earthenware, and tulip fields
            stretching as far as the eye can see are just the tip of the
            iceberg.
          </p>
          <Image src="stephanie/stephanie-8.jpg" alt=" " />
          <Image src="mix/DSC_3097.jpg" alt=" " />
          <Image src="mix/wayne-3.jpg" alt=" " />
          <Image src="mix/DSC_3360.jpg" alt=" " />
          <Image src="tresor/tresor-3.jpg" alt=" " />
          <Image src="mix/marina-tulperij-15.jpg" alt=" " />
          <Image src="daria/daria-centraal-7.jpg" alt=" " />
          <Image src="mix/DSC_3193.jpg" alt=" " />

          <Image src="betsy/betsy-1.jpg" alt="Girl in front of windmill" />

          <p>
            <br /> My extensive professional experience means I am able to pay
            attention to detail to pick out the right location, while still
            being able to focus a lot on bringing out your natural emotions to
            catch on camera. <br />
            <br />
            If you are traveling solo, this portrait session is perfect for you,
            providing you with a unique insight into some of the most gorgeous
            photo spots in the Netherlands. Please feel free to get in touch,
            and let’s chat about your ideas!
          </p>
          <ButtonContainer>
            <Button to={"/contact"}> Contact Annie </Button>
          </ButtonContainer>
        </MainContainer>
        <ReviewContainer>
          <div>
            <p>
              "I must say, when I signed up for this experience, I was trying
              really hard to not keep my expectations high..simply because it
              was the first time I was trying something like this and wasn’t
              sure how it would turn out to be. To say that I had an Amazing
              time with Annie would be an understatement! Right from the time I
              met her, she put me at ease with her approachable attitude and
              friendly demeanour...I’m so awkward with any kind of posing but
              Annie changed that! She chatted with me throughout so that I got
              comfortable around her and getting photographed in general. She
              has such an eye for detail - we ended up using my pretty little
              cupcake and camera as a prop for the shoot..Annie pays a lot of
              attention to foreground and clicked beautiful pictures of me in
              the best and most picturesque spots of Amsterdam. I was absolutely
              thrilled after such an amazing photoshoot and when she sent me the
              pictures, I was jumping with excitement at how she made me look! I
              got tons of compliments on the pictures. Oh, and also, she is such
              an amazing person to hang out with..I got some very useful
              photography and posing tips for her and also ended up exchanging
              notes on Instagramming over drinks! If you’re in Amsterdam and
              want someone to click beautiful pictures of you, I highly
              recommend her! Thanks Annie for making my trip memorable :)
              <br />- Saumya
            </p>
            <Image
              src="daria/daria-centraal-3.jpg"
              alt="surprise proposal"
            ></Image>
          </div>
          <StyledButton to={"/reviews"}>What other people say</StyledButton>
          <GoToTopButton
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Go to top{" "}
          </GoToTopButton>
        </ReviewContainer>
      </div>
    );
  }
}

export default Travelers;
