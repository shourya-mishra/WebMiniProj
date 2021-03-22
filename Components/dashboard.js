class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:''
    };
this.clickHandler = this.clickHandler.bind(this);
this.clickHandler2 = this.clickHandler2.bind(this);
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
  window.location.replace("addCategory.html");
}

clickHandler2(){
  window.location.replace("removeCategory.html")
}

  renderItems(){
    return Object.keys(this.state.data).map((item) =>{    //object.keys mkes a list of all the indexes of this.state.data array

      let keys = Object.keys(this.state.data[item]);  //every element of this.state.data is an object. so "keys" store all the keys of those objects
      return <form className="col s3" key={this.state.data[item][keys[0]]} method="POST" action="php/setCategory.php" >
                    {keys.map((i) =>(
                      <div  className="card-panel center">
                        <button key={i} name="category" value={this.state.data[item][i]} className="btn blue btn-large waves-effect waves-light">{this.state.data[item][i]}</button>
                      </div>
                    ))}
            </form>;
    });
  }

  render(){
    return (
      <div id="div_body" className="container">
        <div  className="row">
            {this.renderItems()}
        </div>
   			<div id="div1_2">
  				<button className="btn waves-effect waves-light" onClick={this.clickHandler}>Add category</button>
          <br/>
          <br/>
   			</div>
      </div>
      );
  }
}

ReactDOM.render(<Card id="aplha"/>,document.getElementById('div1'));
