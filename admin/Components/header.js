class Header extends React.Component{
  constructor(props){
    super(props);
    this.openNav=this.openNav.bind(this);
    this.closeNav=this.closeNav.bind(this);
    this.goToCart=this.goToCart.bind(this);
  }
 openNav() {
    document.getElementById("mySidebar").style.width = "25rem";
    /*document.getElementById("main").style.marginLeft = "250px";*/
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("openbtn").style.backgroundImage= "whitesmoke";
  }

  goToCart(){
    window.location.replace('mycart.html');
  }

  render(){
    return (<div className="navbar">
        <div id="mySidebar" className="sidebar">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
          <a href="./dashboard.html">Dashboard</a>
          <a href="#">Customers</a>
          <a href="#">Products</a>
          <a href="#">Orders</a>
        </div>

        <div id="main" className="sidebardiv">
          <button id="openbtn" className="openbtn" onClick={this.openNav}><i className="icofont-navigation-menu"></i></button>
        </div>

        <div className="header_div1">
            {/*  <img className="userimg" src="img/user.jpg"/> */}
            <i className="fas fa-shopping-cart userimg" onClick={this.goToCart}></i>
        </div>
    </div>);
  }
};

ReactDOM.render(<Header/>, document.getElementById('header'));
