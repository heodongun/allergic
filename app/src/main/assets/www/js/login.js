document.getElementById('login-form').addEventListener('submit', function(event) {
        const id = document.getElementById('id').value;
        const password = document.getElementById('password').value;

        if (id.trim() === '' || password.trim() === '') {
            alert('모두 입력해주세요.');
            event.preventDefault(); // 폼 제출을 막음
        }
    });