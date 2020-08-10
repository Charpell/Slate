import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Tabs from '../components/Tabs'

import styled from 'styled-components/native'

const Container = styled.View`
    flex: 1;
    background: transparent;
`

import api from '../services/api'



export default function Home() {
    return (
        <>
            <StatusBar 
                translucent 
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <Container>
                <Header />
                <Hero videos={api} />
                <Tabs />
            </Container>
        </>
    )
}
