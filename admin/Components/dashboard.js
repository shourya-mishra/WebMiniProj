class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:''
    };
this.clickHandler = this.clickHandler.bind(this);
  }

componentDidMount(){
  fetch('php/login_api.php').then((res) =>res.json()).then(response => {
      if(response=="false")
        window.location.assign("login.html");
    });
    
  fetch('php/dashboard_api.php').then((res) =>res.json()).then(response => {
    this.setState({data : response});
  });



}

clickHandler(item){
  window.location.replace("../addCategory.html");
}

  renderItems(){

    return Object.keys(this.state.data).map((item) =>{    //object.keys mkes a list of all the indexes of this.state.data array

      let keys = Object.keys(this.state.data[item]);  //every element of this.state.data is an object. so "keys" store all the keys of those objects
      return <form key={this.state.data[item][keys[0]]} method="POST" action="php/setCategory.php" className="card">
                {keys.map((i) =>(<button key={i} name="category" value={this.state.data[item][i]} className="card_button">{this.state.data[item][i]}</button>))}
            </form> ;
    });
  }


  render(){
    return (
      <div id="div_body">
        <div id="div1_1">
        {this.renderItems()}
        </div>

   			<div id="div1_2">
  				<button className="button1" onClick={this.clickHandler}>Add category</button>
   			</div>
      </div>
      );
  }
}

ReactDOM.render(<Card id="aplha"/>,document.getElementById('div1'));
