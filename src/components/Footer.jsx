import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className='section bg-dark text-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center wow fadeInUp'>
            <p className='mb-2 mb-lg-0'>
              © 2021{' '}
              <a className='fw-600' href='#'>
                Bryan Nguyen
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
