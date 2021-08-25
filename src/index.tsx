import React, { FC, useState } from 'react'
import { render } from 'react-dom'
import './index.scss'
import usePath from 'react-use-path'
import { Router,Route,NotFound } from 'react-clean-router'
import HomePage from './pages/HomePage'
import DomainsPage from './pages/DomainsPage'
import TemplatePage from './pages/TemplatePage'

const Application: FC = () => {
    const [{ path }, setPath] = usePath()
    return<div>
        <Router path = {path}>
            <Route match = '/'>
                <HomePage />
            </Route>
            <Route match= '/eshop'>
                <DomainsPage mode= 'eshop' />
            </Route>
            <Route match= '/eedu'>
                <DomainsPage mode='eedu' />
            </Route>
        </Router>
        </div>
}

render(<Application />, document.getElementById('application'))