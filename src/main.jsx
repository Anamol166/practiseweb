import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './components/Contextapi/userscontext.jsx'
import CartContextProvider from './components/Contextapi/Cart/cartcontext.jsx'
import { Provider } from 'react-redux'
import store from './components/redux/store.js'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserContext>
            <CartContextProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </CartContextProvider>
        </UserContext>
    </BrowserRouter>
)