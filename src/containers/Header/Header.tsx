import { useNavigate } from 'react-router-dom'
import './Header.scss'
import { HeaderInfo } from '../HeaderInfo/HeaderInfo'

export const Header: React.FC = () => {

const navigate = useNavigate()

    return (
        <div className='Header'>
           <HeaderInfo/>
           <div className='PageInfo'>

           </div>
            <div className="AuthInfo">
                <span>User_name</span>
                <span>Admin</span>
                <button onClick={() => navigate('/', { replace: false })}>EXIT</button>
            </div>
        </div>
    )
}

