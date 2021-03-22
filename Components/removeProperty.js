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

  fetch('php/getPropertyNames_api.php').then((res) =>res.json()).then(response => {
    this.setState({data : response});
  });

}

clickHandler(item){
  window.location.replace("items.html");
}


renderItemProperty(){
  return Object.keys(this.state.data).map(
    (item) =>{
                if(this.state.data[item]["COLUMN_NAME"]!="sno" && this.state.data[item]["COLUMN_NAME"]!="img")
                      return <span key={item} className="card">
                                <div className="card-content">
                                  <label>
                                  <input type="checkbox" key={item} name={this.state.data[item]["COLUMN_NAME"]}/>
                                  <span>{this.state.data[item]["COLUMN_NAME"]}</span>
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
