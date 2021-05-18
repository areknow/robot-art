import { render } from '@testing-library/react';
import { AddCard } from './add-card';
import { CARD_TITLE } from './constants';

describe('AddCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddCard onAdd={() => jest.fn()} />);
    expect(baseElement).toBeTruthy();
  });

  it('should show title', () => {
    const { baseElement } = render(<AddCard onAdd={() => jest.fn()} />);
    expect(baseElement.querySelector('h3')?.textContent).toEqual(CARD_TITLE);
  });
});
