import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString()
    };
  }

  getDate() {
    var date = { currentTime: new Date().toLocaleString() };

    this.setState({
      date: date
    });
  }
  render() {
    return (
      <div className="container-footer">
        Desenvolvido por Luiz Rosalba - Última atualização  {this.state.date}
      </div>
    )
  }
}


