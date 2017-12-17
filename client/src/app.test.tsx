import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../src/app';
import * as fetchMock from 'fetch-mock';

describe('main app module', () =>
  it('renders without crashing', () => {
    fetchMock.mock('/api/v1/todos/', new Promise(resolve => resolve({
      status: 200,
      body: [],
      sendAsJson: true
    })));

    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    fetchMock.restore();
  }));
