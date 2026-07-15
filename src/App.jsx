import { useEffect, useRef, useState } from 'react';

const asset = (path) => new URL(`${import.meta.env.BASE_URL}${path}`, document.baseURI).href;

const videos = [
  { title: 'Product overview', image: asset('assets/video-thumbnails/product-overview.jpg'), youtubeId: '0Zgb-dHvVNw' },
  { title: 'AD 1', image: asset('assets/video-thumbnails/ad-1.jpg'), youtubeId: 'crK9x-tPeRA' },
  { title: 'AD 2', image: asset('assets/video-thumbnails/ad-2.jpg'), youtubeId: 'tkorljfWzQU' },
  { title: 'AD 3', image: asset('assets/video-thumbnails/ad-3.jpg'), youtubeId: 'pCdF42JoAOg' },
  { title: 'AD 4', image: asset('assets/video-thumbnails/ad-4.jpg'), youtubeId: 'P1sYJhyXipA' },
  { title: 'AD 5', image: asset('assets/video-thumbnails/ad-5.jpg'), youtubeId: 'dcC3MC99l30' },
  { title: 'AD 6', image: asset('assets/video-thumbnails/ad-6.jpg'), youtubeId: 'HCZcLcq6hGg' },
  { title: 'AD 7', image: asset('assets/video-thumbnails/ad-7.jpg'), youtubeId: 'CsLT_HktSv8' },
  { title: 'AD 8', image: asset('assets/video-thumbnails/ad-8.jpg'), youtubeId: 'PIpwihO54ys' },
];

function ComingSoon() {
  return <button className="coming" type="button" aria-label="Product coming soon">Coming soon</button>;
}

