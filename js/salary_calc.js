
document.querySelector('#salary-form').addEventListener('submit', function(e){
    document.querySelector('#results').style.display = 'none';
    document.querySelector('#loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault(0);0. 
});


function calculateResults(){
  
    const amount = document.getElementById('amount');
    const incomeTax = document.getElementById('income-tax'); 
    const socialFee = document.getElementById('social-fee');
    const stampFee = document.getElementById('stamp-fee'); 
    const netSalary = document.getElementById("net-salary");
    const selectedPension = document.getElementById("pension-select");
    const selectedSegemnt = document.getElementById("it-select");

    const salaryAmount = parseFloat(amount.value);
    //parseFloat(salaryAmount)*0.21;
    const calculatedIncomeTax = function() {
        let res = 0;
        if (selectedSegemnt.value == "Yes") {
            res = parseFloat(salaryAmount)*0.1;
            return res
        }else {
            res = parseFloat(salaryAmount)*0.21;
            return res
        }
    };
    const calculatedIncomeTaxRes = calculatedIncomeTax();
    const calculatedSocialFee = function() {
        let res = 0;
        if (selectedPension.value == "Yes") {
            if (salaryAmount < 500001) {
                res = salaryAmount* 0.045;
                return res
            }else if (salaryAmount < 1020000) {
                res =  salaryAmount* 0.1 - 27500;
                return res
            }else {
                res =  1020000* 0.1 - 27500;
                return res
            } 
        }else {
            res = 0;
            return res
        }
        
    };
    const calculatedSocialFeeRes = calculatedSocialFee();

    const calculatedStampFee = function() {
        let res = 0;
        if (salaryAmount < 100001) {
            res = 1500;
            return res
        }else if (salaryAmount < 200001) {
            res = 3000;
            return res
        }else if (salaryAmount < 500001) {
            res = 5500;
            return res
        }else if (salaryAmount < 1000001) {
            res = 8500;
            return res
        }else {
            res = 15000;
            return res
        }
    };

    const calculatedStampFeeRes = calculatedStampFee();
    
    const calculatedNetSalary = parseFloat(salaryAmount - calculatedIncomeTaxRes - calculatedSocialFeeRes - calculatedStampFeeRes);

    if(isFinite(calculatedNetSalary)){
        incomeTax.value = calculatedIncomeTaxRes.toFixed(2);
        socialFee.value = calculatedSocialFeeRes.toFixed(2);
        stampFee.value = calculatedStampFeeRes.toFixed(2)
        netSalary.value = calculatedNetSalary.toFixed(2);

       
        document.querySelector('#results').style.display = 'block';
        document.querySelector('#loading').style.display = 'none';
    } else {

        showError('Please check your inputs');
    }
}

function showError(error){

    document.querySelector('#results').style.display = 'none';
    document.querySelector('#loading').style.display = 'none';

    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';
    
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 4000);
}

function clearError(){
    document.querySelector('.alert').remove();
}