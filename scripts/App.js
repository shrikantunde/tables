import React, { Component } from 'react';
import AnalyticalTable from './analyticalTableView/analyticalTable';
import TableData from './json/data';

class App extends Component {
   constructor(){
     super();
     this.state = {};
  }  

  render() {
    return (
     <div className="container">
      <AnalyticalTable data = {TableData}/>
      </div>
    );
  }
}

export default App;