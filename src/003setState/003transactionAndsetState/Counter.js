class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 0}
  }

  add() {
    this.setState({number: this.state.number + 1});
    console.log(this.state);//0
    this.setState({number: this.state.number + 1});
    console.log(this.state);//0
    setTimeout(() => {
      this.setState({number: this.state.number + 1});
      console.log(this.state);//2
      this.setState({number: this.state.number + 1});
      console.log(this.state);//3
    }, 1000);
  }

  render() {
    //模拟jsx的样子
    return `<button onclick="trigger(event,'add')">
            ${this.props.name}:${this.state.number}
            </button>`;
  }
}