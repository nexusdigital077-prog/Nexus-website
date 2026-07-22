import { useEffect, useRef, useState } from 'react';

export default function WelcomeOverlay() {
  const [phase, setPhase] = useState('active'); // 'active' | 'exit' | 'hidden'
  const canvasRef = useRef(null);
  const runningRef = useRef(true);

  // Skip if already played this session
  useEffect(() => {
    if (sessionStorage.getItem('nexus_intro_played')) {
      setPhase('hidden');
      return;
    }
    sessionStorage.setItem('nexus_intro_played', 'true');
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Particle canvas animation
  useEffect(() => {
    if (phase === 'hidden') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const C = ['#00e096', '#00b4d8', '#7c5cfc', '#00d4aa', '#5b8def'];
    const pts = [];
    for (let i = 0; i < 70; i++) {
      pts.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.4,
        a: Math.random() * 0.4 + 0.1,
        c: C[Math.floor(Math.random() * C.length)],
        p: Math.random() * 6.28,
      });
    }

    function draw() {
      if (!runningRef.current) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 12000) {
            const d = Math.sqrt(d2);
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,180,216,${0.05 * (1 - d / 110)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.p += 0.02;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.a * (0.7 + Math.sin(p.p) * 0.3);
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      requestAnimationFrame(draw);
    }
    draw();

    return () => {
      runningRef.current = false;
      window.removeEventListener('resize', resize);
    };
  }, [phase]);

  // Cinematic timing sequence
  useEffect(() => {
    if (phase === 'hidden') return;

    const orbEl = document.getElementById('orbitalSystem');
    const burstEl = document.getElementById('lightBurst');
    const hL = document.getElementById('hLineLeft');
    const hR = document.getElementById('hLineRight');
    const wcEl = document.getElementById('welcomeContent');

    const t1 = setTimeout(() => {
      orbEl?.classList.add('show');
      hL?.classList.add('show');
      hR?.classList.add('show');
      burstEl?.classList.add('show');
    }, 200);

    const t2 = setTimeout(() => {
      wcEl?.classList.add('show-all');
    }, 600);

    const t3 = setTimeout(() => {
      setPhase('exit');
      setTimeout(() => {
        setPhase('hidden');
        runningRef.current = false;
        document.body.style.overflow = '';
      }, 1000);
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [phase]);

  if (phase === 'hidden') return null;

  const overlayClass = `welcome-overlay${phase === 'exit' ? ' exit' : ''}`;

  return (
    <div id="welcomeOverlay" className={overlayClass}>
      <canvas ref={canvasRef} id="particleCanvas" className="welcome-particles"></canvas>

      {/* Orbital rings */}
      <div className="orbital-system" id="orbitalSystem">
        <div className="orbital-ring orbital-ring-1"></div>
        <div className="orbital-ring orbital-ring-2"></div>
        <div className="orbital-ring orbital-ring-3"></div>
      </div>

      {/* Light burst */}
      <div className="light-burst" id="lightBurst"></div>

      {/* Horizontal reveal lines */}
      <div className="h-line h-line-left" id="hLineLeft"></div>
      <div className="h-line h-line-right" id="hLineRight"></div>

      <div className="welcome-content" id="welcomeContent">
        <div className="welcome-text-row" id="welcomeRow">
          {'Welcome'.split('').map((ch, i) => (
            <span key={i} className="welcome-letter" style={{ '--i': i }}>{ch}</span>
          ))}
          <span className="welcome-letter welcome-spacer" style={{ '--i': 7 }}>&nbsp;</span>
          <span className="welcome-letter wl-to" style={{ '--i': 8 }}>t</span>
          <span className="welcome-letter wl-to" style={{ '--i': 9 }}>o</span>
        </div>
        <div className="welcome-logo-wrap" id="logoWrap">
          <div className="logo-ring" id="logoRing"></div>
          <img src="/logo.png" alt="NEXUS" className="welcome-logo" id="welcomeLogo" />
        </div>
        <div className="welcome-tagline" id="welcomeTagline">
          <span className="tag-bar"></span>
          <span className="tag-text">Securing connectivity, ensuring trust.</span>
          <span className="tag-bar"></span>
        </div>
      </div>

      <div className="welcome-vignette"></div>
      <div className="welcome-scanline"></div>
      <div className="welcome-grid-bg"></div>
    </div>
  );
}
