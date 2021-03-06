import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import 'normalize.css';
import Home from '../home/Home';
import EventDetail from '../events/EventDetail';
import Contact from '../info/Contact';
import AboutUs from '../info/AboutUs';
import Callback from '../../containers/auth/Callback';
import Resources from '../resources/Resources';
import { withSession } from '../../containers/auth/withSession';
import SubmitEventContainer from '../../containers/events/SubmitEventContainer';

export default function App() {
  return (
    <Router>
      <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/events/:id' component={EventDetail} />
        <Route exact path='/submit-event' component={withSession(SubmitEventContainer)} />
        <Route exact path='/contact' component={Contact} /> 
        <Route exact path='/aboutus' component={AboutUs} /> 
        <Route exact path='/callback' component={Callback} /> 
        <Route exact path='/resources' component={Resources} />
      </Switch>
      <Footer />
    </>
    </Router>
  );
}

