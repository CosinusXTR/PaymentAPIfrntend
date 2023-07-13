import React from 'react'

const Footer = () => {
  return (
    <div className='containerFooter'>
          <div className='Footermenu'>
            <div className = 'col1'>
              <ul className='footermenulist'>
                <li>
                    <img src='Components\header\elektraweblogo.png' alt='ElektraWEB logo'/>
                </li>
                <li>
                  <p className='fmenutxt'>Nasıl Çalışır</p>
                </li>

              </ul>              
            </div>
            <div className = 'col2'>
              <ul className='footermenulist'>
                <li>
                  <p className='fmenutxt'>Nasıl Çalışır</p>
                </li>
                <li>
                  <p className='fmenutxt'>Hakkımızda</p>
                </li>
                <li>
                  <p className='fmenutxt'>İstatistikler</p>
                </li>
              </ul> 
            </div>
            <div className = 'col3'>
              <ul className='footermenulist'>
                  <li>
                    <p className='fmenutxt'>Nasıl Çalışır</p>
                  </li>
                  <li>
                    <p className='fmenutxt'>Hakkımızda</p>
                  </li>
                  <li>
                    <p className='fmenutxt'>İstatistikler</p>
                  </li>
                </ul> 
            </div>
          </div>
    </div>
  )
}

export default Footer