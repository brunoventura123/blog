import * as C from './styled'
import {Header} from '../header'
import { Footer } from '../Footer'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

export const Theme = ({children}: Props) => {


    return(
        <C.Container>
                <Header/>
                <C.Area>
                    {children}
                </C.Area>
                <Footer/>
        </C.Container>
    )
}