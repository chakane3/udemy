# Working With Components
 
Components are javascript functions or classes which typically accept "props" and return react elements. They let us reuse pieces of UI. We can think os these as custom HTML elements.

## Props
We can have some data:
<details>
    <summary>
        ```javascript
            const expenses = [
                {
                    id: 'e1',
                    title: 'Toilet Paper',
                    amount: 94.12,
                    date: new Date(2020, 7, 14),
                },
                { 
                    id: 'e2', 
                    title: 'New TV', 
                    amount: 799.49, 
                    date: new Date(2021, 2, 12) 
                },
                {
                    id: 'e3',
                    title: 'Car Insurance',
                    amount: 294.67,
                    date: new Date(2021, 2, 28),
                },
                {
                    id: 'e4',
                    title: 'New Desk (Wooden)',
                    amount: 450,
                    date: new Date(2021, 5, 12),
                },
            ];
        ```
    </summary>
</details>

And we can have a component that could take in this data:
<details>
    <summary>
        ```javascript
                export default function ExpenseItem() {
                    const expenseDate = "September 3, 2022"
                    const expenseTitle = "Car Insurance"
                    const expenseAmount = 203.45
                    return (
                        <div className="expense-item">
                            <div>{}</div>
                            <div>
                                <h2 class="expense-item--description">{}</h2>
                                <div className="expense-item--price">${}</div>   
                            </div>
                        </div>
                    )
                }
        ```
    </summary>
</details>

To make use of the idea of props its ideal to source the data through App.js. We can then setup property names for the component we intend to use in App.js. (look @ 01-starting-setup)

