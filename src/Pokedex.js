import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokodex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h2 className="green">Wining Player</h2>;
    } else {
      title = <h2 className="red">Losing Player</h2>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h3>Total Experience: {this.props.exp}</h3>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokodex;
