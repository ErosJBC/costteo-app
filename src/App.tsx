import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes'
import { AuthContextProvider } from './contexts';

const App: FunctionComponent<{}> = () => {

    return (
        <AuthContextProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AuthContextProvider>
    )
}

export default App;
