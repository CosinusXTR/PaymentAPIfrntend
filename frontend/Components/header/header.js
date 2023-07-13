import React from 'react'
import './styles.css'
const Header = () => {
  return (
    <div className='containerHeader'>
          <div className='Logo'>
            <h1 className='logoTxt'>Electra Payment</h1>
          </div>
          <div className='headermenu'>
            <ul className='headermenulist'>
              <li className='headermenulistitem'>
                <a href='' target= '_blank' className='menutxt'> Nasıl Çalışır? </a>
              </li>
              <li className='headermenulistitem'>
                <a href='' target= '_blank' className='menutxt'> Hakkımızda </a>
              </li>
              <li className='headermenulistitem'>
                <a href='' target= '_blank' className='menutxt'>İstatistikler</a>
              </li>
            </ul>
          </div>
      </div>
  )
}

export default Header