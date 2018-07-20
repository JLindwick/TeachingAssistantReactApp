import React from "react";
import './QuickCommands.css';

class myForm extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(props);
  }
  render()
  {
    return (

      <div className="quick-wrapper">
          <form className="quick-input-box" onSubmit={this.props.sendChat}>
            <button type="submit" className="">First Macro</button>
            <button type="submit" className="">Second Macro</button>
            <button type="submit" className="">Third Macro</button>
            <button type="submit" className="">Fourth Macro</button>
            <button type="submit" className="">Fifth Macro</button>
            </form>
            <br/>
            <br/>
            <form className="ToggleHelp" onSubmit={this.props.toggle}>
              <button onClick={ () => this.handleClick() }>Toggle things</button>
          </form>
      </div>

    )
  }
}

export default myForm;
