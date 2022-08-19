import "./navbar.scss";
import {MdPerson, MdEmail} from "react-icons/md"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Hey.</a>
                <div className="itemContainer">
                    <MdPerson className="icon" />
                    <span>+919538419526</span>
                    
                </div>
                <div className="itemContainer">
                    <MdEmail className="icon" />
                    <span>snktshirolkar@gmail.com</span> 
                </div>
            </div>
            <div className="right">

            </div>
        </div>
    </div>
  )
}

export default Navbar