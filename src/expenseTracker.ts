const generateExpenseReport = (dailyExpenses: number[], dailyBudget: number) => {
    interface  ExpenseReport{
        travelDays: number,             //dies totals del viatge
        expenseDays: number,            //dies amb despesa >0
        dailyBudget: number,            //pressupost rebut
        averageDailyExpense: number,    //mitjana de despesa diària
        underBudget: boolean,           //true si mitjana <= pressupost
        rating: 1 | 2 | 3,              //valoració (1, 2 o 3)
        feedback: string                //missatge descriptiu        
    }
    
    const expenseReport : ExpenseReport {
        travelDays: (dailyExpenses.length),
        expenseDays: calculateExpenseDays   dailyExpenses.filter(num => num > 0),
        dailyBudget: dailyBudget,
        averageDailyExpense: dailyExpenses.reduce((acumulator, num) => acumulator + num, 0) / dailyExpenses.length,
        underBudget: (dailyExpenses <= dailyBudget),
        rating: if(averageDailyExpense <= dailyBudget){
                return 1
            }else if(averageDailyExpense <= dailyBudget * 1.2){
                return 2
            }
            return 3,              //valoració (1, 2 o 3)
        feedback: if(rating === 1){
            return "Excel·lent gestió!"
        }else if(rating === 2){
            return "Correcte, però ajustat" 
        }
        return "Pot millorar"
    }

}

console.log(generateExpenseReport([50, 0, 120, 85], 100));