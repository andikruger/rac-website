import React from "react";
import { toMarkdown } from "@sanity/block-content-to-markdown";
const sanityClient = require("@sanity/client");
const Article = () => {
  const sanityClient = require("@sanity/client");
  const client = sanityClient({
    projectId: "yavqngwf",
    dataset: "production",
    apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
    token: "", // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  });

  //   const serializers = {
  //     types: {
  //       code: (props) =>
  //         "```" + props.node.language + "\n" + props.node.code + "\n```",
  //     },
  //   };

  client.fetch('*[_type == "post"][0]').then((article) => {
    console.log(toMarkdown(article));
  });
  return <h1>Test</h1>;
};

export default Article;
