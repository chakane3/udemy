import React from "react"
import "./styling/ExpenseItem.css"
export default function ExpenseItem(props) {
    const expenseDate = props.date
    const expenseTitle = props.title
    const expenseAmount = props.amount
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div>
                <h2 class="expense-item--description">{props.title}</h2>
                <div className="expense-item--price">${props.amount}</div>   
            </div>
        </div>
    )
}



