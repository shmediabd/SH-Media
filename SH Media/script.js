let carouselIndex = { graphics: 0, photo: 0 };

document.addEventListener("DOMContentLoaded", () => {
    // 1. WhatsApp & Facebook Links Setup
    const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
    const fbUrl = CONFIG.facebookPageUrl;

    document.querySelectorAll('.whatsapp-link').forEach(link => { link.href = waUrl; });
    document.querySelectorAll('.facebook-link').forEach(link => { link.href = fbUrl; });

    // YouTube Embed Helper
    const getYoutubeEmbed = (ids) => {
        let embeds = ids.map(id => `<div class="shorts-container"><iframe src="https://www.youtube.com/embed/${id}?rel=0" loading="lazy" allowfullscreen></iframe></div>`).join('');
        return `<div class="video-grid">${embeds}</div>`;
    };

    // 2. মডেল কার্ড রেন্ডার
    const createModelCard = (model) => {
        const hasVideo = model.youtubeIds && model.youtubeIds.length > 0;
        const waText = encodeURIComponent(`হ্যালো SH Media, আমি আপনাদের পোর্টফোলিও থেকে এই মডেলটিকে সিলেক্ট করতে চাচ্ছি:\n\n👉 ${model.name}\n💰 ফি: ${model.price}`);
        const modelWaLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${waText}`;

        return `
            <div class="card">
                <div class="card-img-container">
                    <img src="${model.image}" alt="${model.name}" loading="lazy">
                    <div class="price-tag">${model.price}</div>
                    <a href="${CONFIG.facebookPageUrl}" target="_blank" class="fb-card-icon" title="Facebook Page">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                </div>
                <div class="card-info">
                    <h3 style="margin-bottom: 12px; text-align: center;">${model.name}</h3>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <a href="${modelWaLink}" target="_blank" class="btn btn-primary" style="width:100%; font-size: 14px;">✅ মডেল সিলেক্ট করুন</a>
                        ${hasVideo ? `<button class="btn btn-outline watch-demo-btn" style="width:100%; font-size: 14px;">▶ Watch Demo</button>` : ''}
                    </div>
                    <div class="demo-wrapper">${hasVideo ? getYoutubeEmbed(model.youtubeIds) : ''}</div>
                </div>
            </div>
        `;
    };

    if (document.getElementById('models-grid')) {
        document.getElementById('models-grid').innerHTML = allModels.map(createModelCard).join('');
    }

    // 3. সেলেব্রিটি কার্ড রেন্ডার
    if (document.getElementById('celebrity-grid')) {
        document.getElementById('celebrity-grid').innerHTML = celebrities.map(createModelCard).join('');
    }

    // 4. ভয়েস ওভার সেকশন রেন্ডার (১টি ডেমো ভিডিওসহ)
    if (document.getElementById('voiceover-container')) {
        const voWaText = encodeURIComponent(`হ্যালো SH Media, আমি আপনাদের ভয়েস ওভার সার্ভিস সম্পর্কে জানতে চাই।`);
        document.getElementById('voiceover-container').innerHTML = `
            <div class="voiceover-card">
                <h3 class="vo-title">${voiceOverData.title}</h3>
                <p class="vo-desc">${voiceOverData.desc}</p>
                <div class="vo-price">${voiceOverData.price}</div>
                
                <ul class="vo-features">
                    ${voiceOverData.features.map(f => `<li><span class="check-mark">✓</span> ${f}</li>`).join('')}
                </ul>

                <button class="btn btn-outline vo-demo-btn" style="width:100%; margin-bottom:12px;">▶ ভয়েস ওভার ডেমো শুনুন (১টি)</button>
                <div class="vo-demo-wrapper" style="display:none; margin-bottom:14px;">
                    <div class="shorts-container">
                        <iframe src="https://www.youtube.com/embed/${voiceOverData.youtubeId}?rel=0" loading="lazy" allowfullscreen></iframe>
                    </div>
                </div>

                <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${voWaText}" target="_blank" class="btn btn-primary" style="width:100%; display:block; text-align:center;">ভয়েস ওভার বুক করুন</a>
            </div>
        `;
    }

    // 5. ভিডিও এডিটিং প্যাকেজ টগল বাটন
    const toggleBtn = document.getElementById('toggle-video-pkg-btn');
    const pkgWrapper = document.getElementById('video-packages-wrapper');
    const arrowIcon = document.getElementById('trigger-arrow');

    if (toggleBtn && pkgWrapper) {
        toggleBtn.addEventListener('click', () => {
            if (pkgWrapper.style.display === 'none' || pkgWrapper.style.display === '') {
                pkgWrapper.style.display = 'block';
                arrowIcon.textContent = '▲';
                pkgWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                pkgWrapper.style.display = 'none';
                arrowIcon.textContent = '▼';
            }
        });
    }

    // 6. ভিডিও এডিটিং প্যাকেজ রেন্ডার
    if (document.getElementById('video-packages-grid')) {
        document.getElementById('video-packages-grid').innerHTML = videoPackages.map(pkg => {
            const hasVideos = pkg.videos && pkg.videos.length > 0;
            const videosHTML = pkg.videos ? pkg.videos.map(v => `
                <div style="margin-top: 12px;">
                    <div style="font-size: 12px; font-weight: 700; color: var(--accent); margin-bottom: 4px; text-align: center;">🎬 ${v.title}</div>
                    <div class="shorts-container">
                        <iframe src="https://www.youtube.com/embed/${v.id}?rel=0" loading="lazy" allowfullscreen></iframe>
                    </div>
                </div>
            `).join('') : '';

            const isRecommended = pkg.badge === "RECOMMENDED";

            return `
                <div class="package-card ${isRecommended ? 'recommended-pkg' : ''}">
                    ${pkg.badge ? `<div class="package-badge ${isRecommended ? 'badge-rec' : 'badge-pop'}">${pkg.badge}</div>` : ''}
                    <div>
                        <h3 class="package-title">${pkg.title}</h3>
                        <p class="package-subtitle">${pkg.subtitle}</p>
                        <div class="package-price">${pkg.price}</div>
                        
                        <div class="package-features-box">
                            <div class="duration-text">⏱️ <b>সময়সীমা:</b> ${pkg.duration}</div>
                            <ul class="feature-list">
                                ${pkg.features.map(feat => `<li><span class="check-icon">✓</span> ${feat}</li>`).join('')}
                            </ul>
                        </div>

                        ${hasVideos ? `
                            <button class="btn pkg-watch-demo-btn">▶ Watch Demo</button>
                            <div class="pkg-demo-wrapper" style="display: none;">
                                ${videosHTML}
                            </div>
                        ` : ''}
                    </div>

                    <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(`হ্যালো SH Media, আমি আপনাদের ${pkg.title} (${pkg.price}) প্যাকেজটি নিতে চাচ্ছি।`)}" target="_blank" class="btn pkg-order-btn ${isRecommended ? 'btn-rec' : 'btn-pop'}" style="margin-top:15px;">প্যাকেজটি অর্ডার করুন</a>
                </div>
            `;
        }).join('');
    }

    // 7. অন্যান্য ৩টি সার্ভিস রেন্ডার
    if (document.getElementById('other-services-grid')) {
        document.getElementById('other-services-grid').innerHTML = otherServices.map(service => `
            <div class="other-service-card">
                <div class="service-icon-box">${service.icon}</div>
                <div>
                    <h4 class="service-name">${service.title}</h4>
                    <p class="service-desc">${service.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // 8. ১টি করে ছবি দেখানোর জন্য ক্যারোসল ইনিশিয়ালাইজেশন
    initCarousel('graphics', graphicsImages);
    initCarousel('photo', photoImages);

    // 9. FAQ অ্যাকোরডিয়ন
    if (document.getElementById('faq-container')) {
        document.getElementById('faq-container').innerHTML = faqs.map(faq => `
            <div class="faq-item">
                <div class="faq-question">${faq.question} <span>+</span></div>
                <div class="faq-answer">${faq.answer}</div>
            </div>
        `).join('');
    }

    // ডেমো বাটন ও টগল ইভেন্টসমূহ
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('vo-demo-btn')) {
            const demoWrapper = e.target.nextElementSibling;
            if (demoWrapper.style.display === 'block') {
                demoWrapper.style.display = 'none';
                e.target.innerHTML = '▶ ভয়েস ওভার ডেমো শুনুন (১টি)';
            } else {
                demoWrapper.style.display = 'block';
                e.target.innerHTML = 'Hide Demo';
            }
        }
    });

    document.querySelectorAll('.pkg-watch-demo-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const demoWrapper = this.nextElementSibling;
            if (demoWrapper.style.display === 'block') {
                demoWrapper.style.display = 'none';
                this.innerHTML = '▶ Watch Demo';
            } else {
                demoWrapper.style.display = 'block';
                this.innerHTML = 'Hide Demo';
            }
        });
    });

    document.querySelectorAll('.watch-demo-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const demoWrapper = this.parentElement.nextElementSibling;
            if (demoWrapper.style.display === 'block') {
                demoWrapper.style.display = 'none';
                this.innerHTML = '▶ Watch Demo';
            } else {
                demoWrapper.style.display = 'block';
                this.innerHTML = 'Hide Demo';
            }
        });
    });

    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('span');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.textContent = '+';
            } else {
                answer.style.display = 'block';
                icon.textContent = '-';
            }
        });
    });
});

