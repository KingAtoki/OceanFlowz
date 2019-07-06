import React from 'react'
import { INTRODUCTION_TEXT, INTRODUCTION_HEADER, ENDING, COMPANY_SIGNATURE } from '../../../messages'
import './IntroductionPage.css'

export const IntroductionPage = () => (
    <>
        <h1 className='introduction-page-header'>{INTRODUCTION_HEADER}</h1>
        <p>{INTRODUCTION_TEXT}</p>
        <p className='introduction-page-ending'>{ENDING}</p>
        <p className='introduction-page-signature'>{COMPANY_SIGNATURE}</p>
    </>
)
