import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFab,
  IonFabButton,
  IonFabList
} from '@ionic/react';
import { book, build, colorFill, grid, more, add } from 'ionicons/icons';
import React from 'react';
import './Home.css';

function fabButtonClicked(e: any) {
  console.log('fab button clicked')
}

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="app-header">
        <IonToolbar class="app-toolbar">
          <IonButtons slot="start">
            <IonMenuButton color="light" />
          </IonButtons>
          <IonTitle color="light">Homes</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={more} color="light" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Resources</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Ionic Documentation</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" icon={build} />
            <IonLabel>Scaffold Out Your App</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" icon={grid} />
            <IonLabel>Change Your App Layout</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" icon={colorFill} />
            <IonLabel>Theme Your App</IonLabel>
          </IonItem>
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={fabButtonClicked}>
            <IonIcon color="light" icon={add} />
            <IonFabList side="top">
              <IonFabButton><IonIcon name="logo-vimeo" /></IonFabButton>
            </IonFabList>
            <IonFabList side="bottom">
              <IonFabButton><IonIcon name="logo-facebook" /></IonFabButton>
            </IonFabList>
            <IonFabList side="start">
              <IonFabButton><IonIcon name="logo-instagram" /></IonFabButton>
            </IonFabList>
            <IonFabList side="end">
              <IonFabButton><IonIcon name="logo-twitter" /></IonFabButton>
            </IonFabList>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
