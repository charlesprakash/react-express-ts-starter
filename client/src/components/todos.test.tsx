import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Todos from './todos';
import * as fetchMock from 'fetch-mock';

describe('main app module', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('renders async fetch without crashing', async () => {
    fetchMock.getOnce('/api/v1/todos/', {
      status: 200,
      body: [],
      sendAsJson: true
    });

    // TODO: Find better mocking pattern here
    class TodosTest extends Todos {
      static promise: Promise<void>;

      async componentDidMount() {
        return TodosTest.promise = super.componentDidMount();
      }
    }

    const div = document.createElement('div');
    await new Promise((resolve, reject) => ReactDOM.render(<TodosTest />, div, resolve));

    const promise = TodosTest.promise;
    await promise;
  });
});
