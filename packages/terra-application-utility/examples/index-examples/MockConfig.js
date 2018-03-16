import { UtilityUtils } from '../../src/ApplicationUtility';

const MockConfig = customComponent =>
  [
    {
      key: 'menu',
      title: 'Menu',
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      metaData: { otherInformation: 'Other Information' },
      childKeys: [
        'item-1',
        'item-2',
        'item-3',
        'item-4',
        'item-5',
        'item-6',
        'item-7',
      ],
    },
    {
      key: 'item-1',
      title: 'Item 1',
      content: customComponent,
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [
        'item-1.1',
      ],
    },
    {
      key: 'item-2',
      title: 'Item 2',
      isSelected: false,
      isSelectable: false,
      childKeys: [
        'item-2.1',
        'item-2.2',
      ],
      id: 'test-item-2',
    },
    {
      key: 'item-3',
      title: 'item-3',
      contentLocation: UtilityUtils.LOCATIONS.FOOTER,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: 'item-4',
      title: 'Item 4',
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [
        'item-4.1',
        'item-4.2',
        'item-4.3',
      ],
    },
    {
      key: 'item-1.1',
      title: 'Item 1.1',
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      metaData: { otherInformation: 'Other Information' },
      childKeys: [],
    },
    {
      key: 'item-2.1',
      title: 'Item 2.1',
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: 'item-2.2',
      title: 'Item 2.2',
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: 'item-4.1',
      title: 'Item 4.1',
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: 'item-4.2',
      title: 'Item 4.2',
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: 'item-4.3',
      title: 'Item 4.3',
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: 'item-5',
      title: 'Item 5',
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: ['item-5.1', 'item-5.2'],
    },
    {
      key: 'item-5.1',
      title: 'Item 5.1',
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: true,
      childKeys: [],
    },
    {
      key: 'item-5.2',
      title: 'Item 5.2',
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: true,
      childKeys: [],
    },
    {
      key: 'item-6',
      title: 'Item 6',
      contentLocation: UtilityUtils.LOCATIONS.FOOTER,
      isSelected: false,
      isSelectable: true,
      childKeys: [],
    },
    {
      key: 'item-7',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      contentLocation: UtilityUtils.LOCATIONS.BODY,
      isSelected: true,
      isSelectable: false,
      childKeys: [],
      id: 'test-item-7',
    },
  ];

export default MockConfig;

