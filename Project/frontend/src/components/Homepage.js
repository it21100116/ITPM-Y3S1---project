import React from 'react';
import Header from './Header.js';

function Homepage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
    <Header/>
      
      {/* Hero Image Section Start */}
      <section style={{ textAlign: 'center', padding: '50px 0', backgroundImage: 'url(../img/heroHomepage.png)', backgroundSize: 'cover', color: 'white' }}>
        <h1 style={{ fontSize: '2.5em', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Welcome to our zoo</h1>
      </section>
      {/* Hero Image Section End */}
      
      {/* About Section Start */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '50px 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>About Us</h2>
        <p style={{ width: '60%', margin: '0 auto', fontSize: '1.2em' }}>Our zoo is home to over 500 animals from all around the world. We are committed to providing a fun, educational experience for all of our visitors.</p>
      </section>
      {/* About Section End */}

      {/* News Section Start */}
      {/* News Section Start */}
        <section style={{ padding: '50px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Latest News</h2>
          <div style={{ display: 'inline-block', margin: '0 20px' }}>
            <img src="../img/news.png" alt="news item" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
            <h3 style={{ fontSize: '1.5em', marginTop: '20px' }}>Opening of new zoology classes</h3>
            <p style={{ width: '80%', margin: '0 auto', fontSize: '1.2em' }}>we are happy to announce that we are starting classes on sunday join us.</p>
          </div>
          <div style={{ display: 'inline-block', margin: '0 20px' }}>
            <img src="../img/3.jpg" alt="news item" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
            <h3 style={{ fontSize: '1.5em', marginTop: '20px' }}>wild-life photography classes</h3>
            <p style={{ width: '80%', margin: '0 auto', fontSize: '1.2em' }}>we are happy to announce that we are starting classes on saturday join us</p>
          </div>
        </section>
{/* News Section End */}

      
      {/* News Section End */}

      {/* Contact Us Section Start */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '50px 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Contact Us</h2>
        <p style={{ width: '60%', margin: '0 auto', fontSize: '1.2em' }}>You can reach us at zoosl@slt.lk or call us at 011-2712751</p>
      </section>
      {/* Contact Us Section End */}

    </div>
  );
}

export default Homepage;

