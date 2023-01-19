import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';



/* MenuButton.jsx */
class MenuButton extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
        color: this.props.color? this.props.color:'black',
      }
    }
  
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    handleClick(){
    this.setState({open:!this.state.open});
    }
    
    render(){
    
      
      const child = {
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: .5,
            duration: 2,
          },
        },
        hidden: {
          opacity: 0,
          x: 0,
          y: -50,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 2,
            timing: [2, 1, 1, 1]        
          },
        },
      };
      const child2 = {
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: .75,
            duration: 2,
          },
        },
        hidden: {
          opacity: 0,
          x: 0,
          y: -50,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 2,
            timing: [2, 1, 1, 1]        
          },
        },
      };
      const child3 = {
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: 1,
            duration: 2,
          },
        },
        hidden: {
          opacity: 0,
          x: 0,
          y: -50,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 2,
            timing: [2, 1, 1, 1]        
          },
        },
      };
      const styles = {
        
        line: {
          height: this.state.open ? '2px':'4px',
          width: this.state.open ? '20px':'30px',
          background: this.state.open ? 'white':'black',
          transition: 'all .9s ease',
        },
        lineTop: {
          transform: this.state.open ? 'rotate(45deg)':'none',
          transformOrigin: 'top left',
          marginBottom: '5px',
          width: this.state.open ? '20px':'30px'
          
        },
        lineMiddle: {
          opacity: this.state.open ? 0: 1,
          transform: this.state.open ? 'translateX(-16px)':'none',
          width: this.state.open ? '20px':'30px'
        },
        lineBottom: {
          transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
          transformOrigin: 'top left',
          marginTop: '5px',
          width: this.state.open ? '20px':'30px'
        },       
      }
      return(
        <AnimatePresence>
        <div  
          className="hover:cursor-pointer "
          onClick={this.props.onClick ? this.props.onClick: 
            ()=> {this.handleClick();}}>

          <motion.div 
          variants={child3} 
          initial="hidden"
          animate="visible">
          <div style={{...styles.line,...styles.lineTop}}/>
          </motion.div>
          <motion.div 
          variants={child2} 
          initial="hidden"
          animate="visible">
          <div style={{...styles.line,...styles.lineMiddle}}/>
          </motion.div>
          <motion.div 
          variants={child} 
          initial="hidden"
          animate="visible">
          <div style={{...styles.line,...styles.lineBottom}}/>
          </motion.div>
        </div>
        </AnimatePresence>
      )
    }
  }

  export default MenuButton;