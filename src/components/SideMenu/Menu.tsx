import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../../declarations';
import './Menu.css'

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
  <IonMenu contentId="main" type="overlay" class="menu">
    <IonContent class="menu-content menu-bg">
      <div className="menu--header">
        <div className="rounded--avatar"></div>
        <p className="menu--header-name">Oloyede Shadrach</p>
        <p>Brimatel Global Networks</p>
      </div>
      <IonList class="menu--list" lines="none">
        {appPages.map((appPage, index) => {
          return (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem href={appPage.url} routerDirection="none" class="menu-bg">
                <IonIcon slot="start" icon={appPage.icon} color="light" />
                <IonLabel color="light">{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
      </IonList>
    </IonContent>
  </IonMenu>
);

export default withRouter(Menu);
