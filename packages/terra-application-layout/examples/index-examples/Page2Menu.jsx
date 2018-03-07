import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-clinical-action-header';
import Button from 'terra-button';
import DisclosureComponent from 'terra-disclosure-manager/examples/index-examples/DisclosureComponent';
import AppDelegate from 'terra-app-delegate';

const Page2Menu = ({ app, layoutConfig, routingStackDelegate }) => (
  <ContentContainer
    fill
    header={(
      <ActionHeader
        title="Page 2"
        onBack={routingStackDelegate && routingStackDelegate.showParent}
      />
    )}
  >
    <div style={{ height: 'calc(100% - 10px)', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', color: 'grey', transform: 'translate3d(-50%, -50%, 0)' }}>
        {layoutConfig.toggleMenu && <button style={{ display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey' }} onClick={layoutConfig.toggleMenu}>Toggle Menu</button>}
        <h2 style={{ margin: '0' }}>Page 2 Menu</h2>
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
      </div>
    </div>
  </ContentContainer>
);

Page2Menu.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
    togglePin: PropTypes.func,
    menuIsPinned: PropTypes.bool,
  }),
  routingStackDelegate: RoutingStackDelegate.propType,
  app: AppDelegate.propType,
};

export default withRouter(Page2Menu);
