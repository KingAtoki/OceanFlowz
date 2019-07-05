import React from 'react'
import { COMPANY_NAME } from '../../../constants'
import logo from '../../../assets/OceanFlowzLogo.png';

import './TitlePage.css'

export const TitlePage = () => (
    <div className='title-page'>
        <img src={logo} alt='logo' />
        <p className='title-page-company-name'>{COMPANY_NAME}</p>
    </div>
)
