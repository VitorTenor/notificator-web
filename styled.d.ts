import 'styled-components'

declare module 'styled-components' {
    export interface ThemeType {
        colors: {
            primary: string
            secondary: string
            tertiary: string
            quaternary: string
            quinary: string
            senary: string
        }
    }
}
