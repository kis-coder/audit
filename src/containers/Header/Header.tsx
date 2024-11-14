import { useNavigate } from 'react-router-dom'
import './Header.scss'

export const Header: React.FC = () => {

const navigate = useNavigate()

    return (
        <div className='Header'>
            <div className="HeaderInfo">TOp menu</div>
            <div className="AuthInfo">
                <span>User_name</span>
                <span>Admin</span>
                <button onClick={() => navigate('/', { replace: false })}>EXIT</button>
            </div>
        </div>
    )
}

