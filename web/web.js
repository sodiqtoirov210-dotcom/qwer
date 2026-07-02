const openBtn = document.getElementById('openLoginBtn');
const modal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeModalBtn');
const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('usernameInput');

const passwordModal = document.getElementById('passwordModal');
const closeModal2Btn = document.getElementById('passwordclose');
const createAccountBtn = document.getElementById('createAccountBtn');
const passwordInput = document.getElementById('password1');
const confirmPasswordInput = document.getElementById('password2');

let selectedAvatar = null;

// 1. "Войти" tugmasi bosilganda 1-modalni ochish
openBtn.addEventListener('click', function() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// 2. "X" tugmasi bosilganda 1-modalni yopish
closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// 3. Orqa fonga bosilganda yopish (1-modal)
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// 4. ESC tugmasi — qaysi modal ochiq bo'lsa, o'shani yopadi
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (passwordModal.classList.contains('active')) {
            passwordModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// 5. 1-modal ichidagi "Войти" tugmasi — ism va avatar tekshiriladi, keyin 2-modal ochiladi
loginBtn.addEventListener('click', function() {
    const name = usernameInput.value.trim();

    if (name === '') {
        alert('Iltimos, ismingizni kiriting!');
        return;
    }

    if (!selectedAvatar) {
        alert('Iltimos, avatar tanlang!');
        return;
    }

    modal.classList.remove('active');
    passwordModal.classList.add('active');
});

// 6. Enter tugmasi bosilganda ham kirish
usernameInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        loginBtn.click();
    }
});

// 7. AVATARLARNI TANLASH
const avatars = document.querySelectorAll('.avatar-list img');

avatars.forEach(function(img) {
    img.addEventListener('click', function() {
        avatars.forEach(function(a) {
            a.classList.remove('selected');
        });
        this.classList.add('selected');
        selectedAvatar = this.src;
    });
});

// 8. 2-modalni yopish (X tugmasi)
closeModal2Btn.addEventListener('click', function() {
    passwordModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// 9. Orqa fonga bosilganda yopish (2-modal)
passwordModal.addEventListener('click', function(e) {
    if (e.target === passwordModal) {
        passwordModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
// 10. "Создать аккаунт" tugmasi (Muvaffaqiyatli yakunlash qo'shildi)
if(createAccountBtn) {
    createAccountBtn.addEventListener('click', function() {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (password === '' || confirmPassword === '') {
            alert("Iltimos, parolni to'liq kiriting!");
            return;
        }

        if (password !== confirmPassword) {
            alert('Parollar mos kelmadi!');
            return;
        }

        if (password.length < 6) {
            alert("Parol kamida 6 ta belgidan iborat bo'shishi kerak!");
            return;
        }

        // Barcha shartlar bajarilganda modal yopiladi va xabar chiqadi
        const foydalanuvchiIsmi = usernameInput ? usernameInput.value.trim() : "Foydalanuvchi";
        alert('🎉 Akkaunt yaratildi! Xush kelibsiz, ' + foydalanuvchiIsmi);
        
        passwordModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}