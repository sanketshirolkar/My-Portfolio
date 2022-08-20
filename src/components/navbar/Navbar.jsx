import "./navbar.scss";
import {MdPerson, MdEmail} from "react-icons/md"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper_nav">
            <div className="left_nav">
                <a href="#intro" className="logo">TBD</a>
                <div className="itemContainer_nav">
                    <MdPerson className="icon" />
                    <span>+919538419526</span>
                    
                </div>
                <div className="itemContainer_nav">
                    <MdEmail className="icon" />
                    <span>snktshirolkar@gmail.com</span> 
                </div>
            </div>
            <div className="right_nav">

            </div>
        </div>
    </div>
  )
}

export default Navbar