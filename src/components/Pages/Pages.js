import React from 'react'
import Card1 from '../Card1/Card1';
import ProductCard from '../ProductCard/ProductCard';
import './PagesCss.css';

function Pages() {
  return (
    <div>
        <section className='banner-section-one'>
          <div className="decsc">
              <h1 className="heading">
                EXPLORE <span>YOUR STYLE</span>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim impedit, explicabo pariatur minus eveniet excepturi?</p>
              <button>
                SHOP NOW
              </button>
          </div>
          <div className="hero-main-img">
          </div>
        </section>

        <section className='section2'>

          <div className="desc2">
            <h4>featured Categories</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quasi id sequi cum quae dolorem provident eveniet nemo dicta blanditiis!</p>  
          </div>  

          <div className="slider">
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
          </div>

        </section>

        <hr style={{margin:' 0 10%'}} />

        <section className='section3-trendy'>

        </section>

        <section className='section4-season'>

          <div className='sec4-container'>
              <div className='sec4-header'>
                <h1>New In this Season</h1>
                <p>Visit our shop to see more fashion</p>
              </div>

                <div className='photo-container'>
                  {/* <div className='photo-cards'>

                  </div>
                  <div className='photo-des'>

                  </div>

                  <div className='photo-cards'>

                  </div>
                  <div className='photo-des'>

                  </div> */}

                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
                <div className='sec4-logo'>

                </div>

          </div>

        </section >


    </div>
  )
}

export default Pages