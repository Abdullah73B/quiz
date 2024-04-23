document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const answers = {
            q1: '4',
            q2: 'b', // Maulana Bashir Farooq Qadri
            q3: 'c', // Hanif Mohammad
            q4: 'a'  // Jasmine
        };

        const questionCount = 4; // Total number of questions
        const totalMarks = 100; // Total marks
        const marksPerQuestion = totalMarks / questionCount; // Marks per question

        let obtainedMarks = 0;
        for (let i = 1; i <= questionCount; i++) {
            const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
            if (selectedAnswer && selectedAnswer.value === answers[`q${i}`]) {
                obtainedMarks += marksPerQuestion;
            }
        }

        sessionStorage.setItem('obtainedMarks', obtainedMarks);

        window.location.href = 'results.html';
    });
});
