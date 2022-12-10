import React from "react";

const AtributeCard = ({ name, value }) => {
  // create a card with rounded corners and a shadow
  // the card has a title and a body
  // the title should be grey and the body should be black

  return (
    <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-1/2 bg-white">
      <div className="w-full">
        <h2 className="text-2xl text-center text-strong m-4">{name}</h2>
        <p className="text-xl text-center text-strong m-4">{value}</p>
      </div>
    </div>
  );
};

export default AtributeCard;
