class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:''
    };

    this.cardClickHandler = this.cardClickHandler.bind(this);
    this.addToCart        = this.addToCart.bind(this);
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
  localStorage.setItem(sno,JSON.stringify(item)); //changing json to string as localStorage can only store strings.
}


  renderItems(){


    return Object.keys(this.state.data).map((item) =>{    //object.keys makes a list of all the indexes of this.state.data array

      let keys = Object.keys(this.state.data[item]);  //every element of this.state.data is an object. so "keys" store all the keys of those objects
      return <div className="col s4">
                  <div key={this.state.data[item][keys[0]]} className="card" onClick={this.cardClickHandler(this.state.data[item][keys[0]])}>
                  {keys.map((i) =>{
                    if(i=='img')
                      { let path = "user_img/"+this.state.data[item]['img'] ;

                        return <div className="card-image" key={this.state.data[item]['img']}>
                          <img key={this.state.data[item]['img']} src={path} className="productImg" height="200px"/>
                          </div> ;
                        }

                    if(i!="sno" && i!="img")
                        return  <div className="card-content" key={i} name="id" value={this.state.data[item][i]}>{i} : {this.state.data[item][i]}
                          </div>;

                    }
                  )}
                <form method='POST' action="php/removeItem.php">
                  <button className='btn-floating waves-effect waves-light halfway-fab' name='remove' value={this.state.data[item][keys[0]]}><i className="material-icons">clear</i></button>
                </form>
                <form method='POST' action="php/goToEditItemPage.php">
                  <button className='btn-floating halfway-fab waves-effect waves-light' name='edit' value={this.state.data[item][keys[0]]} style={{right: 5 + 'em'}}><i className="material-icons">edit</i></button>
                </form>
                </div>
              </div> ;
    });
  }

  render(){
    return (
      <div id="div_body" className="container">

          <div id="div1_1" className="row">

              {this.renderItems()}
          </div>
      </div>
      );
  }
}

ReactDOM.render(<Card id="aplha"/>,document.getElementById('div1'));