// ক্যারোসল হেল্পার ফাংশন
function initCarousel(type, images) {
    const track = document.getElementById(`${type}-track`);
    const dotsContainer = document.getElementById(`${type}-dots`);
    if (!track) return;

    track.innerHTML = images.map(img => `<div class="carousel-slide"><img src="${img}" alt="Portfolio Image"></div>`).join('');
    dotsContainer.innerHTML = images.map((_, i) => `<span class="dot ${i===0?'active':''}" onclick="setCarouselSlide('${type}', ${i})"></span>`).join('');
}

function moveCarousel(type, direction) {
    const track = document.getElementById(`${type}-track`);
    const slides = track.querySelectorAll('.carousel-slide');
    if (!slides.length) return;

    carouselIndex[type] += direction;
    if (carouselIndex[type] < 0) carouselIndex[type] = slides.length - 1;
    if (carouselIndex[type] >= slides.length) carouselIndex[type] = 0;

    updateCarouselUI(type, slides.length);
}

function setCarouselSlide(type, index) {
    carouselIndex[type] = index;
    const track = document.getElementById(`${type}-track`);
    const slides = track.querySelectorAll('.carousel-slide');
    updateCarouselUI(type, slides.length);
}

function updateCarouselUI(type, total) {
    const track = document.getElementById(`${type}-track`);
    const dots = document.querySelectorAll(`#${type}-dots .dot`);
    
    track.style.transform = `translateX(-${carouselIndex[type] * 100}%)`;
    
    dots.forEach((dot, idx) => {
        if (idx === carouselIndex[type]) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}