import { Link } from 'react-router-dom';

export default function CertCard({ icon, title, description, code, actionLabel, actionTo, className = '' }) {
  return (
    <div className={`cert-card ${className}`}>
      <div className="cert-card__top">
        <div className="cert-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="cert-perforation"></div>
      <div className="cert-card__bottom">
        <span className="cert-code">{code}</span>
        <Link to={actionTo} className="learn-more">{actionLabel} &rarr;</Link>
      </div>
    </div>
  );
}
