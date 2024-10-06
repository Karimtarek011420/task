import './Home-Styles.css'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
    return (
        <div className="search">
            <input type="text" name="" id=""
                placeholder='Search Keyword'
            />
            <FaMagnifyingGlass />
        </div>
    )
}
