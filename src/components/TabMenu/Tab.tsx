import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react'

export const Tabs: React.FC = () => (

  <IonTabs>
    <IonTabBar slot="bottom">
      <IonTabButton>
        <IonIcon name="home"></IonIcon>
        <IonLabel>Explore</IonLabel>
      </IonTabButton>
    </IonTabBar>
    <IonTabBar slot="bottom">
      <IonTabButton>
        <IonIcon name="map"></IonIcon>
        <IonLabel>Cards</IonLabel>
      </IonTabButton>
    </IonTabBar>
    <IonTabBar slot="bottom">
      <IonTabButton>
        <IonIcon name="contact"></IonIcon>
        <IonLabel>Profile</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>

)