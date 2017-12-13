import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarDayViewBasicExample } from './examples/CalendarDayView.Basic.Example';
const CalendarDayViewBasicExampleCode =
  require('!raw-loader!experiments/src/components/CalendarDayView/examples/CalendarDayView.Basic.Example.tsx') as string;

export class CalendarDayViewPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarDayView'
        componentName='CalendarDayView'
        exampleCards={
          <div>
            <ExampleCard title='CalendarDayView Basic' isOptIn={true} code={CalendarDayViewBasicExampleCode}>
              <CalendarDayViewBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[require<string>('!raw-loader!experiments/src/components/CalendarDayView/CalendarDayView.types.ts')]}
          />
        }
        overview={
          <div>
            <p>CalendarDayView is used to display a set of calendar events in a day view.</p>
          </div>
        }
        bestPractices={<div />}
        dos={
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}
