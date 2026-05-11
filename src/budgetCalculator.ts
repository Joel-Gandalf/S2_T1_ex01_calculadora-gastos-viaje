const calculateBudgetStatus = (totalExpenses: number, budget: number) => {
    const actualBudget : number = budget - totalExpenses;
    if(actualBudget < budget*80/100) {
        return "Sota pressupost";
    } else if((actualBudget >= budget*80/100) && (actualBudget <= budget) ) {
        return "Dins pressupost";
    }
    return "Sobre pressupost";
     
}
console.log(calculateBudgetStatus(850, 1000));