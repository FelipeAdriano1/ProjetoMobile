import { createContext, useState } from 'react'
export const ExpensesContext = createContext()

export function ExpensesProvider({ children }) {
    const [expenses, setExpenses] = useState([])
    function addExpense(novaDespesa) {
        setExpenses(prev => [...prev, novaDespesa])
    }
    return (
        <ExpensesContext.Provider value={{ expenses, addExpense }}>
            {children}
        </ExpensesContext.Provider>
    )
}
