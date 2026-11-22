document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking nav links
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Multi-language system (UA, RU, EN)
    const translations = {
        uk: {
            nav_home: "Головна",
            nav_about: "Про нас",
            nav_services: "Меню",
            nav_gallery: "Галерея",
            nav_contacts: "Контакти",
            hero_title: "Pizza Familia у Жмеринці — затишне місце для всієї родини",
            hero_subtitle: "Найсмачніша італійська піца, приємна атмосфера та найкращі моменти разом з близькими у серці Жмеринки.",
            btn_menu: "Переглянути меню",
            btn_contacts: "Знайти нас",
            features_title: "Чому обирають нас",
            features_subtitle: "Ми створюємо атмосферу тепла та неперевершеного смаку",
            feat_1_title: "Справжня піца",
            feat_1_desc: "Соковита та ароматна піца на тонкому тісті з найкращих інгредієнтів.",
            feat_2_title: "Сімейний затишок",
            feat_2_desc: "Ідеальне місце для сімейних обідів, дружніх зустрічей та романтичних вечорів.",
            feat_3_title: "Високий сервіс",
            feat_3_desc: "Дбаємо про кожного відвідувача, забезпечуючи швидку подачу та приємні ціни.",
            cta_title: "Завітайте до нас сьогодні!",
            cta_desc: "вулиця Центральна, 6, Жмеринка. Працюємо щодня з 10:00 до 22:00.",
            cta_btn: "Контакти та карта",
            footer_slogan: "Затишне кафе італійської кухні у Жмеринці.",
            footer_hours_title: "Графік роботи",
            footer_addr_title: "Адреса",
            footer_social_title: "Соціальні мережі",
            about_page_title: "Про кафе Pizza Familia",
            about_page_subtitle: "Дізнайтеся більше про нашу історію, цінності та атмосферу",
            about_p1: "Ласкаво просимо до кафе «Pizza Familia» у місті Жмеринка, де на вас чекає тепла атмосфера, затишний інтер'єр та найсмачніші страви італійської кухні. Це ідеальне місце для сімейних обідів, дружніх зустрічей та романтичних вечорів у серці нашого міста.",
            about_p2: "Наша гордость — це соковита та ароматна піца на тонкому тісті з різноманітними начинками, приготована за найкращими рецептами з використанням свіжих інгредієнтів. Окрім фірмової піци, меню закладу пропонує широкий вибір закусок, ситних страв, десертів та освіжаючих напоїв на будь-який смак.",
            about_p3: "Ми дбаємо про кожного відвідувача, тому пропонуємо високий рівень обслуговування, швидку подачу та приємні ціни. Завітайте до нас за адресою вулиця Центральна, 6, щоб насолодитися незабутнім смаком та чудово провести час у колі найрідніших людей!",
            services_page_title: "Наше меню та страви",
            services_page_subtitle: "Справжні італійські рецепти та свіжі інгредієнти у Жмеринці",
            cat_pizza_title: "Фірмова піца",
            cat_pizza_desc: "Соковита та ароматна піца на тонкому тісті з різноманітними начинками, приготована за найкращими ітралійськими рецептами з використанням свіжих інгредієнтів.",
            cat_snacks_title: "Закуски та ситні страви",
            cat_snacks_desc: "Широкий вибір апетитних закусок та ситних страв, які чудово доповнять ваше застілля або стануть чудовим початком обіду.",
            cat_desserts_title: "Десерти та напої",
            cat_desserts_desc: "Ніжні десерти та освіжаючі напої на будь-який смак, щоб завершити вашу трапезу приємною солодкістю.",
            menu_note_text: "Завітайте до нашого закладу за адресою вулиця Центральна, 6 у Жмеринці, щоб ознайомитися з повним актуальним меню та насолодитися атмосферою.",
            gallery_page_title: "Фотогалерея",
            gallery_page_subtitle: "Затишна атмосфера та апетитні страви у Pizza Familia",
            contacts_page_title: "Контакти",
            contacts_page_subtitle: "Чекаємо на вас у нашому затишному кафе у Жмеринці",
            contact_addr_title: "Адреса",
            contact_hours_title: "Графік роботи",
            contact_social_title: "Соціальні мережі",
            btn_gmaps: "Відкрити у Google Maps",
            btn_view_map: "Дивитися на мапі"
        },
        ru: {
            nav_home: "Главная",
            nav_about: "О нас",
            nav_services: "Меню",
            nav_gallery: "Галерея",
            nav_contacts: "Контакты",
            hero_title: "Pizza Familia в Жмеринке — уютное место для всей семьи",
            hero_subtitle: "Самая вкусная итальянская пицца, приятная атмосфера и лучшие моменты вместе с близкими в сердце Жмеринки.",
            btn_menu: "Посмотреть меню",
            btn_contacts: "Найти нас",
            features_title: "Почему выбирают нас",
            features_subtitle: "Мы создаем атмосферу тепла и непревзойденного вкуса",
            feat_1_title: "Настоящая пицца",
            feat_1_desc: "Сочная и ароматная пицца на тонком тесте из лучших ингредиентов.",
            feat_2_title: "Семейный уют",
            feat_2_desc: "Идеальное место для семейных обедов, дружеских встреч и романтических вечеров.",
            feat_3_title: "Высокий сервис",
            feat_3_desc: "Заботимся о каждом посетителе, обеспечивая быструю подачу и приятные цены.",
            cta_title: "Посетите нас сегодня!",
            cta_desc: "улица Центральная, 6, Жмеринка. Работаем ежедневно с 10:00 до 22:00.",
            cta_btn: "Контакты и карта",
            footer_slogan: "Уютное кафе итальянской кухни в Жмеринке.",
            footer_hours_title: "График работы",
            footer_addr_title: "Адрес",
            footer_social_title: "Социальные сети",
            about_page_title: "О кафе Pizza Familia",
            about_page_subtitle: "Узнайте больше о нашей истории, ценностях и атмосфере",
            about_p1: "Добро пожаловать в кафе «Pizza Familia» в городе Жмеринка, где вас ждет теплая атмосфера, уютный интерьер и самые вкусные блюда итальянской кухни. Это идеальное место для семейных обедов, дружеских встреч и романтических вечеров в сердце нашего города.",
            about_p2: "Наша гордость — это сочная и ароматная пицца на тонком тесте с разнообразными начинками, приготовленная по лучшим рецептам с использованием свежих ингредиентов. Кроме фирменной пиццы, меню заведения предлагает широкий выбор закусок, сытных блюд, десертов и освежающих напитков на любой вкус.",
            about_p3: "Мы заботимся о каждом посетителе, поэтому предлагаем высокий уровень обслуживания, быструю подачу и приятные цены. Посетите нас по адресу улица Центральная, 6, чтобы насладиться незабываемым вкусом и отлично провести время в кругу самых родных людей!",
            services_page_title: "Наше меню и блюда",
            services_page_subtitle: "Настоящие итальянские рецепты и свежие ингредиенты в Жмеринке",
            cat_pizza_title: "Фирменная пицца",
            cat_pizza_desc: "Сочная и ароматная пицца на тонком тесте с различными начинками, приготовленная по лучшим итальянским рецептам с использованием свежих ингредиентов.",
            cat_snacks_title: "Закуски и сытные блюда",
            cat_snacks_desc: "Широкий выбор аппетитных закусок и сытных блюд, которые отлично дополнят ваше застолье или станут прекрасным началом обеда.",
            cat_desserts_title: "Десерты и напитки",
            cat_desserts_desc: "Нежные десерты и освежающие напитки на любой вкус, чтобы завершить вашу трапезу приятной сладостью.",
            menu_note_text: "Посетите наше заведение по адресу улица Центральная, 6 в Жмеринке, чтобы ознакомиться с полным актуальным меню и насладиться атмосферой.",
            gallery_page_title: "Фотогалерея",
            gallery_page_subtitle: "Уютная атмосфера и аппетитные блюда в Pizza Familia",
            contacts_page_title: "Контакты",
            contacts_page_subtitle: "Ждем вас в нашем уютном кафе в Жмеринке",
            contact_addr_title: "Адрес",
            contact_hours_title: "График работы",
            contact_social_title: "Социальные сети",
            btn_gmaps: "Открыть в Google Maps",
            btn_view_map: "Смотреть на карте"
        },
        en: {
            nav_home: "Home",
            nav_about: "About Us",
            nav_services: "Menu",
            nav_gallery: "Gallery",
            nav_contacts: "Contacts",
            hero_title: "Pizza Familia in Zhmerinka — a cozy place for the whole family",
            hero_subtitle: "The tastiest Italian pizza, pleasant atmosphere, and best moments with loved ones in the heart of Zhmerinka.",
            btn_menu: "View Menu",
            btn_contacts: "Find Us",
            features_title: "Why Choose Us",
            features_subtitle: "We create an atmosphere of warmth and unsurpassed taste",
            feat_1_title: "Authentic Pizza",
            feat_1_desc: "Juicy and aromatic thin-crust pizza made from the finest ingredients.",
            feat_2_title: "Family Warmth",
            feat_2_desc: "The perfect place for family dinners, friendly gatherings, and romantic evenings.",
            feat_3_title: "High Service",
            feat_3_desc: "We care about every visitor, ensuring fast service and pleasant prices.",
            cta_title: "Visit Us Today!",
            cta_desc: "6 Centralna Street, Zhmerinka. Open daily from 10:00 to 22:00.",
            cta_btn: "Contacts & Map",
            footer_slogan: "Cozy Italian cuisine cafe in Zhmerinka.",
            footer_hours_title: "Working Hours",
            footer_addr_title: "Address",
            footer_social_title: "Social Media",
            about_page_title: "About Pizza Familia",
            about_page_subtitle: "Learn more about our history, values, and atmosphere",
            about_p1: "Welcome to the «Pizza Familia» cafe in Zhmerinka, where a warm atmosphere, cozy interior, and the most delicious Italian dishes await you. This is the ideal place for family dinners, friendly meetings, and romantic evenings in the heart of our city.",
            about_p2: "Our pride is juicy and aromatic thin-crust pizza with various toppings, prepared according to the best recipes using fresh ingredients. In addition to signature pizza, our menu offers a wide selection of appetizers, hearty dishes, desserts, and refreshing drinks for every taste.",
            about_p3: "We care about every guest, offering high-level service, quick serving, and pleasant prices. Visit us at 6 Centralna Street to enjoy unforgettable flavors and spend a wonderful time surrounded by your dearest people!",
            services_page_title: "Our Menu & Dishes",
            services_page_subtitle: "Authentic Italian recipes and fresh ingredients in Zhmerinka",
            cat_pizza_title: "Signature Pizza",
            cat_pizza_desc: "Juicy and aromatic thin-crust pizza with various toppings, prepared according to the best Italian recipes using fresh ingredients.",
            cat_snacks_title: "Appetizers & Main Courses",
            cat_snacks_desc: "A wide selection of appetizing snacks and hearty dishes that will perfectly complement your gathering or start your lunch.",
            cat_desserts_title: "Desserts & Drinks",
            cat_desserts_desc: "Delicate desserts and refreshing drinks for every taste to complete your meal with pleasant sweetness.",
            menu_note_text: "Visit our establishment at 6 Centralna Street in Zhmerinka to check out the full current menu and enjoy the atmosphere.",
            gallery_page_title: "Photo Gallery",
            gallery_page_subtitle: "Cozy atmosphere and appetizing dishes at Pizza Familia",
            contacts_page_title: "Contacts",
            contacts_page_subtitle: "We look forward to seeing you at our cozy cafe in Zhmerinka",
            contact_addr_title: "Address",
            contact_hours_title: "Working Hours",
            contact_social_title: "Social Media",
            btn_gmaps: "Open in Google Maps",
            btn_view_map: "View on Map"
        }
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    
    function setLanguage(lang) {
        if (!translations[lang]) return;
        
        localStorage.setItem('pizza_familia_lang', lang);
        
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.documentElement.setAttribute('lang', lang);
    }

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Init saved language or default to uk
    const savedLang = localStorage.getItem('pizza_familia_lang') || 'uk';
    setLanguage(savedLang);
});