document.getElementById('complete').addEventListener('click', function() {
    var id = document.getElementById('id-input').value.trim();
    var password = document.getElementById('password-input').value.trim();
    var confirmPassword = document.getElementById('password-confirm-input').value.trim();

    // Check if id or password is empty
    if (id === '') {
        alert('아이디를 입력해주세요.');
        return;
    }
    if (password === '') {
        alert('비밀번호를 입력해주세요.');
        return;
    }

    // Check for spaces in id and password
    if (id.includes(' ')) {
        alert('아이디에는 공백이 포함될 수 없습니다.');
        return;
    }
    if (password.includes(' ')) {
        alert('비밀번호에는 공백이 포함될 수 없습니다.');
        return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
        return;
    }

    alert('비밀번호가 일치합니다. 가입을 완료합니다.');
    // 회원가입 로직을 추가한 후 페이지 이동
    window.location.href = 'login.html';
});