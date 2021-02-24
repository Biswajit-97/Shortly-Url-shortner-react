import React from 'react'
import '../assets/main.css'
import recognition from '../assets/images/recognition.svg'
import records from '../assets/images/records.svg'
import customize from '../assets/images/customize.svg'

function Feature() {
    return (
        <div>
            <div class="features">

<div class="features-head">
  <h2>Advanced Statistics</h2>
  <p>Track how your links are performing across the web with our
    advanced statistics dashboard.</p>
</div>

<div class="cards">

  <div class="card">
    <div class="card-image">
      <img src={recognition} alt="icon brand recognition" class="card-image-img" />
    </div>
    <h3>Brand Recognition</h3>
    <p>Boost your brand recognition with each click. Generic links don’t
      mean a thing. Branded links help instil confidence in your content.</p>
  </div>

  <div class="card">
    <div class="card-image">

      <img src={records} alt="icon detailed records" class="card-image-img" />
    </div>
    <h3>Detailed Records</h3>
    <p>Gain insights into who is clicking your links. Knowing when and where
      people engage with your content helps inform better decisions.</p>
  </div>

  <div class="card">
    <div class="card-image">

      <img src={customize} alt="icon fully customizable" class="card-image-img" />
    </div>
    <h3>Fully Customizable</h3>
    <p>Improve brand awareness and content discoverability through customizable
      links, supercharging audience engagement.</p>
  </div>

  <div class="line"></div>

</div>

</div>

<div class="cta">
      <h2>Boost your links today</h2>
      <a href="#" class="btn-cyan">Get Started</a>
  </div>
        </div>
    )
}

export default Feature
