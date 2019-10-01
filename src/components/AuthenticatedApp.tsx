import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from '../declarations';

import Menu from './SideMenu/Menu';
import Home from '../pages/Home';
import List from '../pages/List';
import { home, list, contact, wallet, settings, logOut, menu, mailOpen, book, checkmarkCircle } from 'ionicons/icons';

import { Tabs } from './TabMenu/Tab'

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

const AuthenticatedApp: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/list" component={List} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Tabs />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default AuthenticatedApp;