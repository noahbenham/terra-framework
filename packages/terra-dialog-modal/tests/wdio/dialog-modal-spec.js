/* global before, browser, Terra */
const selector = '#root';

Terra.viewports('tiny', 'medium', 'large').forEach((viewport) => {
  before(() => {
    browser.setViewportSize(viewport);
  });

  describe('Default Dialog Modal', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/default-dialog-modal');
      browser.click('#trigger-dialog-modal');
    });
    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });

  describe('Default Dialog Modal with Themable Properties', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/default-dialog-modal');
      browser.click('#trigger-dialog-modal');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#root',
      properties: {
        '--terra-dialog-modal-border-radius': '1rem',
        '--terra-dialog-modal-header-color': '#c00',
        '--terra-dialog-modal-header-border': '1rem solid #c00',
        '--terra-dialog-modal-body-color': '#000',
        '--terra-dialog-modal-body-padding': '0rem',
        '--terra-dialog-modal-footer-color': '#c00',
        '--terra-dialog-modal-footer-border': '1rem solid #c00',
      },
    });
  });

  describe('Dialog Modal With Long text', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-dialog-modal/dialog-modal/dialog-modal-with-long-text');
      browser.click('#trigger-dialog-modal');
    });
    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
  });
});