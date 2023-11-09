class CounterMachine extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.audioAdd = new Audio("./sound/add.mp3");
    this.audioReset = new Audio("./sound/reset.wav");
    this.audioSubtract = new Audio("./sound/subtract.wav");
  }

  onClickHandlerAdd = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
    this.audioAdd.play();
  };
  onClickHandlerReset = () => {
    this.setState(() => ({
      counter: 0,
    }));
    this.audioReset.play();
  };
  onClickHandlerSubstract = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
    this.audioSubtract.play();
  };

  render() {
    return (
      <div>
        <div id="Title">
          <h1>Counter App</h1>
        </div>

        <p>{this.state.counter}</p>
        <div>
          <button id="Subtract" onClick={this.onClickHandlerSubstract}>
            Subtract
          </button>
          <button id="Reset" onClick={this.onClickHandlerReset}>
            Reset
          </button>
          <button id="Add" onClick={this.onClickHandlerAdd}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
