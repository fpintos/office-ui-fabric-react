import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarViewGridBasicExample } from './examples/CalendarViewGrid.Basic.Example';

export class CalendarViewGridPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarViewGrid'
        componentName='CalendarViewGrid'
        exampleCards={
          <div>
            <ExampleCard
              title='Basic CalendarViewGrid Example'
              code={ require('!raw-loader!./examples/CalendarViewGrid.Basic.Example') }
            >
              <CalendarViewGridBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require('!raw-loader!./CalendarViewGrid.types')] }
          />
        }
        overview={
          <div>
            <p>TODO: CalendarViewGrid is used to display ...</p>
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
