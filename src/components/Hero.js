import React from 'react'
import working from '../assets/images/working.svg'
import '../assets/main.css'

function Hero() {
    return (
        <div>
            <div class="hero">

<div class="hero-text">

  <h1>More than just shorter links</h1>

  <p>Build your brand’s recognition and get detailed insights
    on how your links are performing.</p>

  <a href="#" class="btn-cyan">Get Started</a>

</div>
<div class="hero-image">
  <img src={working} alt="working illustration" />
</div>

</div>
        </div>
    )
}

export default Hero
