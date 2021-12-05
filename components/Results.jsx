import React, { useEffect } from "react";
import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail
          key={result.id}
          result={result}
          vote_average={result.vote_average}
        />
      ))}
    </FlipMove>
  );
};

export default Results;
