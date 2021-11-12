import React from 'react'

type Props = {
  time: Date
}

class Clock extends React.Component<{}, Props> {
  constructor(props: Props) {
    super(props)

    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    setInterval(this.update, 1000)
  }

  update = () => {
    this.setState({
      time: new Date()
    })
  }

  render() {
    const h = this.state.time.getHours()
    const m = this.state.time.getMinutes()
    const s = this.state.time.getSeconds()

    return (
      <>
        <div className="gradient2 flex justify-center text-6xl p-5">
          {h < 5 ? 'Good Evening 🌙' : h < 12 ? 'Good Morning 🌤' : h < 18 ? 'Good Afternoon 🌥' : 'Good Evening 🌙'}
        </div>
        <div className="flex justify-center text-6xl p-2">
          <div className="text-4xl font-mono">
            {h < 10 ? `0${h % 12}` : h % 12}:{m < 10 ? '0' + m : m}:{s < 10 ? '0' + s : s}{' '}
            {h < 12 ? 'AM' : 'PM'}
          </div>
        </div>
      </>
    )
  }
}

export default Clock
