// --- 1. Данные для работы (Университеты) ---
const universities = [
    { 
        id: 1, 
        name: 'Казахский Национальный Университет', 
        city: 'Almaty', 
        program: 'IT', 
        rating: 4.5, 
        image: 'https://via.placeholder.com/300x220?text=KAZNU_Almaty',
        details: {
            founded: 1934, 
            students: 25000, 
            faculties: ['IT-Технологии', 'Философия', 'Естественные Науки']
        }
    },
    { 
        id: 2, 
        name: 'Евразийский Национальный Университет', 
        city: 'Astana', 
        program: 'Law', 
        rating: 4.2, 
        image: 'https://via.placeholder.com/300x220?text=ENU_Astana',
        details: {
            founded: 1996, 
            students: 20000, 
            faculties: ['Юриспруденция', 'Экономика', 'Международные Отношения']
        }
    },
    { 
        id: 3, 
        name: 'Международный IT Университет', 
        city: 'Almaty', 
        program: 'IT', 
        rating: 4.8, 
        image: 'https://via.placeholder.com/300x220?text=IITU_Almaty',
        details: {
            founded: 2009, 
            students: 5000, 
            faculties: ['Кибербезопасность', 'Программирование', 'Дизайн']
        }
    },
];

let comparisonList = []; // Массив для сравнения

// --- 2. Функции для UI: Карточки и Фильтры ---

