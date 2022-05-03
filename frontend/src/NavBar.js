import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav>       
                <div className="Logo">
                    <img className ="Logo" src="Tremlogo.png"width="170" height="120"alt=""></img>
                </div>
                <div className = "textlinks">       
                    <ul className = "links">
                        <Link to= "/Home">
                            <button><a href="#" >Home</a></button>
                        </Link>
                        <Link to= "/Map">
                            <button><a href="#">Map</a></button>
                        </Link>
                        <Link to= "/About">
                            <button><a href="#">About</a></button>
                        </Link>
                        <Link to= "/Contribute">
                            <button><a href="#">Contribute</a></button>  
                        </Link>               
                    </ul>    
                <div className="Bilingual">
                    <button><a href="#" >EN</a></button>
                    <button><a href="#" >ES</a></button>
                </div>             
              
                </div>
            </nav>
        </div>
    )
}
export default NavBar;