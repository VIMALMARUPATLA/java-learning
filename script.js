// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Clipboard.js for copy buttons
new ClipboardJS('.copy-btn', {
    target: function(trigger) {
        return trigger.previousElementSibling;
    }
});

// Alert on successful copy
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Code copied to clipboard!');
    });
});

// Quiz functionality
document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const answers = {
        q1: 'a', // main()
        q2: 'b'  // char
    };
    
    let score = 0;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    
    if (q1 && q1.value === answers.q1) score++;
    if (q2 && q2.value === answers.q2) score++;
    
    const result = document.getElementById('quizResult');
    result.innerHTML = `Your score: ${score}/2. ${score === 2 ? 'Great job!' : 'Review the material and try again!'}`;
    result.className = `mt-3 ${score === 2 ? 'text-success' : 'text-warning'}`;
});