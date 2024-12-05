console.log("Скрипт content.js загружен!");

window.onload = () => {
  console.log("Страница загружена, расширение активировано!");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  // Находим элемент по id (например, header)
  const header = document.querySelector("#usernavigation");

    if (header) {
        // Создаём кнопку
        const themeSwitch = document.createElement("button");
        themeSwitch.id = "theme-switch";
        themeSwitch.textContent = savedTheme === "dark" ? "Светлая тема" : "Тёмная тема";
        themeSwitch.style.cssText = `
        padding: 10px 20px;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        margin: 10px; /* Добавляем отступы для кнопки */
        `;

        // Добавляем кнопку в найденный хедер
        header.insertBefore(themeSwitch, header.firstChild);

        // Обработчик клика для переключения темы
        themeSwitch.addEventListener("click", () => {
            const isDark = document.body.classList.toggle("dark-theme");
        
            // Меняем текст кнопки
            themeSwitch.textContent = isDark ? "Светлая тема" : "Тёмная тема";
        
            // Сохраняем выбор пользователя
            localStorage.setItem("theme", isDark ? "dark" : "light");
        
            // Логируем текущий статус темы
            console.log(`Тема переключена на: ${isDark ? "Тёмная" : "Светлая"}`);
        });
    }

    // Находим изображение с классом "Logo"
    const logo = document.querySelector('.logo');

    if (logo) {
        // Меняем картинку
        console.log("Элемент найден, меняем изображение");
        logo.src = chrome.runtime.getURL("img/new-logo.svg");
        logo.style.width = "50px";
        logo.style.height = "50px";
        console.log("Логотип изменён!");
    } else {
        console.log("Изображение с классом 'Logo' не найдено.");
    }
}