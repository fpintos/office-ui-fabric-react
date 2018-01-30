import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { CalendarViewRowHeadersBasicExample } from './examples/CalendarViewRowHeaders.Basic.Example';
import { CalendarViewRowHeadersStyledExample } from './examples/CalendarViewRowHeaders.Styled.Example';
import { CalendarViewRowHeadersCustomRowHeaderPropsExample } from './examples/CalendarViewRowHeaders.CustomRowHeaderProps.Example';
import { CalendarViewRowHeadersCustomRowHeaderPropsCallbackExample } from './examples/CalendarViewRowHeaders.CustomRowHeaderPropsCallback.Example';
import { CalendarViewRowHeadersCustomRowHeaderContentExample } from './examples/CalendarViewRowHeaders.CustomRowHeaderContent.Example';
import { CalendarViewRowHeadersCustomRowHeaderFunctionExample } from './examples/CalendarViewRowHeaders.CustomRowHeaderFunction.Example';
import { CalendarViewRowHeadersCustomRowHeaderClassExample } from './examples/CalendarViewRowHeaders.CustomRowHeaderClass.Example';

export class CalendarViewRowHeadersPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='CalendarViewRowHeaders'
        componentName='CalendarViewRowHeaders'
        exampleCards={
          <div>
            <ExampleCard
              title='Basic Example'
              code={ require('!raw-loader!./examples/CalendarViewRowHeaders.Basic.Example') }
            >
              <CalendarViewRowHeadersBasicExample />
            </ExampleCard>

            <ExampleCard
              title='Styled Example'
              code={ require('!raw-loader!./examples/CalendarViewRowHeaders.Styled.Example') }
            >
              <CalendarViewRowHeadersStyledExample />
            </ExampleCard>

            <ExampleCard
              title='Using custom row header properties.'
              code={ require('!raw-loader!./examples/CalendarViewRowHeaders.CustomRowHeaderProps.Example') }
            >
              <CalendarViewRowHeadersCustomRowHeaderPropsExample />
            </ExampleCard>

            <ExampleCard
              title='Using custom row header properties callback.'
              code={ require('!raw-loader!./examples/CalendarViewRowHeaders.CustomRowHeaderPropsCallback.Example') }
            >
              <CalendarViewRowHeadersCustomRowHeaderPropsCallbackExample />
            </ExampleCard>

            <ExampleCard
              title='Using custom row header content.'
              code={ require('!raw-loader!./examples/CalendarViewRowHeaders.CustomRowHeaderContent.Example') }
            >
              <CalendarViewRowHeadersCustomRowHeaderContentExample />
            </ExampleCard>

            <ExampleCard
              title='Using a custom row header function.'
              code={ require('!raw-loader!./examples/CalendarViewRowHeaders.CustomRowHeaderFunction.Example') }
            >
              <CalendarViewRowHeadersCustomRowHeaderFunctionExample />
            </ExampleCard>

            <ExampleCard
              title='Using a custom row header class.'
              code={ require('!raw-loader!./examples/CalendarViewRowHeaders.CustomRowHeaderClass.Example') }
            >
              <CalendarViewRowHeadersCustomRowHeaderClassExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [
              require('!raw-loader!./CalendarViewRowHeaders.types'),
              require('!raw-loader!../ThemingProps/ThemingProps.types')
            ] }
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
