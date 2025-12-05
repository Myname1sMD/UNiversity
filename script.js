// =================================================================
// ЧАСТЬ 1: БАЗА ДАННЫХ УНИВЕРСИТЕТОВ (UNIVERSITY DATA)
// =================================================================

const universityData = [
    {
        id: "nu",
        name: "Назарбаев Университет (НУ)",
        city: "Астана",
        type: "Многопрофильный",
        sections: {
            mission_history: {
                achievements: ["Ведущий исследовательский университет, работающий по принципу меритократии."],
                history_summary: "Основан в 2010 году. Внедрил лучшие международные практики и программы."
            },
            programs: {
                list: [
                    {
                        program_name: "Инженерия",
                        subjects_required: ["Математика", "Физика", "Химия"],
                        description: "Подготовка инженеров в различных областях: от гражданского строительства до робототехники."
                    },
                    {
                        program_name: "Социальные науки",
                        subjects_required: ["История", "География"],
                        description: "Программы по международным отношениям, экономике и политологии."
                    }
                ]
            }
        }
    },
    {
        id: "kbtu",
        name: "Казахстанско-Британский технический университет (КБТУ)",
        city: "Алматы",
        type: "Технический",
        sections: {
            mission_history: {
                achievements: ["Лидер в подготовке IT-специалистов и кадров для нефтегазовой отрасли."],
                history_summary: "Основан для внедрения лучших британских образовательных стандартов в технической сфере."
            },
            programs: {
                list: [
                    {
                        program_name: "Информационные системы",
                        subjects_required: ["Математика", "Физика", "Информатика"],
                        description: "Программы по разработке ПО, анализу данных и кибербезопасности."
                    },
                    {
                        program_name: "Нефтегазовое дело",
                        subjects_required: ["Математика", "Физика", "География"],
                        description: "Подготовка инженеров для разведки, добычи и переработки нефти и газа."
                    }
                ]
            }
        }
    },
    {
        id: "kaznu",
        name: "Казахский национальный университет им. аль-Фараби (КазНУ)",
        city: "Алматы",
        type: "Многопрофильный",
        sections: {
            mission_history: {
                achievements: ["Входит в топ-500 лучших университетов мира (QS World University Rankings)."],
                history_summary: "Крупнейший классический университет Казахстана с вековыми традициями."
            },
            programs: {
                list: [
                    {
                        program_name: "Медицина",
                        subjects_required: ["Биология", "Химия"],
                        description: "Классическая программа подготовки врачей, фармацевтов и исследователей."
                    },
                    {
                        program_name: "Юриспруденция",
                        subjects_required: ["Всемирная история", "Человек. Общество. Право"],
                        description: "Подготовка высококвалифицированных юристов, адвокатов и судей."
                    }
                ]
            }
        }
    },
    {
        id: "ktu",
        name: "Карагандинский технический университет (КТУ)",
        city: "Караганда",
        type: "Технический",
        sections: {
            mission_history: {
                achievements: ["Является одним из лидеров среди технических и агротехнических университетов Казахстана."],
                history_summary: "Один из старейших и крупнейших технических университетов в стране, сфокусированный на горном деле, IT, машиностроении и транспорте."
            },
            programs: {
                list: [
                    {
                        program_name: "Вычислительная техника и программное обеспечение",
                        subjects_required: ["Математика", "Физика", "Информатика"],
                        description: "Подготовка специалистов в области разработки ПО, компьютерных систем и сетей."
                    },
                    {
                        program_name: "Горное дело и Геология",
                        subjects_required: ["Математика", "Физика", "География"],
                        description: "Специализация в разработке месторождений, маркшейдерском деле и геодезии."
                    },
                    {
                        program_name: "Автоматизация и управление",
                        subjects_required: ["Математика", "Физика"],
                        description: "Подготовка инженеров по автоматизации производственных процессов и робототехнике."
                    },
                    {
                        program_name: "Транспортная техника и технологии",
                        subjects_required: ["Математика", "Физика"],
                        description: "Программы для специалистов в сфере автомобильного и промышленного транспорта."
                    }
                ]
            }
        }
    }
];

// =================================================================
// ЧАСТЬ 2: ФУНКЦИИ УПРАВЛЕНИЯ КАТАЛОГОМ
// =================================================================

function renderCatalog(universities) {
    const catalogContainer = document.getElementById('catalog-container');
    if (!catalogContainer) return;
    
    catalogContainer.innerHTML = ''; // Очистка перед рендерингом

    if (universities.length === 0) {
        catalogContainer.innerHTML = '<p class="no-results">По вашему запросу ничего не найдено.</p>';
        return;
    }

    universities.forEach(uni => {
        const uniCard = document.createElement('div');
        uniCard.className = 'university-card';
        uniCard.innerHTML = `
            <h3>${uni.name} (${uni.city})</h3>
            <p><strong>Тип:</strong> ${uni.type}</p>
            <p class="achievements"><strong>Достижения:</strong> ${uni.sections.mission_history.achievements[0]}</p>
            
            <div class="program-list">
                <h4>Основные программы:</h4>
                ${uni.sections.programs.list.map(p => `
                    <div class="program-item">
                        <span class="program-name">${p.program_name}</span>
                        <span class="subjects-required"> (Предметы: ${p.subjects_required.join(', ')})</span>
                    </div>
                `).join('')}
            </div>
        `;
        catalogContainer.appendChild(uniCard);
    });
}

