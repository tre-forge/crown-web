import SplinePlaceholder from '@/components/spline-placeholder';
import { navItems, services, testimonials } from '@/data/site-content';

const phone = '404-490-2796';
const email = 'info@crowngcinc.com';

export default function Home() {
  return (
    <main className="page-shell">
      <header className="top-nav">
        <div>
          <p className="brand-kicker">CRWN</p>
          <p className="brand-name">Crown Contracting</p>
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
        <a href={`tel:${phone}`} className="cta-pill">
          Call {phone}
        </a>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">Bringing honor to the business</p>
          <h1>Insurance-focused roofing & restoration for Metro Atlanta homeowners.</h1>
          <p>
            Crown Contracting is built on integrity, professional execution, and referral-first service. We
            represent homeowners through challenging claims and deliver quality craftsmanship from emergency
            response through final finish.
          </p>
          <div className="hero-actions">
            <a className="button-solid" href="#contact">
              Start your project
            </a>
            <a className="button-ghost" href="#services">
              Explore services
            </a>
          </div>
        </div>
        <SplinePlaceholder />
      </section>

      <section id="services" className="section">
        <p className="eyebrow">What we do</p>
        <h2>End-to-end restoration and contracting services</h2>
        <div className="card-grid">
          {services.map((service) => (
            <article className="info-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <article className="panel">
          <p className="eyebrow">Why Crown</p>
          <h3>Built for trust, speed, and quality</h3>
          <ul>
            <li>Incorporated in Georgia and fully insured.</li>
            <li>Hands-on support at adjuster meetings and inspections.</li>
            <li>Storm response with 24/7 emergency protection options.</li>
            <li>Serving Metro Atlanta with Southeast expansion underway.</li>
          </ul>
        </article>
        <article className="panel">
          <p className="eyebrow">Client voice</p>
          <h3>Referral-powered reputation</h3>
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author}>
              “{testimonial.quote}”
              <footer>
                {testimonial.author} — {testimonial.location}
              </footer>
            </blockquote>
          ))}
        </article>
      </section>

      <section id="contact" className="section contact-band">
        <h2>Let’s protect and restore your home the right way.</h2>
        <p>Lawrenceville, GA 30045 • Metro Atlanta coverage • Storm restoration specialists</p>
        <div className="contact-actions">
          <a href={`tel:${phone}`}>{phone}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </section>
    </main>
  );
}
