import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="p-12">
          <span className="gradient typing p-8 font-semibold text-4xl" data-aos="fade-down"></span>
          <span className="scrolldown">
            <span></span>
          </span>
        </div>
      </>
    )
  }
}

export default Header