// =================================================================
// ЧАСТЬ 3: ФИЛЬТРАЦИЯ И ОБРАБОТКА ФОРМЫ
// =================================================================

function applyFilters() {
    const cityFilter = document.getElementById('city-filter').value;
    const typeFilter = document.getElementById('type-filter').value;
    const subjectFilter = document.getElementById('subject-filter').value;

    const filteredData = universityData.filter(uni => {
        const cityMatch = cityFilter === 'all' || uni.city === cityFilter;
        const typeMatch = typeFilter === 'all' || uni.type === typeFilter;
        
        let subjectMatch = true;
        if (subjectFilter !== 'all') {
            subjectMatch = uni.sections.programs.list.some(p => 
                p.subjects_required.includes(subjectFilter)
            );
        }

        return cityMatch && typeMatch && subjectMatch;
    });

    renderCatalog(filteredData);
}

// Инициализация каталога и привязка фильтров при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog(universityData);
    
    // Привязка обработчиков событий к фильтрам
    const cityFilter = document.getElementById('city-filter');
    const typeFilter = document.getElementById('type-filter');
    const subjectFilter = document.getElementById('subject-filter');

    if (cityFilter) cityFilter.addEventListener('change', applyFilters);
    if (typeFilter) typeFilter.addEventListener('change', applyFilters);
    if (subjectFilter) subjectFilter.addEventListener('change', applyFilters);
});


// =================================================================
// ЧАСТЬ 4: ЛОГИКА ЧАТ-БОТА NURUM AI
// =================================================================

// Новые переменные для отслеживания состояния
let chatState = 'default'; // default, asking_major, asking_subject
let chatResponseData = {}; // Для сбора ответов пользователя

// Получение элементов (проверка на их существование выполняется ниже при привязке событий)
const chatButton = document.getElementById('nurym-chat-btn');
const chatWindow = document.getElementById('nurym-chat-window');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('send-btn');

// -----------------------------------------------------------------
// Функции интерфейса чата
// -----------------------------------------------------------------

function toggleChat() {
    if (!chatWindow) return; // Защита от null
    
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open')) {
        // Приветствие при открытии
        if (chatMessages && chatMessages.children.length === 0) {
            appendMessage('Nurym AI', "Приветствую! Я **Nurym AI**, ваш консультант по выбору ВУЗа. Я могу помочь выбрать профессию, найти университет или рассказать о требованиях ЕНТ. С чего начнем?");
        }
        if (chatInput) chatInput.focus();
    }
}

