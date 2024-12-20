import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'

import { Input } from '../../components/Input/Input'

import './AnaliticsCharts.scss'
import { useState } from 'react'

import { IReportMessage } from '../../type'
import { GetProp, Table, TableProps, Tag } from 'antd'
import { SorterResult } from 'antd/es/table/interface'
import { reportsApi } from '../../service/ReportService'
import { TagsChart } from '../../components/TagsChart/TagsChart'
import { PieChart } from '../../components/PieChart/PieChart'
import { LineChart } from '../../components/LineChart/LineChart'
import { BarChart } from '../../components/BarChart/BarChart'


export const AnaliticsCharts: React.FC = () => {
    return (
        <div className='AnaliticsCharts' >
            <div className="div1">
            <TagsChart /> </div>
            <div className="div2"> 
            <PieChart/>
            </div>
            <div className="div3"> 
                <LineChart/>
            </div>
            <div className="div4"> 
                <BarChart/>
            </div>
        </div>
    )
}

