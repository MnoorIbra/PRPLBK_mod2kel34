import React, { Component } from "react";
import '../App.css';
function Square(props){
 return (

 <div className="cards">
 <h2>{props.nama}</h2>
 <p>{props.nim}</p>
 <p>{props.email}</p>
 </div>

 
 );
}
export default class CompAndProps extends Component{
 render(){
 const bgColor = {
 backgroundColor: this.props.bgColor
 }
 return (
 <div className="User-cards">
 <div className ="User-info" style={bgColor}>
 <Square
 nama = "Muhammad Noor Ibrahim" 
 nim = "21120120140064"
 email = "ibralincah69@gmail.com"
  />

 
 <Square
 nama = "Rizal Firdaus"
 nim = "21120120120031"
 email = "rf290672@gmail.com"
  />

 <Square
 nama = "Aldo Serena Safiola"
 nim = "21120120120028"
 email = "Aladosafiola@gmail.com"
  />

 <Square
 nama = "Muhammad Fadhil Sulthan"
 nim = "21120120140144"
 email = "fadhilsulthan1212@gmail.com"
  />
</div>
 </div>
 )
 }
}
