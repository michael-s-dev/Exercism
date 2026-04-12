export class SplitSecondStopwatch {
  constructor() {
    this.currentState = 'ready'
    this.laps = []
    this.lapsCount = this.laps.length
    this.time = '00:00:00'
  }

  get state() {
    return this.currentState
  }

  get currentLap() {
    return this.time
  }

  get total() {
    let lapsAndCurrentTime = [...this.laps, this.time]
    return lapsAndCurrentTime.reduce( (acc,lap) => {
      return this.addTimes(acc,lap)
    }, '00:00:00')
  }

  get previousLaps() {
   return this.laps
  }

  start() {
    if( this.state === 'running' ) throw new Error('cannot start an already running stopwatch')
    this.currentState = 'running'
  }

  stop() {
    if( this.state !== 'running' ) throw new Error('cannot stop a stopwatch that is not running')
   this.currentState = 'stopped'
  }

  lap() {
    if( this.state !== 'running') throw new Error('cannot lap a stopwatch that is not running')
    this.laps.push(this.time)
    this.time = '00:00:00'
  }

  reset() {
    if ( this.state !== 'stopped') throw new Error('cannot reset a stopwatch that is not stopped')
    this.time = '00:00:00'
    this.currentState = 'ready'
    this.laps = []
  }

  advanceTime(duration) {
    if( this.currentState !== 'running') return
    let newTime = this.addTimes(this.time, duration)   
    this.time = newTime
  }

  addTimes(t,t2){
    let rest = 0
    let newTime = ''
    let max = 6
    for (let i = t.length - 1; i >= 0 ; i--) {
      let num = t[i];
      if( num === ':') newTime = num + newTime
      else {
        max = max === 10 ? 6 : 10
        let newNum = parseInt(num) + parseInt(t2[i]) + rest
        if ( newNum >= max) {
          newNum = newNum % max
          rest = 1
        }
        else rest = 0
        newTime = newNum + newTime
      }
    }
    return newTime
  }
}
