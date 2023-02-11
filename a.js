function checkCashRegister(price, cash, cid) {
    let currency = [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], ["ONE", 1], ["QUARTER", 0.25],["DIME", 0.1],["NICKEL", 0.05],["PENNY", 0.01]];
    let changeObj = {status: '', change: []};
    cid.reverse();
    let change = cash - price;
    const unchanged = change;
    let cidTotal = 0;
    let amount = [...currency];
    let sumAmount = 0;
    
    for(let i = 0; i < cid.length; i++){
      cidTotal += cid[i][1];
    }
  
    for(let i = 0; i < currency.length; i++) {
      let changeToReturn = 0; 
      let bill = cid[i][1]/currency[i][1]
        bill.toFixed(2);
        while(change.toFixed(2) >= currency[i][1] && bill >= 1) {
          change -= currency[i][1];
          changeToReturn += currency[i][1];
          bill--;
  
        }
          if(changeToReturn > 0) {
            if(changeToReturn - Math.floor(changeToReturn) !== 0) {
            amount[i][1] = changeToReturn.toFixed(2)
            amount[i][1] = parseFloat(amount[i][1])
          } else {
              amount[i][1] = changeToReturn;
            }
          } else {
            amount[i][1] = changeToReturn;
          }
    }
  
    for(let i = 0; i < cid.length; i++) {
      sumAmount += amount[i][1];
    }
    sumAmount = sumAmount.toFixed(2);
  
  if(cidTotal < unchanged || sumAmount < unchanged) {
      changeObj.status = 'INSUFFICIENT_FUNDS';
      } else if(cidTotal == unchanged) {
        changeObj.status = 'CLOSED';
        changeObj.change = cid.reverse();
      } else {
        let amountFiltered = [];
        for(let a = 0; a < amount.length; a++) {
          if(amount[a][1]!==0) {
            amountFiltered.push(amount[a]);  
          } 
          }
       changeObj.status = 'OPEN';
       changeObj.change = amountFiltered;
      }
    console.log(changeObj)
       return changeObj;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);