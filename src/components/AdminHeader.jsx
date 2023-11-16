import {  useNavigate } from "react-router-dom"
import {FaSignOutAlt} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { logout } from '../features/admin/adminSlice'
import BackButton from "./BackButton"

function AdminHeader() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        navigate('/')
    }
    return(
        <header className='header'style={{marginBottom:'0px'}}>
        <BackButton url='/'/>
        <ul>
            <li>
                <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
                </button>
            </li>
        </ul>
        </header>
    )
}

export default AdminHeader