import { Component } from "react";
import Button from "./Button";
import ComponantCompteur from "./ComponantCompteur";
import { Title } from "./title";

class AppCompteur extends Component {
  constructor() {
    super();
    this.state = { isaff: true };
  }

  render() {
    return (
      <>
        <Title className="Title" title="Componant AppCompteur" />
        <Button
          onClick={() => this.setState({ isaff: !this.state.isaff })}
          name={this.state.isaff ? "Afficher" : "Masquer"}
        />
        <div>{!this.state.isaff && <ComponantCompteur />}</div>
      </>
    );
  }
}

export default AppCompteur;
