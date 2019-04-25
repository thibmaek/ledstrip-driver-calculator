import React from "react"

class CalculateWatts extends React.Component {
    constructor(props) {
      super(props);
      this.state = { watt: '' };
  
      this.handleSetLength = this.handleSetLength.bind(this);
      this.handleSetNumberOfLedsPerMeter = this.handleSetNumberOfLedsPerMeter.bind(this);
      this.handleSetMaximumPowerDrawPerLed = this.handleSetMaximumPowerDrawPerLed.bind(this);
    }
  
    handleSetLength(event) {
      this.setState({ length: event.target.value })
    }
  
    handleSetNumberOfLedsPerMeter(event) {
      this.setState({ numberOfLedsPerMeter: event.target.value });
    }
  
    handleSetMaximumPowerDrawPerLed(event) {
      this.setState({ maximumPowerDrawPerLed: event.target.value });
    }
  
    get wattRequired() {
      return this.state.length * this.state.numberOfLedsPerMeter * this.state.maximumPowerDrawPerLed;
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>
                How long is your ledstrip: 
                <input type="numeric" name="length" onChange={this.handleSetLength} />
              </label>
            </p>
            <p>
              <label>
                How many leds per meter:
                <input type="numeric" name="numberOfLedsPerMeter" onChange={this.handleSetNumberOfLedsPerMeter} />
              </label>
            </p>
            <p>
              <label>
                Maximum power draw per led:
                <input type="numeric" name="maximumPowerDrawPerLed" onChange={this.handleSetMaximumPowerDrawPerLed} />
              </label>
            </p>
          </form>
  
          <p>You need: {this.wattRequired} watt.</p>
        </div>
      );
    }
  }

  export default CalculateWatts
