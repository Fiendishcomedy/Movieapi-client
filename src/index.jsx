import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MainView from './components/main-view/main-view';
import moviesApp from './reducers/reducers';

// Import statement to indicate that we need to bundle `./index.scss`
import './index.scss';

const store = createStore(moviesApp);

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return(
    <Provider store={store}>
        <MainView />
    </Provider>
    );
  }
}

// Find the root of our app
const container = document.getElementsByClassName('app-container')[0];

// Tell React to render our app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {MainView} from './components/main-view/main-view'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// // Import statement to indicate that you need to bundle `./index.scss`
// import './index.scss';

// // Main component (will eventually use all the others)
// class MyFlixApplication extends React.Component {
//   render() {
//     return (
//       <Container>
//       <MainView />
//       </Container>
//     );
//   }
// }

// // Finds the root of your app
// const container = document.getElementsByClassName('app-container')[0];

// // Tells React to render your app in the root DOM element
// ReactDOM.render(React.createElement(MyFlixApplication), container);


//Kline is the best