import React from "react";
import Counter from "./Counter";
import Global from "./Global";

import "./styles.scss";

export class App extends React.Component {
  state = {
    contadores: [
      { name: "left", contador: 0 },
      { name: "center", contador: 0 },
      { name: "right", contador: 0 }
    ],
    general: 0
  };

  calculateGlobal = () => {
    const valores = this.state.contadores.map(actual => actual.contador);
    const suma = valores[0] + valores[1] + valores[2];
    const suma2 = valores.reduce((acc, actual) => acc + actual);
    console.log(valores, suma2);
    this.setState({ general: suma });
  };

  handleIncrement = index => () => {
    const newArray = this.state.contadores;
    newArray[index].contador += 1;
    this.setState({ contadores: newArray });
    this.calculateGlobal();
  };

  handleDecrement = index => () => {
    const newArray = this.state.contadores;
    newArray[index].contador -= 1;
    this.setState({ contadores: newArray });
    this.calculateGlobal();
  };

  reset = index => () => {
    const newArray = this.state.contadores;
    newArray[index].contador = 0;
    this.setState({ contadores: newArray });
    this.calculateGlobal();
  };

  render() {
    return (
      <div className="counter-ui flex">
        <Global globalCounter={this.state.general} />

        <div className="counters">
          {this.state.contadores.map((contadorActual, index) => {
            return (
              <Counter
                key={index}
                name={contadorActual.name}
                index={index}
                handleIncrement={this.handleIncrement(index)}
                handleDecrement={this.handleDecrement(index)}
                reset={this.reset(index)}
                count={contadorActual.contador}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
