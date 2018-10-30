import React, { Component } from "react";
import WandCard from "./WandCard";

class Wandslist extends Component {
  render() {
    let wands = this.props.wands.map(wand => (
      <WandCard wand={wand} key={wand.core} />
    ));

    return (
      <div className="this.props.wands">
        <h3>Wands</h3>
        <div className="row">{wands}</div>
      </div>
    );
  }
}

export default Wandslist;
