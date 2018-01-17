import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarViewGridLineBasicExample } from './examples/CalendarViewGridLine.Basic.Example';

export class CalendarViewGridLinePage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarViewGridLine'
        componentName='CalendarViewGridLine'
        exampleCards={
          <div>
            <ExampleCard
              title='Basic CalendarViewGridLine Example'
              code={ require('!raw-loader!./examples/CalendarViewGridLine.Basic.Example') }
            >
              <CalendarViewGridLineBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require('!raw-loader!./CalendarViewGridLine.types')] }
          />
        }
        overview={
          <div>
            <p>TODO: CalendarViewGridLine is used to display ...</p>
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
