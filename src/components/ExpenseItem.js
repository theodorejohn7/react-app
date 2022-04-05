import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";

// function ExpenseItem(props) {
// //   return (
// //     <div className="expense-item">
// //       <ExpenseDate date={props.date} />
// //       {/* <div> {props.date.toISOString()}</div> */}
// //       <div className="expense-item__description">
// //         <h2>{props.title}</h2>
// //         <div className="expense-item__price">Rs.{props.amount}</div>
// //       </div>
// //     </div>
// //   );
// }

class ExpenseItem extends React.Component{
    constructor(props){
        super(props);
        this.state={date: new Date()};
    }


    render() {
        return (
            <div className="expense-item">
              <ExpenseDate date={this.state.date} />
              {/* <div> {props.date.toISOString()}</div> */}
              <div className="expense-item__description">
                <h2>{this.props.title}</h2>
                <div className="expense-item__price">Rs.{this.props.amount}</div>
              </div>
            </div>
          );
    }
}

export default ExpenseItem;
