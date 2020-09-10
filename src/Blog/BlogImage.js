import React, { lazy } from "react";

const BlogImage = ({ uuid, alt }) => {
  return (
    <picture>
      <source
        srcSet={`https://ucarecdn.com/${uuid}/-/preview/800x1300/-/format/webp/`}
        type="image/webp"
        loading = "lazy"
        alt = {alt}
      />
      <img src={`https://ucarecdn.com/${uuid}/-/preview/800x1300/-/format/auto/`} />
    </picture>
  );
};

export default BlogImage