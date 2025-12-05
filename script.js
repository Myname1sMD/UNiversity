// =================================================================
// ЧАСТЬ 1: БАЗА ДАННЫХ (10 УНИВЕРСИТЕТОВ)
// =================================================================
const universityData = [
    {
        "id": "kaznu",
        "name": "Казахский национальный университет им. аль-Фараби (КазНУ)",
        "city": "Алматы",
        "image_url": "https://via.placeholder.com/300x200?text=KAZNU", // Замените на реальные пути к фото
        "sections": {
            "mission_history": {
                "title": "📜 Миссия, История и Лидерство",
                "mission": "Миссия КазНУ — стать исследовательским университетом мирового класса, интегрируя образование и науку.",
                "history_excerpt": "Основан в 1934 году, является старейшим классическим университетом Казахстана и лидером национального рейтинга.",
                "achievements": ["Первое место в национальном рейтинге (2024)", "Входит в топ-200 QS World University Rankings"]
            },
            "programs": {
                "title": "📚 Академические программы",
                "description": "Бакалавриат, магистратура и докторантура по широкому спектру специальностей (IT, Естественные, Гуманитарные).",
                "list": [
                    { "program_name": "Информационные технологии", "subjects_required": ["Математика", "Физика"] },
                    { "program_name": "Международные отношения", "subjects_required": ["История мира", "Иностранный язык"] },
                    { "program_name": "Биотехнология", "subjects_required": ["Биология", "Химия"] }
                ]
            },
            "admission": {
                "title": "📝 Прием и Поступление",
                "requirements": "Высокий балл ЕНТ (минимум 70), аттестат о среднем образовании.",
                "deadlines": "Прием заявлений: Июль – Август.",
                "scholarships": "Гранты МОН РК, внутренняя стипендия Аль-Фараби."
            },
            "international": {
                "title": "🌍 Международное сотрудничество",
                "exchange_programs": "Erasmus+, Mevlana, программы двойного диплома с вузами Европы.",
                "partner_universities": ["Кембриджский университет", "МГУ", "Seoul National University"]
            },
            "virtual_tour": {
                "title": "🗺️ 3D-тур",
                "link": "https://www.youtube.com/embed/n4qN-d9N8U0?si=L4y_d4Ww" // Пример видео
            }
        }
    },
    {
        "id": "nu",
        "name": "Назарбаев Университет (НУ)",
        "city": "Нур-Султан (Астана)",
        "image_url": "https://via.placeholder.com/300x200?text=NU", 
        "sections": {
            "mission_history": {
                "title": "📜 Миссия, История и Лидерство",
                "mission": "Стать национальным академическим центром мирового уровня, сочетая образование, исследования и инновации.",
                "history_excerpt": "Основан в 2010 году. Модель управления основана на международных стандартах, партнерство с ведущими мировыми вузами.",
                "achievements": ["Полностью автономный статус", "Исследовательский фокус", "Партнерство с University College London"]
            },
            "programs": {
                "title": "📚 Академические программы",
                "description": "Программы Бакалавриата и Магистратуры с преподаванием на английском языке в области инженерии, гуманитарных и социальных наук.",
                "list": [
                    { "program_name": "Инженерия и Цифровые науки", "subjects_required": ["Математика", "Физика"] },
                    { "program_name": "Социальные науки и Гуманитарные науки", "subjects_required": ["История мира", "Иностранный язык"] },
                    { "program_name": "Химия и Биология", "subjects_required": ["Биология", "Химия"] }
                ]
            },
            "admission": {
                "title": "📝 Прием и Поступление",
                "requirements": "Высокие баллы IELTS/TOEFL и SAT/ACT, успешное прохождение NUFYP.",
                "deadlines": "Сроки подачи заявок: Октябрь – Декабрь.",
                "scholarships": "Полные государственные гранты, покрывающие обучение и проживание."
            },
            "international": {
                "title": "🌍 Международное сотрудничество",
                "exchange_programs": "Обменные программы с вузами США, Европы и Азии.",
                "partner_universities": ["University of Wisconsin-Madison", "Duke University"]
            },
            "virtual_tour": {
                "title": "🗺️ 3D-тур",
                "link": "https://www.youtube.com/embed/d3H_j_QYfC0?si=8Y_h-3O" 
            }
        }
    },
    {
        "id": "kaznitu",
        "name": "Казахский национальный исследовательский технический университет им. К.И. Сатпаева (Satbayev University)",
        "city": "Алматы",
        "image_url": "https://via.placeholder.com/300x200?text=KAZNITU", 
        "sections": {
            "mission_history": {
                "title": "📜 Миссия, История и Лидерство",
                "mission": "Подготовка инженерной и технической элиты для стратегических отраслей экономики.",
                "history_excerpt": "Основан в 1934 году. Крупнейший технический университет Казахстана.",
                "achievements": ["Лидер среди технических вузов", "Многочисленные патенты и изобретения"]
            },
            "programs": {
                "title": "📚 Академические программы",
                "description": "Специализации в области горного дела, нефти и газа, IT и машиностроения.",
                "list": [
                    { "program_name": "Нефтегазовое дело", "subjects_required": ["Математика", "Физика"] },
                    { "program_name": "Автоматизация и управление", "subjects_required": ["Математика", "Физика"] },
                    { "program_name": "Информационная безопасность", "subjects_required": ["Математика", "Информатика"] }
                ]
            },
            "admission": {
                "title": "📝 Прием и Поступление",
                "requirements": "Высокие баллы ЕНТ, профильные предметы – Математика и Физика.",
                "deadlines": "Прием заявлений: Июль – Август.",
                "scholarships": "Гранты МОН РК, целевые гранты от промышленных предприятий."
            },
            "international": {
                "title": "🌍 Международное сотрудничество",
                "exchange_programs": "Программы академической мобильности с техническими вузами Германии и России.",
                "partner_universities": ["Colorado School of Mines", "РГУ нефти и газа им. И.М. Губкина"]
            },
            "virtual_tour": {
                "title": "🗺️ 3D-тур",
                "link": "https://www.youtube.com/embed/pLz_ZqGz9U0?si=Q7m_j_A" 
            }
        }
    },
    {
        "id": "kaznmu",
        "name": "Казахский национальный медицинский университет им. С.Д. Асфендиярова (КазНМУ)",
        "city": "Алматы",
        "image_url": "https://via.placeholder.com/300x200?text=KAZNMU", 
        "sections": {
            "mission_history": {
                "title": "📜 Миссия, История и Лидерство",
                "mission": "Подготовка высококвалифицированных медицинских кадров для системы здравоохранения.",
                "history_excerpt": "Основан в 1931 году. Лидер медицинского образования в Центральной Азии.",
                "achievements": ["Многопрофильный симуляционный центр", "Высокий рейтинг среди медицинских вузов"]
            },
            "programs": {
                "title": "📚 Академические программы",
                "description": "Общая медицина, Стоматология, Фармация, Общественное здравоохранение.",
                "list": [
                    { "program_name": "Общая медицина (MD)", "subjects_required": ["Биология", "Химия"] },
                    { "program_name": "Стоматология", "subjects_required": ["Биология", "Химия"] },
                    { "program_name": "Фармация", "subjects_required": ["Биология", "Химия"] }
                ]
            },
            "admission": {
                "title": "📝 Прием и Поступление",
                "requirements": "Высокие баллы ЕНТ (Биология и Химия), дополнительные собеседования.",
                "deadlines": "Прием заявлений: Июль – Август.",
                "scholarships": "Гранты МОН РК, внутренние гранты на обучение."
            },
            "international": {
                "title": "🌍 Международное сотрудничество",
                "exchange_programs": "Сотрудничество с клиниками и вузами Европы и Турции.",
                "partner_universities": ["Karolinska Institutet", "Ankara University"]
            },
            "virtual_tour": {
                "title": "🗺️ 3D-тур",
                "link": "https://www.youtube.com/embed/z4f_g_Jk9U0?si=S1h_r-0O" 
            }
        }
    },
    {
        "id": "kuefmt",
        "name": "Казахский университет экономики, финансов и международной торговли (КазУЭФМТ)",
        "city": "Алматы", 
        "image_url": "https://via.placeholder.com/300x200?text=KUEFMT", 
        "sections": {
            "mission_history": {
                "title": "📜 Миссия, История и Лидерство",
                "mission": "Подготовка специалистов для финансового, экономического и торгового секторов.",
                "history_excerpt": "Основан для обеспечения кадрами быстрорастущего экономического сектора страны.",
                "achievements": ["Аккредитация международных программ", "Сильные связи с бизнес-сообществом"]
            },
            "programs": {
                "title": "📚 Академические программы",
                "description": "Экономика, Менеджмент, Финансы, Учет и аудит, Маркетинг.",
                "list": [
                    { "program_name": "Финансы", "subjects_required": ["Математика", "География"] },
                    { "program_name": "Международная торговля", "subjects_required": ["География", "Иностранный язык"] },
                    { "program_name": "Учет и Аудит", "subjects_required": ["Математика", "География"] }
                ]
            },
            "admission": {
                "title": "📝 Прием и Поступление",
                "requirements": "ЕНТ по профильным предметам, возможность обучения на грантах.",
                "deadlines": "Прием заявлений: Июль – Август.",
                "scholarships": "Гранты МОН РК, скидки для абитуриентов с высокими баллами."
            },
            "international": {
                "title": "🌍 Международное сотрудничество",
                "exchange_programs": "Программы обмена с вузами, специализирующимися на экономике и бизнесе.",
                "partner_universities": ["Вузы Китая и Европы"]
            },
            "virtual_tour": {
                "title": "🗺️ 3D-тур",
                "link": "https://www.youtube.com/embed/example" 
            }
        }
    },
    {
        "id": "enu",
        "name": "Евразийский национальный университет им. Л.Н. Гумилева (ЕНУ)",
        "city": "Нур-Султан (Астана)",
        "image_url": "https://via.placeholder.com/300x200?text=ENU", 
        "sections": {
            "mission_history": {
                "title": "📜 Миссия, История и Лидерство",
                "mission": "Классический университет, сфокусированный на евразийских исследованиях и инновациях.",
                "history_excerpt": "Основан в 1996 году. Один из ведущих классических вузов страны.",
                "achievements": ["Высокий рейтинг в QS World University Rankings", "Сильный гуманитарный и технический профиль"]
            },
            "programs": {
                "title": "📚 Академические программы",
                "description": "Широкий спектр специальностей: от IT до истории и филологии.",
                "list": [
                    { "program_name": "Архитектура и Дизайн", "subjects_required": ["Математика", "Физика"] },
                    { "program_name": "Журналистика", "subjects_required": ["История мира", "Иностранный язык"] },
                    { "program_name": "Переводческое дело", "subjects_required": ["Иностранный язык", "История мира"] }
                ]
            },
            "admission": {
                "title": "📝 Прием и Поступление",
                "requirements": "ЕНТ, творческие экзамены для некоторых специальностей.",
                "deadlines": "Прием заявлений: Июль – Август.",
                "scholarships": "Гранты МОН РК, внутренние стипендии."
            },
            "international": {
                "title": "🌍 Международное сотрудничество",
                "exchange_programs": "Программы двойного диплома с российскими и европейскими вузами.",
                "partner_universities": ["МГУ", "University of Lorraine"]
            },
            "virtual_tour": {
                "title": "🗺️ 3D-тур",
                "link": "https://www.youtube.com/embed/enu_tour_example" 
            }
        }
    },
    {
        "id": "kaznpu",
        "name": "Казахский национальный педагогический университет им. Абая (КазНПУ)",
        "city": "Алматы",
        "image_url": "https://via.placeholder.com/300x200?text=KAZNPU", 
        "sections": {
            "mission_history": {
                "title": "📜 Миссия, История и Лидерство",
                "mission": "Подготовка учителей и преподавателей для всех уровней образования.",
                "history_excerpt": "Старейший педагогический университет Казахстана, основан в 1928 году.",
                "achievements": ["Лидер в области педагогического образования", "Многочисленные научные школы"]
            },
            "programs": {
                "title": "📚 Академические программы",
                "description": "Педагогика и психология, Дефектология, Филология, Искусство.",
                "list": [
                    { "program_name": "Учитель истории", "subjects_required": ["История мира", "География"] },
                    { "program_name": "Педагогика и психология", "subjects_required": ["Биология", "География"] },
                    { "program_name": "Иностранный язык", "subjects_required": ["Иностранный язык", "История мира"] }
                ]
            },
            "admission": {
                "title": "📝 Прием и Поступление",
                "requirements": "ЕНТ, творческие экзамены для художественных и музыкальных специальностей.",
                "deadlines": "Прием заявлений: Июль – Август.",
                "scholarships": "Гранты МОН РК, высокая доля бюджетных мест."
            },
            "international": {
                "title": "🌍 Международное сотрудничество",
                "exchange_programs": "Сотрудничество с педагогическими вузами СНГ и Европы.",
                "partner_universities": ["Московский педагогический государственный университет"]
            },
            "virtual_tour": {
                "title": "🗺️ 3D-тур",
                "link": "https://www.youtube.com/embed/example" 
            }
        }
    },
    {
        "id": "kariu",
        "name": "Карагандинский университет им. Е.А. Букетова (КарУ)",
        "city": "Караганда",
        "image_url": "https://via.placeholder.com/300x200?text=KARU", 
        "sections": {
            "mission_history": {
                "title": "📜 Миссия, История и Лидерство",
                "mission": "Подготовка конкурентоспособных специалистов для центрального региона Казахстана.",
                "history_excerpt": "Основан в 1972 году. Крупнейший классический вуз Центрального Казахстана.",
                "achievements": ["Сильные юридические и гуманитарные школы", "Исследовательский статус"]
            },
            "programs": {
                "title": "📚 Академические программы",
                "description": "Классический набор специальностей: право, экономика, естественные и гуманитарные науки.",
                "list": [
                    { "program_name": "Юриспруденция", "subjects_required": ["История мира", "География"] },
                    { "program_name": "Информатика", "subjects_required": ["Математика", "Физика"] },
                    { "program_name": "Медицина", "subjects_required": ["Биология", "Химия"] }
                ]
            },
            "admission": {
                "title": "📝 Прием и Поступление",
                "requirements": "ЕНТ по профильным предметам.",
                "deadlines": "Прием заявлений: Июль – Август.",
                "scholarships": "Гранты МОН РК, региональные гранты."
            },
            "international": {
                "title": "🌍 Международное сотрудничество",
                "exchange_programs": "Активное сотрудничество с вузами СНГ и Европы.",
                "partner_universities": ["Томский государственный университет"]
            },
            "virtual_tour": {
                "title": "🗺️ 3D-тур",
                "link": "https://www.youtube.com/embed/example" 
            }
        }
    },
    {
        "id": "kartu",
        "name": "Карагандинский технический университет (КарТУ)",
        "city": "Караганда",
        "image_url": "https://via.placeholder.com/300x200?text=KARTU", 
        "sections": {
            "mission_history": {
                "title": "📜 Миссия, История и Лидерство",
                "mission": "Ориентирован на подготовку инженеров и кадров для горнодобывающей и металлургической промышленности.",
                "history_excerpt": "Основан в 1953 году. Один из ключевых технических вузов Казахстана.",
                "achievements": ["Специализация на инженерии и технике", "Сотрудничество с промышленными гигантами"]
            },
            "programs": {
                "title": "📚 Академические программы",
                "description": "Горное дело, Строительство, Машиностроение, Транспорт, IT-технологии.",
                "list": [
                    { "program_name": "Горное дело", "subjects_required": ["Математика", "Физика"] },
                    { "program_name": "Строительство", "subjects_required": ["Математика", "Физика"] },
                    { "program_name": "Компьютерные науки", "subjects_required": ["Математика", "Информатика"] }
                ]
            },
            "admission": {
                "title": "📝 Прием и Поступление",
                "requirements": "ЕНТ, профильные предметы – Математика и Физика.",
                "deadlines": "Прием заявлений: Июль – Август.",
                "scholarships": "Гранты МОН РК, гранты от местных предприятий."
            },
            "international": {
                "title": "🌍 Международное сотрудничество",
                "exchange_programs": "Обмен с техническими университетами России и Европы.",
                "partner_universities": ["МГТУ им. Н.Э. Баумана"]
            },
            "virtual_tour": {
                "title": "🗺️ 3D-тур",
                "link": "https://www.youtube.com/embed/example" 
            }
        }
    }
];

