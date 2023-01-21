import React from "react";
import PortableText from "react-portable-text";

import HeroArticle from "../../components/Hero/HeroArticle";

import Seo from "../../components/seo";
// sanity url builder
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
  projectId: "yavqngwf",
  dataset: "production",
});

function urlFor(source) {
  return builder.image(source);
}

const Article = ({ data }) => {
  const image = urlFor(data.mainImage).width(3000).url();
  const shareImage = urlFor(data.mainImage).width(200).url();
  const seo = {
    metaTitle: data.title,
    metaDescription: data.blurb,
    shareImage: shareImage,
    article: true,
  };

  console.log(shareImage);

  const serializers = {
    normal: (props) => (
      <p className="text-lg p-4" {...props}>
        {props.children}
      </p>
    ),
    h1: (props) => (
      <h1 className="text-5xl font-bold text-center p-4 m-4 py-0" {...props} />
    ),
    li: ({ children }) => (
      <li className="special-list-item px-4">
        {" - "}
        {children}
      </li>
    ),
    h2: (props) => (
      <h2 className="text-4xl font-bold text-center p-4 m-4 py-0" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-3xl font-bold text-center p-4 m-4 py-0" {...props} />
    ),
    h4: (props) => (
      <h4 className="text-2xl font-bold text-center p-4 m-4 py-0" {...props} />
    ),
    h5: (props) => (
      <h5 className="text-xl font-bold text-center p-4 m-4 py-0" {...props} />
    ),
    h6: (props) => (
      <h6 className="text-lg font-bold text-center p-4 m-4 py-0" {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        className="text-lg text-gray-500 font-bold text-center p-4 py-0"
        {...props}
      >
        {props.children}
      </blockquote>
    ),
    image: (props) => (
      <img
        className="w-full md:w-3/4 p-4 m-4"
        src={urlFor(props.asset._ref).width(3000).url()}
      />
    ),
    em: (props) => (
      <em className="text-lg text-gray-500 text-center  ">{props.children}</em>
    ),

    mainImage: (props) => (
      <img
        className="w-full md:w-3/4 p-4 m-4"
        src={props.node.asset.url}
        alt={props.node.alt}
      />
    ),
    bullet: (props) => (
      <li className="special-list-item list-disc p-4">{props.children}</li>
    ),
  };

  return (
    <>
      <Seo seo={seo} />
      <HeroArticle heading={data.title} message="" image={image} />
      <div className="bg-gray-200 p-4">
        {/* start */}
        {/* create a white card with a shadow effect */}
        <div className="bg-white shadow-lg rounded-lg p-4 m-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <PortableText
              // Pass in block content straight from Sanity.io
              content={data.body}
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={serializers}
            />
          </div>
        </div>
        {/* end */}
      </div>
    </>
  );
};

export default Article;
