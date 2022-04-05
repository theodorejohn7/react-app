
import React from 'react';

import './ExpenseDate.css';

class ExpenseDate extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
             month : props.date.toLocaleString('en-US',{ month:'long' }),
             day : props.date.toLocaleString('en-US',{ day:'2-digit' }),
             year : props.date.getFullYear()

        };
        // this.state.month = this.state.date.toLocaleString('en-US',{ month:'long' });
        // this.state.day = this.state.date.toLocaleString('en-US',{ day:'2-digit' });
        // this.state.year = this.state.date.getFullYear();
    }
    render(){
        return ( 
            <div className="expense-date">
            <div className="expense-date__month">{this.state.month}</div>
            <div className="expense-date__year">{this.state.year}</div>
            <div className="expense-date__day">{this.state.day}</div>
    
        </div>
        );
    }
}
 
// function ExpenseDate(props){
//     const month = props.date.toLocaleString('en-US',{ month:'long' });
//     const day = props.date.toLocaleString('en-US',{ day:'2-digit' });
//     const year = props.date.getFullYear();

   
//     return ( 
//         <div className="expense-date">
//         <div className="expense-date__month">{month}</div>
//         <div className="expense-date__year">{year}</div>
//         <div className="expense-date__day">{day}</div>

//     </div>
//     );
// }

export default ExpenseDate;
