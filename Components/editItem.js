class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:''
    };
    this.parseURLParams = this.parseURLParams.bind(this);
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

  this.parseURLParams();
}

parseURLParams() {
  var url = window.location.href;
    var queryStart = url.indexOf("=") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1);
        this.setState({sno : parseInt(query)});
}

renderItemProperty(){
  return Object.keys(this.state.data).map(
    (item) =>{
                if(this.state.data[item]["COLUMN_NAME"]!="sno" && this.state.data[item]["COLUMN_NAME"]!="img")
                      return <div className="input-field">
                      <input type="text" key={item} name={this.state.data[item]["COLUMN_NAME"]} id={this.state.data[item]["COLUMN_NAME"]}/>
                      <label className="active white-text" htmlFor={this.state.data[item]["COLUMN_NAME"]}>{this.state.data[item]["COLUMN_NAME"]}</label>
                      </div>;
              });
}


  render(){
    return (
      <div id="div_body">
      <span className="card">
       <input type="hidden" key='sno' name="sno" id="sno" value={this.state.sno} />

        {this.renderItemProperty()}
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
              <input type="file" name="imgfile" id="image" className="btn"/>
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text"/>
          </div>
        </div>
        </span>
        <br/>
        <button id="button1" type="submit" className="btn">Edit</button>
        <a href='./items.html' className="btn right">Cancel</a>

        </div>
      );
  }
}

ReactDOM.render(<Card id="aplha"/>,document.getElementById('addItemForm'));
