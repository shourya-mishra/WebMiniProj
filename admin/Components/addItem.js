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
                if(this.state.data[item]["COLUMN_NAME"]!="sno" && this.state.data[item]["COLUMN_NAME"]!="img")
                      return <input type="text" key={item} name={this.state.data[item]["COLUMN_NAME"]} placeholder={this.state.data[item]["COLUMN_NAME"]}/>;
              });
}


  render(){
    return (
      <div id="div_body">
        {this.renderItemProperty()}
        <input type="file" name="imgfile" id="image"/>

        <div id="div1_1">
        <button id="button1" type="submit">
        Add
        </button>

        </div>
        </div>
      );
  }
}

ReactDOM.render(<Card id="aplha"/>,document.getElementById('addItemForm'));
