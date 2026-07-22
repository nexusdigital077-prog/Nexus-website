import HeroSection from '../components/HeroSection';
import PhotoBand from '../components/PhotoBand';
import useScrollReveal from '../hooks/useScrollReveal';
import useTiltEffect from '../hooks/useTiltEffect';

export default function Contact() {
  useScrollReveal();
  useTiltEffect();

  return (
    <>
      <HeroSection
        compact={true}
        eyebrow="GET IN TOUCH"
        title={<><span className="gradient-text">Contact</span> Us</>}
        lede="We're here to help with your warranty and IT solution needs."
        style={{ minHeight: '40vh', paddingTop: '120px', paddingBottom: '2rem' }}
      />

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1603114595741-e60bf9486e04?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX · SUPPORT"
        eyebrow="TALK TO A HUMAN"
        heading="Real people, close by in Andheri East."
        style={{ minHeight: '34vh' }}
      />

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info fade-in">
              <h3>Office Details</h3>
              <div className="contact-detail">
                <span className="icon">📍</span>
                <div>
                  <strong>Headquarters</strong><br />
                  Shop no 14, Vasydev App, Panchayat Road<br />
                  Opp. to Sona Udyog, Andheri East<br />
                  Mumbai 400069, Maharashtra
                </div>
              </div>
              <div className="contact-detail">
                <span className="icon">✉️</span>
                <div>
                  <strong>Email Us</strong><br />
                  <a href="mailto:nexuxdigital077@gmail.com">nexuxdigital077@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="map-container fade-in delay-1">
              <iframe
                title="Office Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Shop+no+14+vasydev+app,+panchayat+road+opp+to+sona+udyog+andheri+east+mumbai+400069+maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
