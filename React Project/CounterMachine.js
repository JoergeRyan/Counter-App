class CounterMachine extends React.Component{
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    onClickHandlerAdd = () =>{
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
          }));
    }
    onClickHandlerReset = () =>{
        this.setState(() => ({
            counter: 0,
          }));
    }
    onClickHandlerSubstract = () =>{
        this.setState((prevState) => ({
            counter: prevState.counter - 1,
          }));
    }
    render(){
        return(
            <div>
                <div id = "Title">
                    <h1>Counter App</h1>
                </div>
                
                <p>{this.state.counter}</p>
                <div>
                    <button id = "Subtract" onClick = {this.onClickHandlerSubstract}>Subtract</button>
                    <button id = "Reset" onClick={this.onClickHandlerReset}>Reset</button>
                    <button id = "Add" onClick={this.onClickHandlerAdd}>Add</button>
                </div>
            </div>
        );
    }
}