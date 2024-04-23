document.addEventListener('DOMContentLoaded', function() {
    const detailsForm = document.getElementById('detailsForm');

    detailsForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const rollNumber = document.getElementById('rollNumber').value;
        const name = document.getElementById('name').value;
        const batch = document.getElementById('batch').value;
        const section = document.getElementById('section').value;

        const studentDetails = {
            rollNumber,
            name,
            batch,
            section
        };

        sessionStorage.setItem('studentDetails', JSON.stringify(studentDetails));

        window.location.href = 'quiz.html';
    });
});
