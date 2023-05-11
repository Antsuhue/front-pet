import "../css/Menu.css"
import { BrowserRouter as Router, Link } from "react-router-dom";

function Menu() {

    let array = ["Sobre nós", "Adoção", "Voluntariado", "Contato"]
    let arrRef = ["aboutUs", "adopt", "volunteering", "contact"]
    let items = []
    let index = 0

    array.forEach(element => {

        switch (index) {
            case 0:
                items.push(<li key={index} className="fistItem" ><Link className="itemName" to={"#"+arrRef[index]}>{element}</Link></li>)
                break
            case array.length - 1:
                items.push(<li key={index} className="lastItem"><Link className="itemName" to={"#"+arrRef[index]}>{element}</Link></li>)
                break;
            default:
                items.push(<li key={index} ><Link className="itemName" to={"#"+arrRef[index]}>{element}</Link></li>)
                break;
        }

        // if(index === 0){
        //     items.push(<li className="fistItem" ><Link key={index} className="itemName" to="login">teset</Link></li>)
        // }
        // else if(index === array.length-1){
        //     items.push(<li className="lastItem"><Link key={index} className="itemName" to="l">Login2</Link></li>)
        // }
        // else{
        //     items.push(<li ><Link className="itemName" key={index} to="login">Login</Link></li>)
        // }
        index = index + 1
    });

    return (
        <Router>
            <nav className='menuContainer'>
                <ul className="menu">
                    {items}
                </ul>
            </nav>
        </Router>
    )
}

export default Menu