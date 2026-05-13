interface ExpenseReport {
    travelDays: number,             //dies totals del viatge
    expenseDays: number,            //dies amb despesa >0
    dailyBudget: number,            //pressupost rebut
    averageDailyExpense: number,    //mitjana de despesa diària
    underBudget: boolean,           //true si mitjana <= pressupost
    rating: 1 | 2 | 3,              //valoració (1, 2 o 3)
    feedback: string                //missatge descriptiu        
}

const generateExpenseReport = (dailyExpenses: number[], dailyBudget: number): ExpenseReport => {

    const average: number = dailyExpenses.reduce((acumulator, num) => acumulator + num, 0) / dailyExpenses.length;
    
    const calculateRating  = () => {
        if (average <= dailyBudget) return 1
        else if (average <= dailyBudget * 1.2) return 2
        return 3
    }
    const calculatefeedback = () => {
            if (calculateRating() === 1) return "Excel·lent gestió!"
            else if (calculateRating() === 2) return "Correcte, però ajustat"
            return "Pot millorar"
        }

    const expenseReport: ExpenseReport = {
        travelDays: dailyExpenses.length,
        expenseDays: dailyExpenses.filter(num => num > 0).length,
        // dailyBudget: dailyBudget,
        dailyBudget,
        // averageDailyExpense: dailyExpenses.reduce((acumulator, num) => acumulator + num, 0) / dailyExpenses.length,
        averageDailyExpense: average,
        underBudget: (average <= dailyBudget),
        // Autoejecución de funciones (IIFE)
        // rating: (() => {
        //     if (average <= dailyBudget) return 1
        //     else if (average <= dailyBudget * 1.2) return 2
        //     return 3
        // })(),
        rating: calculateRating(),
        feedback:  calculatefeedback()
    }
    return expenseReport

}

console.log(generateExpenseReport([50, 0, 120, 85], 100));