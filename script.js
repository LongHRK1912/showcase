const i18n = {
    en: {
        meta_title: "HRK Studio - Premium Android Ecosystem",
        hero_tagline: "Delivering emotional and useful apps built with love & precision.",
        hero_founder: "Founded by <strong>Nguyễn Đức Long</strong> — Android Developer",
        hero_explore: "Explore on Google Play",
        hero_discover: "Discover The Ecosystem",

        vitabeat_headline: "Med & Heart Monitor",
        vitabeat_desc: "Smart pill reminder, medication tracker & camera heart rate monitor. Stay on top of your health with intelligent scheduling and real-time vitals monitoring — all in one beautifully designed app.",
        
        picpulse_headline: "Daily Photo Journal",
        picpulse_desc: "Capture one photo a day with automatic time, location, and gentle reminders. Build a visual diary of your life, one snapshot at a time, completely offline and privacy-first.",
        
        vaultx_headline: "Private Encrypted File Vault",
        vaultx_desc: "Absolute privacy with military-grade encryption. Your photos, videos, and documents are encrypted with <strong>AES-256-GCM</strong> and hidden securely in Android's private internal storage.",
        
        chatwithmyself_headline: "Talk to Your Past & Future Self",
        chatwithmyself_desc: "A personal time-capsule journal. Write a message today, choose a delay, and receive it later as if your Past Self is texting you. Features a real chat UI and end-to-end encryption.",
        
        tunedetect_headline: "Song Recognition by Sound",
        tunedetect_desc: "Instantly identify any song playing around you. Ultra-fast recognition with direct links to Spotify, YouTube, and Apple Music. Clean Material You design with full search history.",
        
        btn_download: "Download App",

        founder_title: "Behind the Ecosystem",
        founder_subtitle: "The architect bridging the gap between code and user emotion.",
        founder_bio: "With over 5 years of Android development experience, I excel in building premium, high-performance applications. I craft fluid UIs with Jetpack Compose, enforce clean architecture, and aim to deliver top-tier user experiences.",
        founder_expertise: "Core Expertise",
        founder_journey: "Professional Journey",
        journey_present: "(2023 - Present)",
        footer_copy: "© 2025 – 2026 LongHRK. Built with ❤️ in Vietnam 🇻🇳"
    },
    vi: {
        meta_title: "HRK Studio - Hệ Sinh Thái Android Cao Cấp",
        hero_tagline: "Mang đến những ứng dụng hữu ích, giàu cảm xúc, được xây dựng với tình yêu và độ chính xác cao.",
        hero_founder: "Sáng lập bởi <strong>Nguyễn Đức Long</strong> — Android Developer",
        hero_explore: "Khám phá trên Google Play",
        hero_discover: "Khám Phá Hệ Sinh Thái",

        vitabeat_headline: "Theo Dõi Tim Mạch & Thuốc",
        vitabeat_desc: "Nhắc nhở uống thuốc thông minh & đo nhịp tim bằng camera. Dễ dàng theo dõi sức khỏe với lịch trình thông minh và biểu đồ chỉ số sinh tồn — tất cả trong một ứng dụng được thiết kế tuyệt đẹp.",
        
        picpulse_headline: "Nhật Ký Ảnh Mỗi Ngày",
        picpulse_desc: "Lưu giữ mỗi ngày một bức ảnh với thời gian, vị trí tự động và nhắc nhở nhẹ nhàng. Xây dựng cuốn nhật ký hình ảnh về cuộc đời bạn một cách hoàn toàn ngoại tuyến và bảo mật.",
        
        vaultx_headline: "Két Sắt Tệp Tin Mã Hóa Dữ Liệu",
        vaultx_desc: "Bảo mật tuyệt đối với chuẩn mã hóa quân sự. Ảnh, video và tài liệu của bạn được mã hóa <strong>AES-256-GCM</strong> và cất giấu an toàn sâu bên trong bộ nhớ nội bộ của thiết bị Android.",
        
        chatwithmyself_headline: "Trò Chuyện Với Quá Khứ & Tương Lai",
        chatwithmyself_desc: "Một chiếc hộp thời gian cá nhân. Viết tin nhắn hôm nay, chọn thời gian nhận, và nhận lại nó như thể bạn của Quá Khứ đang nhắn tin cho bạn. Giao diện chat thật và mã hóa đầu cuối.",
        
        tunedetect_headline: "Nhận Diện Bài Hát Qua Giai Điệu",
        tunedetect_desc: "Nhận diện tức thì bất kỳ bài hát nào đang phát xung quanh bạn. Tìm kiếm siêu tốc kèm link nghe trực tiếp trên Spotify, YouTube và Apple Music. Thiết kế Material You với lịch sử lưu trữ đầy đủ.",
        
        btn_download: "Tải Ứng Dụng",

        founder_title: "Người Đứng Sau Hệ Sinh Thái",
        founder_subtitle: "Kiến trúc sư kết nối khoảng cách giữa những dòng code và cảm xúc người dùng.",
        founder_bio: "Với hơn 5 năm kinh nghiệm phát triển Android, tôi có thế mạnh trong việc xây dựng các ứng dụng cao cấp, hiệu năng cao. Tôi tạo ra các giao diện mượt mà bằng Jetpack Compose, áp dụng Clean Architecture, và luôn hướng tới trải nghiệm người dùng đẳng cấp nhất.",
        founder_expertise: "Chuyên Môn Cốt Lõi",
        founder_journey: "Hành Trình Sự Nghiệp",
        journey_present: "(2023 - Hiện tại)",
        footer_copy: "© 2025 – 2026 LongHRK. Được xây dựng với ❤️ tại Việt Nam 🇻🇳"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Reveal on Scroll Animation ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.reveal').forEach(element => {
        revealObserver.observe(element);
    });

    // --- 2. Scroll Indicator ---
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const indicator = document.getElementById('scrollIndicator');
        if (indicator) {
            indicator.style.width = scrolled + '%';
        }
    });

    // --- 3. Scroll Down Prompt ---
    const scrollPrompt = document.getElementById('scrollPrompt');
    if (scrollPrompt) {
        scrollPrompt.addEventListener('click', () => {
            const productsSection = document.getElementById('products-section');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // --- 4. Multi-language (i18n) Logic ---
    const langBtns = document.querySelectorAll('.lang-btn');
    
    function updateLanguage(lang) {
        // Update document lang
        document.documentElement.lang = lang;
        
        // Update all text with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                el.innerHTML = i18n[lang][key];
            }
        });
        
        // Update active button state
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Save to localStorage
        localStorage.setItem('hrk_lang', lang);
        
        // Update page title
        if (i18n[lang] && i18n[lang]['meta_title']) {
            document.title = i18n[lang]['meta_title'];
        }
    }
    
    function detectLanguage() {
        // Check local storage first
        const savedLang = localStorage.getItem('hrk_lang');
        if (savedLang === 'en' || savedLang === 'vi') {
            return savedLang;
        }
        
        // Fallback to browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.toLowerCase().startsWith('vi')) {
            return 'vi';
        }
        return 'en';
    }
    
    // Init language
    const currentLang = detectLanguage();
    updateLanguage(currentLang);
    
    // Attach click events
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

});