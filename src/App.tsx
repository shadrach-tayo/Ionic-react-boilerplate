import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Menu from './components/Menu/Menu';
import Home from './pages/Home';
import List from './pages/List';
import { home, list, contact, wallet, settings, logOut, menu, mailOpen, book, checkmarkCircle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const appPages: AppPage[] = [
  {
    title: 'Contacts',
    url: '/home',
    icon: contact
  },
  {
    title: 'Connections',
    url: '/home',
    icon: home
  },
  {
    title: 'Targeted BBM',
    url: '/home',
    icon: home
  },
  {
    title: 'Invite Friend',
    url: '/home',
    icon: mailOpen
  },
  {
    title: 'Business News',
    url: '/home',
    icon: book
  },
  {
    title: 'Go Premium',
    url: '/home',
    icon: checkmarkCircle
  },
  {
    title: 'Mywallet',
    url: '/home',
    icon: wallet
  },
  {
    title: 'Categories',
    url: '/home',
    icon: menu
  },
  {
    title: 'settings',
    url: '/home',
    icon: settings
  },
  {
    title: 'logout',
    url: '/home',
    icon: logOut
  },
  {
    title: 'List',
    url: '/home/list',
    icon: list
  }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/list" component={List} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
