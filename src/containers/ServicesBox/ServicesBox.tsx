import './ServicesBox.scss'

import { ServiceStatus } from '../../components/ServiceStatus/ServiceStatus'
import { KISv2 } from '../../components/KISv2/KISv2'

export const ServicesBox: React.FC = () => {
    const possibleStatus = [200, 400, 500]
    const statuses  =  []
    for (let i = 1; i < 21; i++){
        statuses.push({status: possibleStatus[Math.floor(Math.random() * 3)],
            className: `div${i}`,
            id: i
            
        })               
    }
    
    return (
        <div className='ServicesBox' >
            {
                statuses.map((dataStatus, i)=><ServiceStatus {...{dataStatus}} />)
            }
            <KISv2 dataStatus={{status: 'KIS', className: 'div25'} } />
        </div>
    )
}

