import React from 'react';
import { Carousel } from './components/Carousel/Carousel'
import { TitlePage } from './components/Pages/TitlePage/TitlePage'
import { IntroductionPage } from './components/Pages/IntroductionPage/IntroductionPage'

import './App.css';

const PAGES = [<TitlePage />, <IntroductionPage />]

export const App = () => (
  <div className='App'>
    <Carousel items={PAGES} />
  </div>
)
