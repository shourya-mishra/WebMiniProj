class Login extends React.Component{
constructor(props){
  super(props);

  this.raiseInvoiceClicked = this.raiseInvoiceClicked.bind(this);
      }

      raiseInvoiceClicked(){
    const url = 'somesite.com?data=yourDataToSend';
    window.open("./signup.html", '_blank');
}

      render(){
        return(
              <div id="div1">
                <input id="ip1" type="text" placeholder="Username"/>
                <input id="ip2" type="password" placeholder="Password"/>
                <div id="div1_1">
                <button id="button1">Login</button>
                <button id="button2" onClick={this.raiseInvoiceClicked}>Sign Up</button>
                </div>
              </div>
    );
      }
    };

    ReactDOM.render(<Login/>, document.getElementById('main'));
