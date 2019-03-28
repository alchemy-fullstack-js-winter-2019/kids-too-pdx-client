import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../home/Home';
import EventDetail from '../events/EventsDetail';
import SubmitEventContainer from '../../containers/SubmitEventContainer';
import AdminEvents from '../admin/AdminEvents';
import AboutUs from '../info/AboutUs';
import Callback from '../../containers/auth/Callback';
import { withSession } from '../../containers/auth/withSession';
import Contact from '../info/Contact';
import styles from './Header.css';
import img from '../../../';

function Header() {
  return (
    <>
    <section className={styles.logo}>
      <img src='../../../public/assets/KidsTooV2.png' />
    </section>
           <Router>
             <section>
               <header className={styles.Header}>
                 <nav>
                   <Link to='/'>Home</Link>
                   <Link to='/submit-event'>Submit Event</Link>
                   <Link to='/contact'>Contact</Link>
                 </nav>
               </header>
               <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/submit-event' component={withSession(SubmitEventContainer)} />
                 <Route exact path='/events/:id' component={EventDetail} />
                 <Route exact path='/admin' component={AdminEvents} />
                 <Route exact path='/admin/event/:id' component={AdminEvents} />
                 <Route exact path='/contact' component={Contact} /> 
                 <Route exact path='/aboutus' component={AboutUs} /> 
                 <Route exact path='/callback' component={Callback} /> 
               </Switch>
             </section>
           </Router>
    </>
  );
}
export default Header;
