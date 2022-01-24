
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

    const salaryAmount = parseFloat(amount.value);
    const calculatedIncomeTax = parseFloat(salaryAmount)*0.21;
    const calculatedSocialFee = function() {
        let res = 0;
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
    };
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
    
    const calculatedNetSalary = parseFloat(salaryAmount - calculatedIncomeTax);

    if(isFinite(calculatedNetSalary)){
        incomeTax.value = calculatedIncomeTax.toFixed(2);
        socialFee.value = calculatedSocialFee().toFixed(2);
        stampFee.value = calculatedStampFee().toFixed(2)
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