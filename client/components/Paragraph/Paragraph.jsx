import React from "react";
import Image from "next/image";

const Paragraph = ({ content }) => {
  return (
    <>
      {" "}
      {/* create a paragraph with text 3/4 of the width and an image filling the rest of the width and a caption under the image */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-3/4 p-4 m-4">
          <p className="text-lg">
            Rand Athletic Club was founded in 1972 by a group of like-minded
            individuals who wanted to create a club that would cater for the
            needs of the community. The club was originally situated in the Rand
            Club in Randburg, hence the name Rand Athletic Club. The club was
            founded by a group of like-minded individuals who wanted to create a
            club that would cater for the needs of the community. The club was
            originally situated in the Rand Club in Randburg, hence the name
            Rand Athletic Club.
          </p>
        </div>
        <div className="md:w-1/4 p-4 m-4">
          <Image
            src={casper}
            alt="Casper Greef"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <p className="text-center text-strong">Bruce Clark</p>
        </div>
      </div>
    </>
  );
};

export default Paragraph;
