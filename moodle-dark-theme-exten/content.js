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
    header.appendChild(themeSwitch);

    // Обработчик клика для переключения темы
    themeSwitch.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-theme");
      themeSwitch.textContent = isDark ? "Светлая тема" : "Тёмная тема";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  } else {
    console.error("Элемент с id 'header' не найден.");
  }
};
