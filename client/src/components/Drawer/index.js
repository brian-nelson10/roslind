import React from "react"
import {Link} from "react-router-dom"
import MenuItem from "./MenuItem";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

class Drawer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
    }
  }
  
  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }
  
  handleLinkClick() {
    this.setState({menuOpen: false});
  }
  
  render(){
    const styles= 
      {
        body: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          height: '1vh',
          filter: this.state.menuOpen ? 'blur(2px)':null,
          transition: 'filter 2.5s ease',
        },
        bodycontent:{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          paddingTop: '3rem',
        }
      }
    const menu = ['Home', 'Projects','Our Products','Services','Contact Us']

    const menuItems = menu.map((val,index)=>{
      return (
        <Link   to={`/${val}`}>
          <MenuItem style={styles.menuItem}
          key={index} 
          delay={`${index * 1.2}s`}
          onClick={()=>{this.handleLinkClick();}}>
            <span>{val}</span>
          </MenuItem>
        </Link>
        )
    });
    
    return(
      <div>
        <div className="relative top-0 left-0 z-50 opacity-90 flex items-end w-full color-white" >
          <MenuButton className="hover:cursor-pointer" open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
          <Link to="/Home">
            <MenuItem style={styles.menuItem}> 
            

          {/* add menu routes */}


            </MenuItem>
          </Link>
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
      </div>
    )
  }
}
export default Drawer;