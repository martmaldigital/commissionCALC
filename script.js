    let btn = document.getElementById('run');
    let error = document.getElementById('print1');
    let result = document.getElementById('print1');
    let positiveResult1 = " Transaction was successful,.... Commission of &#8358 10.00 was deducted from your account.";
    let positiveResult2 = " Transaction was successful,.... Commission of &#8358 25.00 was deducted from your account.";
    let positiveResult3 = "Transaction was successful,.... Commission of &#8358 50.00 was deducted from your account.";
    let negativeResult = " Invalid amount, please enter a correct amount";
    
    btn.addEventListener('click', commissionCalc);


 function commissionCalc() {
    
            const transferAmount = Number(document.getElementById("Num").value);    
              
            switch(true){
               case (transferAmount < 1): {
                 error.style.color = 'Red';               
                error.innerHTML= "Enter correct amount";
                break;                
                }
            case (transferAmount <= 5000 ): {
				    result.style.color = '#0b3b2e';
                   result.innerHTML= positiveResult1;
                break;
                }
            case (transferAmount <= 50000 ): {
                    result.style.color = '#0b3b2e';
                   result.innerHTML= positiveResult2;
                   break;
                }
            case (transferAmount > 50000 ): {
                    result.style.color = '#0b3b2e';
                   result.innerHTML= positiveResult3;
                   break;   
                } 
                default: {
					error.style.color = 'Red';
                    result.innerHTML= negativeResult;                    
				}
            }
}			
            
		

