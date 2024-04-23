document.addEventListener('DOMContentLoaded', function() {
    const studentDetails = JSON.parse(sessionStorage.getItem('studentDetails'));
    const obtainedMarks = sessionStorage.getItem('obtainedMarks');
    const quizTopic = sessionStorage.getItem('quizTopic');

    // Display student details
    if (studentDetails) {
        document.getElementById('studentName').innerText = studentDetails.name;
        document.getElementById('studentRoll').innerText = studentDetails.rollNumber;
        document.getElementById('studentBatch').innerText = studentDetails.batch;
        document.getElementById('studentSection').innerText = studentDetails.section;
    }

    // Display quiz topic
    if (quizTopic) {
        document.getElementById('quizTopic').innerText = quizTopic;
    }

    // Display obtained marks
    if (obtainedMarks) {
        document.getElementById('obtainedMarks').innerText = obtainedMarks;
    }
});
