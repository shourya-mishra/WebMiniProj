class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:''
    };
    this.clickHandlerBtn1 = this.clickHandlerBtn1.bind(this);
    this.clickHandlerBtn2 = this.clickHandlerBtn2.bind(this);
    this.cardClickHandler = this.cardClickHandler.bind(this);
    this.addToCart        = this.addToCart.bind(this);
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
    
  fetch('php/items_api.php').then((res) =>res.json()).then(response => {
    this.setState({data : response});
  });

}

cardClickHandler(){
console.log();("this is clicked");
}

addToCart(sno,item){
  console.log(sno,item);
  localStorage.setItem(sno,JSON.stringify(item)); //changing json to string as localStorage can only store strings.
}

  renderItems(){


    return Object.keys(this.state.data).map((item) =>{    //object.keys makes a list of all the indexes of this.state.data array

      let keys = Object.keys(this.state.data[item]);  //every element of this.state.data is an object. so "keys" store all the keys of those objects
      return <div key={this.state.data[item][keys[0]]} className="card" onClick={this.cardClickHandler(this.state.data[item][keys[0]])}>
                {keys.map((i) =>{
                  if(i=='img')
                    { let path = "user_img/"+this.state.data[item]['img'] ;
                      console.log(this.state.data[item]);
                      return <img key={this.state.data[item]['img']} src={path} className="productImg"/> ;
                      }

                  if(i!="sno" && i!="img")
                      return  <div key={i} name="id" value={this.state.data[item][i]} className="card_button">{i} : {this.state.data[item][i]}</div>;

                  }
                )}
                <button className='button1' onClick={()=>this.addToCart(this.state.data[item][keys[0]],this.state.data[item])}>Add to cart</button>
            </div> ;
    });
  }


  render(){
    return (
      <div id="div_body">
        <div id="div1_1">
        {this.renderItems()}
        </div>

   			<div id="div1_2">
  				<button className="button1" onClick={this.clickHandlerBtn1}>Add Item</button>
          <button className="button1" onClick={this.clickHandlerBtn2}>Add property</button>
   			</div>
      </div>
      );
  }
}

ReactDOM.render(<Card id="aplha"/>,document.getElementById('div1'));
