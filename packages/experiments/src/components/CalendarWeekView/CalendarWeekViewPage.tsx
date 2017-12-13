import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarWeekViewBasicExample } from './examples/CalendarWeekView.Basic.Example';
const CalendarWeekViewBasicExampleCode =
  require('!raw-loader!experiments/src/components/CalendarWeekView/examples/CalendarWeekView.Basic.Example.tsx') as string;

export class CalendarWeekViewPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarWeekView'
        componentName='CalendarWeekView'
        exampleCards={
          <div>
            <ExampleCard title='CalendarWeekView Basic' isOptIn={true} code={CalendarWeekViewBasicExampleCode}>
              <CalendarWeekViewBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[require<string>('!raw-loader!experiments/src/components/CalendarWeekView/CalendarWeekView.types.ts')]}
          />
        }
        overview={
          <div>
            <p>CalendarWeekView is used to display a set of calendar events in a week view.</p>
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
