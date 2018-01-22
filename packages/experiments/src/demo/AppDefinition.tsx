// tslint:disable:no-any
import * as React from 'react';
import { App as AppBase, IAppDefinition, IAppProps } from '@uifabric/example-app-base';

export const AppDefinition: IAppDefinition = {
  appTitle: 'Fabric - React',

  testPages: [
  ],
  examplePages: [
    {
      links: [
        {
          component: require<any>('../components/CalendarViewGridLines/CalendarViewGridLinesPage').CalendarViewGridLinesPage,
          key: 'CalendarViewGridLines',
          name: 'CalendarViewGridLines',
          url: '#/examples/CalendarViewGridLines'
        },
        {
          component: require<any>('../components/CalendarViewGridLine/CalendarViewGridLinePage').CalendarViewGridLinePage,
          key: 'CalendarViewGridLine',
          name: 'CalendarViewGridLine',
          url: '#/examples/CalendarViewGridLine'
        },
        {
          component: require<any>('../components/CalendarViewGrid/CalendarViewGridPage').CalendarViewGridPage,
          key: 'CalendarViewGrid',
          name: 'CalendarViewGrid',
          url: '#/examples/CalendarViewGrid'
        },
        {
          component: require<any>('../components/CalendarViewRowHeaders/CalendarViewRowHeadersPage').CalendarViewRowHeadersPage,
          key: 'CalendarViewRowHeaders',
          name: 'CalendarViewRowHeaders',
          url: '#/examples/CalendarViewRowHeaders'
        },
        {
          component: require<any>('../components/CalendarViewRowHeader/CalendarViewRowHeaderPage').CalendarViewRowHeaderPage,
          key: 'CalendarViewRowHeader',
          name: 'CalendarViewRowHeader',
          url: '#/examples/CalendarViewRowHeader'
        },
        {
          component: require<any>('../components/CalendarViewColumnHeaders/CalendarViewColumnHeadersPage').CalendarViewColumnHeadersPage,
          key: 'CalendarViewColumnHeaders',
          name: 'CalendarViewColumnHeaders',
          url: '#/examples/CalendarViewColumnHeaders'
        },
        {
          component: require<any>('../components/CalendarViewColumnHeader/CalendarViewColumnHeaderPage').CalendarViewColumnHeaderPage,
          key: 'CalendarViewColumnHeader',
          name: 'CalendarViewColumnHeader',
          url: '#/examples/CalendarViewColumnHeader'
        },
        {
          component: require<any>('../components/CalendarView/CalendarViewPage').CalendarViewPage,
          key: 'CalendarView',
          name: 'CalendarView',
          url: '#/examples/CalendarView'
        },
        {
          component: require<any>('../components/CalendarDayView/CalendarDayViewPage').CalendarDayViewPage,
          key: 'CalendarDayView',
          name: 'CalendarDayView',
          url: '#/examples/CalendarDayView'
        },
        {
          component: require<any>('../components/CalendarMonthView/CalendarMonthViewPage').CalendarMonthViewPage,
          key: 'CalendarMonthView',
          name: 'CalendarMonthView',
          url: '#/examples/CalendarMonthView'
        },
        {
          component: require<any>('../components/CalendarWeekView/CalendarWeekViewPage').CalendarWeekViewPage,
          key: 'CalendarWeekView',
          name: 'CalendarWeekView',
          url: '#/examples/CalendarWeekView'
        },
        {
          component: require<any>('../components/PositioningContainer/PositioningContainerPage').PositioningContainerPage,
          key: 'PositioningContainer',
          name: 'PositioningContainer',
          url: '#/examples/PositioningContainer'
        },
        {
          component: require<any>('../components/Coachmark/CoachmarkPage').CoachmarkPage,
          key: 'Coachmark',
          name: 'Coachmark',
          url: '#/examples/coachmark'
        },
        {
          component: require<any>('../components/CommandBar/CommandBarPage').CommandBarPage,
          key: 'CommandBar',
          name: 'CommandBar',
          url: '#/examples/commandbar'
        },
        {
          component: require<any>('../components/FolderCover/FolderCoverPage').FolderCoverPage,
          key: 'FolderCover',
          name: 'FolderCover',
          url: '#/examples/foldercover'
        },
        {
          component: require<any>('../components/Form/FormPage').FormPage,
          key: 'Form',
          name: 'Form',
          url: '#/examples/form'
        },
        {
          component: require<any>('../components/FileTypeIcon/FileTypeIconPage').FileTypeIconPage,
          key: 'FileTypeIcon',
          name: 'FileTypeIcon',
          url: '#/examples/filetypeicon'
        },
        {
          component: require<any>('../components/LayoutGroup/LayoutGroupPage').LayoutGroupPage,
          key: 'LayoutGroup',
          name: 'LayoutGroup',
          url: '#/examples/layoutgroup'
        },
        {
          component: require<any>('../components/signals/SignalsPage').SignalsPage,
          key: 'Signals',
          name: 'Signals',
          url: '#/examples/signals'
        },
        {
          component: require<any>('../components/Tile/TilePage').TilePage,
          key: 'Tile',
          name: 'Tile',
          url: '#/examples/tile'
        },
        {
          component: require<any>('../components/TilesList/TilesListPage').TilesListPage,
          key: 'TilesList',
          name: 'TilesList',
          url: '#/examples/tileslist'
        },
        {
          component: require<any>('../components/FloatingPicker/PeoplePicker/FloatingPeoplePickerPage').FloatingPeoplePickerPage,
          key: 'FloatingPeoplePicker',
          name: 'FloatingPeoplePicker',
          url: '#/examples/floatingpeoplepicker'
        },
        {
          component: require<any>('../components/SelectedItemsList/SelectedPeopleList/SelectedPeopleListPage').SelectedPeopleListPage,
          key: 'PeopleItemList',
          name: 'PeopleItemList',
          url: '#/examples/peopleitemlist'
        },
        {
          component: require<any>('../components/ExtendedPicker/PeoplePicker/ExtendedPeoplePickerPage').ExtendedPeoplePickerPage,
          key: 'ExtendedPeoplePicker',
          name: 'ExtendedPeoplePicker',
          url: '#/examples/extendedpeoplepicker'
        },
        {
          component: require<any>('../components/VirtualizedList/VirtualizedListPage').VirtualizedListPage,
          key: 'VirtualizedList',
          name: 'VirtualizedList',
          url: '#/examples/virtualizedlist'
        },
        {
          component: require<any>('../components/StaticList/StaticListPage').StaticListPage,
          key: 'StaticList',
          name: 'StaticList',
          url: '#/examples/staticlist'
        },
        {
          component: require<any>('../components/WrappedChildren/WrappedChildrenPage').WrappedChildrenPage,
          key: 'WrappedChildren',
          name: 'WrappedChildren',
          url: '#/examples/WrappedChildren'
        },
      ]
    }
  ],
  headerLinks: [
    {
      name: 'Getting started',
      url: '#/'
    },
    {
      name: 'Fabric',
      url: 'http://dev.office.com/fabric'
    },
    {
      name: 'Github',
      url: 'http://www.github.com/officedev'
    }
  ]

};

export const App = (props: IAppProps) => <AppBase appDefinition={ AppDefinition } { ...props } />;
