import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
class MenuItem extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        hover:false,
      }
    }
    
    handleHover(){
      this.setState({hover:!this.state.hover});
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
      return(
        <AnimatePresence>
        <div className="opacity-100">
          <motion.div 
          variants={child}
          initial="hidden"
          animate="visible"
            className="font-maragsa text-xlxl cursor-pointer text-white hover:text-[#fcbf49]"
            onMouseEnter={()=>{this.handleHover();}} 
            onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}
          >
            {this.props.children}  
          </motion.div>
      </div>  
      </AnimatePresence>
      )
    }
  }

  export default MenuItem;