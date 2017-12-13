import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarWeekViewBasicExample } from './examples/CalendarWeekView.Basic.Example';
import { CalendarWeekViewWorkWeekExample } from './examples/CalendarWeekView.WorkWeek.Example';
import { CalendarWeekViewStyledExample } from './examples/CalendarWeekView.Styled.Example';

export class CalendarWeekViewPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarWeekView'
        componentName='CalendarWeekView'
        exampleCards={
          <div>
            <ExampleCard
              title='1st 7-day week of 2018, starting Sunday Dec 31st 2017'
              code={ require('!raw-loader!./examples/CalendarWeekView.Basic.Example') }
            >
              <CalendarWeekViewBasicExample />
            </ExampleCard>
            <ExampleCard
              title='1st work week of 2018, starting Monday Jan 1st 2018'
              code={ require('!raw-loader!./examples/CalendarWeekView.WorkWeek.Example') }
            >
              <CalendarWeekViewWorkWeekExample />
            </ExampleCard>
          </div>
        }
        implementationExampleCards={
          <div>
            <ExampleCard
              title='Using custom styles'
              code={ require('!raw-loader!./examples/CalendarWeekView.Styled.Example') }
            >
              <CalendarWeekViewStyledExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require('!raw-loader!./CalendarWeekView.types')] }
          />
        }
        overview={
          <div>
            <p>CalendarWeekView is used to display a set of calendar events in a week view.</p>
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
