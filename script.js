let currentVersion = 'desktop';
    let currentLang = 'ru';

    const translations = {
        ru: {
            flag: '🇷🇺',
            languageLabel: 'Язык',
            support: '💖 Поддержать проект ParaElys',
            collaboration: '🤝 Сотрудничество',
            emailAction: 'Написать на Email',
            copyEmail: 'Скопировать Email',
            copied: 'Email скопирован',
            copyFailed: 'Не удалось скопировать — выделите адрес вручную',
            soon: 'Скоро',
            rights: 'Все права защищены',
            rulesMenu: 'Правила сообщества',
            mobileVersion: 'Мобильная версия',
            fullVersion: 'Полная версия',
            rulesTitle: '📜 Правила сообщества',
            homeLabel: 'На главную',
            rulesHtml: `Добро пожаловать! Ниже приведены правила поведения на всех продуктах ParaElys.<br><br>
            1. Уважайте других пользователей.<br>
            2. Запрещено оскорбление, спам и реклама без согласия.<br>
            3. Контент, нарушающий законы, запрещен.<br>
            4. Все донаты, покупки и транзакции проходят через официальные каналы.<br>
            5. Администрация оставляет за собой право удалять сообщения или блокировать пользователей за нарушение правил.<br><br>
            Дисклеймер: Мы не несем ответственность за действия пользователей вне наших платформ и за сторонний контент.`
        },
        en: {
            flag: '🇬🇧',
            languageLabel: 'Language',
            support: '💖 Support the ParaElys project',
            collaboration: '🤝 Partnerships',
            emailAction: 'Write via Email',
            copyEmail: 'Copy Email',
            copied: 'Email copied',
            copyFailed: 'Could not copy — select the address manually',
            soon: 'Soon',
            rights: 'All rights reserved',
            rulesMenu: 'Community Rules',
            mobileVersion: 'Mobile version',
            fullVersion: 'Full version',
            rulesTitle: '📜 Community Rules',
            homeLabel: 'Back to home',
            rulesHtml: `Welcome! Below are the rules of conduct for all ParaElys products.<br><br>
            1. Respect other users.<br>
            2. Insults, spam, and advertising without permission are prohibited.<br>
            3. Content that violates the law is prohibited.<br>
            4. All donations, purchases, and transactions must go through official channels.<br>
            5. The administration reserves the right to remove messages or block users for violating the rules.<br><br>
            Disclaimer: We are not responsible for users' actions outside our platforms or for third-party content.`
        },
        ua: {
            flag: '🇺🇦',
            languageLabel: 'Мова',
            support: '💖 Підтримати проєкт ParaElys',
            collaboration: '🤝 Співпраця',
            emailAction: 'Написати на Email',
            copyEmail: 'Скопіювати Email',
            copied: 'Email скопійовано',
            copyFailed: 'Не вдалося скопіювати — виділіть адресу вручну',
            soon: 'Скоро',
            rights: 'Усі права захищені',
            rulesMenu: 'Правила спільноти',
            mobileVersion: 'Мобільна версія',
            fullVersion: 'Повна версія',
            rulesTitle: '📜 Правила спільноти',
            homeLabel: 'На головну',
            rulesHtml: `Ласкаво просимо! Нижче наведено правила поведінки на всіх продуктах ParaElys.<br><br>
            1. Поважайте інших користувачів.<br>
            2. Заборонені образи, спам і реклама без дозволу.<br>
            3. Контент, що порушує закон, заборонений.<br>
            4. Усі донати, покупки та транзакції мають проходити через офіційні канали.<br>
            5. Адміністрація залишає за собою право видаляти повідомлення або блокувати користувачів за порушення правил.<br><br>
            Дисклеймер: Ми не несемо відповідальності за дії користувачів поза нашими платформами та за сторонній контент.`
        },
        kz: {
            flag: '🇰🇿',
            languageLabel: 'Тіл',
            support: '💖 ParaElys жобасын қолдау',
            collaboration: '🤝 Ынтымақтастық',
            emailAction: 'Email арқылы жазу',
            copyEmail: 'Email көшіру',
            copied: 'Email көшірілді',
            copyFailed: 'Көшіру мүмкін болмады — мекенжайды қолмен таңдаңыз',
            soon: 'Жақында',
            rights: 'Барлық құқықтар қорғалған',
            rulesMenu: 'Қауымдастық ережелері',
            mobileVersion: 'Мобильді нұсқа',
            fullVersion: 'Толық нұсқа',
            rulesTitle: '📜 Қауымдастық ережелері',
            homeLabel: 'Басты бетке',
            rulesHtml: `Қош келдіңіз! Төменде ParaElys жобаларына арналған мінез-құлық ережелері берілген.<br><br>
            1. Басқа пайдаланушыларды құрметтеңіз.<br>
            2. Қорлау, спам және рұқсатсыз жарнамаға тыйым салынады.<br>
            3. Заңды бұзатын контентке тыйым салынады.<br>
            4. Барлық донаттар, сатып алулар және транзакциялар ресми арналар арқылы өтуі керек.<br>
            5. Әкімшілік ережелерді бұзғаны үшін хабарламаларды өшіруге немесе пайдаланушыларды бұғаттауға құқылы.<br><br>
            Ескерту: Біз платформаларымыздан тыс пайдаланушылардың әрекеттеріне және үшінші тарап контентіне жауапты емеспіз.`
        }
    };

    function closeDropdowns(except = null) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            if (dropdown !== except) {
                dropdown.classList.remove('open');
                dropdown.querySelector('[data-dropdown-toggle]')?.setAttribute('aria-expanded', 'false');
            }
        });
    }

    function toggleDropdown(btn) {
        const dropdown = btn.parentElement;
        const willOpen = !dropdown.classList.contains('open');

        closeDropdowns(dropdown);
        closeLanguageMenu();
        dropdown.classList.toggle('open', willOpen);
        btn.setAttribute('aria-expanded', String(willOpen));
    }

    function toggleLanguageMenu(event) {
        event.stopPropagation();
        const menu = document.getElementById('languageMenu');
        const willOpen = !menu.classList.contains('open');
        closeDropdowns();
        menu.classList.toggle('open', willOpen);
        document.getElementById('languageToggle').setAttribute('aria-expanded', String(willOpen));
    }

    function closeLanguageMenu() {
        document.getElementById('languageMenu')?.classList.remove('open');
        document.getElementById('languageToggle')?.setAttribute('aria-expanded', 'false');
    }

    // Закрываем раскрывающиеся меню при клике вне них.
    document.addEventListener('click', event => {
        if (!event.target.closest('.dropdown')) {
            closeDropdowns();
        }
        if (!event.target.closest('.language-menu')) {
            closeLanguageMenu();
        }
    });

    function goHome(event) {
        event.preventDefault();
        closeDropdowns();
        closeLanguageMenu();
        closeRules();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function isMobileDevice() {
        const mobileUserAgent = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
        const narrowScreen = window.matchMedia('(max-width: 768px)').matches;
        return mobileUserAgent || narrowScreen;
    }

    const SITE_START_YEAR = 2025;
    const CONTACT_EMAIL = 'paraelys.info@gmail.com';

    function savePreference(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (_) {
            // Сайт продолжит работать, даже если браузер запретил localStorage.
        }
    }

    function loadPreference(key) {
        try {
            return localStorage.getItem(key);
        } catch (_) {
            return null;
        }
    }

    function copyrightFor(lang) {
        const currentYear = new Date().getFullYear();
        const years = currentYear > SITE_START_YEAR
            ? SITE_START_YEAR + '–' + currentYear
            : String(SITE_START_YEAR);
        return '© ' + years + ' ParaElys | ' + translations[lang].rights;
    }

    function updateVersionSwitchText() {
        const t = translations[currentLang];
        const switcher = document.getElementById('versionSwitch');
        switcher.textContent = currentVersion === 'mobile' ? t.fullVersion : t.mobileVersion;
    }

    function applyVersion(version) {
        currentVersion = version;
        document.body.classList.toggle('mobile-mode', version === 'mobile');
        document.body.classList.toggle('desktop-mode', version === 'desktop');
        updateVersionSwitchText();
        savePreference('paraelys-version', version);
        closeDropdowns();
    }

    function toggleVersion() {
        applyVersion(currentVersion === 'mobile' ? 'desktop' : 'mobile');
    }

    function setLang(lang) {
        if (!translations[lang]) return;

        currentLang = lang;
        const t = translations[lang];

        document.documentElement.lang = lang === 'ua' ? 'uk' : (lang === 'kz' ? 'kk' : lang);
        document.body.classList.toggle('english-ui-font', lang === 'en');
        document.body.classList.toggle('kazakh-ui-font', lang === 'kz');
        document.getElementById('supportTitle').textContent = t.support;
        document.getElementById('collaborationTitle').textContent = t.collaboration;
        document.getElementById('emailContactLink').textContent = t.emailAction;
        document.getElementById('copyEmailButton').textContent = t.copyEmail;
        document.querySelectorAll('[data-soon]').forEach(label => {
            label.textContent = t.soon;
        });
        document.querySelector('.rules-menu').textContent = t.rulesMenu;
        document.getElementById('copyrightText').textContent = copyrightFor(lang);
        document.getElementById('rulesTitle').textContent = t.rulesTitle;
        document.getElementById('rulesText').innerHTML = t.rulesHtml;
        document.querySelector('.logo').setAttribute('aria-label', t.homeLabel);
        document.getElementById('languageToggle').textContent = t.flag + ' ' + t.languageLabel + ' ▼';
        updateVersionSwitchText();
        savePreference('paraelys-language', lang);
        closeLanguageMenu();
    }

    function toggleCollaboration() {
        const block = document.getElementById('collaborationBlock');
        const toggle = document.getElementById('collaborationToggle');
        const willOpen = !block.classList.contains('open');

        closeDropdowns();
        closeLanguageMenu();
        block.classList.toggle('open', willOpen);
        toggle.setAttribute('aria-expanded', String(willOpen));

        if (!willOpen) {
            document.getElementById('copyStatus').textContent = '';
        }
    }

    function closeCollaboration() {
        document.getElementById('collaborationBlock')?.classList.remove('open');
        document.getElementById('collaborationToggle')?.setAttribute('aria-expanded', 'false');
        const status = document.getElementById('copyStatus');
        if (status) status.textContent = '';
    }

    async function copyContactEmail() {
        const status = document.getElementById('copyStatus');
        const t = translations[currentLang];

        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            status.textContent = t.copied;
        } catch (_) {
            status.textContent = CONTACT_EMAIL + ' — ' + t.copyFailed;
        }
    }

    function toggleSupport() {
        const block = document.getElementById('supportBlock');
        const toggle = document.getElementById('supportToggle');
        const willOpen = !block.classList.contains('open');

        block.classList.toggle('open', willOpen);
        toggle.setAttribute('aria-expanded', String(willOpen));
    }

    function openRules() {
        closeDropdowns();
        closeLanguageMenu();
        document.getElementById('rulesModal').style.display = 'flex';
    }

    function closeRules() {
        document.getElementById('rulesModal').style.display = 'none';
    }

    function activateWithKeyboard(element, action) {
        element.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                action(event);
            }
        });
    }

    function openEmailContact(event) {
        event.preventDefault();

        const emailMessages = {
            ru: { subject: 'Сотрудничество', body: 'Здравствуйте!' },
            en: { subject: 'Partnerships', body: 'Hello!' },
            ua: { subject: 'Співпраця', body: 'Вітаю!' },
            kz: { subject: 'Ынтымақтастық', body: 'Сәлеметсіз бе!' }
        };
        const message = emailMessages[currentLang] || emailMessages.ru;
        const subject = message.subject;
        const body = message.body;
        const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(CONTACT_EMAIL)
            + '&su=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(body);

        const openedWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
        if (openedWindow) {
            openedWindow.opener = null;
        } else {
            window.location.href = event.currentTarget.href;
        }
    }

    // При первом открытии используем сохранённые настройки, а если их нет —
    // автоматически выбираем мобильную версию на смартфоне.
    document.addEventListener('DOMContentLoaded', () => {
        const savedLang = loadPreference('paraelys-language');
        const savedVersion = loadPreference('paraelys-version');

        currentLang = translations[savedLang] ? savedLang : 'ru';
        applyVersion(savedVersion === 'mobile' || savedVersion === 'desktop'
            ? savedVersion
            : (isMobileDevice() ? 'mobile' : 'desktop'));
        setLang(currentLang);

        const homeLink = document.getElementById('homeLink');
        const languageToggle = document.getElementById('languageToggle');
        const rulesMenu = document.getElementById('rulesMenu');
        const supportToggle = document.getElementById('supportToggle');
        const collaborationToggle = document.getElementById('collaborationToggle');
        const copyEmailButton = document.getElementById('copyEmailButton');
        const versionSwitch = document.getElementById('versionSwitch');
        const closeRulesButton = document.getElementById('closeRulesButton');
        const rulesModal = document.getElementById('rulesModal');
        const emailContactLink = document.getElementById('emailContactLink');

        homeLink.addEventListener('click', goHome);
        languageToggle.addEventListener('click', toggleLanguageMenu);
        rulesMenu.addEventListener('click', openRules);
        supportToggle.addEventListener('click', toggleSupport);
        collaborationToggle.addEventListener('click', toggleCollaboration);
        copyEmailButton.addEventListener('click', copyContactEmail);
        versionSwitch.addEventListener('click', toggleVersion);
        closeRulesButton.addEventListener('click', closeRules);
        emailContactLink.addEventListener('click', openEmailContact);

        activateWithKeyboard(rulesMenu, openRules);
        activateWithKeyboard(versionSwitch, toggleVersion);
        activateWithKeyboard(closeRulesButton, closeRules);

        document.querySelectorAll('.support-disabled').forEach(link => {
            link.addEventListener('click', event => event.preventDefault());
        });

        document.querySelectorAll('[data-lang]').forEach(button => {
            button.addEventListener('click', () => setLang(button.dataset.lang));
        });

        document.querySelectorAll('[data-dropdown-toggle]').forEach(button => {
            button.addEventListener('click', () => toggleDropdown(button));
            activateWithKeyboard(button, () => toggleDropdown(button));
        });

        rulesModal.addEventListener('click', event => {
            if (event.target === rulesModal) closeRules();
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                closeDropdowns();
                closeLanguageMenu();
                closeCollaboration();
                closeRules();
            }
        });
    });