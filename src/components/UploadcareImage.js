import { Image, ImageContainer } from "../config/Ui";
import React from "react";

const UploadcareImage = ({ uuid, alt }) => {
  return (
    <ImageContainer>
      <picture>
        <source
          srcset={`https://ucarecdn.com/${uuid}/-/preview/-/format/webp/`}
          type="image/webp"
          loading="lazy"
        />
        <Image
          alt={alt}
          src={`https://ucarecdn.com/${uuid}/-/preview/-/format/auto/`}
          loading="lazy"
        ></Image>
      </picture>
    </ImageContainer>
  );
};

export default UploadcareImage;
