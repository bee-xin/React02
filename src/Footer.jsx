/* eslint-disable react/prop-types */
import "./footer.css"
function Footer({setContent}) {
  return (
    <footer>
        <ul className="foot">
            <li onClick={()=> setContent("Copyright")}>Copyright</li>
            <li onClick={()=> setContent("Terms")}>Terms and condition</li>
            <li onClick={()=> setContent("Maap")}>Map</li>
        </ul>
    </footer>
  )
}

export default Footer