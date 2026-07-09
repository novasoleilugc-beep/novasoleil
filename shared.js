// ============================================================
//  NOVA SOLEIL v3 — SHARED ENGINE (runs on every page)
// ============================================================
(function () {
  const D = NOVA;
  const isHome = document.body.contains(document.getElementById('capsGrid'));
  const isCategory = typeof PAGE_CAPSULE !== 'undefined';

  // ── NAV PAGES (desktop) ──────────────────────────────────
  const navPages = document.getElementById('navPages');
  if (navPages) {
    D.capsules.forEach(c => {
      const a = document.createElement('a');
      a.href = c.page;
      a.textContent = c.title.split(' ')[0];
      if (isCategory && PAGE_CAPSULE === c.id) a.classList.add('active');
      navPages.appendChild(a);
    });
  }

  // ── MOBILE DRAWER ─────────────────────────────────────────
  const drawerLinks = document.getElementById('drawerLinks');
  if (drawerLinks) {
    D.capsules.forEach(c => {
      const a = document.createElement('a');
      a.href = c.page; a.textContent = c.title;
      drawerLinks.appendChild(a);
    });
    const homeLink = document.createElement('a');
    homeLink.href = 'index.html#pricing'; homeLink.textContent = 'Collaborate';
    homeLink.style.fontSize = '18px'; homeLink.style.marginTop = '20px';
    drawerLinks.appendChild(homeLink);
  }
  const mobileToggle = document.getElementById('mobileToggle');
  const navDrawer = document.getElementById('navDrawer');
  const drawerClose = document.getElementById('drawerClose');
  if (mobileToggle && navDrawer) {
    mobileToggle.addEventListener('click', () => navDrawer.classList.add('open'));
    drawerClose && drawerClose.addEventListener('click', () => navDrawer.classList.remove('open'));
  }

  // ── NAV SCROLL STATE ──────────────────────────────────────
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav && nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // ── FOOTER ────────────────────────────────────────────────
  const footerLinks = document.getElementById('footerLinks');
  if (footerLinks) {
    D.capsules.forEach(c => {
      const a = document.createElement('a');
      a.href = c.page; a.textContent = c.title;
      footerLinks.appendChild(a);
    });
  }
  const footerEmail = document.getElementById('footerEmail');
  if (footerEmail) { footerEmail.textContent = D.contact.email; footerEmail.href = 'mailto:' + D.contact.email; }

  const footerSocial = document.getElementById('footerSocial');
  if (footerSocial) {
    const labels = { instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', fiverr: 'Fiverr' };
    Object.keys(labels).forEach(key => {
      const url = D.social[key];
      if (!url) return;
      const a = document.createElement('a');
      a.href = url; a.target = '_blank'; a.rel = 'noopener';
      a.textContent = labels[key];
      footerSocial.appendChild(a);
    });
  }

  // ── PRICING CTA MAILTO ───────────────────────────────────
  document.querySelectorAll('.price-cta').forEach(btn => {
    const pkg = btn.dataset.pkg || '';
    btn.href = 'mailto:' + D.contact.email + '?subject=' + encodeURIComponent('Nova Soleil — ' + pkg + ' Enquiry');
  });

  // ── HOME PAGE: HERO + CAPSULE GRID ───────────────────────
  if (isHome) {
    const heroImg = document.getElementById('heroImg');
    if (heroImg) heroImg.src = D.hero.image;
    const heroSub = document.getElementById('heroSub');
    if (heroSub) heroSub.textContent = D.hero.sub;

    const capsGrid = document.getElementById('capsGrid');
    if (capsGrid) {
      D.capsules.forEach(c => {
        const totalImages = c.campaigns.reduce((sum, camp) => sum + camp.images.length, 0);
        const cover = c.campaigns.length ? c.campaigns[0].cover : D.hero.image;
        const item = document.createElement('a');
        item.href = c.page;
        item.className = 'cap-nav-item';
        item.innerHTML =
          '<img src="' + cover + '" alt="' + c.title + '" loading="lazy">' +
          '<div class="cap-nav-overlay">' +
            '<span class="cap-nav-icon">' + c.icon + '</span>' +
            '<span class="cap-nav-label">' + c.title + '</span>' +
            '<span class="cap-nav-count">' + c.campaigns.length + ' campaign' + (c.campaigns.length === 1 ? '' : 's') + ' · ' + totalImages + ' images</span>' +
          '</div>' +
          '<span class="cap-nav-arrow">→</span>';
        capsGrid.appendChild(item);
      });
    }
  }

  // ── CATEGORY PAGE: HERO + CAMPAIGNS GRID ─────────────────
  if (isCategory) {
    const capsule = D.capsules.find(c => c.id === PAGE_CAPSULE);
    if (capsule) {
      document.title = 'Nova Soleil — ' + capsule.title;

      const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
      set('catLabel', capsule.label);
      set('catIcon', capsule.icon);
      set('catTitle', capsule.title);
      set('catDesc', capsule.description);

      const totalImages = capsule.campaigns.reduce((s, c) => s + c.images.length, 0);
      set('statCampaigns', capsule.campaigns.length);
      set('statImages', totalImages);

      const bg = document.getElementById('catHeroBg');
      if (bg && capsule.campaigns.length) {
        bg.style.backgroundImage = 'url(' + capsule.campaigns[0].cover + ')';
      }

      const catHero = document.getElementById('catHero');
      if (catHero && capsule.color) catHero.style.borderBottomColor = capsule.color + '55';

      // campaigns grid
      const grid = document.getElementById('campaignsGrid');
      if (grid) {
        if (capsule.campaigns.length === 0) {
          grid.innerHTML =
            '<div class="no-campaigns">' +
              '<div class="icon">' + capsule.icon + '</div>' +
              '<h3>Campaigns coming soon</h3>' +
              '<p>New ' + capsule.title.toLowerCase() + ' campaigns are in production. Check back shortly, or contact Nova directly to commission a custom shoot.</p>' +
              '<a href="index.html#pricing" class="btn btn-primary">View rates</a>' +
            '</div>';
        } else {
          const wrap = document.createElement('div');
          wrap.className = 'grid-3';
          capsule.campaigns.forEach(campaign => {
            const card = document.createElement('div');
            card.className = 'campaign-card';
            const totalMedia = campaign.images.length + campaign.videos.length;
            card.innerHTML =
              '<div class="cc-thumb">' +
                '<img src="' + campaign.cover + '" alt="' + campaign.brand + '" loading="lazy">' +
                '<div class="cc-hover"><span>View campaign</span></div>' +
                '<span class="cc-count">' + totalMedia + ' items</span>' +
              '</div>' +
              '<div class="cc-body">' +
                '<p class="cc-type">' + campaign.type + '</p>' +
                '<p class="cc-name">' + campaign.brand + '</p>' +
                '<p class="cc-desc">' + campaign.description + '</p>' +
              '</div>';
            card.addEventListener('click', () => openLightbox(campaign, capsule));
            wrap.appendChild(card);
          });
          grid.innerHTML = '';
          grid.appendChild(wrap);
        }
      }

      // other capsules links
      const other = document.getElementById('otherCapsules');
      if (other) {
        D.capsules.filter(c => c.id !== capsule.id).forEach(c => {
          const a = document.createElement('a');
          a.href = c.page;
          a.className = 'btn btn-ghost btn-sm';
          a.innerHTML = c.icon + ' ' + c.title;
          other.appendChild(a);
        });
      }
    }
  }

  // ── LIGHTBOX (shared logic) ───────────────────────────────
  const lb = document.getElementById('lightbox');
  const lbClose = document.getElementById('lbClose');
  const lbCapsule = document.getElementById('lbCapsule');
  const lbTitle = document.getElementById('lbTitle');
  const lbDesc = document.getElementById('lbDesc');
  const lbType = document.getElementById('lbType');
  const lbImg = document.getElementById('lbImg');
  const lbThumbs = document.getElementById('lbThumbs');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');
  let lbMedia = [], lbIndex = 0;

  window.openLightbox = function (campaign, capsule) {
    if (!lb) return;
    lbCapsule.textContent = capsule.title;
    lbTitle.textContent = campaign.brand;
    lbDesc.textContent = campaign.description;
    lbType.textContent = campaign.type;

    lbMedia = [];
    campaign.images.forEach(src => lbMedia.push({ type: 'img', src }));
    campaign.videos.forEach(src => lbMedia.push({ type: 'video', src }));

    lbThumbs.innerHTML = '';
    lbMedia.forEach((m, i) => {
      const th = document.createElement('div');
      th.className = 'lb-thumb' + (i === 0 ? ' active' : '');
      th.innerHTML = m.type === 'img'
        ? '<img src="' + m.src + '" alt="">'
        : '<div style="width:100%;height:100%;background:var(--umber2);display:flex;align-items:center;justify-content:center">▶</div>';
      th.addEventListener('click', () => showLbMedia(i));
      lbThumbs.appendChild(th);
    });

    showLbMedia(0);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function showLbMedia(i) {
    if (!lbMedia.length) return;
    lbIndex = (i + lbMedia.length) % lbMedia.length;
    const m = lbMedia[lbIndex];
    lbImg.innerHTML = m.type === 'img'
      ? '<img src="' + m.src + '" alt="">'
      : '<video src="' + m.src + '" controls autoplay playsinline></video>';
    document.querySelectorAll('.lb-thumb').forEach((t, idx) => t.classList.toggle('active', idx === lbIndex));
    const multi = lbMedia.length > 1;
    if (lbPrev) lbPrev.style.display = multi ? 'flex' : 'none';
    if (lbNext) lbNext.style.display = multi ? 'flex' : 'none';
  }

  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.innerHTML = '';
  }

  lbClose && lbClose.addEventListener('click', closeLb);
  lbPrev && lbPrev.addEventListener('click', () => showLbMedia(lbIndex - 1));
  lbNext && lbNext.addEventListener('click', () => showLbMedia(lbIndex + 1));
  lb && lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => {
    if (!lb || !lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') showLbMedia(lbIndex - 1);
    if (e.key === 'ArrowRight') showLbMedia(lbIndex + 1);
  });

  // ── SCROLL REVEAL ─────────────────────────────────────────
  function initReveal() {
    const els = document.querySelectorAll('.rv:not(.in)');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in'), i * 60);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
  }
  initReveal();
  setTimeout(initReveal, 300);

  // ── HERO PARALLAX (home only) ────────────────────────────
  const heroImgEl = document.getElementById('heroImg');
  if (heroImgEl) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroImgEl.style.transform = 'scale(' + (1.08 + y * 0.00012) + ') translateY(' + (y * 0.07) + 'px)';
      }
    }, { passive: true });
  }

})();
