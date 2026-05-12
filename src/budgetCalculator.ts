const calculateBudgetStatus = (totalExpenses: number, budget: number): ("Sota pressupost" | "Dins pressupost" | "Sobre pressupost" ) => {
    
    if(totalExpenses < budget*80/100) {
        return "Sota pressupost";
    } else if((totalExpenses >= budget*80/100) && (totalExpenses <= budget) ) {
        return "Dins pressupost";
    }
    return "Sobre pressupost";
     
}
console.log(calculateBudgetStatus(850, 1000));