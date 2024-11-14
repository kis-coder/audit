import { useNavigate } from 'react-router-dom'

import './Button.scss'
import { ButtonProps } from '../../type'

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    const navigate = useNavigate()

    return (
        <div className='NavButton' onClick={()=>navigate(props.routeTo ?? '/')} data-type={props.type}>
            <span>{props.text}</span>
        </div>
    )
}