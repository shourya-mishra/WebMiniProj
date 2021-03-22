class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      login :''
    };
    this.clickHandlerBtn1 = this.clickHandlerBtn1.bind(this);
    this.clickHandlerBtn2 = this.clickHandlerBtn2.bind(this);
    this.cardClickHandler = this.cardClickHandler.bind(this);
    this.removeFromCart   = this.removeFromCart.bind(this);
    this.renderItems      = this.renderItems.bind(this);
  }

  clickHandlerBtn1(){
    window.location.replace("addItem.html");
  }

  clickHandlerBtn2(){
    console.log("hello");
    window.location.replace("addProperty.html");
  }

componentDidMount(){
  fetch('php/login_api.php').then((res) =>res.json()).then(response => {
      if(response=="false")
        window.location.assign("login.html");
    });

  fetch('php/mycart_api.php').then((res) =>res.json()).then(response => {
    this.setState({login : response});
  });

}

cardClickHandler(){
console.log();("this is clicked");
}

removeFromCart(sno){
  localStorage.removeItem(sno);
  this.setState({ login: this.state.login }); //this is to rerender the
}

  renderItems(){
    return Object.keys(localStorage).map((item) =>{    //object.keys makes a list of all the indexes of this.state.data array
        let localStorageData = JSON.parse(localStorage[item]); //converts string to JSON object.
      let keys = Object.keys(localStorageData);  //every element of this.state.data is an object. so "keys" store all the keys of those objects

      return <div key={localStorageData[keys[0]]} className="cartItem" onClick={this.cardClickHandler()}>
                {keys.map((i) =>{
                  if(i=='img')
                    { let path = "user_img/"+localStorageData['img'] ;

                      return <img key={localStorageData['img']} src={path} className="productImg"/> ;
                      }

                  if(i!="sno" && i!="img")
                      return  <div key={i} name="id" value={localStorageData[i]} className="card_button">{i} : {localStorageData[i]}</div>;

                  }
                )}
                <button className='button1' onClick={()=>this.removeFromCart(localStorageData[keys[0]])}>Remove from cart</button>
            </div> ;
    });
  }


  render(){
    return (
    <div className="div1">
          <div id="div1_1">
            <div className="card">
              {this.renderItems()}
              </div>
          </div>

          <div className="div1_2" id="div1_2">
            <div id="div1_2_1">
              Address details
                <div className="div_card">
                      <div className="card">Phone Number<input type="text" className="ip"/></div>
                      <div className="card">Full Name<input type="text" className="ip"/></div>
                      <div className="card">Shipping Address<input type="text" className="ip"/></div>
                      <div>
                        <div className="card">State<input type="text" className="ip"/></div>
                        <div className="card">PINCODE<input type="text" className="ip"/></div>
                      </div>
                </div>
            </div>
                <button className="button1">Order</button>
          </div>
      </div>
      );
  }
}

ReactDOM.render(<Card id="aplha"/>,document.getElementById('div1'));
