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
            <p>TODO: WrappedChildren is used to display ...</p>
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
