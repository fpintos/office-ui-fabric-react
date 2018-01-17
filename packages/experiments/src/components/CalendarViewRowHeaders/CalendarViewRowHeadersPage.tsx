import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarViewRowHeadersBasicExample } from './examples/CalendarViewRowHeaders.Basic.Example';

export class CalendarViewRowHeadersPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarViewRowHeaders'
        componentName='CalendarViewRowHeaders'
        exampleCards={
          <div>
            <ExampleCard
              title='Basic CalendarViewRowHeaders Example'
              code={ require('!raw-loader!./examples/CalendarViewRowHeaders.Basic.Example') }
            >
              <CalendarViewRowHeadersBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require('!raw-loader!./CalendarViewRowHeaders.types')] }
          />
        }
        overview={
          <div>
            <p>TODO: CalendarViewRowHeaders is used to display ...</p>
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
