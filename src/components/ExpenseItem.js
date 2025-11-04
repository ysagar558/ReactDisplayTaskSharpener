import React ,{useState} from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props){
  //       const expenseDate = new Date(2023, 7, 15).toISOString();
  // const expenseTitle = "props.title";
  // const expenseAmount = 50;
  // const expenseLocation = "Bangalore";
  const [title,setTitle]=useState(props.title);


  function buttonClickHandeler(event){
    setTitle("New Title");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={buttonClickHandeler}>Change Title</button>
    </Card>
    );
}
export default ExpenseItem;