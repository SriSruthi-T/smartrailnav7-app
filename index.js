// app/page.js
import Image from 'next/image';

export default function Home() {
  return (
    <div className="overlay">
      <header className="header">
        <div className="container nav-container">
          <div className="logo">SMARTRAILNAV</div>
          <nav className="nav">
            <a href="#stations" className="nav-link">Stations</a>
            <a href="#facilities" className="nav-link">Facilities</a>
            <a href="#locations" className="nav-link">Locations</a>
            <a href="#contact" className="nav-link cta-nav">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content">
          <h1 className="hero-title">Explore the Railway Stations Facilities and Locations</h1>
          <p className="hero-subtitle">Find your nearest station, explore facilities, and get directions with ease.</p>
          <a href="#stations" className="btn btn-primary">Find a Station</a>
        </div>
        <div className="hero-image">
          <Image src="/rail3.jpg" alt="Train Station" width={600} height={400} />
        </div>
      </section>

      {/* Extra Image */}
      <section className="extra-image-section container">
        <Image
          src="/rail4.jpg"
          alt="Railway Scenery"
          width={800}
          height={450}
          className="rounded-lg shadow-md"
        />
      </section>

      {/* Stations Section */}
      <section id="stations" className="stations container">
        <h2 className="section-title">Stations Overview</h2>
        <div className="stations-grid">
          {[
            {
              title: 'New York Central',
              desc: 'Located in the heart of NYC, offering fast connections to major cities.',
            },
            {
              title: 'Los Angeles Union',
              desc: 'One of the largest stations on the West Coast with state-of-the-art services.',
            },
            {
              title: 'Chicago Union',
              desc: 'Historic station with modern amenities, providing easy access to the Midwest.',
            },
          ].map((station, index) => (
            <div key={index} className="station-card">
              <h3>{station.title}</h3>
              <p>{station.desc}</p>
              <a href="#facilities" className="btn btn-outline">Explore Facilities</a>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="facilities container">
        <h2 className="section-title">Facilities Available</h2>
        <div className="facilities-grid">
          {[
            {
              src: '/waiting-room.jpg',
              alt: 'Waiting Room',
              title: 'Comfortable Waiting Rooms',
              desc: 'Relax in spacious waiting areas with free Wi-Fi, seating, and refreshments.',
            },
            {
              src: '/food-court.jpg',
              alt: 'Food Court',
              title: 'Food Courts',
              desc: 'Enjoy a variety of cuisines at our food courts available at major stations.',
            },
            {
              src: '/charging-station.jpg',
              alt: 'Charging Stations',
              title: 'Charging Stations',
              desc: 'Charge your devices at convenient stations throughout the premises.',
            },
          ].map((facility, i) => (
            <div key={i} className="facility-card">
              <Image
                src={facility.src}
                alt={facility.alt}
                width={100}
                height={100}
                className="facility-icon"
              />
              <h3>{facility.title}</h3>
              <p>{facility.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="locations container">
        <h2 className="section-title">Station Locations</h2>
        <div className="locations-map">
          <p>Explore our interactive map to find stations near you or discover new destinations.</p>
          <Image src="/location.jpg" alt="Station Map" width={600} height={300} />
        </div>
      </section>

      {/* Station Tour Section */}
      <section className="station-tour-section container">
        <h2 className="section-title">Station Tour</h2>
        <div className="video-wrapper">
          <video controls poster="/video-thumbnail.jpg" width="100%">
            <source src="/station1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Contact Section */}
      <section className="cta-section" id="contact">
        <div className="container cta-container">
          <h2>Need Help Finding a Station?</h2>
          <a href="mailto:contact@SmartRailNav.com" className="btn btn-secondary">Contact Support</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <nav className="footer-nav">
            <a href="#stations" className="footer-link">Stations</a>
            <a href="#facilities" className="footer-link">Facilities</a>
            <a href="#locations" className="footer-link">Locations</a>
            <a href="#contact" className="footer-link">Contact Us</a>
          </nav>
          <p>© 2025 SmartRailNav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
