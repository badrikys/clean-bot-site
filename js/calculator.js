document.addEventListener('DOMContentLoaded', function() {
    const servicesDataCSV = `Раздел,Подраздел,Наименование услуги,Стоимость,Единица измерения
Уборка,Фиксированные уборки,Поддерживающая уборка,"=ROUND(ПЛОЩАДЬ * MAX(MIN(133 - ((ПЛОЩАДЬ - 1) * ((133 - 78) / 120)), 133), 78), 0)",уборка
Уборка,Фиксированные уборки,Генеральная уборка,"=ROUND(ПЛОЩАДЬ * MAX(MIN(211 - ((ПЛОЩАДЬ - 1) * ((211 - 141) / 120)), 211), 141), 0)",уборка
Уборка,Фиксированные уборки,Уборка после ремонта,"=ROUND(ПЛОЩАДЬ * MAX(MIN(336 - ((ПЛОЩАДЬ - 1) * ((336 - 242) / 120)), 336), 242), 0)",уборка
Уборка,Дополнительные услуги,Мытьё душевой кабины,1590,шт
Уборка,Дополнительные услуги,Мытьё кухонных шкафов изнутри (пустые),650,все
Уборка,Дополнительные услуги,Мытьё кухонных шкафов изнутри (не пустые),650,шт
Уборка,Дополнительные услуги,Мытьё посуды,1390,час
Уборка,Дополнительные услуги,Глажка одежды,1390,час
Уборка,Дополнительные услуги,Уборка на балконе,600,м²
Уборка,Дополнительные услуги,Мытьё холодильника изнутри,750,шт
Уборка,Дополнительные услуги,Мытьё микроволновки изнутри,400,шт
Уборка,Дополнительные услуги,Мытьё духовки изнутри,650,шт
Уборка,Дополнительные услуги,Чистка жалюзи,500,шт
Уборка,Дополнительные услуги,Выброс мусора (до 6 кг),190,шт
Уборка,Дополнительные услуги,Мытьё люстры (простой формы),390,шт
Уборка,Дополнительные услуги,Мытьё люстры (средней формы),750,шт
Уборка,Дополнительные услуги,Мытьё люстры (сложной формы),2190,шт
Уборка,Дополнительные услуги,Дополнительный клинер,2990,чел
Уборка,Дополнительные услуги,Дополнительные услуги,1390,час
Уборка,Дополнительные услуги,Мытьё вытяжки,850,шт
Уборка,Дополнительные услуги,Мытьё стиральной машины,850,шт
Уборка,Дополнительные услуги,Выезд клинера за МКАД до 10 км от МКАД,490,чел
Уборка,Дополнительные услуги,Чистка кондиционера,490,шт
Доставка оборудования,Доставка оборудования,Доставка оборудования,3490,комплект
Доставка оборудования,Доставка оборудования,Доставка оборудования и стремянки от 3 метров,5990,комплект
Доставка оборудования,Доставка оборудования,Доплата за доставку оборудования за МКАД,90,км
Уборка,Почасовые уборки,Поддерживающая уборка,3990,уборка
Уборка,Почасовые уборки,Поддерживающая уборка - Доп.час,990,час
Уборка,Почасовые уборки,Генеральная уборка,6990,уборка
Уборка,Почасовые уборки,Генеральная уборка - Доп.час,1290,час
Уборка,Почасовые уборки,Уборка после ремонта,11990,уборка
Уборка,Почасовые уборки,Уборка после ремонта - Доп.час,1490,час
Уборка,Почасовые уборки,Специфическая уборка,12990,уборка
Уборка,Почасовые уборки,Специфическая уборка - Доп.час,1990,час
Мытьё окон,Без акции,Мытьё 1 створки,450,шт
Мытьё окон,Без акции,Мытьё 1 створки (дома),650,шт
Мытьё окон,Без акции,Мытьё 2-х створчатого окна,890,шт
Мытьё окон,Без акции,Мытьё 2-х створчатого окна с фрамугой,1340,шт
Мытьё окон,Без акции,Мытьё двойного деревянного окна (1 створка),890,шт
Мытьё окон,Без акции,Мытьё 3-х створчатого окна,1390,шт
Мытьё окон,Без акции,Мытьё 3-х створчатого окна с фрамугой,1840,шт
Мытьё окон,Без акции,Мытьё эркерного окна (1 створка),450,шт
Мытьё окон,Без акции,Мытьё 1 створки на балконе,650,шт
Мытьё окон,Без акции,Мытьё стандартного балкона до 4 метров,2890,шт
Мытьё окон,Без акции,Мытьё стандартного балкона более 4 метров,5590,шт
Мытьё окон,Без акции,Мытьё панорамного балкона до 4 метров,4590,шт
Мытьё окон,Без акции,Мытьё панорамного балкона более 4 метров,8990,шт
Мытьё окон,Без акции,Мытьё балконного блока,990,шт
Мытьё окон,Без акции,Мытьё панорамного балконного блока,1790,шт
Мытьё окон,Без акции,Мытьё панорамного окна (1 створка),890,шт
Мытьё окон,Без акции,Мытьё панорамного окна (по квадратуре),550,м²
Мытьё окон,Акция,Мытьё всех стандартных окон в квартире,2990,шт
Мытьё окон,Дополнения к акции,Мытьё нестандартного окна,790,шт
Мытьё окон,Дополнения к акции,Мытьё фрамуги,790,шт
Мытьё окон,Дополнения к акции,Мытьё балконного блока,990,шт
Мытьё окон,Дополнения к акции,Мытьё стандартного балкона (до 4 метров),1490,шт
Мытьё окон,Дополнения к акции,Мытьё стандартного балкона (более 4 метров и до 6 метров),2590,шт
Мытьё окон,Дополнения к акции,Мытьё стандартного балкона (более 6 метров и до 8 метров),3290,шт
Мытьё окон,Дополнения к акции,Мытьё панорамного балкона (до 4 метров),3290,шт
Мытьё окон,Дополнения к акции,Мытьё панорамного балкона (более 4 метров и до 6 метров),3990,шт
Мытьё окон,Дополнения к акции,Мытьё панорамного балкона (более 6 метров и до 8 метров),4990,шт
Химчистка,Обычная ткань,Химчистка дивана 2-местного,2990,шт
Химчистка,Обычная ткань,Химчистка дивана 3-местного,3590,шт
Химчистка,Обычная ткань,Химчистка углового дивана 4-местного,4190,шт
Химчистка,Обычная ткань,Химчистка углового дивана 5-местного,4790,шт
Химчистка,Обычная ткань,Химчистка углового дивана 6-местного,5390,шт
Химчистка,Обычная ткань,Химчистка спального места,1490,шт
Химчистка,Обычная ткань,Химчистка съёмной подушки до 30 см,350,шт
Химчистка,Обычная ткань,Химчистка съёмной подушки 30-70 см,470,шт
Химчистка,Обычная ткань,Химчистка кресла,1790,шт
Химчистка,Обычная ткань,Химчистка кресла-стула,1590,шт
Химчистка,Обычная ткань,Химчистка стула с мягкой спинкой,850,шт
Химчистка,Обычная ткань,Химчистка стула без мягкой спинки,590,шт
Химчистка,Обычная ткань,Химчистка кухонного уголока,2790,шт
Химчистка,Обычная ткань,Химчистка пуфика,850,шт
Химчистка,Обычная ткань,Химчистка каркаса кровати,2790,шт
Химчистка,Обычная ткань,Химчистка изголовья кровати,2290,шт
Химчистка,Деликатная ткань,Химчистка дивана 2-местного (деликатная),4190,шт
Химчистка,Деликатная ткань,Химчистка дивана 3-местного (деликатная),5390,шт
Химчистка,Деликатная ткань,Химчистка углового дивана 4-местного (деликатная),6590,шт
Химчистка,Деликатная ткань,Химчистка углового дивана 5-местного (деликатная),7790,шт
Химчистка,Деликатная ткань,Химчистка углового дивана 6-местного (деликатная),8990,шт
Химчистка,Деликатная ткань,Химчистка съёмной подушки до 30 см (деликатная),590,шт
Химчистка,Деликатная ткань,Химчистка съёмной подушки 30-70 см (деликатная),850,шт
Химчистка,Деликатная ткань,Химчистка кресла (деликатная),2290,шт
Химчистка,Деликатная ткань,Химчистка стула с мягкой спинкой (деликатная),1090,шт
Химчистка,Деликатная ткань,Химчистка стула без мягкой спинки (деликатная),850,шт
Химчистка,Деликатная ткань,Химчистка пуфика (деликатная),1190,шт
Химчистка,Матрасы,Химчистка детского матраса - 1 сторона,1490,шт
Химчистка,Матрасы,Химчистка детского матраса - 2 стороны,2090,шт
Химчистка,Матрасы,Химчистка односпального матраса - 1 сторона,1890,шт
Химчистка,Матрасы,Химчистка односпального матраса - 2 стороны,2890,шт
Химчистка,Матрасы,Химчистка полуторного матраса- 1 сторона,2690,шт
Химчистка,Матрасы,Химчистка полуторного матраса - 2 стороны,4190,шт
Химчистка,Матрасы,Химчистка двуспального матраса - 1 сторона,3490,шт
Химчистка,Матрасы,Химчистка двуспального матраса - 2 стороны,4790,шт
Химчистка,Ковры,Химчистка ковра - Ковролин,490,м²
Химчистка,Ковры,Химчистка ковра - Синтетика,590,м²
Химчистка,Ковры,Химчистка ковра - Длинный ворс,690,м²
Химчистка,Ковры,Химчистка ковра - Хлопок / Шерсть,650,м²
Химчистка,Прочее,Химчистка подушки (Маленькая),390,шт
Химчистка,Прочее,Химчистка подушки (Средняя),490,шт
Химчистка,Прочее,Химчистка подушки (Большая),590,шт
Химчистка,Прочее,Химчистка тюли (синтетика),350,м²
Химчистка,Прочее,Химчистка тюли (натуральная или с подкладом),490,м²
Химчистка,Прочее,Химчистка штор (синтетика),410,м²
Химчистка,Прочее,Химчистка штор (натуральные),540,м²
Химчистка,Прочее,Химчистка ламбрекены и пр. (синтетика),590,м²
Химчистка,Прочее,Химчистка ламбрекены и пр. (натуральное),720,м²
Химчистка,Прочее,Удаление неприятных запахов с мебели,1490,шт
Химчистка,Прочее,Химчистка детской коляски,2390,шт`;

    const plusIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" /></svg>`;
    const removeIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg>`;
    const chevronRightNavSVG = `<svg class="chevron-nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" /></svg>`;
    
    let servicesData = [];
    const lines = servicesDataCSV.trim().split('\n');
    for (let i = 1; i < lines.length; i++) { 
        const line = lines[i]; const values = []; let currentField = ''; let inQuotes = false;
        for (const char of line) {
            if (char === '"') { inQuotes = !inQuotes; } 
            else if (char === ',' && !inQuotes) { values.push(currentField); currentField = ''; } 
            else { currentField += char; }
        }
        values.push(currentField); 
        if (values.length === 5) {
            let rawCostField = values[3].trim();
            const isProperlyQuotedFormula = rawCostField.startsWith('"=') && rawCostField.endsWith('"');
            if (isProperlyQuotedFormula) { rawCostField = rawCostField.substring(1, rawCostField.length - 1); }
            const service = {
                id: `service-${i-1}`, razdel: values[0].trim(), podrazdel: values[1].trim(),
                name: values[2].trim().replace(/\s\s+/g, ' '), costRaw: rawCostField, unit: values[4].trim(),
                isFormula: false, formulaType: null, cost: 0, domElement: null, 
                subsectionHeaderElement: null, sectionHeaderElement: null
            };
            if (service.costRaw.startsWith('=')) {
                service.isFormula = true;
                if (service.name.toLowerCase().includes('поддерживающая')) service.formulaType = 'podderzhivayushaya';
                else if (service.name.toLowerCase().includes('генеральная')) service.formulaType = 'generalnaya';
                else if (service.name.toLowerCase().includes('уборка после ремонта')) service.formulaType = 'posle_remonta';
            } else { service.cost = parseFloat(service.costRaw) || 0; }
            servicesData.push(service);
        } else { console.warn(`Пропуск CSV строки:`, line); }
    }

    const sectionOrder = ["Уборка", "Доставка оборудования", "Мытьё окон", "Химчистка"];
    const subsectionOrder = {
        "Уборка": ["Фиксированные уборки", "Дополнительные услуги", "Почасовые уборки"],
        "Доставка оборудования": ["Доставка оборудования"],
        "Мытьё окон": ["Без акции", "Акция", "Дополнения к акции"],
        "Химчистка": ["Обычная ткань", "Деликатная ткань", "Матрасы", "Ковры", "Прочее"]
    };

    let cartItems = [];
    let cartItemIdCounter = 0;

    const servicesListArea = document.getElementById('services-list-area');
    const categoryNavList = document.getElementById('category-nav-list');
    const searchInputMain = document.getElementById('search-input-main');
    
    const cartItemsDisplay = document.getElementById('cart-items-display');
    const cartSummaryDetailsDisplay = document.getElementById('cart-summary-details-display');
    const totalPriceDisplay = document.getElementById('total-price-display');

    function formatPrice(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function calculateFormulaPrice(formulaType, ploshad) {
        if (ploshad <= 0) return 0;
        let baseRatePerSqM, minRatePerSqM, calculatedPricePerSqM;
        switch (formulaType) {
            case 'podderzhivayushaya': 
                baseRatePerSqM = 133; minRatePerSqM = 78;
                calculatedPricePerSqM = baseRatePerSqM - ((ploshad - 1) * ((baseRatePerSqM - minRatePerSqM) / 120));
                return Math.round(ploshad * Math.max(Math.min(calculatedPricePerSqM, baseRatePerSqM), minRatePerSqM));
            case 'generalnaya': 
                baseRatePerSqM = 211; minRatePerSqM = 141;
                calculatedPricePerSqM = baseRatePerSqM - ((ploshad - 1) * ((baseRatePerSqM - minRatePerSqM) / 120));
                return Math.round(ploshad * Math.max(Math.min(calculatedPricePerSqM, baseRatePerSqM), minRatePerSqM));
            case 'posle_remonta': 
                baseRatePerSqM = 336; minRatePerSqM = 242;
                calculatedPricePerSqM = baseRatePerSqM - ((ploshad - 1) * ((baseRatePerSqM - minRatePerSqM) / 120));
                return Math.round(ploshad * Math.max(Math.min(calculatedPricePerSqM, baseRatePerSqM), minRatePerSqM));
            default: return 0;
        }
    }
    
    function generateIdFromString(str) {
        return str.replace(/[^a-zA-Z0-9А-Яа-я-]/g, '-').toLowerCase();
    }

    function scrollToElement(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement && servicesListArea) {
            const servicesListRect = servicesListArea.getBoundingClientRect();
            const targetRect = targetElement.getBoundingClientRect();
            // Вычисляем позицию элемента относительно servicesListArea
            const scrollTopTo = targetRect.top - servicesListRect.top + servicesListArea.scrollTop;
            
            servicesListArea.scrollTo({ 
                top: scrollTopTo - 5, // 5px небольшой отступ сверху
                behavior: 'smooth' 
            });
        }
    }

    function renderNavigation() {
        if (!categoryNavList) return;
        categoryNavList.innerHTML = '';
        sectionOrder.forEach(sectionName => {
            const sectionLi = document.createElement('li');
            sectionLi.className = 'nav-item';
            const sectionButton = document.createElement('button');
            sectionButton.textContent = sectionName;
            const sectionId = `section-header-${generateIdFromString(sectionName)}`;
            sectionButton.dataset.targetId = sectionId;

            const subNavList = document.createElement('ul');
            subNavList.className = 'nav-sublist';
            let hasSubsectionsForNav = subsectionOrder[sectionName] && subsectionOrder[sectionName].length > 0;

            if (hasSubsectionsForNav) {
                sectionButton.innerHTML = `${sectionName} <span class="chevron-nav">${chevronRightNavSVG}</span>`;
                subsectionOrder[sectionName].forEach(subsectionName => {
                    // Проверяем, есть ли услуги в этом подразделе, прежде чем добавлять его в навигацию
                    const servicesInThisSubsection = servicesData.some(s => s.razdel === sectionName && s.podrazdel === subsectionName);
                    if (!servicesInThisSubsection) return;

                    const subsectionLi = document.createElement('li');
                    subsectionLi.className = 'nav-subitem';
                    const subsectionButton = document.createElement('button');
                    subsectionButton.textContent = subsectionName;
                    const subsectionId = `subsection-header-${generateIdFromString(sectionName)}-${generateIdFromString(subsectionName)}`;
                    subsectionButton.dataset.targetId = subsectionId;
                    subsectionButton.addEventListener('click', (e) => {
                        e.stopPropagation(); 
                        document.querySelectorAll('#category-nav-list button').forEach(btn => btn.classList.remove('active'));
                        subsectionButton.classList.add('active');
                        sectionButton.classList.add('active'); 
                        sectionLi.classList.add('open'); 
                        scrollToElement(subsectionId);
                    });
                    subsectionLi.appendChild(subsectionButton);
                    subNavList.appendChild(subsectionLi);
                });
                 // Если после фильтрации в subNavList не оказалось элементов, не показываем стрелку
                if (subNavList.children.length === 0) {
                    sectionButton.innerHTML = sectionName; // Убираем стрелку
                    hasSubsectionsForNav = false; 
                }
            }
            
            sectionButton.addEventListener('click', () => {
                const wasOpen = sectionLi.classList.contains('open');
                document.querySelectorAll('#category-nav-list .nav-item.open').forEach(item => {
                    if (item !== sectionLi) item.classList.remove('open'); // Закрываем другие открытые
                });
                document.querySelectorAll('#category-nav-list button.active').forEach(btn => btn.classList.remove('active'));
                
                sectionButton.classList.add('active');
                if(hasSubsectionsForNav) sectionLi.classList.toggle('open', !wasOpen);
                
                scrollToElement(sectionId);
            });

            sectionLi.appendChild(sectionButton);
            if(hasSubsectionsForNav && subNavList.children.length > 0) sectionLi.appendChild(subNavList);
            categoryNavList.appendChild(sectionLi);
        });
    }
    
    function renderServicesList() {
        if (!servicesListArea) return;
        servicesListArea.innerHTML = ''; 

        sectionOrder.forEach(sectionName => {
            const sectionId = `section-header-${generateIdFromString(sectionName)}`;
            const sectionHeaderEl = document.createElement('h3');
            sectionHeaderEl.className = 'service-section-header';
            sectionHeaderEl.textContent = sectionName;
            sectionHeaderEl.id = sectionId;
            
            let sectionHasContent = false;

            (subsectionOrder[sectionName] || []).forEach(subsectionName => {
                const subsectionId = `subsection-header-${generateIdFromString(sectionName)}-${generateIdFromString(subsectionName)}`;
                const subsectionHeaderEl = document.createElement('h4');
                subsectionHeaderEl.className = 'service-subsection-header';
                subsectionHeaderEl.textContent = subsectionName;
                subsectionHeaderEl.id = subsectionId;
                
                const servicesInSubsection = servicesData.filter(s => s.razdel === sectionName && s.podrazdel === subsectionName);
                let subsectionHasContent = false;

                if(servicesInSubsection.length > 0) {
                     if(!sectionHasContent) servicesListArea.appendChild(sectionHeaderEl); // Добавляем заголовок раздела, только если есть подразделы/услуги
                     sectionHasContent = true;
                     servicesListArea.appendChild(subsectionHeaderEl);
                     subsectionHasContent = true;
                }

                servicesInSubsection.forEach(service => {
                    service.domElement = document.createElement('div'); // Создаем здесь
                    service.domElement.className = 'service-entry';
                    service.domElement.dataset.serviceId = service.id;
                    service.sectionHeaderElement = sectionHeaderEl;
                    service.subsectionHeaderElement = subsectionHeaderEl;


                    let controlsHtml = '';
                    const formattedPrice = formatPrice(service.cost);
                    const formulaPrice = service.isFormula ? formatPrice(calculateFormulaPrice(service.formulaType, 10)) : '';

                    if (service.isFormula) {
                        controlsHtml = `
                            <div class="service-controls-inline">
                                <label for="area-${service.id}">Площадь (м²):</label>
                                <input type="number" id="area-${service.id}" min="1" value="10" data-service-id="${service.id}">
                                <span class="service-price-info">Цена: <span id="price-display-${service.id}">${formulaPrice}</span> ₽</span>
                            </div>
                        `;
                    } else {
                        controlsHtml = `
                            <div class="service-controls-inline">
                                <span class="service-price-info">${formattedPrice} ₽ / ${service.unit}</span>
                                <input type="number" id="qty-${service.id}" min="1" value="1">
                            </div>
                        `;
                    }
                    service.domElement.innerHTML = `
                        <span class="service-name">${service.name}</span>
                        ${controlsHtml}
                        <button class="add-button-inline" data-service-id="${service.id}">${plusIconSVG}Добавить</button>
                    `;
                    servicesListArea.appendChild(service.domElement);
                });
                if(!subsectionHasContent) subsectionHeaderEl.classList.add('hidden');
            });
            if(!sectionHasContent) sectionHeaderEl.classList.add('hidden');
        });
        
        servicesListArea.querySelectorAll('.add-button-inline').forEach(btn => btn.addEventListener('click', handleAddToCart));
        servicesListArea.querySelectorAll('input[id^="area-"]').forEach(input => input.addEventListener('input', handleAreaInputChange));
    }

    function filterServices(searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase().trim();
        let firstMatchElement = null;

        servicesData.forEach(service => {
            const isMatch = lowerSearchTerm === "" || service.name.toLowerCase().includes(lowerSearchTerm);
            if (service.domElement) {
                service.domElement.classList.toggle('hidden', !isMatch); // Фильтруем услуги
                if (isMatch && !firstMatchElement && lowerSearchTerm !== "") {
                    firstMatchElement = service.domElement;
                }
            }
        });
        
        // Показываем/скрываем заголовки подсекций и секций
        document.querySelectorAll('.service-subsection-header').forEach(sh => {
            let hasVisibleService = false;
            let currentEl = sh.nextElementSibling;
            while(currentEl && currentEl.classList.contains('service-entry')) {
                if(!currentEl.classList.contains('hidden')) {
                    hasVisibleService = true;
                    break;
                }
                currentEl = currentEl.nextElementSibling;
            }
            sh.classList.toggle('hidden', !hasVisibleService);
        });

        document.querySelectorAll('.service-section-header').forEach(sh => {
            let hasVisibleContent = false; // Либо видимый подзаголовок, либо видимая услуга (если нет подзаголовков)
            let currentEl = sh.nextElementSibling;
            while(currentEl && !currentEl.classList.contains('service-section-header')) {
                if((currentEl.classList.contains('service-subsection-header') || currentEl.classList.contains('service-entry')) && !currentEl.classList.contains('hidden')) {
                    hasVisibleContent = true;
                    break;
                }
                currentEl = currentEl.nextElementSibling;
            }
            sh.classList.toggle('hidden', !hasVisibleContent);
        });


        if (firstMatchElement && servicesListArea) {
            const servicesListRect = servicesListArea.getBoundingClientRect();
            const targetRect = firstMatchElement.getBoundingClientRect();
            const scrollTopTo = targetRect.top - servicesListRect.top + servicesListArea.scrollTop;
            servicesListArea.scrollTo({ top: scrollTopTo - 10, behavior: 'auto' }); // auto для мгновенного перехода
        }
        
        updateActiveNavOnScrollOrSearch();
    }

    function updateActiveNavOnScrollOrSearch() {
        if(!servicesListArea || !categoryNavList) return;
        let currentActiveButton = null;
        const scrollBuffer = 60; // Небольшой буфер, чтобы заголовок был чуть ниже верха для активации
        const scrollPos = servicesListArea.scrollTop + scrollBuffer; 

        const allHeaders = Array.from(servicesListArea.querySelectorAll('.service-section-header, .service-subsection-header'));
        
        for (let i = allHeaders.length - 1; i >= 0; i--) {
            const header = allHeaders[i];
            if (!header.classList.contains('hidden')) {
                // Вычисляем позицию элемента относительно servicesListArea
                const servicesListRect = servicesListArea.getBoundingClientRect();
                const headerRect = header.getBoundingClientRect();
                const headerTopInScrollable = headerRect.top - servicesListRect.top + servicesListArea.scrollTop;

                if (scrollPos >= headerTopInScrollable) {
                    currentActiveButton = categoryNavList.querySelector(`button[data-target-id="${header.id}"]`);
                    break;
                }
            }
        }
        
        document.querySelectorAll('#category-nav-list button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('#category-nav-list .nav-item').forEach(item => item.classList.remove('open'));

        if (currentActiveButton) {
            currentActiveButton.classList.add('active');
            const parentLi = currentActiveButton.closest('.nav-item');
            if (parentLi) {
                parentLi.classList.add('open');
                const parentButton = parentLi.querySelector(':scope > button');
                if(parentButton && !parentButton.classList.contains('active')) parentButton.classList.add('active'); // Активируем и родителя
            }
        } else if (searchInputMain && searchInputMain.value === "" && categoryNavList.firstChild && categoryNavList.firstChild.firstChild) {
             categoryNavList.firstChild.firstChild.classList.add('active'); 
        }
    }
    
    function renderCart() {
        if (!cartItemsDisplay || !totalPriceDisplay || !cartSummaryDetailsDisplay) return;
        cartItemsDisplay.innerHTML = ''; let totalOverall = 0; const totalsByRazdel = {};
        cartItems.forEach(item => {
            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item-row'; cartItemEl.dataset.cartId = item.cartId;
            const serviceDefinition = servicesData.find(s => s.id === item.serviceId);
            if (serviceDefinition) {
                if (!totalsByRazdel[serviceDefinition.razdel]) totalsByRazdel[serviceDefinition.razdel] = 0;
                totalsByRazdel[serviceDefinition.razdel] += item.totalPrice;
            }
            const itemTotalPriceFormatted = formatPrice(item.totalPrice);
            cartItemEl.innerHTML = `
                <div class="cart-item-details-row">
                    <div class="cart-item-name-row">${item.name}</div>
                    <div class="cart-item-desc-row">${item.description}</div>
                </div>
                <div class="cart-item-price-row">${itemTotalPriceFormatted} ₽</div>
                <button class="remove-button-row" data-cart-id="${item.cartId}" title="Удалить">${removeIconSVG}</button>
            `;
            cartItemsDisplay.appendChild(cartItemEl); totalOverall += item.totalPrice;
        });
        totalPriceDisplay.textContent = formatPrice(totalOverall);
        cartSummaryDetailsDisplay.innerHTML = '';
        for (const razdel in totalsByRazdel) {
            if (totalsByRazdel.hasOwnProperty(razdel)) {
                const summaryItemEl = document.createElement('div');
                summaryItemEl.className = 'cart-summary-item-row';
                const razdelTotalFormatted = formatPrice(totalsByRazdel[razdel]);
                summaryItemEl.innerHTML = `<span>Итого ${razdel.toLowerCase()}:</span> <span>${razdelTotalFormatted} ₽</span>`;
                cartSummaryDetailsDisplay.appendChild(summaryItemEl);
            }
        }
        cartItemsDisplay.querySelectorAll('.remove-button-row').forEach(btn => btn.addEventListener('click', handleRemoveFromCart));
    }

    function handleAreaInputChange(event) { 
        const input = event.target; const serviceId = input.dataset.serviceId;
        const service = servicesData.find(s => s.id === serviceId); const area = parseFloat(input.value) || 0;
        if (service && service.isFormula) {
            const price = calculateFormulaPrice(service.formulaType, area);
            const priceDisplayElement = document.getElementById(`price-display-${service.id}`);
            if (priceDisplayElement) priceDisplayElement.textContent = formatPrice(price);
        }
    }
    function handleAddToCart(event) { 
        const serviceId = event.currentTarget.dataset.serviceId; 
        const service = servicesData.find(s => s.id === serviceId); if (!service) return;
        let quantity, totalPrice, description;
        if (service.isFormula) {
            const areaInput = document.getElementById(`area-${service.id}`); if (!areaInput) return;
            quantity = parseFloat(areaInput.value) || 0; 
            if (quantity <=0) { alert('Площадь должна быть больше 0'); return; }
            totalPrice = calculateFormulaPrice(service.formulaType, quantity);
            description = `${quantity} м²`;
            cartItems.push({ cartId: `cart-item-${cartItemIdCounter++}`, serviceId: service.id, name: service.name, description: description, area: quantity, quantity: 1, unit: service.unit, totalPrice: totalPrice, isFormula: true });
        } else {
            const qtyInput = document.getElementById(`qty-${service.id}`); if (!qtyInput) return;
            quantity = parseInt(qtyInput.value) || 0;
            if (quantity <=0) { alert('Количество должно быть больше 0'); return; }
            totalPrice = quantity * service.cost;
            description = `${quantity} ${service.unit}`;
            cartItems.push({ cartId: `cart-item-${cartItemIdCounter++}`, serviceId: service.id, name: service.name, description: description, quantity: quantity, unit: service.unit, pricePerUnit: service.cost, totalPrice: totalPrice, isFormula: false });
        }
        renderCart();
    }
    function handleRemoveFromCart(event) { 
        const cartIdToRemove = event.currentTarget.dataset.cartId;
        cartItems = cartItems.filter(item => item.cartId !== cartIdToRemove);
        renderCart();
    }

    if (searchInputMain) {
        searchInputMain.addEventListener('input', (e) => {
            filterServices(e.target.value);
        });
    }
    if(servicesListArea) {
        servicesListArea.addEventListener('scroll', updateActiveNavOnScrollOrSearch);
    }
    
    renderNavigation();
    renderServicesList(); // Важно сначала отрендерить DOM-элементы услуг
    filterServices(""); // Применить начальную фильтрацию (показать все)
    renderCart(); 
    
    if (categoryNavList && categoryNavList.firstChild && categoryNavList.firstChild.firstChild) {
        categoryNavList.firstChild.firstChild.classList.add('active');
    }
    
    console.log(`Разобрано ${servicesData.length} услуг.`);
});
