import img from '../../img/logo(1).png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo"><img src={img} alt="logo" /></div>
        <div className="buttons">
            <button className="btn-1">HOROSCOPE</button>
            <button className="btn-1">DAILY</button>
            <button className="btn-1">TAROT</button>
            <button className="btn-1"> ARTICLE</button>
            <button className="btn-1">CONTACT</button>
        </div>
        
    </div>
  )
}

export default Navbar