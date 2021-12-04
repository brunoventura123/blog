import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from './src/pages/Home'


export const Router = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
            
        </BrowserRouter>
                
                
    )
}