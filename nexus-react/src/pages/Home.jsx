import { Link } from 'react-router-dom';
import WelcomeOverlay from '../components/WelcomeOverlay';
import HeroSection from '../components/HeroSection';
import PhotoBand from '../components/PhotoBand';
import CertCard from '../components/CertCard';
import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';
import useTiltEffect from '../hooks/useTiltEffect';

export default function Home() {
  useScrollReveal();
  useCountUp();
  useTiltEffect();

  return (
    <>
      <WelcomeOverlay />

      <HeroSection
        eyebrow="NX · CERTIFIED PROTECTION"
        title={<>Protection that <span className="gradient-text">holds up.</span></>}
        lede="Extended warranties and EMI security built for how people actually own devices — from the first breakdown to the last unpaid instalment."
        ctaButtons={[
          { label: 'Explore our products', to: '/#products' },
          { label: 'See coverage plans', to: '/nexwareeny', secondary: true }
        ]}
        stats={[
          { countTo: 20, prefix: '₹', suffix: 'L', label: 'Max device value covered' },
          { countTo: 0, prefix: '', suffix: '%', label: 'Depreciation on approved claims' },
          { countTo: 10, prefix: '', suffix: '+ yrs', label: 'Leadership industry experience' }
        ]}
        showSeal={true}
      />

      <section id="products" className="section products-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">01 · PRODUCTS</p>
            <h2 className="section-title fade-in">Two products. One promise.</h2>
            <p className="section-sub fade-in">Whatever the device, whatever the risk, Nexus certifies it — either against wear or against missed payments.</p>
          </div>
          <div className="products-grid">
            <CertCard
              className="fade-in"
              icon="🛡️"
              title="Nexwareeny"
              description="Comprehensive extended warranty coverage for home and electronic appliances, giving you complete peace of mind — 100% cost of parts and labor, zero depreciation."
              code="NX–WRT–01"
              actionLabel="Learn more"
              actionTo="/nexwareeny"
            />
            <CertCard
              className="fade-in delay-1"
              icon="📱"
              title="Nexlock"
              description="An advanced EMI security solution that automatically locks mobile devices if customers fall behind on payments, ensuring compliance without repossession."
              code="NX–LCK–02"
              actionLabel="Learn more"
              actionTo="/nexlock"
            />
          </div>
        </div>
      </section>

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1768051579338-3dc694863efc?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX · ON THE GROUND"
        eyebrow="CERTIFIED, NOT OUTSOURCED"
        heading="Real technicians. Authorized parts. No shortcuts."
        description="Every claim routes to a brand-authorized service center — the same repair your manufacturer would perform, at zero cost to you."
      />

      <section className="section">
        <div className="container">
          <div className="photo-grid fade-in">
            <div className="photo-card">
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?fm=jpg&q=80&w=900&auto=format&fit=crop" alt="Refrigerator covered under Nexwareeny appliance warranty" loading="lazy" />
              <div className="photo-card__label">
                <span className="cert-code">NX–WRT–01</span>
                <strong>Large appliances</strong>
              </div>
            </div>
            <div className="photo-card">
              <img src="https://images.unsplash.com/photo-1632923565835-6582b54f2105?fm=jpg&q=80&w=900&auto=format&fit=crop" alt="Washer and dryer covered under Nexwareeny appliance warranty" loading="lazy" />
              <div className="photo-card__label">
                <span className="cert-code">NX–WRT–01</span>
                <strong>Laundry & kitchen</strong>
              </div>
            </div>
            <div className="photo-card">
              <img src="https://images.unsplash.com/photo-1592744254966-58c65cfd2e69?fm=jpg&q=80&w=900&auto=format&fit=crop" alt="Digital lock representing Nexlock EMI security" loading="lazy" />
              <div className="photo-card__label">
                <span className="cert-code">NX–LCK–02</span>
                <strong>EMI device security</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper-raised)', paddingTop: '4.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <div className="split-panel fade-in">
            <div className="split-panel__media">
              <img src="https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?fm=jpg&q=80&w=1200&auto=format&fit=crop" alt="The Nexus team collaborating in the office" loading="lazy" />
              <span className="cert-code">NX–TEAM</span>
            </div>
            <div className="split-panel__copy">
              <p className="eyebrow">BUILT FROM INSIDE THE INDUSTRY</p>
              <h2 className="section-title">People who've sold the warranty, not just written it.</h2>
              <p>Our leadership spent the last decade inside Vecare, Onsitego and OnAssist — running claims desks, negotiating with brands, and watching where warranty programs usually let customers down. Nexus exists to fix those gaps.</p>
              <Link to="/careers" className="learn-more">Meet the team &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="section team-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">02 · LEADERSHIP</p>
            <h2 className="section-title fade-in">The people behind Nexus.</h2>
            <p className="section-sub fade-in">A team built out of the warranty and IT industry itself — not around it.</p>
          </div>
          <div className="team-grid">
            <div className="badge-card fade-in">
              <div className="badge-strip"></div>
              <div className="badge-body">
                <div className="avatar gradient-bg-1">S</div>
                <h4>Sagar</h4>
                <p className="role">Chief Executive Officer</p>
                <p className="bio">Working with Vecare for the past 10 years in IT and Business Development fields.</p>
              </div>
            </div>
            <div className="badge-card fade-in delay-1">
              <div className="badge-strip"></div>
              <div className="badge-body">
                <div className="avatar gradient-bg-2">K</div>
                <h4>Kunal Kurmi</h4>
                <p className="role">Chief Operating Officer</p>
                <p className="bio">B.Tech graduate of Thakur College of Engineering and Technology. Experienced with Spectrum and Vecare Consumer Sci Pvt Ltd, driving OnAssist and VWarranty.</p>
              </div>
            </div>
            <div className="badge-card fade-in delay-2">
              <div className="badge-strip"></div>
              <div className="badge-body">
                <div className="avatar gradient-bg-3">K</div>
                <h4>Ketan</h4>
                <p className="role">Chief Strategy Officer</p>
                <p className="bio">Worked with Onsitego, bringing 8 years of deep expertise in the extended warranty field.</p>
              </div>
            </div>
            <div className="badge-card fade-in">
              <div className="badge-strip"></div>
              <div className="badge-body">
                <div className="avatar gradient-bg-4">A</div>
                <h4>Ashish</h4>
                <p className="role">Chief Financial Officer / Advisor</p>
                <p className="bio">Our dedicated financial advisor, ensuring robust economic growth and stability.</p>
              </div>
            </div>
            <div className="badge-card fade-in delay-1">
              <div className="badge-strip"></div>
              <div className="badge-body">
                <div className="avatar gradient-bg-5">J</div>
                <h4>Janak</h4>
                <p className="role">Investor</p>
                <p className="bio">Strategic investor backing our vision for the future of IT and EMI security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="band-ink fade-in">
            <p className="eyebrow">READY WHEN YOU ARE</p>
            <h2>Cover your next device before it needs it.</h2>
            <p>Nexwareeny plans are priced as a simple percentage of device value — see exactly what 1 to 4 years of protection costs.</p>
            <Link to="/nexwareeny" className="cta-button">View pricing &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
