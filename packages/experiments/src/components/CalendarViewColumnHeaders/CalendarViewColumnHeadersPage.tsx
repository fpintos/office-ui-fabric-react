import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarViewColumnHeadersBasicExample } from './examples/CalendarViewColumnHeaders.Basic.Example';
import { CalendarViewColumnHeadersPeopleExample } from './examples/CalendarViewColumnHeaders.People.Example';
import { CalendarViewColumnHeadersWeatherExample } from './examples/CalendarViewColumnHeaders.Weather.Example';

export class CalendarViewColumnHeadersPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarViewColumnHeaders'
        componentName='CalendarViewColumnHeaders'
        exampleCards={
          <div>
            <ExampleCard
              title='Basic CalendarViewColumnHeaders Example'
              code={ require('!raw-loader!./examples/CalendarViewColumnHeaders.Basic.Example') }
            >
              <CalendarViewColumnHeadersBasicExample />
            </ExampleCard>

            <ExampleCard
              title='Column Headers with People'
              code={ require('!raw-loader!./examples/CalendarViewColumnHeaders.People.Example') }
            >
              <CalendarViewColumnHeadersPeopleExample />
            </ExampleCard>

            <ExampleCard
              title='Column Headers with Weather'
              code={ require('!raw-loader!./examples/CalendarViewColumnHeaders.Weather.Example') }
            >
              <CalendarViewColumnHeadersWeatherExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [
              require('!raw-loader!./CalendarViewColumnHeaders.types'),
              require('!raw-loader!../Theming/Theming.types')
            ] }
          />
        }
        overview={
          <div>
            <p>TODO: CalendarViewColumnHeaders is used to display ...</p>
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
