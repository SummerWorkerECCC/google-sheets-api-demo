import * as D from 'io-ts/Decoder'

const Content = D.struct({
    english: D.string,
    chinese: D.string
})

type Content = D.TypeOf<typeof Content>

export const ContentArray = D.array(Content)

export type ContentArray = D.TypeOf<typeof ContentArray>