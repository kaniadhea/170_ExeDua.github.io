document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Not specified';
    const country = document.getElementById('country').value;
    const feedback = document.getElementById('feedback').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Survey Results</h3>
