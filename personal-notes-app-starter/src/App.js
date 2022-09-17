import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddPage from './Pages/AddPage';
import ArchivePage from './Pages/ArchivePage';
import ContentWrapper from './Pages/Content';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/api";


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      authedUser : null,
      intializinig : true
    }
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
        return {
            authedUser: data,
            initializing: false
        }
    })
}

async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
        return {
            authedUser: data,
        }
    })
}

onLogout() {
    this.setState(() => {
        return {
            authedUser: null
        }
    })
    putAccessToken('');
}
  render(){
    if(this.state.initializing){
      return null
    }
    if(this.state.authedUser === null)
    {
      return(
        <div className="app-container">
        <header className='contact-app__header'>
        <h1><Link to="/"> Aplikasi Catatan</Link></h1>  
        <Navigation/>
        </header>
        <main>
          <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path='*' element={<NotFound/>}/>
          </Routes>
        </main>
      </div>
      )
    }
    return (
      <div className="app-container">
        <header className='contact-app__header'>
        <h1><Link to="/"> Aplikasi Catatan</Link></h1>  
        <Navigation/>
        </header>
        <main>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/add' element={<AddPage/>}/>
              <Route path='/notes/:id' element={<ContentWrapper/>}/>
              <Route path='/archives' element={<ArchivePage/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
        </main>
      </div>
    );
  }
}
export default App;
