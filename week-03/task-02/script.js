document.addEventListener('DOMContentLoaded', function() {
    const assessBtn = document.getElementById('assessBtn');
    const assessmentResult = document.getElementById('Result');

    assessBtn.addEventListener('click', VotingEligibility);

    function VotingEligibility() {
        let userYears = prompt("Please enter your age in years:");
        
        if (isNaN(userYears) || parseInt(userYears) < 0) {
            displayResult("Invalid age. Please enter a positive number.");
        } else {
            let ageValue = parseInt(userYears);
            if (ageValue >= 18) {
                displayResult("You are eligible to participate in voting.");
            } else {
                displayResult("You are not yet eligible to vote.");
            }
        }
    }

    function displayResult(message) {
        assessmentResult.textContent = message;
    }
});