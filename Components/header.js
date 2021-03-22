class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div >
        <nav>
   <div className="nav-wrapper pink accent-3">
     <a href="./dashboard.html" className="brand-logo">myStore</a>
     <a href="#" data-target="dropdownContent" className="sidenav-trigger"><i className="material-icons">menu</i></a>
     <ul className="right hide-on-med-and-down">
       <li><a href="php/logout.php"><b>Logout</b></a></li>
     </ul>
   </div>
  </nav>

            {/*  <img className="userimg" src="img/user.jpg"/> */}

     </div>
  );
  }
};

ReactDOM.render(<Header/>, document.getElementById('header'));
