import React, { memo } from 'react'

const Header = ({ logo, setting = false, route }) => {
  console.log("logo", logo, setting = false, route);
  return (
    <section>
      <div className='header pb-4 pt-4' >
        <img alt="logo" className="navbar-brand-img" src={logo} />
      </div>
    </section>
  )
}

export default memo(Header)