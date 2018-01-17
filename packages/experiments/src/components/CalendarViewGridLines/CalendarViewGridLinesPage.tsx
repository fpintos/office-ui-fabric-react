import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarViewGridLinesBasicExample } from './examples/CalendarViewGridLines.Basic.Example';

export class CalendarViewGridLinesPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarViewGridLines'
        componentName='CalendarViewGridLines'
        exampleCards={
          <div>
            <ExampleCard
              title='Basic CalendarViewGridLines Example'
              code={ require('!raw-loader!./examples/CalendarViewGridLines.Basic.Example') }
            >
              <CalendarViewGridLinesBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require('!raw-loader!./CalendarViewGridLines.types')] }
          />
        }
        overview={
          <div>
            <p>TODO: CalendarViewGridLines is used to display ...</p>
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
