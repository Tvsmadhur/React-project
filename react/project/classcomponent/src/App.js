import Header from "./components/Header"
import Footer from "./components/Footer"
import Contents from "./components/Contents"
import Sidebar from "./components/SIdebar"
import React from 'react'
import './App.css'
class App extends React.Component
{

    render()
    {
        return (
            <div className='container'>
                <Header />
                <Contents />
                <Sidebar />
                <Footer />
            </div>
        )
    }
}
export default App