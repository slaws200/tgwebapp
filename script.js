const tg = window.Telegram.WebApp;
        tg.expand(); // Раскрыть Web App на полный экран

        // Функция для переключения вкладок
        function switchTab(tab) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelector(`#${tab}`).classList.add('active');

            document.querySelectorAll('.tabbar button').forEach(button => {
                button.classList.remove('active');
            });
            document.querySelector(`#${tab}-tab`).classList.add('active');
        }

        // Отображение информации о пользователе
        window.addEventListener('load', () => {
            const userInfo = document.getElementById('user-info');
            if (tg.initDataUnsafe.user) {
                const user = tg.initDataUnsafe.user;
                userInfo.innerHTML = `
                    <h2>Hello, ${user.first_name}!</h2>
                    <p><strong>Username:</strong> @${user.username || 'Not available'}</p>
                    <p><strong>User ID:</strong> ${user.id}</p>
                `;
            } else {
                userInfo.textContent = 'User information not available.';
            }
        });