// Загружает карточки университетов на страницу
function renderUniversities(list) {
    const container = document.getElementById('university-list');
    container.innerHTML = ''; // Очищаем контейнер

    list.forEach(uni => {
        const card = document.createElement('div');
        card.className = 'uni-card';
        
        // Кнопка "Сравнить"
        const compareBtnText = comparisonList.includes(uni.id) ? 'Убрать' : 'Сравнить';
        const compareBtnClass = comparisonList.includes(uni.id) ? 'active' : '';

        card.innerHTML = `
            <img src="${uni.image}" alt="${uni.name}">
            <div class="uni-card-content">
                <h3>${uni.name}</h3>
                <p>Город: <b>${uni.city}</b> | Программа: <b>${uni.program}</b></p>
                <p>Рейтинг: ${uni.rating} ⭐</p>
                <button onclick="openDetailsModal(${uni.id})">Детали</button>
                <button class="${compareBtnClass}" onclick="toggleComparison(${uni.id})">${compareBtnText}</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Применяет фильтры
function applyFilters() {
    const city = document.getElementById('city-filter').value;
    const program = document.getElementById('program-filter').value;

    const filteredList = universities.filter(uni => {
        const cityMatch = !city || uni.city === city;
        const programMatch = !program || uni.program === program;
        return cityMatch && programMatch;
    });

    renderUniversities(filteredList);
}

// --- 3. Функции для UI: Модальные Окна ---

// Открывает модальное окно с деталями университета
function openDetailsModal(id) {
    const uni = universities.find(u => u.id === id);
    if (!uni) return;

    const detailsContent = document.getElementById('modal-details');
    detailsContent.innerHTML = `
        <h2>${uni.name}</h2>
        <p><b>Город:</b> ${uni.city}</p>
        <p><b>Оценка:</b> ${uni.rating} ⭐</p>
        <hr>
        <div class="uni-sections">
            <h4>Основные Сведения</h4>
            <ul>
                <li>Год основания: ${uni.details.founded}</li>
                <li>Примерное количество студентов: ${uni.details.students}</li>
            </ul>
            <h4>Популярные Факультеты</h4>
            <ul>
                ${uni.details.faculties.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
    `;
    document.getElementById('details-modal').style.display = 'block';
}

// Закрывает любое модальное окно
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// --- 4. Функции Сравнения ---

// Добавляет/удаляет университет из списка сравнения
function toggleComparison(id) {
    const index = comparisonList.indexOf(id);
    if (index > -1) {
        comparisonList.splice(index, 1); // Удалить
    } else {
        comparisonList.push(id); // Добавить
    }
    renderComparisonTable(); // Перерисовать таблицу
    applyFilters(); // Обновить вид кнопок на карточках
}

// Рендеринг таблицы сравнения
function renderComparisonTable() {
    const tableContainer = document.getElementById('comparison-table');
    const unisToCompare = universities.filter(uni => comparisonList.includes(uni.id));

    if (unisToCompare.length === 0) {
        tableContainer.innerHTML = '<p>Выберите университеты, нажав "Сравнить", чтобы увидеть таблицу.</p>';
        return;
    }

    let tableHTML = '<table class="comparison-table">';
    // Заголовок (названия университетов)
    tableHTML += '<thead><tr><th>Параметр</th>';
    unisToCompare.forEach(uni => {
        tableHTML += `<th>${uni.name} <button onclick="toggleComparison(${uni.id})" style="background-color: #f44336; padding: 5px 10px;">X</button></th>`;
    });
    tableHTML += '</tr></thead>';

    // Тело таблицы (параметры)
    tableHTML += '<tbody>';
    
    // Рейтинг
    tableHTML += `<tr><th>Рейтинг (⭐)</th>`;
    unisToCompare.forEach(uni => tableHTML += `<td>${uni.rating}</td>`);
    tableHTML += `</tr>`;
    
    // Год основания
    tableHTML += `<tr><th>Год Основания</th>`;
    unisToCompare.forEach(uni => tableHTML += `<td>${uni.details.founded}</td>`);
    tableHTML += `</tr>`;
    
    // Популярные программы (просто для примера)
    tableHTML += `<tr><th>Программа</th>`;
    unisToCompare.forEach(uni => tableHTML += `<td>${uni.program}</td>`);
    tableHTML += `</tr>`;

    tableHTML += '</tbody></table>';
    tableContainer.innerHTML = tableHTML;
}

// --- 5. Логика Чат-бота Nurym (Текст и Голос) ---

const chatModal = document.getElementById('chat-modal');
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');
const micBtn = document.getElementById('mic-btn');
const nurymResponses = {
    'привет': 'Привет! Я Нурым, ваш ассистент по выбору университета. Чем я могу помочь?',
    'здравствуйте': 'Здравствуйте! Спрашивайте о рейтингах, программах или сравнении ВУЗов.',
    'как дела': 'У меня все отлично, спасибо! Готов искать информацию. А у вас?',
    'спасибо': 'Рад был помочь! Обращайтесь еще.',
    'пока': 'До свидания! Желаю удачи в поиске!',
};
let isListening = false;

// Включает/выключает модальное окно чата
function toggleChat(show) {
    chatModal.style.display = show ? 'flex' : 'none';
}
document.getElementById('nurym-chat-btn').onclick = () => toggleChat(true);

// Добавляет сообщение в чат
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    chatBody.appendChild(messageDiv);
    // Прокрутка вниз
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Отправка текстового сообщения
function sendChatMessage() {
    const text = chatInput.value.trim();
    if (text === '') return;

    addMessage(text, 'user');
    chatInput.value = '';

    // Обработка ответа Нурыма
    processNurymResponse(text);
}

// Голосовой синтез (Нурым говорит)
const synth = window.speechSynthesis;
function speak(text) {
    if (!synth.speaking) {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'ru-RU'; 
        synth.speak(utter);
    }
}

// Обработка запроса и ответ Нурыма
function processNurymResponse(command, isVoice = false) {
    const lowerCommand = command.toLowerCase().trim();
    let response = 'Я не совсем понял. Попробуйте спросить о "рейтинге" или "программах".';

    // Поиск простого ответа в словаре
    for (const key in nurymResponses) {
        if (lowerCommand.includes(key)) {
            response = nurymResponses[key];
            break;
        }
    }
    
    addMessage(response, 'nurym');
    
    // Если запрос был голосовой или включен режим голосового ответа, Нурым говорит
    if (isVoice) {
        speak(response);
    }
}


// --- 6. Web Speech API (Голосовой ввод/вывод) ---

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'ru-RU';
    recognition.continuous = false;
    recognition.interimResults = false;

    // Сработал успешный результат распознавания
    recognition.onresult = function(event) {
        const last = event.results.length - 1;
        const command = event.results[last][0].transcript;
        
        addMessage(`🎤 ${command}`, 'user');
        
        // Обрабатываем команду как голосовой ввод
        processNurymResponse(command, true);
    }

    // Распознавание закончилось
    recognition.onend = function() {
        micBtn.style.backgroundColor = '#8d4e10';
        isListening = false;
    }

    // Ошибка распознавания
    recognition.onerror = function(event) {
        addMessage(`Ошибка микрофона: ${event.error}`, 'nurym');
        micBtn.style.backgroundColor = '#8d4e10';
        isListening = false;
    }

    // Обработчик кнопки микрофона
    micBtn.onclick = function() {
        if (isListening) {
            recognition.stop();
        } else {
            try {
                recognition.start();
                micBtn.style.backgroundColor = '#f44336'; // Красный, когда слушает
                isListening = true;
                addMessage('Слушаю...', 'nurym');
            } catch(e) {
                // Предотвращение ошибки, если распознавание уже запущено
                console.error(e);
            }
        }
    }

} else {
    // Если браузер не поддерживает голосовой ввод
    micBtn.style.display = 'none';
    console.log('Голосовой ввод не поддерживается вашим браузером.');
}


// --- 7. Инициализация при загрузке страницы ---
window.onload = function() {
    renderUniversities(universities); // Загружаем все карточки при старте
    renderComparisonTable(); // Инициализируем пустую таблицу
    
    // Закрытие модального окна по клику вне его (только для деталей)
    window.onclick = function(event) {
        if (event.target == document.getElementById('details-modal')) {
            closeModal('details-modal');
        }
    }
};
