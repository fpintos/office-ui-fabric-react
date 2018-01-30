import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarViewColumnHeaderBasicExample } from './examples/CalendarViewColumnHeader.Basic.Example';
import { CalendarViewColumnHeaderWeatherExample } from './examples/CalendarViewColumnHeader.Weather.Example';

export class CalendarViewColumnHeaderPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarViewColumnHeader'
        componentName='CalendarViewColumnHeader'
        exampleCards={
          <div>
            <ExampleCard
              title='Basic CalendarViewColumnHeader Example'
              code={ require('!raw-loader!./examples/CalendarViewColumnHeader.Basic.Example') }
            >
              <CalendarViewColumnHeaderBasicExample />
            </ExampleCard>
            <ExampleCard
              title='CalendarViewColumnHeader with customer weather content'
              code={ require('!raw-loader!./examples/CalendarViewColumnHeader.Weather.Example') }
            >
              <CalendarViewColumnHeaderWeatherExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [
              require('!raw-loader!./CalendarViewColumnHeader.types'),
              require('!raw-loader!../Theming/Theming.types')
            ] }
          />
        }
        overview={
          <div>
            <p>TODO: CalendarViewColumnHeader is used to display ...</p>
          </div>
        }
        bestPractices={ <div /> }
        dos={
          <div>
            <ul>
              <li>TODO</li>
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li>TODO</li>
            </ul>
          </div>
        }
        isHeaderVisible={ this.props.isHeaderVisible }
      />
    );
  }
}