function appendMessage(sender, text) {
    if (!chatMessages) return; // Защита от null

    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'User' ? 'user-message' : 'nurym-message';
    
    const textNode = document.createElement('p');
    // Замена **текст** на <b>текст</b>
    textNode.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'); 
    messageDiv.appendChild(textNode);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// -----------------------------------------------------------------
// Логика обработки запросов
// -----------------------------------------------------------------

/**
 * Генерирует ответ Nurym AI на основе ключевых слов и состояния чата.
 * @param {string} query - Запрос пользователя.
 * @returns {string} Ответ Nurym AI.
 */
function generateAiResponse(query) {
    const lowerQuery = query.toLowerCase().trim();
    let response = '';

    // --- Обработка состояния выбора профессии (ШАГ 2) ---
    if (chatState === 'asking_major') {
        if (lowerQuery.includes('техник') || lowerQuery.includes('it') || lowerQuery.includes('инженер')) {
            chatResponseData.major = 'Технические науки (IT, инженерия)';
            chatState = 'asking_subject';
            return "Отлично, технические науки — это будущее! Какой предмет ЕНТ вам дается легче всего: **Физика** или **Информатика**?";
        }
        if (lowerQuery.includes('мед') || lowerQuery.includes('биолог') || lowerQuery.includes('лечить')) {
            chatResponseData.major = 'Медицина и Биология';
            chatState = 'asking_subject';
            return "Благородный выбор! В медицине ключевые предметы — **Биология** и **Химия**. Какой из них вам ближе?";
        }
        if (lowerQuery.includes('гуман') || lowerQuery.includes('язык') || lowerQuery.includes('история')) {
            chatResponseData.major = 'Гуманитарные и Социальные науки';
            chatState = 'asking_subject';
            return "Интересуетесь людьми и культурой. Выберите один из двух: **Иностранный язык** или **Всемирная история**?";
        }
        if (lowerQuery.includes('эконом') || lowerQuery.includes('финанс') || lowerQuery.includes('бизнес')) {
            chatResponseData.major = 'Экономика и Финансы';
            chatState = 'asking_subject';
            return "Мир финансов ждет! Для этого профиля обычно важны **Математика** и **География**. Какой из них вам больше нравится?";
        }
        return "Не совсем понял, но это нормально! Выберите что-то из списка (Технические, Медицина, Гуманитарные, Экономика).";
    }

    // --- Обработка состояния выбора предмета (ШАГ 3) ---
    if (chatState === 'asking_subject') {
        chatState = 'default'; // Сброс
        
        // Преобразование ответа в название предмета для поиска
        let subject = '';
        if (lowerQuery.includes('физик')) subject = 'Физика';
        else if (lowerQuery.includes('информатик')) subject = 'Информатика';
        else if (lowerQuery.includes('биолог')) subject = 'Биология';
        else if (lowerQuery.includes('химия')) subject = 'Химия';
        else if (lowerQuery.includes('язык')) subject = 'Иностранный язык';
        else if (lowerQuery.includes('история')) subject = 'Всемирная история';
        else if (lowerQuery.includes('математик')) subject = 'Математика';
        else if (lowerQuery.includes('географ')) subject = 'География';

        // Поиск университета по выбранному предмету
        const recommendedUni = universityData.find(uni => 
            uni.sections.programs.list.some(p => p.subjects_required.includes(subject))
        );

        let finalRecommendation = `Ваше направление: **${chatResponseData.major}**. `;

        if (recommendedUni && subject) {
            const program = recommendedUni.sections.programs.list.find(p => p.subjects_required.includes(subject));
            
            finalRecommendation += `Вы выбрали **${subject}**. На основе ваших интересов, я рекомендую обратить внимание на программу "${program.program_name}" в **${recommendedUni.name}** (${recommendedUni.city}).`;
            finalRecommendation += `\n\nЭтот ВУЗ — один из лучших в области, где требуется ${subject}. Можете найти его в Каталоге ниже!`;
        } else {
            finalRecommendation += `Вы выбрали **${query}**. Вам подходят специальности, где требуется этот предмет. Используйте его в фильтрах каталога, чтобы найти лучшие ВУЗы!`;
        }

        return finalRecommendation + "\n\nЯ могу еще что-то подсказать?";
    }

    // --- Логика по умолчанию (ключевые слова и ШАГ 1) ---

    // 1. Помощь в выборе профессии (ШАГ 1)
    if (lowerQuery.includes("профессия") || lowerQuery.includes("кем стать") || lowerQuery.includes("выбрать специальность") || lowerQuery.includes("помоги мне")) {
        chatState = 'asking_major';
        return "С удовольствием помогу! Какое из следующих направлений вам ближе: **Технические науки (IT, инженерия)**, **Медицина**, **Гуманитарные** или **Экономика**?";
    }

    // 2. Поиск по названию университета
    const uni = universityData.find(u => lowerQuery.includes(u.name.toLowerCase().split('(')[0].trim()) || lowerQuery.includes(u.id.toLowerCase()));
    
    if (uni) {
        const firstProgram = uni.sections.programs.list[0];
        response = `Да, я знаю об **${uni.name}** (${uni.city})! Это крупный ВУЗ, известный своими достижениями: ${uni.sections.mission_history.achievements[0]}. \n\nДля поступления на программу "${firstProgram.program_name}" вам потребуются предметы: ${firstProgram.subjects_required.join(' и ')}. Хотите узнать о грантах или программах обмена?`;
        return response;
    }

    // 3. Общие вопросы
    if (lowerQuery.includes("ент") || lowerQuery.includes("предметы")) {
        return "ЕНТ (Единое национальное тестирование) — ваш главный экзамен. Вы сдаете 3 обязательных предмета и 2 профильных. Выбор профильных предметов определяет вашу будущую специальность. Например, для IT нужны **Математика** и **Физика**.";
    }

    if (lowerQuery.includes("грант") || lowerQuery.includes("стипендия")) {
        return "Получение гранта зависит от вашего балла ЕНТ и конкурса. В целом, чем выше балл, тем больше шансов. Информацию о грантах всегда ищите в секции 'Приемная комиссия' на сайте выбранного ВУЗа.";
    }

    if (lowerQuery.includes("привет") || lowerQuery.includes("здравствуй") || lowerQuery.includes("салам")) {
        return "Приветствую! Я Nurym AI, ваш консультант. Я могу помочь выбрать профессию, найти университет или рассказать о требованиях ЕНТ. С чего начнем?";
    }

    // 4. Заглушка
    return "Интересный вопрос! Я Nurym AI, и я специализируюсь на информации о ВУЗах, ЕНТ и выборе профиля. Спросите меня о конкретном университете или попросите '**помочь выбрать профессию**'!";
}

function handleUserInput() {
    const userInput = chatInput.value.trim();
    if (userInput === '') return;

    appendMessage('User', userInput);
    chatInput.value = '';

    // Получаем ответ от Nurym AI
    const aiResponse = generateAiResponse(userInput);
    
    // Эмуляция задержки для "живого" ответа
    setTimeout(() => {
        appendMessage('Nurym AI', aiResponse);
    }, 500);
}

// -----------------------------------------------------------------
// Привязка событий
// -----------------------------------------------------------------

// Защита от ошибок: привязываем события только если элементы существуют
if (chatButton) chatButton.addEventListener('click', toggleChat);
if (chatSendBtn) chatSendBtn.addEventListener('click', handleUserInput);
if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
}
