import * as C from './styles'
import { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import next from '../../assets/images/jw-next.png'

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [modal, setModal] = useState(false)

    const toggles = () => setModal(!modal)

   
    

    return(
        <C.Container>
            <Navbar className="nav" color="transparent" dark expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>

                    <NavItem>
                        <NavLink to="/" >Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/katheriny" >Katheriny Ventura</NavLink>
                    </NavItem>
                    <NavItem>
                        <p className="p" onClick={toggles}>Serviços <img src={next} alt="" /></p> 
                        {modal &&   
                            <ul className="ulModal">
                                <li><Link to="/"><span>Consultoria De Imagem Completa</span></Link></li>
                                <li><Link to="/"><span>Consultoria Express I</span></Link></li>
                                <li><Link to="/"><span>Consultoria Express II</span></Link></li>
                                <li><Link to="/"><span>Consultoria Express III</span></Link></li>
                                <li><Link to="/"><span>Consultoria Micro</span></Link></li>
                                <li><Link to="/"><span>Análise De Coloração Pessoal</span></Link></li>
                            </ul>
                        }
                    </NavItem>
                    <NavItem>
                        <NavLink to="/depositions" >Depoimentos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/blog" >Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact" >Contato</NavLink>
                    </NavItem>
                    
                </Nav>
            </Collapse>
        </Navbar>
        </C.Container>
    )
}