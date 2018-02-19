import React from 'react';
import Menu from 'terra-application-menu-layout';
import Image from 'terra-image';
import Placeholder from 'terra-application-header-layout/examples/index-examples/Placeholder';
import ApplicationMenuName from '../../lib/ApplicationMenuName';

const size = { height: '450px', width: '300px' };
const ApplicationMenuNameStandard = () => (
  <Menu
    style={size}
    header={(
      <ApplicationMenuName
        title="App-NameApp-NameApp-NameApp-NameApp-NameApp-Name"
        accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
      />
    )}
    extensions={<Placeholder text="Extensions" height="50px" />}
    content={<Placeholder text="Content" />}
    footer={<Placeholder text="Footer" height="50px" />}
  />
);


export default ApplicationMenuNameStandard;
