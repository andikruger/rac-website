import React from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
  projectId: "yavqngwf",
  dataset: "production",
});

function urlFor(source) {
  return builder.image(source);
}

const ArticleCard = ({ data }) => {
  const image = urlFor(data.mainImage).width(3000).url();
  return (
    <div className="flex flex-col items-center justify-center w-full py-6">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div
          className="flex items-center sm:p-4 justify-center w-56 h-56 p-4 m-8 bg-cover rounded-lg"
          style={{
            backgroundImage: `url('${image}')`,
            // scale down the image to fit the div without cropping
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
            {data.title}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center mx-4">
            {data.blurb}
          </p>
          <div className="flex items-center justify-center w-full mt-4">
            <Link
              legacyBehavior
              href={`classifieds/advert/${data.slug.current}`}
            >
              <a className="px-4 mb-4 py-2 text-sm font-medium text-white hover:text-white bg-[#67162c] rounded-md hover:bg-[#470819]">
                Read More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
