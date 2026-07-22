import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import PhotoBand from '../components/PhotoBand';
import useScrollReveal from '../hooks/useScrollReveal';
import useTiltEffect from '../hooks/useTiltEffect';

export default function Nexlock() {
  useScrollReveal();
  useTiltEffect();

  return (
    <>
      <HeroSection
        compact={true}
        eyebrow="NX–LCK–02"
        title={<>Nexlock <span className="tag-soon">Coming soon</span></>}
        lede="An advanced EMI security solution that automatically locks mobile devices if customers fall behind on payments — ensuring compliance without repossession."
        ctaButtons={[
          { label: '← Back to products', to: '/#products', secondary: true }
        ]}
      />

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1614064643392-8dd713152ae9?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX–LCK–02"
        eyebrow="EMI SECURITY"
        heading="Compliance without repossession."
        description="Nexlock keeps devices in customers' hands while keeping payments on track — no field agents, no confrontation."
        style={{ minHeight: '38vh' }}
      />

      <section className="section">
        <div className="container">
          <div className="cert-card fade-in" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="cert-card__top">
              <div className="cert-icon">📱</div>
              <h3>This page is being built.</h3>
              <p>We're finishing the details on Nexlock's coverage, device compatibility and partner onboarding. In the meantime, if you're a retailer or finance partner interested in EMI security, reach out to the Nexus team through your usual contact.</p>
            </div>
            <div className="cert-perforation"></div>
            <div className="cert-card__bottom">
              <span className="cert-code">NX–LCK–02</span>
              <Link to="/nexwareeny" className="learn-more">See Nexwareeny instead &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
