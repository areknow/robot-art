import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { ProtectedRoute } from './protected-route';

describe('ProtectedRoute', () => {
  it('should render successfully', () => {
    const history = createMemoryHistory();
    const { baseElement } = render(
      <Router history={history}>
        <ProtectedRoute path="" component={<div />} authenticated={true} />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should show component if authenticated', () => {
    const history = createMemoryHistory();
    const children = 'foo';
    const { queryByText } = render(
      <Router history={history}>
        <ProtectedRoute
          path=""
          component={<div>{children}</div>}
          authenticated={true}
        />
      </Router>
    );
    expect(queryByText(children)).toBeTruthy();
  });

  it('should not show component if not authenticated', () => {
    const history = createMemoryHistory();
    const children = 'foo';
    const { queryByText } = render(
      <Router history={history}>
        <ProtectedRoute
          path=""
          component={<div>{children}</div>}
          authenticated={false}
        />
      </Router>
    );
    expect(queryByText(children)).not.toBeTruthy();
  });
});
