import React from "react"
import { Navbar, Nav, NavDropdown, MenuItem} from "react-bootstrap"
import { Link, Route, NavLink } from "react-router-dom"

const CustomNavItem = ({ href, children }) => (
    <li role="presentation">
        <NavLink role="button" to={href}>
            {children}
        </NavLink>
    </li>
)

const TappNavItems = () => (
    <Nav>
        <CustomNavItem href="/admin/positions">Positions</CustomNavItem>
        <CustomNavItem href="/admin/applicants">Applicants by Course</CustomNavItem>
        <CustomNavItem href="/admin/assigned">All Assigned</CustomNavItem>
        <CustomNavItem href="/admin/unassigned">All Unassigned</CustomNavItem>
        <CustomNavItem href="/admin/summary">Summary</CustomNavItem>
    </Nav>
)

const CpNavItems = () => <Nav />

class Header extends React.Component {
    render() {
        return (
            <Navbar fixedTop fluid>
                <Navbar.Header id="app-drop-down">
                    <Navbar.Brand>
                        <Route path="/admin" render={() => <Link to="/cp">TAPP</Link>} />
                        <Route path="/cp" render={() => <Link to="/admin/positions">CP</Link>} />
                    </Navbar.Brand>
                </Navbar.Header>
                <Route path="/admin" component={TappNavItems} />
                <Route path="/cp" component={CpNavItems} />
                <Nav pullRight>
                    <NavDropdown eventKey={3} title="Tools" id="tools-dropdown">
                        <MenuItem href="/admin/positions/new">New Position</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}
export default Header
