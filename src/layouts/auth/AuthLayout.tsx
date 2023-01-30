import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout: FunctionComponent<{}> = () => {
    return (
        <Outlet />
    )
}

export default AuthLayout;
