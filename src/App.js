  import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      label: 'Botón',
      selectedBTN: ''
    };
    this.getTotal = this.getTotal.bind(this);
    this.getMyText = this.getMyText.bind(this);
  }

  getTotal(e) {
    let newTotal = e.currentTarget.value;
    if (newTotal === '') {
      newTotal = 0;
    } else {
      newTotal = parseInt(newTotal);
    }
    this.setState({
      total: newTotal
      })
  }
   getMyText(e) {
     const btnText = e.currentTarget.innerHTML;
     this.setState({
       selectedBTN: btnText
     });
   }
  render() {
    const {total, label, selectedBTN} = this.state;
    let buttons = [];
    for (let i=0;i < total; i++) {
      buttons.push(<button key={i} onClick={this.getMyText}>{label} nº{i+1}</button>);
    }
    return (
      <div className="app">
        <div className="app__field">
          <input type="number" onKeyUp={this.getTotal} />
        </div>
        <p>Texto del botón pulsado: {selectedBTN}</p>
        <div className="app__buttons">{buttons}</div>
      </div>
    );
  }
}

export default App;
