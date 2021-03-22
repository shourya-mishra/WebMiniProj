class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:''
    };

  }

componentDidMount(){
  fetch('php/login_api.php').then((res) =>res.json()).then(response => {
      if(response=="false")
        window.location.assign("login.html");
    });
    
  fetch('php/api.php').then((res) =>res.json()).then(response => {
    this.setState({data : response});
  });

}



  renderItems(){
    return Object.keys(this.state.data).map((item) =>{    //object.keys mkes a list of all the indexes of this.state.data array

      let keys = Object.keys(this.state.data[item]);  //every element of this.state.data is an object. so "keys" store all the keys of those objects
      return <div key={this.state.data[item][keys[0]]} className="card">
                {keys.map((i) =>(<div key={i}>{this.state.data[item][i]}</div>))}
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
  				<button className="button1">Add Item</button>
          <button className="button1">Add property</button>
   			</div>
      </div>
      );
  }
}

ReactDOM.render(<Card id="aplha"/>,document.getElementById('div1'));
