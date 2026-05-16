document.addEventListener('DOMContentLoaded', () => {

  // ========== RENDER PAGES FROM DATA ==========
  function initBook() {
    const container = document.getElementById('pages-scroll');
    container.innerHTML = '';

    const R = {
      cover(d) {
        return `<div class="chapter-content cover-content"><div class="book-decoration"><i class="fas fa-${d.icon}"></i></div><p class="cover-epigraph">${d.epigraph}</p><h1 class="cover-title">${d.title}</h1><p class="cover-subtitle">${d.subtitle}</p><p class="cover-locations">${d.location}</p></div>`;
      },
      prefacio(d) {
        return `<div class="chapter-content"><span class="chapter-number">${d.chapterNumber}</span><blockquote class="prefacio-quote">${d.quote}</blockquote><div class="chapter-text">${d.paragraphs.map(p => `<p>${p}</p>`).join('')}<p class="signoff">${d.signoff}</p></div></div>`;
      },
      chapter(d) {
        let blocks = '';
        d.content.forEach(c => {
          if (c.type === 'text') blocks += `<div class="chapter-text"><p>${c.p}</p></div>`;
          else if (c.type === 'lesson') blocks += `<div class="chapter-text"><p class="lesson-learned">${c.text}</p></div>`;
          else if (c.type === 'distance') blocks += `<p class="distancia">${c.text}</p>`;
          else if (c.type === 'book-highlight') blocks += `<div class="book-highlight"><i class="fas fa-${c.icon}"></i><h3>${c.title}</h3></div>`;
          else if (c.type === 'cualidades') {
            blocks += `<div class="cualidades-grid">${c.items.map(item => `<div class="cualidad"><div class="cualidad-icon"><i class="fas fa-${item.icon}"></i></div><h3>${item.title}</h3><p>${item.desc}</p></div>`).join('')}</div>`;
          }
        });
        return `<div class="chapter-content"><span class="chapter-number">${d.chapterNumber}</span><h2 class="chapter-title">${d.title}</h2>${blocks}</div>`;
      },
      frases(d) {
        const cards = d.cards.map(c => `<div class="frase-card"><div class="frase-icon"><i class="fas fa-${c.icon}"></i></div><blockquote>${c.quote}</blockquote><p class="frase-text">${c.text}</p></div>`).join('');
        return `<div class="chapter-content"><span class="chapter-number">${d.chapterNumber}</span><h2 class="chapter-title">${d.title}</h2><p class="chapter-intro">${d.intro}</p><div class="frases-grid">${cards}</div><p class="chapter-conclusion">${d.conclusion}</p></div>`;
      },
      timeline(d) {
        const nodes = d.events.map((ev, i) => `<div class="timeline-node" data-node="${i}"><div class="timeline-marker"><span class="timeline-icon">${ev.icon}</span></div><span class="timeline-label">${ev.label}</span><div class="timeline-expanded"><p>${ev.text}</p></div></div>`).join('');
        return `<div class="chapter-content"><span class="chapter-number">${d.chapterNumber}</span><h2 class="chapter-title">${d.title}</h2><p class="chapter-intro">${d.intro}</p><div class="timeline-wrapper" id="timeline-wrapper"><div class="timeline-line"></div><div class="timeline-nodes">${nodes}</div></div></div>`;
      },
      epilogo(d) {
        let blocks = '';
        (d.content || []).forEach(c => {
          if (c.type === 'text') blocks += `<p>${c.p}</p>`;
          else if (c.type === 'lesson') blocks += `<p class="lesson-learned">${c.text}</p>`;
          else if (c.type === 'distance') blocks += `<p class="distancia">${c.text}</p>`;
        });
        return `<div class="chapter-content"><span class="chapter-number">${d.chapterNumber}</span><h2 class="chapter-title">${d.title}</h2><div class="chapter-text">${blocks}</div><div class="final-sign">${d.signature.line ? '<div class="final-line"></div>' : ''}<p class="final-sombra">${d.signature.sombra}</p><p class="final-detalles">${d.signature.detalles.join('<br>')}</p><p class="final-firma">— <strong>${d.signature.firma}</strong> <i class="fas fa-${d.signature.icon}"></i></p></div><div class="pdf-section"><button id="download-pdf" class="btn-pdf"><i class="fas fa-file-pdf"></i><span>Descargar carta completa</span></button></div></div>`;
      },
      locked(d) {
        const msg = d.unlocked.message.map(m => typeof m === 'string' ? `<p>${m}</p>` : `<p class="handwritten-emphasis">${m.emphasis}</p>`).join('');
        return `<div class="chapter-content"><span class="chapter-number">${d.chapterNumber}</span><h2 class="chapter-title">${d.title}</h2><div id="locked-container"><div class="lock-icon"><i class="fas fa-${d.lockIcon}"></i></div><p class="lock-text">${d.lockedText}</p><div class="lock-input-group"><input type="text" id="lock-input" placeholder="${d.inputPlaceholder}" autocomplete="off"><button id="lock-submit"><i class="fas fa-key"></i></button></div><p class="lock-error hidden" id="lock-error">${d.errorText}</p></div><div id="locked-reveal" class="hidden"><div class="lock-unlocked-icon"><i class="fas fa-${d.unlocked.icon}"></i></div><div class="handwritten-message">${msg}</div><p class="handwritten-sign">${d.unlocked.sign}</p></div></div>`;
      },
      continuara(d) {
        const msg = d.message.map(m => `<p>${m}</p>`).join('');
        return `<div class="chapter-content continuara-content"><div class="continuara-icon"><i class="fas fa-${d.icon}"></i></div><span class="chapter-number">${d.chapterNumber}</span><h2 class="chapter-title">${d.title}</h2><p class="continuara-subtitle">${d.subtitle}</p><div class="continuara-message">${msg}</div><div class="continuara-dots"><span>.</span><span>.</span><span>.</span></div><p class="continuara-footer">— Queda mucho por escribir —</p></div>`;
      }
    };

    bookPages.forEach(p => {
      const el = document.createElement('section');
      el.className = 'chapter';
      el.id = p.id;
      el.innerHTML = (R[p.type] || (() => ''))(p);
      container.appendChild(el);
    });
  }

  initBook();

  const callScreen = document.getElementById('call-screen');
  const answerBtn = document.getElementById('answer-call');
  const mainContent = document.getElementById('main-content');
  const pagesScroll = document.getElementById('pages-scroll');
  const chapters = document.querySelectorAll('.chapter');
  const navPrev = document.getElementById('nav-prev');
  const navNext = document.getElementById('nav-next');
  const pageIndicator = document.getElementById('page-indicator');
  const pageNav = document.getElementById('page-nav');
  const musicBtn = document.getElementById('music-toggle');
  const musicPlayer = document.getElementById('music-player');
  const closeMusic = document.getElementById('close-music');
  const spotifyIframe = document.getElementById('spotify-iframe');
  const spotifySrc = spotifyIframe ? spotifyIframe.src : '';
  const lockInput = document.getElementById('lock-input');
  const lockSubmit = document.getElementById('lock-submit');
  const lockError = document.getElementById('lock-error');
  const lockedContainer = document.getElementById('locked-container');
  const lockedReveal = document.getElementById('locked-reveal');
  const timelineNodes = document.querySelectorAll('.timeline-node');
  const pdfBtn = document.getElementById('download-pdf');

  let currentPage = 0;
  const totalPages = chapters.length;

  // ========== PAGE TURN SOUND (Web Audio API) ==========
  let audioCtx = null;

  function playPageTurnSound() {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const now = audioCtx.currentTime;

      // Capa 1: Whoosh filtrado (papel cortando el aire)
      const bufSize = audioCtx.sampleRate * 0.22;
      const buf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) {
        const t = i / bufSize;
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2.5) * (0.5 + 0.5 * Math.sin(t * Math.PI));
      }
      const noise = audioCtx.createBufferSource();
      noise.buffer = buf;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1500, now);
      filter.frequency.exponentialRampToValueAtTime(300, now + 0.2);
      filter.Q.setValueAtTime(0.3, now);

      const whooshGain = audioCtx.createGain();
      whooshGain.gain.setValueAtTime(0.035, now + 0.01);
      whooshGain.gain.linearRampToValueAtTime(0.05, now + 0.06);
      whooshGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      noise.connect(filter);
      filter.connect(whooshGain);
      whooshGain.connect(audioCtx.destination);
      noise.start(now);
      noise.stop(now + 0.22);

      // Capa 2: Crepitar de papel (micro-clics)
      for (let c = 0; c < 8; c++) {
        const ct = now + 0.015 + Math.random() * 0.16;
        const cs = audioCtx.sampleRate * 0.008;
        const cb = audioCtx.createBuffer(1, cs, audioCtx.sampleRate);
        const cd = cb.getChannelData(0);
        for (let i = 0; i < cs; i++) cd[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / cs, 6);
        const cl = audioCtx.createBufferSource();
        cl.buffer = cb;
        const cg = audioCtx.createGain();
        cg.gain.setValueAtTime(0.012, ct);
        cl.connect(cg);
        cg.connect(audioCtx.destination);
        cl.start(ct);
        cl.stop(ct + 0.008);
      }

      // Capa 3: Golpe sordo sutil (página al asentarse)
      const osc = audioCtx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(90, now + 0.16);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.26);

      const oscGain = audioCtx.createGain();
      oscGain.gain.setValueAtTime(0, now);
      oscGain.gain.linearRampToValueAtTime(0.025, now + 0.17);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);

      osc.connect(oscGain);
      oscGain.connect(audioCtx.destination);
      osc.start(now + 0.16);
      osc.stop(now + 0.26);

    } catch (e) { /* fail silently */ }
  }

  // ========== ANSWER CALL ==========
  answerBtn.addEventListener('click', () => {
    callScreen.classList.add('answered');
    setTimeout(() => {
      callScreen.style.display = 'none';
      mainContent.classList.remove('hidden');
      showPage(0);
      setTimeout(() => {
        pageNav.classList.remove('hidden');
      }, 400);
      if (navigator.vibrate) navigator.vibrate(50);
    }, 800);
  });

  // ========== PAGE SYSTEM ==========
  let isAnimating = false;

  function showPage(index) {
    chapters.forEach((ch, i) => {
      if (i === index) {
        ch.style.transform = 'translateX(0)';
        ch.style.opacity = '1';
        ch.style.zIndex = '2';
      } else {
        ch.style.transform = 'translateX(100vw)';
        ch.style.opacity = '0';
        ch.style.zIndex = '1';
      }
    });
    currentPage = index;
    updateNav();
  }

  function goToPage(n) {
    const target = Math.max(0, Math.min(n, totalPages - 1));
    if (target === currentPage || isAnimating) return;
    isAnimating = true;

    const goingForward = target > currentPage;
    const dir = goingForward ? 1 : -1;
    const currentEl = chapters[currentPage];
    const nextEl = chapters[target];

    // Position next chapter off-screen in the correct direction (no transition)
    nextEl.style.transition = 'none';
    nextEl.style.transform = `translateX(${100 * dir}vw)`;
    nextEl.style.opacity = '1';
    nextEl.style.zIndex = '3';

    // Ensure current chapter is at its position
    currentEl.style.transition = 'none';
    currentEl.style.transform = 'translateX(0)';
    currentEl.style.opacity = '1';
    currentEl.style.zIndex = '2';

    // Force reflow
    void nextEl.offsetHeight;

    // Animate both
    const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';
    currentEl.style.transition = `transform 0.7s ${easing}`;
    currentEl.style.transform = `translateX(${-100 * dir}vw)`;

    nextEl.style.transition = `transform 0.7s ${easing}`;
    nextEl.style.transform = 'translateX(0)';

    currentPage = target;
    updateNav();
    playPageTurnSound();

    setTimeout(() => {
      currentEl.style.transition = '';
      currentEl.style.opacity = '0';
      currentEl.style.zIndex = '1';

      nextEl.style.transition = '';
      nextEl.style.zIndex = '2';

      isAnimating = false;
    }, 750);
  }

  function updateNav() {
    pageIndicator.textContent = `${currentPage + 1} / ${totalPages}`;
    navPrev.disabled = currentPage === 0;
    navNext.disabled = currentPage === totalPages - 1;
  }

  function nextPage() {
    if (currentPage < totalPages - 1) goToPage(currentPage + 1);
  }
  function prevPage() {
    if (currentPage > 0) goToPage(currentPage - 1);
  }

  navNext.addEventListener('click', nextPage);
  navPrev.addEventListener('click', prevPage);

  // ========== TOUCH SWIPE ==========
  let touchStartX = 0, touchStartY = 0, touchEndX = 0, touchEndY = 0, isSwiping = false;

  document.addEventListener('touchstart', (e) => {
    if (e.target.closest('.music-player') || e.target.closest('.music-btn') ||
        e.target.closest('#locked-container') || e.target.closest('.timeline-expanded') ||
        e.target.closest('#lock-input') || e.target.closest('#lock-submit')) return;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
    touchEndX = touchStartX;
    touchEndY = touchStartY;
    isSwiping = true;
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', () => {
    if (!isSwiping) return;
    isSwiping = false;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) nextPage();
      else prevPage();
    }
  }, { passive: true });

  // ========== KEYBOARD ==========
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !callScreen.classList.contains('answered')) {
      answerBtn.click();
    }
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
    if (e.key === 'Escape' && !musicPlayer.classList.contains('hidden')) {
      closeMusic.click();
    }
    if (e.key === 'm' || e.key === 'M') musicBtn.click();
  });

  // ========== MUSIC ==========
  let musicOpen = false;
  musicBtn.addEventListener('click', () => {
    musicOpen = !musicOpen;
    if (musicOpen) {
      musicPlayer.classList.remove('hidden');
      musicBtn.classList.add('playing');
      if (spotifyIframe) {
        spotifyIframe.src = '';
        setTimeout(() => { spotifyIframe.src = spotifySrc; }, 100);
      }
    } else {
      musicPlayer.classList.add('hidden');
      musicBtn.classList.remove('playing');
    }
  });
  closeMusic.addEventListener('click', () => {
    musicOpen = false;
    musicPlayer.classList.add('hidden');
    musicBtn.classList.remove('playing');
    if (spotifyIframe) spotifyIframe.src = '';
  });

  // ========== TIMELINE ==========
  timelineNodes.forEach(node => {
    node.addEventListener('click', () => {
      const wasActive = node.classList.contains('active');
      timelineNodes.forEach(n => n.classList.remove('active'));
      if (!wasActive) node.classList.add('active');
    });
  });

  // ========== LOCKED ==========
  function checkPassword() {
    const value = lockInput.value.trim().toLowerCase();
    if (value === 'luna') {
      lockedContainer.classList.add('hidden');
      lockedReveal.classList.remove('hidden');
    } else {
      lockError.classList.remove('hidden');
      lockInput.style.borderColor = '#b8736a';
      setTimeout(() => { lockInput.style.borderColor = ''; }, 2000);
    }
  }
  lockSubmit.addEventListener('click', checkPassword);
  lockInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkPassword();
  });
  lockInput.addEventListener('input', () => { lockError.classList.add('hidden'); });

  // ========== PDF ==========
  function renderPdfChapter(p) {
    switch (p.type) {
      case 'cover':
        return `<div class="pdf-chapter" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:2rem;"><div style="font-size:3rem;color:#d4a853;margin-bottom:1.5rem;"><i class="fas fa-${p.icon}"></i></div><p style="font-family:Georgia,serif;font-size:1.3rem;font-style:italic;color:#8a7d6b;margin-bottom:2rem;">${p.epigraph}</p><h1 style="font-family:Georgia,serif;font-size:2.8rem;font-weight:700;color:#f5e6c8;margin-bottom:0.8rem;">${p.title}</h1><p style="font-family:Georgia,serif;font-size:1.2rem;color:#d4a853;font-style:italic;margin-bottom:0.5rem;">${p.subtitle}</p><p style="font-family:Arial,sans-serif;font-size:0.85rem;color:#8a7d6b;letter-spacing:3px;text-transform:uppercase;">${p.location}</p></div>`;
      case 'prefacio':
        return `<div class="pdf-chapter"><span style="font-family:Arial,sans-serif;font-size:0.75rem;text-transform:uppercase;letter-spacing:4px;color:#d4a853;display:block;margin-bottom:1rem;opacity:0.6;">${p.chapterNumber}</span><blockquote style="font-family:Georgia,serif;font-size:1.3rem;font-style:italic;color:#d4a853;border-left:2px solid #d4a853;padding-left:1.5rem;margin:1.5rem 0;line-height:1.8;">${p.quote}</blockquote><div>${p.paragraphs.map(par => `<p style="font-family:Arial,sans-serif;font-size:1.2rem;line-height:1.7;color:#c4b59a;margin-bottom:1.2rem;">${par}</p>`).join('')}<p style="font-family:Georgia,serif;font-size:1.2rem;font-style:italic;color:#f5e6c8 !important;margin-top:1.5rem;">${p.signoff}</p></div></div>`;
      case 'chapter':
        let chHtml = `<div class="pdf-chapter"><span style="font-family:Arial,sans-serif;font-size:0.75rem;text-transform:uppercase;letter-spacing:4px;color:#d4a853;display:block;margin-bottom:1rem;opacity:0.6;">${p.chapterNumber}</span><h2 style="font-family:Georgia,serif;font-size:2rem;font-weight:700;color:#f5e6c8;margin-bottom:1.5rem;">${p.title}</h2>`;
        p.content.forEach(c => {
          if (c.type === 'text') chHtml += `<p style="font-family:Arial,sans-serif;font-size:1.2rem;line-height:1.7;color:#c4b59a;margin-bottom:1.2rem;">${c.p}</p>`;
          else if (c.type === 'lesson') chHtml += `<p style="font-family:Georgia,serif;font-size:1.4rem;font-weight:600;color:#d4a853;padding:1rem 0;border-top:1px solid rgba(212,168,83,0.15);border-bottom:1px solid rgba(212,168,83,0.15);margin:1.2rem 0;">${c.text}</p>`;
          else if (c.type === 'distance') chHtml += `<p style="font-size:1.3rem;font-weight:600;color:#d4a853;padding:0.8rem 0;">${c.text}</p>`;
          else if (c.type === 'book-highlight') chHtml += `<div style="text-align:center;padding:2rem;border:1px solid #d4a853;margin:1.5rem 0;background:rgba(212,168,83,0.05);"><i class="fas fa-${c.icon}" style="font-size:2.5rem;color:#d4a853;margin-bottom:0.8rem;opacity:0.7;"></i><h3 style="font-family:Georgia,serif;font-size:1.5rem;color:#f5e6c8;font-weight:700;">${c.title}</h3></div>`;
          else if (c.type === 'cualidades') {
            chHtml += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">`;
            c.items.forEach(item => {
              chHtml += `<div style="background:#1c1738;border:1px solid rgba(212,168,83,0.15);padding:1rem;"><div style="font-size:1.2rem;color:#d4a853;margin-bottom:0.5rem;opacity:0.7;"><i class="fas fa-${item.icon}"></i></div><h3 style="font-family:Georgia,serif;font-size:1rem;color:#f5e6c8;margin-bottom:0.3rem;font-weight:700;">${item.title}</h3><p style="font-size:0.85rem;color:#8a7d6b;font-family:Arial,sans-serif;">${item.desc}</p></div>`;
            });
            chHtml += `</div>`;
          }
        });
        chHtml += `</div>`;
        return chHtml;
      case 'frases':
        let frHtml = `<div class="pdf-chapter"><span style="font-family:Arial,sans-serif;font-size:0.75rem;text-transform:uppercase;letter-spacing:4px;color:#d4a853;display:block;margin-bottom:1rem;opacity:0.6;">${p.chapterNumber}</span><h2 style="font-family:Georgia,serif;font-size:2rem;font-weight:700;color:#f5e6c8;margin-bottom:1.5rem;">${p.title}</h2><p style="font-family:Arial,sans-serif;font-size:1.1rem;color:#c4b59a;margin-bottom:1.5rem;">${p.intro}</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">`;
        p.cards.forEach(c => {
          frHtml += `<div style="background:#1c1738;border:1px solid rgba(212,168,83,0.15);padding:1rem;"><div style="font-size:1.1rem;color:#d4a853;margin-bottom:0.5rem;opacity:0.6;"><i class="fas fa-${c.icon}"></i></div><blockquote style="font-family:Georgia,serif;font-size:1.1rem;color:#f5e6c8;font-style:italic;margin-bottom:0.6rem;">${c.quote}</blockquote><p style="font-family:Arial,sans-serif;font-size:1rem;color:#8a7d6b;">${c.text}</p></div>`;
        });
        frHtml += `</div><p style="font-family:Arial,sans-serif;font-size:1.2rem;color:#d4a853;margin-top:1.5rem;padding-top:1rem;border-top:1px solid rgba(212,168,83,0.15);">${p.conclusion}</p></div>`;
        return frHtml;
      case 'timeline':
        let tlHtml = `<div class="pdf-chapter"><span style="font-family:Arial,sans-serif;font-size:0.75rem;text-transform:uppercase;letter-spacing:4px;color:#d4a853;display:block;margin-bottom:1rem;opacity:0.6;">${p.chapterNumber}</span><h2 style="font-family:Georgia,serif;font-size:2rem;font-weight:700;color:#f5e6c8;margin-bottom:1.5rem;">${p.title}</h2><p style="font-family:Arial,sans-serif;font-size:1.1rem;color:#c4b59a;margin-bottom:1.5rem;">${p.intro}</p><div>`;
        p.events.forEach(ev => {
          tlHtml += `<div style="margin-bottom:1.5rem;padding-left:1.5rem;border-left:2px solid #d4a853;"><span style="font-size:1.5rem;margin-right:0.5rem;">${ev.icon}</span><span style="font-family:Arial,sans-serif;font-size:0.85rem;color:#d4a853;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:0.3rem;">${ev.label}</span><p style="font-family:Arial,sans-serif;font-size:1rem;color:#8a7d6b;line-height:1.6;">${ev.text}</p></div>`;
        });
        tlHtml += `</div></div>`;
        return tlHtml;
      case 'epilogo':
        let epHtml = `<div class="pdf-chapter"><span style="font-family:Arial,sans-serif;font-size:0.75rem;text-transform:uppercase;letter-spacing:4px;color:#d4a853;display:block;margin-bottom:1rem;opacity:0.6;">${p.chapterNumber}</span><h2 style="font-family:Georgia,serif;font-size:2rem;font-weight:700;color:#f5e6c8;margin-bottom:1.5rem;">${p.title}</h2>`;
        (p.content || []).forEach(c => {
          if (c.type === 'text') epHtml += `<p style="font-family:Arial,sans-serif;font-size:1.2rem;line-height:1.7;color:#c4b59a;margin-bottom:1.2rem;">${c.p}</p>`;
          else if (c.type === 'lesson') epHtml += `<p style="font-family:Georgia,serif;font-size:1.4rem;font-weight:600;color:#d4a853;padding:1rem 0;border-top:1px solid rgba(212,168,83,0.15);border-bottom:1px solid rgba(212,168,83,0.15);margin:1.2rem 0;">${c.text}</p>`;
          else if (c.type === 'distance') epHtml += `<p style="font-size:1.3rem;font-weight:600;color:#d4a853;padding:0.8rem 0;">${c.text}</p>`;
        });
        epHtml += `<div style="text-align:center;margin-top:2rem;"><div style="width:60px;height:1px;background:#d4a853;margin:0 auto 1.5rem;opacity:0.5;"></div><p style="font-family:Georgia,serif;font-size:1.3rem;color:#f5e6c8;font-style:italic;margin-bottom:1rem;">${p.signature.sombra}</p><p style="font-family:Arial,sans-serif;font-size:1rem;color:#8a7d6b;line-height:2;margin-bottom:1.5rem;">${p.signature.detalles.join('<br>')}</p><p style="font-family:Georgia,serif;font-size:1.7rem;color:#d4a853;">— <strong>${p.signature.firma}</strong> <i class="fas fa-${p.signature.icon}" style="font-size:0.9rem;opacity:0.6;"></i></p></div></div>`;
        return epHtml;
      case 'locked':
        let lHtml = `<div class="pdf-chapter"><span style="font-family:Arial,sans-serif;font-size:0.75rem;text-transform:uppercase;letter-spacing:4px;color:#d4a853;display:block;margin-bottom:1rem;opacity:0.6;">${p.chapterNumber}</span><h2 style="font-family:Georgia,serif;font-size:2rem;font-weight:700;color:#f5e6c8;margin-bottom:1.5rem;">${p.title}</h2><div style="text-align:center;"><div style="font-size:2.5rem;color:#d4a853;margin-bottom:1.5rem;opacity:0.6;"><i class="fas fa-lock"></i></div><p style="font-family:Arial,sans-serif;font-size:1.2rem;color:#c4b59a;margin-bottom:1.5rem;">${p.lockedText}</p></div><div style="text-align:center;"><p style="font-family:Georgia,serif;font-size:1.5rem;color:#d4a853;font-style:italic;margin-bottom:1rem;">— Solo para su luna —</p></div></div>`;
        return lHtml;
      case 'continuara':
        return `<div class="pdf-chapter" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:2rem;"><div style="font-size:3rem;color:#d4a853;margin-bottom:1.5rem;opacity:0.6;"><i class="fas fa-${p.icon}"></i></div><span style="font-family:Arial,sans-serif;font-size:0.75rem;text-transform:uppercase;letter-spacing:4px;color:#d4a853;display:block;margin-bottom:1rem;opacity:0.6;">${p.chapterNumber}</span><h2 style="font-family:Georgia,serif;font-size:2.2rem;font-weight:700;color:#f5e6c8;margin-bottom:1rem;">${p.title}</h2><p style="font-family:Georgia,serif;font-size:1.3rem;color:#8a7d6b;font-style:italic;margin-bottom:2rem;">${p.subtitle}</p><div style="max-width:500px;">${p.message.map(m => `<p style="font-family:Arial,sans-serif;font-size:1.1rem;color:#8a7d6b;line-height:1.8;margin-bottom:0.8rem;">${m}</p>`).join('')}</div><p style="font-family:Georgia,serif;font-size:1rem;color:#8a7d6b;font-style:italic;margin-top:2rem;opacity:0.6;">— Queda mucho por escribir —</p></div>`;
      default:
        return `<div class="pdf-chapter"><p style="color:#c4b59a;">${p.title || ''}</p></div>`;
    }
  }

  pdfBtn.addEventListener('click', () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'background:#0f0c1b;padding:0;font-family:Arial,sans-serif;';

    bookPages.forEach((p, i) => {
      const ch = document.createElement('div');
      ch.style.cssText = `page-break-after:always;page-break-inside:avoid;padding:2.5rem 2rem;min-height:100vh;display:flex;flex-direction:column;justify-content:center;${p.type === 'cover' ? '' : ''}`;
      ch.innerHTML = renderPdfChapter(p);
      wrapper.appendChild(ch);
    });

    pdfBtn.disabled = true;
    pdfBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando...';

    const opt = {
      margin: [0.3, 0.3, 0.3, 0.3],
      filename: 'para-luna-de-parte-de-sombra.pdf',
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#0f0c1b',
        logging: false
      },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(wrapper).save().then(() => {
      pdfBtn.disabled = false;
      pdfBtn.innerHTML = '<i class="fas fa-file-pdf"></i> <span>Descargar carta completa</span>';
    }).catch(() => {
      pdfBtn.disabled = false;
      pdfBtn.innerHTML = '<i class="fas fa-file-pdf"></i> <span>Descargar carta completa</span>';
    });
  });

  // ========== INIT ==========
  updateNav();

  console.log('📖 Para Luna, de parte de Sombra');
  console.log('🌙 La distancia no existe cuando el corazón decide acortarla.');
});
