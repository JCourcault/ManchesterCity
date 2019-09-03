import React from "react";

import { Tag } from "../../ui/Misc";

import Blocks from "./Blocks";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag link={false} bck="#0d1831" size="50px" color="white">
          Matches
        </Tag>
        <Blocks />
        <Tag
          link={true}
          linkTo="/the_matches"
          bck="white"
          size="22px"
          color="#0d1831"
        >
          See more matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
