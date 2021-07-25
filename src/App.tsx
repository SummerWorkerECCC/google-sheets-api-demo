import './App.css'
import React from 'react'
import { Text, Page } from '@geist-ui/react'
import Content from './Content'


const App: React.FC = () => (
    <Page >
        <Page.Header>
            <Text h1>Google Sheets API Demo</Text>
        </Page.Header>
        <Page.Content>
            <Content />
        </Page.Content>
    </Page>
)


export default App;
