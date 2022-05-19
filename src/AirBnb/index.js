import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SecureView } from './HOC/HOC';
import { InnerPage } from './Page/Page';

export default function Airbnb() {
    return <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SecureView Component={<InnerPage/>} />}/>
            
        </Routes>
    </BrowserRouter>
    </>
}