import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "30/05/2021"
    };
  }
    
  render() {
    return (
      <div className="container-footer">
        Desenvolvido por Luiz Rosalba - Última atualização  {this.state.date}
      </div>
    )
  }
}


