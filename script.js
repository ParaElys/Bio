let currentVersion = 'desktop';
    let currentLang = 'ru';

    const translations = {
        ru: {
            languageLabel: 'Язык',
            support: '💖 Поддержка',
            email: '📧 Связь по рекламе',
            rulesMenu: 'Правила сообщества',
            copyright: '© 2025 ParaElys | Все права защищены',
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
            languageLabel: 'Language',
            support: '💖 Support',
            email: '📧 Advertising inquiries',
            rulesMenu: 'Community Rules',
            copyright: '© 2025 ParaElys | All rights reserved',
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
            languageLabel: 'Мова',
            support: '💖 Підтримка',
            email: '📧 Зв’язок щодо реклами',
            rulesMenu: 'Правила спільноти',
            copyright: '© 2025 ParaElys | Усі права захищені',
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
        closeDropdowns();
    }

    function toggleVersion() {
        applyVersion(currentVersion === 'mobile' ? 'desktop' : 'mobile');
    }

    function setLang(lang) {
        if (!translations[lang]) return;

        currentLang = lang;
        const t = translations[lang];

        document.documentElement.lang = lang === 'ua' ? 'uk' : lang;
        document.getElementById('supportTitle').textContent = t.support;
        document.getElementById('emailContactLink').textContent = t.email;
        document.querySelector('.rules-menu').textContent = t.rulesMenu;
        document.getElementById('copyrightText').textContent = t.copyright;
        document.getElementById('rulesTitle').textContent = t.rulesTitle;
        document.getElementById('rulesText').innerHTML = t.rulesHtml;
        document.querySelector('.logo').setAttribute('aria-label', t.homeLabel);
        document.getElementById('languageToggle').textContent = t.languageLabel + ' ▼';
        updateVersionSwitchText();
        closeLanguageMenu();
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

        const subject = 'Реклама';
        const body = 'Здравствуйте!';
        const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=paraelys.info@gmail.com'
            + '&su=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(body);

        const openedWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
        if (openedWindow) {
            openedWindow.opener = null;
        } else {
            window.location.href = event.currentTarget.href;
        }
    }

    // При первом открытии мобильное устройство получает мобильную версию автоматически.
    document.addEventListener('DOMContentLoaded', () => {
        applyVersion(isMobileDevice() ? 'mobile' : 'desktop');
        setLang(currentLang);

        const homeLink = document.getElementById('homeLink');
        const languageToggle = document.getElementById('languageToggle');
        const rulesMenu = document.getElementById('rulesMenu');
        const versionSwitch = document.getElementById('versionSwitch');
        const closeRulesButton = document.getElementById('closeRulesButton');
        const rulesModal = document.getElementById('rulesModal');
        const emailContactLink = document.getElementById('emailContactLink');

        homeLink.addEventListener('click', goHome);
        languageToggle.addEventListener('click', toggleLanguageMenu);
        rulesMenu.addEventListener('click', openRules);
        versionSwitch.addEventListener('click', toggleVersion);
        closeRulesButton.addEventListener('click', closeRules);
        emailContactLink.addEventListener('click', openEmailContact);

        activateWithKeyboard(rulesMenu, openRules);
        activateWithKeyboard(versionSwitch, toggleVersion);
        activateWithKeyboard(closeRulesButton, closeRules);

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
                closeRules();
            }
        });
    });