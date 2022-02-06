import React from 'react'

type Props = {
  time: Date
}

const Clock = () => {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

  const h = time.getHours()
  const m = time.getMinutes()
  const s = time.getSeconds()

  return (
    <>
      <div className="flex justify-center text-6xl p-5">
        {h < 5 ? (
          <span>
            <span className="gradient2">Good Evening</span> 🌙
          </span>
        ) : h < 12 ? (
          <span>
            <span className="gradient2">Good Morning</span> 🌤
          </span>
        ) : h < 18 ? (
          <span>
            <span className="gradient2">Good Afternoon</span> 🌥
          </span>
        ) : (
          <span>
            <span className="gradient2">Good Evening</span> 🌙
          </span>
        )}
      </div>
      <div className="flex justify-center text-6xl p-2">
        <div className="text-4xl font-mono">
          {h < 10 ? '0' + (h % 12) : h % 12}:{m < 10 ? '0' + m : m}:{s < 10 ? '0' + s : s}{' '}
          {h < 12 ? 'AM' : 'PM'}
        </div>
      </div>
    </>
  )
}

export default Clock
