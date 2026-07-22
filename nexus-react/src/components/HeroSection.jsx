import { Link } from 'react-router-dom';

function SealSVG() {
  return (
    <svg className="seal-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="hex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--signal)" />
          <stop offset="100%" stopColor="var(--indigo)" />
        </linearGradient>
      </defs>

      {/* Rotating data rings */}
      <g className="seal-ring">
        <circle cx="200" cy="200" r="186" fill="none" stroke="var(--signal)" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
        <circle cx="200" cy="200" r="172" fill="none" stroke="var(--indigo)" strokeWidth="2" strokeDasharray="30 20 5 20" opacity="0.6" />
      </g>

      {/* Nested Hexagons */}
      <polygon className="seal-hex" points="200,50 336,125 336,275 200,350 64,275 64,125" fill="none" stroke="url(#hex-grad)" strokeWidth="2" filter="url(#neon-glow)" />
      <polygon points="200,70 318,137 318,263 200,330 82,263 82,137" fill="none" stroke="var(--signal)" strokeWidth="1" opacity="0.3" strokeDasharray="10 5" />

      {/* Connecting lines */}
      <g stroke="var(--signal)" strokeWidth="2" filter="url(#neon-glow)" opacity="0.8">
        <line x1="200" y1="50" x2="200" y2="14" />
        <line x1="336" y1="125" x2="368" y2="107" />
        <line x1="336" y1="275" x2="368" y2="293" />
        <line x1="200" y1="350" x2="200" y2="386" />
        <line x1="64" y1="275" x2="32" y2="293" />
        <line x1="64" y1="125" x2="32" y2="107" />
      </g>

      {/* Glowing Nodes */}
      <g fill="var(--signal)" filter="url(#neon-glow)">
        <circle className="seal-node" cx="200" cy="14" r="6" />
        <circle className="seal-node" cx="368" cy="107" r="6" />
        <circle className="seal-node" cx="368" cy="293" r="6" />
        <circle className="seal-node" cx="200" cy="386" r="6" />
        <circle className="seal-node" cx="32" cy="293" r="6" />
        <circle className="seal-node" cx="32" cy="107" r="6" />
      </g>

      {/* High-tech Lock */}
      <g filter="url(#neon-glow)">
        <rect x="156" y="196" width="88" height="64" rx="8" fill="none" stroke="var(--navy)" strokeWidth="4" />
        <rect x="160" y="200" width="80" height="56" rx="6" fill="var(--navy)" opacity="0.9" />
        <path d="M174 196 v-24 a26 26 0 0 1 52 0 v24" fill="none" stroke="var(--signal)" strokeWidth="6" strokeLinecap="round" />
        <circle cx="200" cy="222" r="7" fill="var(--signal)" className="seal-node" style={{ animationDelay: '0s' }} />
        <rect x="196" y="222" width="8" height="18" rx="3" fill="var(--signal)" className="seal-node" style={{ animationDelay: '0.2s' }} />
      </g>

      {/* Scanning line effect */}
      <line x1="140" y1="196" x2="260" y2="196" stroke="var(--signal)" strokeWidth="2" filter="url(#neon-glow)">
        <animate attributeName="y1" values="196;260;196" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="196;260;196" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

export default function HeroSection({
  compact = false,
  eyebrow,
  title,
  lede,
  ctaButtons = [],
  stats = [],
  showSeal = false,
  style = {},
  children,
}) {
  return (
    <header className={`hero${compact ? ' hero--compact' : ''}`} style={style} id="home">
      <div className="hero-content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h1>{title}</h1>}
        {lede && <p className="lede">{lede}</p>}
        {children}

        {ctaButtons.length > 0 && (
          <div className="hero-cta">
            {ctaButtons.map((btn, i) => (
              <Link key={i} to={btn.to} className={`cta-button${btn.secondary ? ' secondary' : ''}`}>
                {btn.label}
              </Link>
            ))}
          </div>
        )}

        {stats.length > 0 && (
          <div className="stat-strip">
            {stats.map((stat, i) => (
              <div className="stat" key={i}>
                <span
                  className="num"
                  data-count-to={stat.countTo}
                  data-prefix={stat.prefix || ''}
                  data-suffix={stat.suffix || ''}
                >
                  {stat.prefix || ''}{0}{stat.suffix || ''}
                </span>
                <span className="label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {showSeal && (
        <div className="hero-visual" aria-hidden="true">
          <SealSVG />
        </div>
      )}

      {showSeal && (
        <div className="hero-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
      )}
    </header>
  );
}
