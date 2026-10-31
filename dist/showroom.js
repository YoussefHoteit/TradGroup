function renderShowroom() {
  const featured = ['LED strips', 'Magnetic track lights', 'LED bulbs', 'Outdoor wall lights']
    .map(category => products.find(product => product.category === category))
    .filter(Boolean);

  return `
    <section class="hero">
      <div class="hero-image"></div>
      <div class="hero-content">
        <span class="eyebrow">THE ART OF LIGHTING · LEBANON</span>
        <h1>Light, with<br><em>intention.</em></h1>
        <p>Beautiful spaces begin with considered light.<br>Discover a world of lighting and electrical essentials,<br>curated for the way you live, work and create.</p>
        <div class="button-row">
          <a class="button light" href="#/shop">Discover the collection <span><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></span></a>
          <a class="hero-text-link" href="#/contact">Your next project <span><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></span></a>
        </div>
      </div>
      <span class="hero-side-note">INDOOR / OUTDOOR / EVERY POSSIBILITY</span>
      <div class="hero-bottom">
        <a class="hero-scroll" href="#collections"><b><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4v16m-6-6 6 6 6-6"/></svg></b> A WORLD OF LIGHT AWAITS</a>
        <div class="hero-caption"><span class="hero-index">01</span><div>A feeling, beautifully illuminated.<small>ARCHITECTURAL LIGHTING INSPIRATION</small></div></div>
      </div>
    </section>

    <div class="ticker">
      <span><b><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></b> Delivery across Lebanon</span>
      <span><b><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5"/></svg></b> Wholesale & retail</span>
      <span><b><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m3 15 6-6 6 6 6-6"/></svg></b> Design & installation</span>
      <span><b><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m12 3 9 9-9 9-9-9 9-9Zm0 5 4 4-4 4-4-4 4-4Z"/></svg></b> Indoor & outdoor</span>
    </div>

    <section class="section" id="collections">
      <div class="section-heading reveal">
        <div><span class="eyebrow">01 / THE COLLECTION</span><h2>Different spaces.<br><em>Endless possibilities.</em></h2></div>
        <a href="#/shop" class="text-link">Explore all collections <span><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></span></a>
      </div>
      <div class="collection-grid stagger" id="home-collections" role="region" aria-label="Lighting collections">
        ${collectionCard('Magnetic track lights', 'Architectural light', 'Shape the space. Set the scene.', '01')}
        ${collectionCard('LED strips', 'Lines of light', 'Seamless. Subtle. Transformative.', '02')}
        ${collectionCard('Garden lighting', 'After dark', 'A new perspective on outdoor living.', '03')}
      </div>
      <div class="collection-controls">
        <span>Swipe to explore <span id="collection-position">01 / 03</span></span>
        <div><button type="button" data-collection-step="-1" aria-label="Previous lighting collection" aria-controls="home-collections" disabled><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 12H4m6-6-6 6 6 6"/></svg></button><button type="button" data-collection-step="1" aria-label="Next lighting collection" aria-controls="home-collections"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 12h16m-6-6 6 6-6 6"/></svg></button></div>
      </div>
      <div class="collection-foot"><span>Lighting inspiration, from inside to out.</span><span>20 categories. One considered collection.</span></div>
      <section class="brand-spotlight reveal" aria-labelledby="brand-spotlight-title">
        <div><span class="eyebrow" id="brand-spotlight-title">BRANDS IN OUR COLLECTION</span><p>Names behind the light.</p></div>
        <div class="supplier-wordmark" aria-label="Konnice Electric">KONNICE<span>ELECTRIC</span></div>
        <div class="brand-spotlight-copy"><p>Discover Konnice lighting<br>in the Trad Group collection.</p><a href="#/shop" class="text-link">Explore the collection <span><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></span></a></div>
      </section>
    </section>

    <section class="editorial">
      <div class="editorial-image reveal" role="img" aria-label="Concept Mediterranean interior with carefully layered warm lighting"></div>
      <div class="editorial-copy reveal">
        <span class="eyebrow">02 / THE TRAD GROUP APPROACH</span>
        <h2>Every space <br>has a story.<br><em>Light tells it.</em></h2>
        <p>The finishing detail. The first impression. The feeling of coming home. We bring together thoughtful lighting, electrical essentials and practical expertise to help you see the possibilities.</p>
        <div class="editorial-features">
          <div><h3>For the way you live</h3><p>Everyday essentials and atmospheric finishing touches.</p></div>
          <div><h3>For the way you build</h3><p>Product supply and guidance for trade professionals.</p></div>
        </div>
        <a href="#/about" class="text-link">The story behind the light <span><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></span></a>
      </div>
    </section>

    <section class="section">
      <div class="section-heading reveal">
        <div><span class="eyebrow">03 / CONSIDERED ESSENTIALS</span><h2>The details<br><em>make the difference.</em></h2></div>
        <a href="#/shop" class="text-link">Find your next essential <span><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></span></a>
      </div>
      <div class="featured-grid">${featured.map(product => card(product, 'In the collection')).join('')}</div>
      <div class="collection-foot"><span>Catalogue retail prices in USD, including VAT. Wholesale enquiries welcome.</span><span>Availability confirmed by our team.</span></div>
    </section>

    ${lightLab()}

    <section class="section services-section">
      <div class="section-heading reveal"><div><span class="eyebrow">04 / BEYOND THE PRODUCT</span><h2>From the first idea<br><em>to the final detail.</em></h2></div><p>Products, expertise and a practical understanding of what your project needs.</p></div>
      <div class="services-grid">
        ${service('01', 'Supply, at every scale.', 'A room to finish or a building to supply. Explore lighting and electrical essentials for homes, shops, hospitality and commercial spaces.')}
        ${service('02', 'A considered approach.', 'Bring your ideas, plans or room dimensions. We can help with lighting design and installation, with scope tailored to your project.')}
        ${service('03', 'Closer than you think.', 'From Maarakeh to projects across Lebanon. Our team confirms delivery arrangements, timing and cost for your location and order.')}
      </div>
    </section>
    ${cta()}
  `;
}
