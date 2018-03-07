import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import { Route } from 'react-router-dom';
import Button from 'terra-button';
import DisclosureComponent from 'terra-disclosure-manager/examples/index-examples/DisclosureComponent';

const Page1Content = ({ layoutConfig, app }) => (
  <div style={{ height: 'calc(100% - 10px)', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', color: 'grey', transform: 'translate3d(-50%, -50%, 0)' }}>
      <h2 style={{ margin: '0' }}>Page 1 Content</h2>
      {layoutConfig.toggleMenu && <button style={{ display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey' }} onClick={layoutConfig.toggleMenu}>Toggle Menu</button>}
      <Button
        text="Modal Test" onClick={() => {
          app.disclose({
            preferredType: 'modal',
            size: 'medium',
            content: {
              key: 'HEYOO',
              component: <DisclosureComponent />,
            },
          });
        }}
      />
      <Route
        path="/page1/items" render={() => (
          <div>
            <h2>Items</h2>
            <Route
              path="/page1/items/:item" render={({ match }) => (
                <h2>{match.params.item}</h2>
              )}
            />
          </div>
        )}
      />
      <Route
        path="/page1/other_thing" render={() => (
          <h2>Other Thing</h2>
        )}
      />
    </div>
  </div>
);

Page1Content.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
  }),
  app: AppDelegate.propType,
};

export default Page1Content;
