import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { WrappedChildrenBasicExample } from './examples/WrappedChildren.Basic.Example';

export class WrappedChildrenPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='WrappedChildren'
        componentName='WrappedChildren'
        exampleCards={
          <div>
            <ExampleCard
              title='Basic WrappedChildren Example'
              code={ require('!raw-loader!./examples/WrappedChildren.Basic.Example') }
            >
              <WrappedChildrenBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={ [require('!raw-loader!./WrappedChildren.types')] }
          />
        }
        overview={
          <div>
            <p>
              WrappedChildren is used to wrap each element in a list
              with a given wrapping element.
            </p>
            <p>
              This can be used by a component to render a list of elements
              while allowing the application to customize the look-and-feel
              of the individual elements of the list.
            </p>
          </div>
        }
        bestPractices={ <div /> }
        dos={
          <div>
            <ul>
              <li>
                Bubble up the properties from WrappedChildren in the components that use it,
                so other components can affect the output.
             </li>
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li>Do not use WrappedChildren if the output does not need to be customized.</li>
            </ul>
          </div>
        }
        isHeaderVisible={ this.props.isHeaderVisible }
      />
    );
  }
}
