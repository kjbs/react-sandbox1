//  TODO: Create a React component which does shit.  
//  2 types of React components are methods and classes.
//  Hell, I don't even know if it will run on GitHub without having the React library somewhere in my repository.

class BadassReactCounterButton extends React.Component {
  
  constructor( props )
  {
    super(props):
  }
  
  state = { count: 0 };
  
  onClickMFer = () => {
    this.setState ( {count: this.state.count + 1} );
  };
  
  render() {
    return( <button onClick={this.onClickMFer}> Current = {this.state.count}</button> );
  }
}

// IDK if this shit will work. This is what I saw on jscomplete from some tutorial.
ReactDOM.render( <BadassReactCounterButton />, mountNodes );
