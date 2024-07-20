import "../../assets/style/estiloNav.css";
import WrapperHeder from "../molecules/WrapperHeder";

import WrapperWeb from "../molecules/WrapperWeb";

function FormWeb(params) {
    return(
        <>
        <div className="App">
        <WrapperHeder/>
        <main className="App-main">
          <h1> Bienvenido a Adminstracion Roles y Persimos</h1>
        </main>
        </div>

        <WrapperWeb/>
        </>
    )
}
export default FormWeb;