import React from 'react'
import buttonProps from '../typings/ButtonProps'

const ThemeButton = (props: buttonProps) => {
  return (
    <>
      <button className="themeButton">{props.name}</button>
    </>
  )
}

export default ThemeButton
