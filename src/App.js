//localhost:3001

import "./App.css";
import React from 'react';

import ExpenseItem from "./components/ExpenseItem";
import { render } from "@testing-library/react";

// Class App extends React.Component{

//   render()
//   {
//     return (
//       <div className="App">
//         <ExpenseItem
//           title={expenses[0].title}
//           amount={expenses[0].amount}
//           date={expenses[0].date}
//         />
//         <ExpenseItem
//           title={expenses[1].title}
//           amount={expenses[1].amount}
//           date={expenses[1].date}
//         />
//         <ExpenseItem
//           title={expenses[2].title}
//           amount={expenses[2].amount}
//           date={expenses[2].date}
//         />
//         <ExpenseItem
//           title={expenses[3].title}
//           amount={expenses[3].amount}
//           date={expenses[3].date}
//         />
//       </div>
//     );
//   }
// }




function App() {
  const expenses = [
    {
      id: "e1",
      title: " Paper",
      amount: 104.67,
      date: new Date(2022, 4, 5),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 202.67,
      date: new Date(2022, 4, 15),
    },
    {
      id: "e3",
      title: "Mobile cover",
      amount: 212.67,
      date: new Date(2022, 4, 25),
    },
    {
      id: "e4",
      title: "Mounse pad",
      amount: 293.67,
      date: new Date(2022, 4, 16),
    },
  ];
  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
