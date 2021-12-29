
import ReactDOM from 'react-dom';
import App from './components/card-game/App';
import './index.css'
import store from './components/card-game/redux/store'
import {Provider} from 'react-redux'


ReactDOM.render(
 <Provider store={store}>
        <App/>
 </Provider>
     
  
     
,document.getElementById('root')
);

