// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

const HUMIDITY_LIMIT = 70
const TEMPERATURE_LIMIT = 500
/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (  humidityPercentage > HUMIDITY_LIMIT )
    throw new Error('Humidity is too high');
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  console.log(temperature > TEMPERATURE_LIMIT)
  if ( temperature > TEMPERATURE_LIMIT) throw new OverheatingError(temperature)
  if ( temperature === null ) throw new ArgumentError()
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
    try {
    actions.check()
    }
    catch(error){
       if ( error instanceof ArgumentError) actions?.alertDeadSensor()
       else if ( error instanceof OverheatingError) {
        if (error.temperature > 600) actions?.shutdown()
        else actions?.alertOverheating()
       }
       else throw error
    }
}
