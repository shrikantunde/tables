
import React, { Component } from 'react';
import TableView from './tableView';

class AnalyticalTable extends Component {
   constructor(){
     super();
  }  

  bindDataToAnalyticalTable=()=>{
    let doc = new jsPDF()
   // doc.text('Hello world!', 10, 10)
    //doc.save('a4.pdf');
    let pdf1 = this.refs.table1;
    doc.setFont('times', 'arial');
    doc.fromHTML(pdf1);
    doc.save('a4.pdf');
  }

  render() {
   
    return (
     <div ref="table1">
       <button onClick={this.bindDataToAnalyticalTable}>pdf</button>
       <TableView data = {this.props.data}/>
      </div>
    );
  }
}

export default AnalyticalTable;