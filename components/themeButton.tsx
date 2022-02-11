import React from 'react'
import buttonProps from '../typings/ThemeButtonProps'

const ThemeButton: React.FC<buttonProps> = (props) => {
  return (
    <>
      {props.currentTheme == 'dark' ? (
        <button
          className="h-14 bg-transparent hover:bg-gray-500 text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded"
          onClick={props.onClick}
        >
          Light mode ☀️
        </button>
      ) : (
        <button
          className="h-14 bg-transparent hover:bg-gray-200 text-black font-semibold py-2 px-4 border border-white hover:border-transparent rounded"
          onClick={props.onClick}
        >
          Dark mode 🌙
        </button>
      )}
    </>
  )
}

export default ThemeButton
