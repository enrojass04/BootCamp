import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center w-full">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to = '/'>
                        Portafolio
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/'
                        className={ ({isActive}) => isActive ? activeStyle : undefined }>
                            Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/developers'
                        className={ ({isActive}) => isActive ? activeStyle : undefined }>                        
                            Developers
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/projects'
                        className={ ({isActive}) => isActive ? activeStyle : undefined }>                        
                            Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/apiPokemon'
                        className={ ({isActive}) => isActive ? activeStyle : undefined }>                        
                            Api
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/about-me'
                        className={ ({isActive}) => isActive ? activeStyle : undefined }>                        
                            About Me
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;