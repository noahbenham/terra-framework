/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router } from 'react-router-dom';
import Base from 'terra-base';
import ThemeProvider from 'terra-theme-provider';
import NavigationLayout from 'terra-navigation-layout';

import ApplicationHeader from './ApplicationHeader';
import './App.scss';

const propTypes = {
  routeConfig: PropTypes.object,
  navigation: PropTypes.object,
};

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const themes = {
  'Default Theme': '',
  'Mock Theme': 'cerner-mock-theme',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dir: 'ltr',
      locale,
      theme: 'Default Theme',
      configType: 'Standard',
    };
    this.handleBidiChange = this.handleBidiChange.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
    this.handleConfigChange = this.handleConfigChange.bind(this);

    this.navForConfigType = this.navForConfigType.bind(this);
    this.configForConfigType = this.configForConfigType.bind(this);
  }

  handleBidiChange(e) {
    document.getElementsByTagName('html')[0].setAttribute('dir', e.currentTarget.id);
    this.setState({ dir: e.currentTarget.id });
  }

  handleLocaleChange(e) {
    this.setState({ locale: e.currentTarget.id });
  }

  handleThemeChange(e) {
    this.setState({ theme: e.currentTarget.id });
  }

  handleConfigChange(e) {
    this.setState({ configType: e.currentTarget.id });
  }

  navForConfigType() {
    switch (this.state.configType) {
      case 'Documentation':
        return {
          index: '/home',
          links: [{
            path: '/home',
            text: 'Home',
          }, {
            path: '/getting-started',
            text: 'Getting Started',
          }, {
            path: '/components',
            text: 'Components',
          }],
        };
      case 'Leisure':
        return {
          index: '/leisure',
          links: [],
        };
      default:
      case 'Standard':
        return {
          index: '/home',
          links: [{
            path: '/home',
            text: 'Home',
          }, {
            path: '/components',
            text: 'Components',
          }, {
            path: '/tests',
            text: 'Tests',
          }],
        };
    }
  }

  configForConfigType() {
    const contentCopy = Object.assign({}, this.props.routeConfig.content);
    const menuCopy = Object.assign({}, this.props.routeConfig.menu);

    switch (this.state.configType) {
      case 'Documentation':
        const updatedContent = {};
        Object.keys(contentCopy).filter(pathName => ['/tests', '/leisure'].indexOf(pathName) < 0).map((validPathName) => {
          updatedContent[validPathName] = contentCopy[validPathName];
        });

        const updatedMenu = {};
        Object.keys(menuCopy).filter(pathName => ['/tests', '/leisure'].indexOf(pathName) < 0).map((validPathName) => {
          updatedMenu[validPathName] = menuCopy[validPathName];
        });

        return Object.assign({}, {
          content: updatedContent,
        }, {
          menu: updatedMenu,
        });
      case 'Leisure':
        const leisureContent = {};
        Object.keys(contentCopy).filter(pathName => pathName === '/leisure').map((validPathName) => {
          leisureContent[validPathName] = contentCopy[validPathName];
        });

        return Object.assign({}, {
          content: leisureContent,
        });
      default:
      case 'Standard':
        const standardContent = {};
        Object.keys(contentCopy).filter(pathName => ['/getting-started', '/leisure'].indexOf(pathName) < 0).map((validPathName) => {
          standardContent[validPathName] = contentCopy[validPathName];
        });

        const standardMenu = {};
        Object.keys(menuCopy).filter(pathName => ['/getting-started', '/leisure'].indexOf(pathName) < 0).map((validPathName) => {
          standardMenu[validPathName] = menuCopy[validPathName];
        });

        return Object.assign({}, {
          content: standardContent,
        }, {
          menu: standardMenu,
        });
    }
  }

  render() {
    const nav = this.navForConfigType();

    const applicationHeader = (
      <ApplicationHeader
        locale={this.state.locale}
        onLocaleChange={this.handleLocaleChange}
        dir={this.state.dir}
        onDirChange={this.handleBidiChange}
        theme={this.state.theme}
        onThemeChange={this.handleThemeChange}
        configType={this.state.configType}
        onConfigChange={this.handleConfigChange}
        navigation={nav}
      />
    );

    return (
      <Router>
        <ThemeProvider id="framework-site" themeName={themes[this.state.theme]} isGlobalTheme>
          <Base className="base" locale={this.state.locale}>
            <NavigationLayout
              header={applicationHeader}
              menuText="Menu"
              indexPath={nav.index}
              config={this.configForConfigType()}
            />
          </Base>
        </ThemeProvider>
      </Router>
    );
  }
}

App.propTypes = propTypes;

export default App;
