let currentNum = 0;

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultDisplay: "",
      result: 0,
      num1: 0,
      num2: 0,
      operator: ""
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  clearAll() {    
    this.setState({
      resultDisplay: "0",
      result: 0,
      num1: 0,
      num2: 0,
      operator: ""
    });
  }

  calculate() {
    // switch statement
  }

  handleNumber(x) {
    //const { resultDisplay } = this.state
    this.setState({
      resultDisplay: this.state.resultDisplay + x
    });
  }

  render() {
    return (
      <div>
        <div id="resultDiv">
          <div id="display">{this.state.resultDisplay}</div>
        </div>
        <div id="buttonDiv">
          <div>
            <div id="row1" className="row">
              <div id="seven" className="numButton" onClick={() => this.handleNumber(7)}>
                7
              </div>
              <div id="eight" className="numButton" onClick={() => this.handleNumber(8)}>
                8
              </div>
              <div id="nine" className="numButton" onClick={() => this.handleNumber(9)}>
                9
              </div>
            </div>
            <div id="row2" className="row">
              <div id="four" className="numButton" onClick={() => this.handleNumber(4)}>
                4
              </div>
              <div id="five" className="numButton" onClick={() => this.handleNumber(5)}>
                5
              </div>
              <div id="six" className="numButton" onClick={() => this.handleNumber(6)}>
                6
              </div>
            </div>
            <div id="row3" className="row">
              <div id="three" className="numButton" onClick={() => this.handleNumber(3)}>
                3
              </div>
              <div id="two" className="numButton" onClick={() => this.handleNumber(2)}>
                2
              </div>
              <div id="one" className="numButton" onClick={() => this.handleNumber(1)}>
                1
              </div>
            </div>
            <div id="row4" className="row">
              <div id="clear" className="numButton" onClick={() => this.clearAll()}>
                C
              </div>
              <div id="zero" className="numButton" onClick={() => this.handleNumber(0)}>
                0
              </div>
              <div id="decimal" className="numButton" onClick={() => this.handleNumber(1)}>
                .
              </div>
            </div>
          </div>
          <div id="opsDiv">
            <div id="divide" className="opsButton" onClick={this.handleNumber}>
              <i class="fas fa-divide" />
            </div>
            <div id="multiply" className="opsButton" onClick={this.handleNumber}>
              <i class="fas fa-times" />
            </div>
            <div id="subtract" className="opsButton" onClick={this.handleNumber}>
              <i class="fas fa-minus" />
            </div>
            <div id="add" className="opsButton" onClick={this.handleNumber}>
              <i class="fas fa-plus" />
            </div>
            <div id="equals" className="opsButton" onClick={this.handleNumber}>
              <i class="fas fa-equals" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
