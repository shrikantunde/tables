
import React, { Component } from 'react';

class TableView extends Component {
   constructor(){
     super();
  }  

  table=()=>{
    const dataColumns=this.props.data.columns;
    const dataRows=this.props.data.rows;
    
    let tableHeaders=(
       <thead>
          <tr>
             {dataColumns.map(function(column) {
                return <th style={{width: 80, minWidth: 50}}>{column}</th>; })}
          </tr>
       </thead>);

    let tableBody =( dataRows.map(function(row) {
        return (
            <tr key={row.key}>
                {row.groupHeading ? (dataColumns.map(function(column) {
                    return <td className="topBorder"><b>{row[column]}</b></td>;})): dataColumns.map(function(column) {
                    return <td className="noBorder">{row[column]}</td>;}) }
            </tr>); 
        }));

        return (<table className="table" width="100%">
        {tableHeaders}
        {tableBody}
        </table>)
    }

  render() {
   
    return (
     <div className="inner-div">
        {this.table()}
      </div>
    );
  }
}

export default TableView;