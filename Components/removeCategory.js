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

  fetch('php/getCategoryNames_api.php').then((res) =>res.json()).then(response => {
    console.log(response);
    this.setState({data : response});

  });

}

clickHandler(item){
  window.location.replace("items.html");
}


renderItemProperty(){
  return Object.keys(this.state.data).map(
    (item) =>{
                if(this.state.data[item]["category"]!="sno" && this.state.data[item]["category"]!="img")
                      return <span key={item} className="card">
                                <div className="card-content">
                                  <label>
                                  <input type="checkbox" key={item} name={this.state.data[item]["category"]}/>
                                  <span>{this.state.data[item]["category"]}</span>
                                  </label>
                                  <br/>
                                </div>
                             </span> ;
              });
}


  render(){
    return (
      <div id="div_body" >
        {this.renderItemProperty()}

        <button id="button1" type="submit" className="btn red">Remove</button>


        </div>
      );
  }
}

ReactDOM.render(<Card id="aplha"/>,document.getElementById('addItemForm'));
