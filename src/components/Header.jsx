import HeaderAdmin from "./HeaderAdmin";
import HeaderReg from "./HeaderReg";

function Header() {
    let sesion = sessionStorage.getItem('Sesion');
    let sesionObj = JSON.parse(sesion);

    // console.log(sesionObj.codigo);

    if (sesionObj.codigo == 1) {
        // console.log('admin')
        return (
            <HeaderAdmin />
        )
    } else {
        // console.log('reg')
        return (
            <HeaderReg />
        )
    } 
}

export default Header