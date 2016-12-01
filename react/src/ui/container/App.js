import React from 'react'
import { Link } from 'react-router';

import 'stylus/main.styl';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {

        return (
            <div id="application">
            <div className="header">
                <div className="pure-menu pure-menu-horizontal">
                      <button  className="pure-menu-heading pure-button pure-button-primary ">Transpilers</button>
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a href="https://jsx.github.io/" className="pure-menu-link menu_txt">JSX</a></li>
                            <li className="pure-menu-item"><a href="http://stylus-lang.com/docs/js.html" className="pure-menu-link menu_txt">Stylus</a></li>
                        </ul>
                </div>
            </div>

             <div className="splash-container">
                    <div className="splash">
                            <h1 className="splash-head spash_txt">React(JSX) and Stylus(CSS) Transpilers</h1>
                    </div>
                </div>
            </div>
        );
    }

}

App.propTypes = { };
App.defaultProps = { };

export default App
