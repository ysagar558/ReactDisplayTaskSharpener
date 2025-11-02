import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props){
  //       const expenseDate = new Date(2023, 7, 15).toISOString();
  // const expenseTitle = "props.title";
  // const expenseAmount = 50;
  // const expenseLocation = "Bangalore";

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </Card>
    );
}
export default ExpenseItem;