export function submitLoanData(data){
    let myStorage = window.localStorage;
    data['premiumPaid'] = 0;
    data['loanStatus'] = "approved";
    myStorage.setItem('loanData',JSON.stringify(data));
    let responce = new Promise((resolver) => {
        setTimeout(()=>{
            resolver();
        },3000);
    });
    return responce;
};

export function getLoanData(){
    let myStorage = window.localStorage;
    let loanData  = myStorage.getItem('loanData');
    return loanData ? JSON.parse(loanData) : {};
    return new Promise((res)=>{
            res(JSON.parse(loanData));
    });
}

export function updatePremium(){
    let myStorage = window.localStorage;
    let loanData  = myStorage.getItem('loanData');
    loanData = JSON.parse(loanData);
    let responce = new Promise((resolver) => {
        setTimeout(()=>{
            loanData["premiumPaid"] =  loanData["premiumPaid"]+ 1;
            myStorage.setItem('loanData',JSON.stringify(loanData));
            resolver();
        },3000);
    });
    return responce;
}