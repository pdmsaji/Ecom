import React from 'react';
import '../Footer/FooterCss.css';
import  ReactDOM  from 'react-dom';


function Footer() {
  return (
    <>

   
    <section>

      <div className='foot-container' >
              <div className='foot-header-container' >
                      <div className='foot-logo'>
                          <h1>logo</h1>
                      </div>

                      <div className='social-container'>
                        <div className="social-links">
                          <div>
                            <h5>follw us</h5>
                          </div>
                          <div className='icons-container'>
                              <div className='insta social-logo'>
                                <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" alt="instagram-icon" />

                              </div>

                              <div className='twitter social-logo'>
                              <img src="http://assets.stickpng.com/images/58e9196deb97430e819064f6.png" alt="twitter-icon" />

                              </div>

                              <div className='facebook social-logo'>
                              <img src="http://assets.stickpng.com/thumbs/58e91965eb97430e819064f5.png  " alt="facebook-icon" />

                              </div>
                          </div>
                        </div>
                                

                      </div>


              </div>

              <div className='footer-body-container'>
                  <div className='list-packet'>
                        <div className='footer-list1'>
                          <h2> Products</h2>
                              <ul className='list1'>
                                  <li>Price Drop</li>
                                  <li>Best Sale</li>
                                  <li>New Product</li>
                                  <li>New Season</li>
                                  <li>New Arrival</li>                                                  
                              </ul>

                        </div>

                        <div className='footer-list2'>
                        <h2> About us </h2>

                              <ul className='list2'>
                                  <li>Price Drop</li>
                                  <li>Best Sale</li>
                                  <li>New Product</li>
                                  <li>New Season</li>
                                  <li>New Arrival</li>                                                             
                                
                              </ul>

                          
                        </div>

                        <div className='footer-list3'>
                        <h2> Informations </h2>

                              <ul className='list3'>
                                  <li>Price Drop</li>
                                  <li>Best Sale</li>
                                  <li>New Product</li>                                 
                              </ul>
                          
                        </div>



                  </div>

              </div>

              <div className='footer-note'>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Rerum minus veritatis iste voluptatum dignissimos nam itaque et accusantium corporis. 
                    Sint repellendus facilis animi tenetur aliquid illo dolor veniam laboriosam et.
                  </p>

              </div>

      </div>

    </section>


    </>
  )
}

export default Footer