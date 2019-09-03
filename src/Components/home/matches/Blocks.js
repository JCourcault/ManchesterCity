import React, { Component } from "react";

import { firebaseMatches } from "../../../Firebase";

import { firebaseLooper } from "../../ui/Misc";

import MatchesBlock from "../../ui/MatchesBlock";

import Slide from "react-reveal";

class Blocks extends Component {
  state = { matches: [] };

  showMatches = matches =>
    matches
      ? matches.map(match => (
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <MatchesBlock match={match} />
              </div>
            </div>
          </Slide>
        ))
      : null;

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        const matches = firebaseLooper(snapshot).reverse();
        console.log(matches);
        this.setState({ matches });
      });
  }

  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default Blocks;
