// Инициализация Telegram Web App SDK
const tg = window.Telegram.WebApp;
tg.expand();  // Раскрыть Web App на полный экран

// Отображение информации о пользователе
window.addEventListener('load', () => {
    const userInfo = document.getElementById('user-info');
    if (tg.initDataUnsafe.user) {
        const user = tg.initDataUnsafe.user;
        userInfo.innerHTML = `
            <p><strong>User:</strong> ${user.first_name} ${user.last_name || ''}</p>
            <p><strong>Username:</strong> @${user.username}</p>
            <p><strong>User ID:</strong> ${user.id}</p>
        `;
    } else {
        userInfo.textContent = 'User information not available.';
    }
});