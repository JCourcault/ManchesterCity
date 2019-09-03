import React, { Component } from "react";

import stripes from "../../../Resources/images/stripes.png";

import { Tag } from "../../ui/Misc";

class MeetPlayers extends Component {
  state = {};
  render() {
    return (
      <div
        className="home_meetplayers"
        style={{
          background: `#FFFFFF url(${stripes})`
        }}
      >
        <div className="container">
          <div className="home_meetplayers_wrapper">
            <div className="home_card_wrapper"></div>
            <div className="home_text_wrapper">
              <div>
                <Tag
                  bck="#0d1831"
                  size="100px"
                  color="#FFFFFF"
                  add={{ display: "inline-block", marginBottom: "20px" }}
                >
                  Meet
                </Tag>
              </div>
              <div>
                <Tag
                  bck="#0d1831"
                  size="100px"
                  color="#FFFFFF"
                  add={{ display: "inline-block", marginBottom: "20px" }}
                >
                  The
                </Tag>
              </div>
              <div>
                <Tag
                  bck="#0d1831"
                  size="100px"
                  color="#FFFFFF"
                  add={{ display: "inline-block", marginBottom: "20px" }}
                >
                  Players
                </Tag>
              </div>
              <div>
                <Tag
                  link={true}
                  linkTo="/the_team"
                  bck="#FFFFFF"
                  size="27px"
                  color="#0d1831"
                  add={{
                    display: "inline-block",
                    marginBottom: "20px",
                    border: "solid 1px #0d1831"
                  }}
                >
                  Meet the players
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetPlayers;
