console.log("checking");
document.addEventListener("DOMContentLoaded", () => {
  //   функции для первого блока-карты;
  Ander_1();
  Ander_2();
  Ander_3();
  Ander_4();
  Ander_5();
  Ander_6();
  Ander_7();
  Ander_8();
  Text_Ander();
  Color_Ander_1();
  Color_Ander_2();
  // функции для второго блока
  Bibiki_1();
  Bibiki_2();
  //   функции для третьего блока
  Ander_Kranik();
  Ander_textiki();
  Ander_cifri();
  // функции седьмого блока
  Ander_up();
  // функции для подвала
  Ander_podval();
});

function Ander_1() {
  const clickableDiv = document.getElementById("clickable-div_1");
  const hiddenDiv = document.getElementById("hidden-div_1");

  // Добавляем обработчик события клика на первый div
  clickableDiv.addEventListener("click", function () {
    // Проверяем, виден ли второй div
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
      hiddenDiv.style.display = "flex"; // Показываем второй div
    } else {
      hiddenDiv.style.display = "none"; // Скрываем второй div, если он уже виден
    }
  });
}
function Ander_2() {
  const clickableDiv = document.getElementById("clickable-div_2");
  const hiddenDiv = document.getElementById("hidden-div_2");

  // Добавляем обработчик события клика на первый div
  clickableDiv.addEventListener("click", function () {
    // Проверяем, виден ли второй div
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
      hiddenDiv.style.display = "flex"; // Показываем второй div
    } else {
      hiddenDiv.style.display = "none"; // Скрываем второй div, если он уже виден
    }
  });
}
function Ander_3() {
  const clickableDiv = document.getElementById("clickable-div_3");
  const hiddenDiv = document.getElementById("hidden-div_3");

  // Добавляем обработчик события клика на первый div
  clickableDiv.addEventListener("click", function () {
    // Проверяем, виден ли второй div
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
      hiddenDiv.style.display = "flex"; // Показываем второй div
    } else {
      hiddenDiv.style.display = "none"; // Скрываем второй div, если он уже виден
    }
  });
}
function Ander_4() {
  const clickableDiv = document.getElementById("clickable-div_4");
  const hiddenDiv = document.getElementById("hidden-div_4");

  // Добавляем обработчик события клика на первый div
  clickableDiv.addEventListener("click", function () {
    // Проверяем, виден ли второй div
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
      hiddenDiv.style.display = "flex"; // Показываем второй div
    } else {
      hiddenDiv.style.display = "none"; // Скрываем второй div, если он уже виден
    }
  });
}
function Ander_5() {
  const clickableDiv = document.getElementById("clickable-div_5");
  const hiddenDiv = document.getElementById("hidden-div_5");

  // Добавляем обработчик события клика на первый div
  clickableDiv.addEventListener("click", function () {
    // Проверяем, виден ли второй div
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
      hiddenDiv.style.display = "flex"; // Показываем второй div
    } else {
      hiddenDiv.style.display = "none"; // Скрываем второй div, если он уже виден
    }
  });
}
function Ander_6() {
  const clickableDiv = document.getElementById("clickable-div_6");
  const hiddenDiv = document.getElementById("hidden-div_6");

  // Добавляем обработчик события клика на первый div
  clickableDiv.addEventListener("click", function () {
    // Проверяем, виден ли второй div
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
      hiddenDiv.style.display = "flex"; // Показываем второй div
    } else {
      hiddenDiv.style.display = "none"; // Скрываем второй div, если он уже виден
    }
  });
}
function Text_Ander() {
  // Находим элемент, на который будем нажимать
  const clickableDiv = document.getElementById("clickable-div_6");

  // Находим все целевые элементы
  const targetDivs = document.querySelectorAll(".target");

  // Добавляем обработчик события "click"
  clickableDiv.addEventListener("click", function () {
    // Переключаем класс "active" у всех целевых элементов
    targetDivs.forEach((div) => {
      div.classList.toggle("active");
    });
  });
}
function Color_Ander_1() {
  // Находим элемент, на который будем нажимать
  const clickableDiv = document.getElementById("clickable-div_6");
  //   const element = document.querySelector("#hidden_bibiki_1");
  // Находим все целевые элементы
  const targetDivs = document.querySelectorAll(".color_1");

  // Добавляем обработчик события "click"
  //   clickableDiv.addEventListener("click", () => {
  // Переключаем класс "active" у всех целевых элементов
  // element.classList.toggle("");
  // console.log("До переключения:", element.classList.contains("hidden"));
  // element.classList.toggle("hidden");
  // console.log("После переключения:", element.classList.contains("hidden"));
  clickableDiv.addEventListener("click", function () {
    // Переключаем класс "active" при нажатии
    targetDivs.forEach((div) => {
      div.classList.toggle("active");
    });
  });
}
function Color_Ander_2() {
  // Находим элемент, на который будем нажимать
  const clickableDiv = document.getElementById("clickable-div_6");

  // Находим все целевые элементы
  const targetDivs = document.querySelectorAll(".color_2");

  // Добавляем обработчик события "click"
  clickableDiv.addEventListener("click", function () {
    // Переключаем класс "active" у всех целевых элементов
    targetDivs.forEach((div) => {
      div.classList.toggle("active");
    });
  });
}
function Ander_7() {
  const clickableDiv = document.getElementById("clickable-div_6");
  const hiddenDiv = document.getElementById("hidden-div_7");

  // Добавляем обработчик события клика на первый div
  clickableDiv.addEventListener("click", function () {
    // Проверяем, виден ли второй div
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
      hiddenDiv.style.display = "flex"; // Показываем второй div
    } else {
      hiddenDiv.style.display = "none"; // Скрываем второй div, если он уже виден
    }
  });
}
function Ander_8() {
  const clickableDiv = document.getElementById("clickable-div_6");
  const hiddenDiv = document.getElementById("hidden-div_8");

  // Добавляем обработчик события клика на первый div
  clickableDiv.addEventListener("click", function () {
    // Проверяем, виден ли второй div
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
      hiddenDiv.style.display = "flex"; // Показываем второй div
    } else {
      hiddenDiv.style.display = "none"; // Скрываем второй div, если он уже виден
    }
  });
}
function Bibiki_1() {
  const clickableDiv = document.getElementById("clickable_bibiki_1");
  const hiddenDiv = document.getElementById("hidden_bibiki_1");

  // Добавляем обработчик события клика на первый div
  clickableDiv.addEventListener("click", function () {
    // Проверяем, виден ли второй div
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
      hiddenDiv.style.display = "flex"; // Показываем второй div
    } else {
      hiddenDiv.style.display = "none"; // Скрываем второй div, если он уже виден
    }
  });
}
function Bibiki_2() {
  const clickableDiv = document.getElementById("clickable_bibiki_2");
  const hiddenDiv = document.getElementById("hidden_bibiki_2");

  // Добавляем обработчик события клика на первый div
  clickableDiv.addEventListener("click", function () {
    // Проверяем, виден ли второй div
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
      hiddenDiv.style.display = "flex"; // Показываем второй div
    } else {
      hiddenDiv.style.display = "none"; // Скрываем второй div, если он уже виден
    }
  });
}
// Находим элемент
function Ander_Kranik() {
  const clickableDiv = document.getElementById("kranik");

  // Переменная для хранения текущего угла
  let currentAngle = -90;

  // Добавляем обработчик события "click"
  clickableDiv.addEventListener("click", function () {
    // Увеличиваем угол на 90 градусов
    currentAngle += 90;

    // Если угол достиг 360, возвращаем его к 0
    if (currentAngle >= 360) {
      currentAngle = 0;
    }

    // Применяем поворот
    clickableDiv.style.transform = `rotate(${currentAngle}deg)`;
  });
}
function Ander_textiki() {
  // Находим элементы
  const clickableDiv = document.getElementById("kranik");
  const secondDiv = document.getElementById("textik_1");
  const thirdDiv = document.getElementById("textik_2");
  const fourthDiv = document.getElementById("textik_3");
  const fifthDiv = document.getElementById("textik_4");
  // Создаем переменную для отслеживания состояния
  let currentState = 0;

  // Добавляем обработчик события "click"
  clickableDiv.addEventListener("click", function () {
    // Увеличиваем состояние
    currentState++;

    // Логика переключения
    if (currentState === 1) {
      // Первое нажатие: показываем второй div
      secondDiv.style.display = "flex";
      thirdDiv.style.display = "none";
      fourthDiv.style.display = "none";
      fifthDiv.style.display = "none";
    } else if (currentState === 2) {
      // Второе нажатие: скрываем второй div, показываем третий
      secondDiv.style.display = "none";
      thirdDiv.style.display = "flex";
      fourthDiv.style.display = "none";
      fifthDiv.style.display = "none";
    } else if (currentState === 3) {
      // Третье нажатие: скрываем третий div, показываем четвертый
      secondDiv.style.display = "none";
      thirdDiv.style.display = "none";
      fourthDiv.style.display = "flex";
      fifthDiv.style.display = "none";
    } else if (currentState === 4) {
      // Четвертое нажатие: скрываем четвертый div
      secondDiv.style.display = "none";
      thirdDiv.style.display = "none";
      fourthDiv.style.display = "none";
      fifthDiv.style.display = "flex";
    } else if (currentState === 5) {
      // Пятое нажатие: скрываем четвертый div
      secondDiv.style.display = "flex";
      thirdDiv.style.display = "none";
      fourthDiv.style.display = "none";
      fifthDiv.style.display = "none";
      // Сбрасываем состояние
      currentState = 1;
    }
  });
}
function Ander_cifri() {
  // Находим элементы
  const clickableDiv = document.getElementById("kranik");
  const textDiv = document.getElementById("ciferki");

  // Массив текстов
  const texts = ["09 00", "12 00", "17 00", "22 00"];

  // Переменная для отслеживания текущего состояния
  let currentState = 0;

  // Добавляем обработчик события "click"
  clickableDiv.addEventListener("click", function () {
    // Сначала скрываем текст
    textDiv.style.opacity = "0";

    // Через короткую задержку меняем текст
    setTimeout(() => {
      textDiv.textContent = texts[currentState];

      // Увеличиваем состояние с циклическим переключением
      currentState = (currentState + 1) % texts.length;

      // Показываем текст с анимацией
      textDiv.style.opacity = "1";
    }, 500); // Задержка соответствует длительности анимации
  });
}
function Ander_up() {
  // Находим элемент
  const movableDiv = document.getElementById("otkritie");

  // Переменная для отслеживания состояния
  let isMovedUp = false;

  // Добавляем обработчик события "click"
  movableDiv.addEventListener("click", function () {
    if (isMovedUp) {
      // Возвращаемся на исходную позицию
      movableDiv.style.transform = "translateY(0)";
    } else {
      // Перемещаем вверх
      movableDiv.style.transform = "translateY(-29vw)";
    }

    // Инвертируем состояние
    isMovedUp = !isMovedUp;
  });
}
function Ander_podval() {
  // Находим элемент
  const movableDiv = document.getElementById("traktor");

  // Переменная для отслеживания состояния
  let isMovedRight = false;

  // Добавляем обработчик события "click"
  movableDiv.addEventListener("click", function () {
    if (isMovedRight) {
      // Возвращаемся на исходную позицию
      movableDiv.style.left = "0";
    } else {
      // Перемещаем вправо на 70vw
      movableDiv.style.left = "67vw";
    }

    // Инвертируем состояние
    isMovedRight = !isMovedRight;
  });
}