// =================================================================
// ЧАСТЬ 2: ЛОГИКА ФУНКЦИОНАЛА (ОТОБРАЖЕНИЕ, ФИЛЬТРАЦИЯ, ДЕТАЛИ)
// =================================================================

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderUniversityList(universityData);
});

// --- A. ОТОБРАЖЕНИЕ КАРТОЧЕК ---
function renderUniversityList(unis) {
    const listContainer = document.getElementById('university-list');
    listContainer.innerHTML = ''; // Очищаем список перед выводом

    if (unis.length === 0) {
        listContainer.innerHTML = '<p style="grid-column: 1 / -1;">Вузов, соответствующих вашим критериям, не найдено.</p>';
        return;
    }

    unis.forEach(uni => {
        const card = document.createElement('div');
        card.className = 'uni-card';
        
        card.innerHTML = `
            <img src="${uni.image_url}" alt="Фото кампуса ${uni.name}">
            <div class="uni-card-content">
                <h3>${uni.name}</h3>
                <p><strong>Город:</strong> ${uni.city}</p>
                <p>${uni.sections.mission_history.history_excerpt.substring(0, 100)}...</p>
                <button onclick="showDetails('${uni.id}')">Подробнее</button>
                <button onclick="addToComparison('${uni.id}')">Сравнить</button>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// --- B. ФИЛЬТРАЦИЯ ПО ПРЕДМЕТАМ И ГОРОДУ ---
function filterUniversities() {
    const sub1 = document.getElementById('subject1').value;
    const sub2 = document.getElementById('subject2').value;
    const cityFilter = document.getElementById('city-filter').value; 

    let filteredUnis = universityData;

    // 1. ФИЛЬТРАЦИЯ ПО ГОРОДУ
    if (cityFilter) {
        filteredUnis = filteredUnis.filter(uni => uni.city === cityFilter);
    }

    // 2. ФИЛЬТРАЦИЯ ПО ПРЕДМЕТАМ
    if (sub1 && sub2) {
        filteredUnis = filteredUnis.filter(uni => {
            let matchesSubjects = false;
            
            // Проверяем, есть ли хотя бы одна программа, требующая оба выбранных предмета
            uni.sections.programs.list.forEach(program => {
                const subjects = program.subjects_required;
                if (subjects.includes(sub1) && subjects.includes(sub2)) {
                    matchesSubjects = true;
                }
            });
            return matchesSubjects;
        });
    } else if (sub1 || sub2) {
        alert('Для точной фильтрации по программам выберите оба предмета ЕНТ.');
    }
    
    renderUniversityList(filteredUnis);
}


// --- C. ДЕТАЛИЗАЦИЯ (МОДАЛЬНОЕ ОКНО) ---
function closeModal() {
    document.getElementById('details-modal').style.display = 'none';
    document.getElementById('uni-tour-iframe').src = ''; // Очищаем iframe
}

window.onclick = function(event) {
    const modal = document.getElementById('details-modal');
    if (event.target === modal) {
        closeModal();
    }
}

function showDetails(uniId) {
    const uni = universityData.find(u => u.id === uniId);

    if (!uni) return;

    // Заполнение заголовка
    document.querySelector('#modal-body h2').textContent = uni.name;

    // 1. Миссия, История, Достижения
    const missionSection = uni.sections.mission_history;
    document.getElementById('uni-mission').innerHTML = `
        <h4>${missionSection.title}</h4>
        <p><strong>Миссия:</strong> ${missionSection.mission}</p>
        <p><strong>История:</strong> ${missionSection.history_excerpt}</p>
        <p><strong>Достижения:</strong> <ul>${missionSection.achievements.map(a => `<li>${a}</li>`).join('')}</ul></p>
    `;

    // 2. Академические программы
    const programs = uni.sections.programs;
    const programListHtml = programs.list.map(p => 
        `<li><strong>${p.program_name}</strong> (Предметы ЕНТ: ${p.subjects_required.join(', ')})</li>`
    ).join('');
    
    document.getElementById('uni-programs').innerHTML = `
        <h4>${programs.title}</h4>
        <p>${programs.description}</p>
        <ul>${programListHtml}</ul>
    `;

    // 3. Прием и Поступление
    const admission = uni.sections.admission;
    document.getElementById('uni-admission').innerHTML = `
        <h4>${admission.title}</h4>
        <p><strong>Требования:</strong> ${admission.requirements}</p>
        <p><strong>Сроки:</strong> ${admission.deadlines}</p>
        <p><strong>Стипендии:</strong> ${admission.scholarships}</p>
    `;

    // 4. Международное сотрудничество
    const international = uni.sections.international;
    document.getElementById('uni-international').innerHTML = `
        <h4>${international.title}</h4>
        <p><strong>Программы обмена:</strong> ${international.exchange_programs}</p>
        <p><strong>Партнеры:</strong> ${international.partner_universities.join(', ')}</p>
    `;

    // 5. 3D-Тур
    document.getElementById('uni-tour-iframe').src = uni.sections.virtual_tour.link;
    
    // Показ модального окна
    document.getElementById('details-modal').style.display = 'block';
}


// =================================================================
// ЧАСТЬ 3: ФУНКЦИЯ СРАВНЕНИЯ
// =================================================================
let comparisonList = []; 

function addToComparison(uniId) {
    const uni = universityData.find(u => u.id === uniId);

    if (comparisonList.includes(uniId)) {
        alert(`${uni.name} уже в списке сравнения!`);
        return;
    }
    
    if (comparisonList.length >= 2) {
        alert('Вы можете выбрать не более 2 ВУЗов для сравнения. Удалите один из списка ниже.');
        return;
    }

    comparisonList.push(uniId);
    alert(`✅ Добавлен: ${uni.name}. Всего: ${comparisonList.length}/2`);

    document.getElementById('comparison-section').style.display = 'block';
    showComparison();
}

function removeFromComparison(uniId) {
    comparisonList = comparisonList.filter(id => id !== uniId);
    showComparison(); 
    if (comparisonList.length === 0) {
        document.getElementById('comparison-section').style.display = 'none';
        document.getElementById('comparison-table').innerHTML = '';
    }
}

function showComparison() {
    const tableContainer = document.getElementById('comparison-table');
    
    if (comparisonList.length < 2) {
        const selectedNames = comparisonList.map(id => universityData.find(u => u.id === id).name).join(', ');
        tableContainer.innerHTML = `
            <h4>Выберите еще ${2 - comparisonList.length} ВУЗ(а) для сравнения.</h4>
            <p>Выбрано: ${selectedNames || 'Нет выбранных ВУЗов'}</p>
        `;
        return;
    }

    const uni1 = universityData.find(u => u.id === comparisonList[0]);
    const uni2 = universityData.find(u => u.id === comparisonList[1]);
    
    // Генерация HTML-Таблицы
    tableContainer.innerHTML = `
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>Критерий</th>
                    <th>${uni1.name}</th>
                    <th>${uni2.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Город</th>
                    <td>${uni1.city}</td>
                    <td>${uni2.city}</td>
                </tr>
                <tr>
                    <th>Миссия и достижения (Кратко)</th>
                    <td>${uni1.sections.mission_history.history_excerpt.substring(0, 100)}...<br>Достижения: <strong>${uni1.sections.mission_history.achievements.slice(0, 2).join(', ')}</strong></td>
                    <td>${uni2.sections.mission_history.history_excerpt.substring(0, 100)}...<br>Достижения: <strong>${uni2.sections.mission_history.achievements.slice(0, 2).join(', ')}</strong></td>
                </tr>
                <tr>
                    <th>Пример программ</th>
                    <td>${uni1.sections.programs.list.map(p => p.program_name).slice(0, 3).join('<br>')}...</td>
                    <td>${uni2.sections.programs.list.map(p => p.program_name).slice(0, 3).join('<br>')}...</td>
                </tr>
                <tr>
                    <th>Сроки подачи</th>
                    <td>${uni1.sections.admission.deadlines}</td>
                    <td>${uni2.sections.admission.deadlines}</td>
                </tr>
                <tr>
                    <th>Программы обмена</th>
                    <td>${uni1.sections.international.exchange_programs}</td>
                    <td>${uni2.sections.international.exchange_programs}</td>
                </tr>
                <tr>
                    <th>Действия</th>
                    <td><button onclick="removeFromComparison('${uni1.id}')">Удалить</button></td>
                    <td><button onclick="removeFromComparison('${uni2.id}')">Удалить</button></td>
                </tr>
            </tbody>
        </table>
    `;
}

// =================================================================
// ЧАСТЬ 4: ИИ-ПОМОЩНИК NURUM
// =================================================================

const nurymQuiz = [
    {
        id: 1,
        question: "Что вам нравится больше всего?",
        options: [
            { text: "Анализировать данные, решать сложные задачи и строить модели.", score: { technical: 3, business: 1 } },
            { text: "Общаться, изучать языки, писать тексты или заниматься историей.", score: { humanitarian: 3 } },
            { text: "Помогать людям, изучать биологию, химию и работать с живыми системами.", score: { medical: 3 } },
        ]
    },
    {
        id: 2,
        question: "Какая ваша сильная сторона в школе?",
        options: [
            { text: "Математика, Физика, Информатика.", score: { technical: 2 } },
            { text: "Иностранные языки, История, Литература.", score: { humanitarian: 2 } },
            { text: "Биология, Химия, География.", score: { medical: 2, technical: 1 } },
            { text: "Экономика, Право, Обществознание.", score: { business: 2, humanitarian: 1 } },
        ]
    },
    {
        id: 3,
        question: "Что вы предпочтете делать в свободное время?",
        options: [
            { text: "Разбираться в работе гаджетов, компьютеров, программировать.", score: { technical: 2 } },
            { text: "Изучать фондовые рынки, читать о стартапах и личных финансах.", score: { business: 2 } },
            { text: "Волонтерить, следить за здоровьем и новостями медицины.", score: { medical: 2 } }
        ]
    }
];

let currentQuestionIndex = 0;
let profileScores = { technical: 0, humanitarian: 0, medical: 0, business: 0 };

function startQuiz() {
    currentQuestionIndex = 0;
    profileScores = { technical: 0, humanitarian: 0, medical: 0, business: 0 }; 
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    renderQuestion();
}

function renderQuestion() {
    const container = document.getElementById('quiz-container');
    const q = nurymQuiz[currentQuestionIndex];
    
    if (!q) {
        analyzeResults(); 
        return;
    }

    let htmlContent = `<h4>Вопрос ${currentQuestionIndex + 1}/${nurymQuiz.length}: ${q.question}</h4>`;
    
    q.options.forEach((option) => {
        // Экранируем JSON для передачи в функцию
        const scoreString = JSON.stringify(option.score).replace(/"/g, '&quot;');
        htmlContent += `<button onclick='processAnswer(${scoreString})'>${option.text}</button>`;
    });

    container.innerHTML = htmlContent;
}

function processAnswer(scores) {
    for (const key in scores) {
        if (profileScores.hasOwnProperty(key)) {
            profileScores[key] += scores[key];
        }
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < nurymQuiz.length) {
        renderQuestion();
    } else {
        analyzeResults();
    }
}

function analyzeResults() {
    document.getElementById('quiz-container').style.display = 'none';
    const resultsContainer = document.getElementById('quiz-results');
    resultsContainer.style.display = 'block';
    
    let maxScore = 0;
    let mainProfile = 'technical'; // Дефолтный профиль

    for (const profile in profileScores) {
        if (profileScores[profile] > maxScore) {
            maxScore = profileScores[profile];
            mainProfile = profile;
        }
    }

    // --- Логика Рекомендаций ---
    let professionRec = '';
    let subjectRec = '';
    let uniRec = [];

    switch (mainProfile) {
        case 'technical':
            professionRec = 'Инженер-программист, Разработчик ИИ, Инженер-нефтяник.';
            subjectRec = 'Математика и Физика/Информатика';
            uniRec = universityData.filter(u => ['kaznu', 'kaznitu', 'nu', 'kartu'].includes(u.id));
            break;
        case 'humanitarian':
            professionRec = 'Международный журналист, Лингвист, Педагог, Юрист.';
            subjectRec = 'История мира/География и Иностранный язык';
            uniRec = universityData.filter(u => ['kaznu', 'enu', 'kaznpu', 'kariu'].includes(u.id));
            break;
        case 'medical':
            professionRec = 'Врач (Терапевт/Хирург), Стоматолог, Фармацевт.';
            subjectRec = 'Биология и Химия';
            uniRec = universityData.filter(u => ['kaznmu', 'kaznu', 'kariu'].includes(u.id));
            break;
        case 'business':
            professionRec = 'Финансист, Экономист, Менеджер проектов, Аудитор.';
            subjectRec = 'Математика/География и География/Иностранный язык';
            uniRec = universityData.filter(u => ['kuefmt', 'kaznu', 'enu', 'nu'].includes(u.id));
            break;
        default:
            professionRec = 'Не удалось определить профиль.';
            subjectRec = 'Любой';
            uniRec = [];
    }
    
    let uniHtml = uniRec.map(u => `<li>${u.name} (${u.city})</li>`).join('');

    resultsContainer.innerHTML = `
        <div class="nurym-output">
            <h3>🎉 Ваши результаты от Nurym!</h3>
            <p>На основании ваших ответов, ваш доминирующий профиль: <strong>${mainProfile.toUpperCase()}</strong>.</p>
            <p><strong>🧠 Рекомендуемые профессии:</strong> ${professionRec}</p>
            <p><strong>🎯 Рекомендуемые предметы ЕНТ:</strong> ${subjectRec}</p>
            
            <h4>🎓 Рекомендуемые ВУЗы:</h4>
            <ul>${uniHtml}</ul>
            
            <button onclick="startQuiz()">Пройти опрос заново</button>
        </div>
    `;
}

