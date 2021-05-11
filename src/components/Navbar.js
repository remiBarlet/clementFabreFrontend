import React from 'react'
import NavbarLine from './NavbarLine'
import NavbarBlock from './NavbarBlock'
import { ReactComponent as EnvelopeIcon } from '../icons/envelope.svg'
import { ReactComponent as InstaIcon } from '../icons/instagram.svg'
import { ReactComponent as LinkedInIcon } from '../icons/linkedin.svg'
import { URL_FRONTEND } from '../utils/config'


class Navbar extends React.Component {

    //receive the array of tupples for each project
    //{id, Project_Title, Slug, Order}
    constructor() {
        super()
        this.state = {
            projects: null,
            rsxSoc: {
                Email: '', 
                LinkedIn: '', 
                Instagram: ''
            }
        }
    }

    render() {

        //loop to create navbarlines of projects
        let projectsNavbarLines = []
        if (this.props.projects != null) {
        for ( const x of this.props.projects ) {
            projectsNavbarLines.push(
                <NavbarLine className='menu-level2' href={URL_FRONTEND + `/${x.Slug}`} label={`${x.Project_Title}`} key={`${x.id}`} />
            )
        }
    }

        return(
            <section id='menu'>
                <div id='logo'>
                    <a href='index.html'>clement<br />fabre<br />architecte<br /></a>
                </div>
                <nav>
                    <ul>
                        <NavbarLine className='menu-level1' href='#' label='Projets'>
                            { projectsNavbarLines }
                        </NavbarLine>
                        <NavbarLine className='menu-level1' href={ URL_FRONTEND + '/QuiSuisJe?' } label='Qui suis-je?' />
                        <NavbarLine className='menu-level1' href={ URL_FRONTEND + '/Contact' } label='Contact' />
                        <NavbarBlock className='rsxSoc menu-level1'>
                            <NavbarLine className='' href={ `mailto:${this.props.rsxSoc.Email}`} label={ <EnvelopeIcon className='icon' height='1em' />} />
                            <NavbarLine className='' href={ `${this.props.rsxSoc.LinkedIn}` } label={ <LinkedInIcon className='icon' height='1em' />} />
                            <NavbarLine className='' href={ `${this.props.rsxSoc.Instagram}` } label={ <InstaIcon className='icon' height='1em' />} />
                        </NavbarBlock>
                    </ul>
                </nav>
            </section>
        )
    }
}

export default Navbar