import './App.css'
import Mailbar from './Components/Mailbar'
import Widget from './Components/Widget'
import Footer from './Layouts/Footer/Footer'
import Header from './Layouts/Header/Header'
import Main from './Layouts/Main/Main'

export default function App() {
    return (
        <div className='app'>
            <Header />
            <Widget />
            <div className='app__components'>
                <Main />
            </div>
            <Mailbar />
            <Footer />
        </div>
    )
}
