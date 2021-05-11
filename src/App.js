import React from 'react'
import Home from './pages/Home'
import Presentation from './pages/Presentation'
import Project from './pages/Project'
import Contact from './pages/Contact' 
import './App.css';
import { URL_BACKEND } from './utils/config'
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header';

class App extends React.Component {

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

  //request attempted to backend
  //return an array of objects to set state.projects
  //eachone with id, slug, Project_Title and Order attribute 
  //return too an array with the links to linkedIn and Instagram and mail address
  firstState = async () => {
    try {
      const response = await axios.get(URL_BACKEND + '/projectsSlugs')
      this.setState({ projects: response.data })
      const responseSocial = await axios.get(URL_BACKEND + '/socialNetworks')
      this.setState({ rsxSoc: responseSocial.data })
    } catch (error) {
      console.log(error)
    }
  }

  //moment of the lifecycle where the request is done
  componentDidMount = () => {
    this.firstState()
  }



  render() {

    //loop to create the routes to projects pages
    let projectRoutes = []
    if (this.state.projects != null) {
      for (const x of this.state.projects) {
        projectRoutes.push(
          <Route path={`/${x.Slug}`} key={`${x.id}`} render={(props) => (
            <Project {...props}  />
          )} />
        )
      }    
    }


    return (
      <div className="App">
        <Header projects={ this.state.projects } rsxSoc={ this.state.rsxSoc } />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/QuiSuisJe" component={Presentation} />
            { projectRoutes }
          </div>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
