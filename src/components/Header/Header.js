import Logo from '../../assets/Logo/BrainFlix-logo.svg'
import UploadIcon from '../../assets/Icons/upload.svg'
import User from '../../assets/Images/Mohan-muruge.jpg'
import "./Header.scss";

function Header() {
    return (
        <>
            <header className="header">
                <img className="header__logo " src={Logo} alt="BrainFlix-logo"/>
                <form className="header__search-form ">
                    <button className="header__search-icon" type="submit">Search</button>
                    <input className="header__search-entry" type="text" placeholder="Search..." name="search"/>
                </form>
                <button className="header__upload-button " type="file">
                    <img className="header__upload-icon" src={UploadIcon}></img>
                    <p className="header__upload-text">UPLOAD</p>
                </button>
                <img className="header__user-avatar " src={User} alt="userAvatar"/>
            </header>
        </>
    );
}
export default Header;
