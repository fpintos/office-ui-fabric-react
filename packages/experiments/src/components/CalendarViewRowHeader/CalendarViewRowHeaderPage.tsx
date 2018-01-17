import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarViewRowHeaderBasicExample } from './examples/CalendarViewRowHeader.Basic.Example';
import { CalendarViewRowHeaderCustomContentExample } from './examples/CalendarViewRowHeader.CustomContent.Example';

export class CalendarViewRowHeaderPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarViewRowHeader'
        componentName='CalendarViewRowHeader'
        exampleCards={
          <div>
            <ExampleCard
              title='Basic CalendarViewRowHeader Example'
              code={ require('!raw-loader!./examples/CalendarViewRowHeader.Basic.Example') }
            >
              <CalendarViewRowHeaderBasicExample />
            </ExampleCard>
            <ExampleCard
              title='CalendarViewRowHeader with custom content'
              code={ require('!raw-loader!./examples/CalendarViewRowHeader.CustomContent.Example') }
            >
              <CalendarViewRowHeaderCustomContentExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require('!raw-loader!./CalendarViewRowHeader.types')] }
          />
        }
        overview={
          <div>
            <p>TODO: CalendarViewRowHeader is used to display ...</p>
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
