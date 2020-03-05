function bonAppetit(bill, k, b) {
    // bill = array of integers (prices)
    // k = item anna doesn't want to eat (bill[1])
    // b = anna's paid amount
    // [3, 10, 2, 9], 1, 12
    
    // Filter out the item that Ana doens't pay for 
    // Add those items in filtered array, and divide by 2
    // subtract divided value by charged value (b)
    // if the difference equals the charged amount return "bon appetit"
    // else return the difference

    let charged = [...bill.slice(0, k), ...bill.slice(k + 1)].reduce((a,b) => a + b) / 2
    
    if (charged === b) {
        console.log("Bon Appetit")
     } else {
        console.log(b - charged)
     }
    
}