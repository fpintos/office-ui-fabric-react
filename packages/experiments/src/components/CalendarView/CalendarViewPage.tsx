import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarViewBasicExample } from './examples/CalendarView.Basic.Example';

export class CalendarViewPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarView'
        componentName='CalendarView'
        exampleCards={
          <div>
            <ExampleCard
              title='Basic CalendarView Example'
              code={ require('!raw-loader!./examples/CalendarView.Basic.Example') }
            >
              <CalendarViewBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require('!raw-loader!./CalendarView.types')] }
          />
        }
        overview={
          <div>
            <p>TODO: CalendarView is used to display ...</p>
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
