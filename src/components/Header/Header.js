import React from 'react';
import '../Header/HeaderCss.css';
import logo from '../../images/mainicon.jpg';
import cart from '../../images/carticon.png';
import like from '../../images/like.png';


function Header() {
  return (

    <React.Fragment>

            <div className='headcontainer'>
                <div className='menuicon' >
                    <a href='#' >
                        <div className='HamMenu'>
                        
                            <div className='bar1'></div>
                            <div className='bar2'></div>
                            <div className='bar3'></div>

                        </div>
                    </a>

                </div>
                <div className='logo' >
                    <h2>Logo</h2>
                </div>

                <div className="like-cart-wrapper">
                    <div className='like' >
                        <img src={like} alt="Cart Icon Image" className='likeimg'  style={{width:30,height:30}}/>                
                    </div>
                    <div className='cart' >
                        <img src={cart} alt="Cart Icon Image" className='cartimg'  style={{width:40,height:40}}/>
                    </div>
                </div>
            </div>
    </React.Fragment>


  )
}

export default Header