import React from "react";


/* Menu.jsx */
class Menu extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
      }
    }
      
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    render(){  
      return(
        <div 
        className="absolute top-0 left-0 h-[this.state.open? '100vh': 0,] w-screen flex flex-col bg-black opacity-90 z-10 color-[#e8eddf]" >
          {
            this.state.open?
              <div className="pt-12">
                {this.props.children}
              </div>:null
          }
        </div>
      )
    }
  }

  export default Menu;