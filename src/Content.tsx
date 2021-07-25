import React from 'react'
import useFetch from 'react-fetch-hook'
import { ContentArray } from './data/Content'
import { Text, Table, Loading, Code, Note } from '@geist-ui/react'
import { DecodeError } from 'io-ts/lib/Decoder'


const Content: React.FC = () => {
    const { isLoading, data, error } = useFetch('https://4y7qfk.deta.dev/content', {
        formatter: async (response) => {
            const json = await response.json()
            const decoded = ContentArray.decode(json)
            return decoded
        }
    })

    if (error) {
        return <>
            <Text h1 type='error'>HTTP Error!</Text>
            <Text>Code: {error.status}</Text>
            <Text>Message: {error.statusText}</Text>
        </>
    }

    if (isLoading) {
        return <>
            <Loading>Loading Data</Loading>
        </>
    }


    if (data) {
        switch (data._tag) {
            case 'Right':
                return <DisplayContents data={data.right} />
            case 'Left':
                return <DisplayError err={data.left} />
        }
    }


    return <div>
        <Text type='error'>This shouldn't happen!</Text>
    </div>
}

const DisplayContents: React.FC<{ data: ContentArray }> = ({ data }) => (
    <Table data={data}>
        <Table.Column prop='english' label='Column 1' />
        <Table.Column prop='chinese' label='Column 2' />
    </Table>
)

const DisplayError: React.FC<{ err: DecodeError }> = ({ err }) => (
    <>
        <Text h2 type='error'>Decoding Error!</Text>
        <Note type='warning'>This usually happens when either an English cell or Chinese cell is empty</Note>
        <Code block>{JSON.stringify(err, null, 4)}</Code>
    </>
)


export default Content;
