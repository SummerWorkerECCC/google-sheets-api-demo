import * as D from 'io-ts/Decoder'

const Content = D.struct({
    english: D.string,
    chinese: D.string
})

// eslint-disable-next-line @typescript-eslint/no-redeclare
type Content = D.TypeOf<typeof Content>

export const ContentArray = D.array(Content)

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ContentArray = D.TypeOf<typeof ContentArray>