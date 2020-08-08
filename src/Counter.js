import React from "react";
import { Component } from "react";

class Counter extends Component {
  render() {
    // const { count } = this.state;
    return (
      <main className="Application">
        <section>
          <div className="counter">
            <p className="counter-name">{this.props.name}</p>
            <p className="count">{this.props.count}</p>
            <section className="controls">
              <button onClick={this.props.handleIncrement}>Sumar</button>
              <button onClick={this.props.handleDecrement}>Restar</button>
              <button onClick={this.props.reset}>Resetear</button>
            </section>
          </div>
        </section>
      </main>
    );
  }
}

export default Counter;
