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
            have missed, as your guide and photographer.</p>
            <DoubleImageContainer data-aos="flip-left">
              <Image src="betsy/betsy-27.jpg" alt=" " />
              <Image src="betsy/betsy-26.jpg" alt=" " />
            </DoubleImageContainer>
            <p>When people think of the Netherlands, their imaginations are often
            limited to a few clichés: wooden clogs, windmills, bicycles… you get
            the picture. <br />
            The fact is that Amsterdam’s web of canals, the stunning works of
            Old Masters, unique Delft Blue earthenware, and tulip fields
            stretching as far as the eye can see are just the tip of the
            iceberg.
          </p>
          <Image src="stephanie/stephanie-8.jpg" alt=" " />
          <Image src="mix/DSC_3097.jpg" alt=" " />
          <Image src="mix/DSC_3360.jpg" alt=" " />
          <Image src="tresor/tresor-3.jpg" alt=" " />
          <Image src="mix/marina-tulperij-15.jpg" alt=" " />
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
            photo spots in the Netherlands.
            Please feel free to get in touch, and let’s chat about your ideas!
          </p>
          <ButtonContainer>
            <Button to={"/contact"}> Contact Annie </Button>
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

export default Travelers;
