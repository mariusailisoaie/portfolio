document.getElementById('loan-form').addEventListener('submit', (e) => {
  document.querySelector('#results').style.display = 'none';

  document.querySelector('#loading').style.display = 'block';

  setTimeout(calculateLoan, 2000);

  e.preventDefault();
});

const calculateLoan = () => {
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const yearsToPay = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const totalPayYears = parseFloat(yearsToPay.value) * 12;

  const x = Math.pow(1 + calculatedInterest, totalPayYears);
  const monthlySum = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthlySum)) {
    monthlyPayment.value = monthlySum.toFixed(2);
    totalPayment.value = (monthlySum * totalPayYears).toFixed(2);
    totalInterest.value = ((monthlySum * totalPayYears) - principal).toFixed(2);

    document.querySelector('#results').style.display = 'block';
    document.querySelector('#loading').style.display = 'none';
  } else {
    showError('Please check the data...');
  }
}

const showError = (errorMsg) => {
  document.querySelector('#results').style.display = 'none';
  document.querySelector('#loading').style.display = 'none';

  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(errorMsg));

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  card.insertBefore(errorDiv, heading);

  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}