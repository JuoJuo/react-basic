import * as React from "react";

interface Props {
  name: string;
}
interface State {
  number: number;
  amount: number;
}

export default class Counter extends React.Component<Props, State> {
  state = {
    number: 0,
    amount: 1
  };

  add = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ number: this.state.number + this.state.amount });
  };

  handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ amount: parseInt(e.target.value, 10) });
  };

  render() {
    const style: React.CSSProperties = {
      color: "red",
    }
    return (
      <>
        {this.props.name}:
        <p style={style}>{this.state.number}</p>
        <input
          type="text"
          value={this.state.amount}
          onChange={this.handleChnage}
        />
        <button onClick={this.add}>+</button>
      </>
    );
  }
}
