import HeroSection from '../components/HeroSection';
import PhotoBand from '../components/PhotoBand';
import useScrollReveal from '../hooks/useScrollReveal';
import useTiltEffect from '../hooks/useTiltEffect';

export default function Nexwareeny() {
  useScrollReveal();
  useTiltEffect();

  return (
    <>
      <HeroSection
        compact={true}
        eyebrow="NX–WRT–01"
        title={<>Nexus <span className="gradient-text">Extended Warranty</span></>}
        lede={<>Securing connectivity, ensuring trust — coverage up to <strong>₹20 lakhs</strong> of device purchase price.</>}
      />

      <PhotoBand
        backgroundImage="https://images.unsplash.com/photo-1775210727386-4c798dfae209?fm=jpg&q=80&w=1800&auto=format&fit=crop"
        stamp="NX–WRT–01"
        eyebrow="EVERY APPLIANCE, ACCOUNTED FOR"
        heading="From the first breakdown to the last service call."
        description="Whatever's plugged in at home — it's covered, doorstep to doorstep, at zero deduction."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">COVERAGE</p>
            <h2 className="section-title fade-in">What's in the certificate.</h2>
          </div>
          <div className="coverage-grid">
            <div className="coverage-card fade-in">
              <h3 className="coverage-title covered"><span className="icon">✔️</span> WHAT'S COVERED</h3>
              <ul className="coverage-list">
                <li>All mechanical & electrical breakdowns after brand warranty expires</li>
                <li>100% cost of spare parts & labor charges</li>
                <li>Repair or replacement guarantee — no questions asked</li>
              </ul>
            </div>
            <div className="coverage-card fade-in delay-1">
              <h3 className="coverage-title not-covered"><span className="icon">❌</span> NOT COVERED</h3>
              <ul className="coverage-list">
                <li>Physical damage, accidents, drops, or impact</li>
                <li>Liquid or water exposure of any kind</li>
                <li>Fire, burns, explosions, or electrical surges</li>
                <li>Unauthorized repairs or tampered serial numbers</li>
                <li>Commercial use or use at a commercial establishment</li>
                <li>Rodent, insect, or other external-factor damage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper-raised)' }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">PRICING</p>
            <h2 className="section-title fade-in">Plan price as % of device value.</h2>
            <p className="section-sub fade-in">Choose your coverage duration. All prices are a percentage of device purchase price.</p>
          </div>
          <div className="table-container fade-in">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Product category</th>
                  <th>1 year</th>
                  <th>2 years</th>
                  <th>3 years</th>
                  <th>4 years</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Air Conditioner</td>
                  <td>20%</td><td>17%</td><td>13%</td><td>8.5%</td>
                </tr>
                <tr>
                  <td>Dishwasher, Dryer, Refrigerator, Washing Machine & Microwave</td>
                  <td>—</td><td>16%</td><td>12%</td><td>8%</td>
                </tr>
                <tr>
                  <td>Refrigerator & Washing Machine (Brand Warranty &gt; 1 Year)</td>
                  <td>—</td><td>—</td><td>14%</td><td>9%</td>
                </tr>
                <tr>
                  <td>Television</td>
                  <td>—</td><td>17%</td><td>12%</td><td>8.5%</td>
                </tr>
                <tr>
                  <td>Television (Brand Warranty &gt; 1 Year)</td>
                  <td>—</td><td>—</td><td>14%</td><td>10%</td>
                </tr>
                <tr>
                  <td>Air & Water Purifier</td>
                  <td>8%</td><td>16%</td><td>12%</td><td>12%</td>
                </tr>
                <tr>
                  <td>Hob & Chimney</td>
                  <td>—</td><td>—</td><td>14%</td><td>9%</td>
                </tr>
                <tr>
                  <td>Room Cooler, Heater, Atta Chakki, Water Dispenser & Geyser</td>
                  <td>—</td><td>—</td><td>12%</td><td>8%</td>
                </tr>
                <tr>
                  <td>Personal Care, Massager, Vacuum Cleaner, Fan & Iron</td>
                  <td>—</td><td>—</td><td>14%</td><td>9%</td>
                </tr>
                <tr>
                  <td>Chopper, Blender, Kettle, Toaster, Fryer, Griller, Food Processor, JMG & Induction Stove</td>
                  <td>9%</td><td>12%</td><td>—</td><td>8.5%</td>
                </tr>
                <tr>
                  <td>Home Theatre, Sound Bar, Audio System & Portable Speakers</td>
                  <td>—</td><td>—</td><td>12%</td><td>—</td>
                </tr>
                <tr>
                  <td>Bluetooth — Speakers, Neckband & Headphones</td>
                  <td>—</td><td>—</td><td>12%</td><td>—</td>
                </tr>
                <tr>
                  <td>Laptop</td>
                  <td>9%</td><td>12%</td><td>7%</td><td>—</td>
                </tr>
                <tr>
                  <td>Desktop, Printer & Office Solution</td>
                  <td>7%</td><td>10%</td><td>—</td><td>—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-panel reverse fade-in">
            <div className="split-panel__media">
              <img src="https://images.unsplash.com/photo-1562941995-17dc31eaaf6d?fm=jpg&q=80&w=1200&auto=format&fit=crop" alt="Technician repairing an electronic device" loading="lazy" />
              <span className="cert-code">NX–WRT–01</span>
            </div>
            <div className="split-panel__copy">
              <p className="eyebrow">HOW A CLAIM ACTUALLY WORKS</p>
              <h2 className="section-title">Upload the invoice. We take it from there.</h2>
              <p>Share your purchase invoice and IMEI or serial number, and we route the device to a brand-authorized center — same parts, same standards as the manufacturer.</p>
              <p>No paperwork chase, no back-and-forth on cost. If it's covered, it's fixed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper-raised)' }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">WHY NEXUS</p>
            <h2 className="section-title fade-in">Why choose Nexus Extended Warranty?</h2>
          </div>
          <div className="benefits-grid fade-in">
            <div className="benefit-item"><span className="icon">✔️</span> Zero depreciation — full claim value with no deduction</div>
            <div className="benefit-item"><span className="icon">✔️</span> Covered damage handled without financial impairment to you</div>
            <div className="benefit-item"><span className="icon">✔️</span> Free doorstep pickup & drop service</div>
            <div className="benefit-item"><span className="icon">✔️</span> Complimentary transportation to authorized service centers</div>
            <div className="benefit-item"><span className="icon">✔️</span> Multiple service requests within your coverage limit</div>
            <div className="benefit-item"><span className="icon">✔️</span> Consumables included: cables, batteries, chargers, cartridges</div>
            <div className="benefit-item"><span className="icon">✔️</span> Normal wear & tear that doesn't affect functionality is covered</div>
            <div className="benefit-item"><span className="icon">✔️</span> Repair or replacement — no questions asked</div>
          </div>
        </div>
      </section>
    </>
  );
}
