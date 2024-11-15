import { Navigate, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { CheckBox } from '../../components/CheckBox/CheckBox'
import { Input } from '../../components/Input/Input'
import { XButton } from '../../components/XButton/XButton'
import './ServicesBox.scss'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { usersSlice } from '../../redux/reducers/UserSlice'
import { ServiceStatus } from '../../components/ServiceStatus/ServiceStatus'

export const ServicesBox: React.FC = () => {
    const possibleStatus = [200, 400, 500]
    const statuses  =  []
    for (let i = 0; i < 20; i++){
        statuses.push(possibleStatus[Math.floor(Math.random() * 3)])               
    }
    return (
        <div className='ServicesBox' >
            {
                statuses.map(dataStatus=><ServiceStatus {...{dataStatus}} />)
            }
            
        </div>
    )
}