export function App() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mediaVisible, setMediaVisible] = useState(false);
  const [mediaStarted, setMediaStarted] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const videoStageRef = useRef(null);
  const iframeRef = useRef(null);
  const hasEnteredMedia = useRef(false);
  const playerRetryTimers = useRef([]);
  const current = videos[activeVideo];

  useEffect(() => {
    const videoStage = videoStageRef.current;
    if (!videoStage) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
      setMediaVisible(isVisible);
      if (isVisible) setMediaStarted(true);
      if (isVisible && !hasEnteredMedia.current) {
        hasEnteredMedia.current = true;
        setActiveVideo(0);
      }
    }, { threshold: [0, 0.45, 0.75] });
    observer.observe(videoStage);
    return () => observer.disconnect();
  }, []);

  const sendPlayerCommand = (command, args = []) => {
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: command, args }), 'https://www.youtube-nocookie.com');
  };

  const disableCaptions = () => {
    sendPlayerCommand('setOption', ['captions', 'track', {}]);
    sendPlayerCommand('unloadModule', ['captions']);
  };

  const playVideo = () => {
    sendPlayerCommand('playVideo');
  };

  const clearPlayerRetries = () => {
    playerRetryTimers.current.forEach(window.clearTimeout);
    playerRetryTimers.current = [];
  };

  const requestPlayback = () => {
    clearPlayerRetries();
    playVideo();
    playerRetryTimers.current = [250, 700, 1400].map((delay) => window.setTimeout(playVideo, delay));
  };

  const initializePlayer = () => {
    disableCaptions();
    window.setTimeout(disableCaptions, 500);
    window.setTimeout(disableCaptions, 1200);
    if (mediaVisible) requestPlayback();
  };

  const toggleSound = () => {
    if (soundOn) {
      sendPlayerCommand('mute');
      setSoundOn(false);
    } else {
      sendPlayerCommand('unMute');
      sendPlayerCommand('playVideo');
      setSoundOn(true);
    }
  };

  useEffect(() => {
    setSoundOn(false);
  }, [activeVideo]);

  useEffect(() => {
    if (!iframeRef.current) return;
    if (mediaVisible) requestPlayback();
    else {
      clearPlayerRetries();
      sendPlayerCommand('pauseVideo');
    }
  }, [mediaVisible, activeVideo]);

  const moveVideo = (direction) => setActiveVideo((value) => (value + direction + videos.length) % videos.length);

  return (
    <main style={{
      '--hero-image': `url("${asset('assets/generated/hero-fullbleed.png')}")`,
      '--beyond-image': `url("${asset('assets/generated/beyond-gold-eagle.png')}")`,
      '--closing-image': `url("${asset('assets/generated/standard-is-changing-v2.png')}")`,
    }}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Omega ARIS home">
          <img src={asset('assets/generated/omega-header-lockup.png')} alt="Omega — Wein Products Inc." />
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>Menu</button>
        <nav className={menuOpen ? 'open' : ''} aria-label="Primary navigation">
          <a href="#technology" onClick={() => setMenuOpen(false)}>Technology</a>
          <a href="#difference" onClick={() => setMenuOpen(false)}>Why it matters</a>
          <a href="#media" onClick={() => setMenuOpen(false)}>Media</a>
          <a href="https://weinproducts.com/about">Company</a>
        </nav>
        <ComingSoon />
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">OMEGA ARIS-660B</p>
          <h1>The bullion coin tester that helps verify the entire coin.</h1>
          <p className="dek">Acoustic Resonance Imaging System for fast, repeatable bullion verification.</p>
          <ComingSoon />
          <blockquote>
            <p>“If you can’t trust your test equipment, nothing else matters in the bullion coin trade.”</p>
            <footer><strong>Stan Weinberg</strong><span>CHAIRMAN &amp; CEO · WEIN PRODUCTS INC.</span></footer>
          </blockquote>
        </div>
        <div className="hero-visual"><img src={asset('assets/productshots/OmegaAris-home.png')} alt="OMEGA ARIS-660B bullion coin tester" /></div>
      </section>

      <section className="proofs" aria-label="Product highlights">
        <article><img className="proof-icon" src={asset('assets/generated/proof-badge-acoustic.png')} alt="" /><h2>Acoustic resonance</h2><p>Measures the unique sound signature of bullion.</p></article>
        <article><img className="proof-icon" src={asset('assets/generated/proof-badge-volume.png')} alt="" /><h2>Full-volume analysis</h2><p>Helps evaluate the coin’s internal structure.</p></article>
        <article><img className="proof-icon" src={asset('assets/generated/proof-badge-results.png')} alt="" /><h2>Clear results</h2><p>Designed for repeatable, high-volume workflows.</p></article>
      </section>

      <section className="technology" id="technology">
        <p className="eyebrow">The Omega difference</p>
        <h2>Full-volume acoustic analysis.</h2>
        <p>The OMEGA ARIS-660B uses acoustic resonance technology to help analyze the entire volume of a coin. Its sound signature can help identify internal structural anomalies that conventional spot checks may leave unresolved.</p>
        <div className="waveform" aria-hidden="true">
          <img src={asset('assets/generated/acoustic-waveform.png')} alt="" />
          <img src={asset('assets/generated/acoustic-waveform.png')} alt="" />
        </div>
      </section>

      <section className="beyond" id="difference">
        <div>
          <p className="eyebrow">Acoustic Resonance Imaging</p>
          <h2>Beyond<br />the surface.</h2>
          <p>The OMEGA ARIS-660B helps verify what matters most—the entire internal structure of the coin, from edge to edge.</p>
        </div>
      </section>

      <section className="comparison">
        <header><h2>Doesn’t test only the central core.</h2><p>Helps verify the entire coin.</p></header>
        <div className="comparison-labels">
          <article className="legacy-method">
            <span className="method-tag">Legacy method</span>
            <p className="eyebrow">Conventional center spot check</p>
            <p className="stat">Up to <strong>79%</strong> of the internal metal can remain uninspected.</p>
          </article>
          <article className="modern-method">
            <span className="method-tag">Current system</span>
            <p className="eyebrow">OMEGA ARIS-660B</p>
            <p className="stat">Full-volume <strong>acoustic analysis</strong>.</p>
          </article>
        </div>
        <img className="comparison-art" src={asset('assets/generated/central-core-comparison.png')} alt="Localized center spot testing compared with full-volume acoustic analysis" />
        <div className="comparison-notes">
          <p>Localized center sampling can leave internal risk in the surrounding perimeter unresolved.</p>
          <p>Acoustic resonance helps evaluate the entire coin structure for greater confidence.</p>
        </div>
      </section>

      <section className="media" id="media">
        <p className="eyebrow">The complete story</p><h2>See it in action.</h2>
        <div className="video-stage" ref={videoStageRef}>
          {current.youtubeId ? (
            <iframe ref={iframeRef} key={current.youtubeId} onLoad={initializePlayer} src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?enablejsapi=1&autoplay=${mediaStarted ? 1 : 0}&mute=1&playsinline=1&rel=0&cc_load_policy=0&origin=${encodeURIComponent(window.location.origin)}`} title={current.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          ) : (
            <div className="video-placeholder"><img src={current.image} alt="" /><div><span className="play">Play</span><p>{current.title}</p><small>YouTube video ready</small></div></div>
          )}
        </div>
        <button className="sound-toggle" type="button" onClick={toggleSound} aria-pressed={soundOn}>
          <span className="sound-indicator" aria-hidden="true" />
          {soundOn ? 'Turn volume off' : 'Turn volume on'}
        </button>
        <div className="filmstrip-wrap">
          <button type="button" onClick={() => moveVideo(-1)} aria-label="Previous video">Previous</button>
          <div className="filmstrip" role="tablist" aria-label="Videos">
            {videos.map((video, index) => (
              <button type="button" role="tab" aria-selected={activeVideo === index} className={activeVideo === index ? 'active' : ''} key={video.title} onClick={() => setActiveVideo(index)}>
                <img src={video.image} alt="" /><span>{video.title}</span>
              </button>
            ))}
          </div>
          <button type="button" onClick={() => moveVideo(1)} aria-label="Next video">Next</button>
        </div>
        <p className="counter">{String(activeVideo + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}</p>
      </section>

      <section className="closing" id="closing">
        <div><p className="eyebrow">Built for serious bullion professionals</p><h2>The standard is changing.</h2><p>The OMEGA ARIS-660B introduces full-volume acoustic analysis to modern bullion verification.</p><ComingSoon /></div>
      </section>

      <footer className="site-footer">
        <img src={asset('assets/logos/logo.png')} alt="Wein Products" />
        <p>No single testing method should be relied upon in isolation. For complete confidence, combine metallurgical, physical, and acoustic verification tools.</p>
        <p>© {new Date().getFullYear()} Wein Products Inc.</p>
      </footer>
    </main>
  );
}
