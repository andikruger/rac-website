import React from "react";
import PortableText from "react-portable-text";
import doc from "./doc.json";
import Head from "next/head";
import Quote from "../../components/Quote";
import HeroArticle from "../../components/Hero/HeroArticle";
import heroImg from "../../assets/memberphoto.jpg";
// sanity url builder
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
  projectId: "yavqngwf",
  dataset: "production",
});

function urlFor(source) {
  return builder.image(source);
}

const Article = () => {
  const image = urlFor(doc.mainImage).width(3000).url();
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
        src={props.node.asset.url}
        alt={props.node.alt}
      />
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
      <Head>
        <title>{doc.title}</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroArticle heading={doc.title} message="" image={image} />
      <div className="bg-gray-200 p-4">
        {/* start */}
        {/* create a white card with a shadow effect */}
        <div className="bg-white shadow-lg rounded-lg p-4 m-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <PortableText
              // Pass in block content straight from Sanity.io
              content={doc.body}
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
