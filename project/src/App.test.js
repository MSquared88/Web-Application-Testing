import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, getByTestId, fireEvent, queryByText } from '@testing-library/react'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('does the header say Baseball App', () => {
  const { container } = render(<App/>)
  const header = queryByText(container, 'Baseball App')
})

test("app loads with state of 0", () =>{
  const { container } = render(<App/>);
  const strikeValue = getByTestId(container, 'strikevalue')
  const ballsValue = getByTestId(container, 'ballsvalue')

  expect(strikeValue.textContent).toBe('Strikes: 0')
  expect(ballsValue.textContent).toBe('Balls: 0')

})

test('strike buttons work and that values reset', () => {
  const { container } = render(<App/>);
  const strikeValue = getByTestId(container, 'strikevalue')

  const strike = getByTestId(container, "strikeBtn");

  expect(strikeValue.textContent).toBe("Strikes: 0");
  fireEvent.click(strike);
  expect(strikeValue.textContent).toBe("Strikes: 1");
  fireEvent.click(strike);
  expect(strikeValue.textContent).toBe("Strikes: 2");
  fireEvent.click(strike);
  expect(strikeValue.textContent).toBe("Strikes: 0");
})

test('ball buttons work and that values reset', () => {
  const { container } = render(<App/>);
  const ballsValue = getByTestId(container, 'ballsvalue')

  const ball = getByTestId(container, "ballBtn");

  expect(ballsValue.textContent).toBe("Balls: 0");
  fireEvent.click(ball);

  expect(ballsValue.textContent).toBe("Balls: 1");
  fireEvent.click(ball);

  expect(ballsValue.textContent).toBe("Balls: 2");
  fireEvent.click(ball);

  expect(ballsValue.textContent).toBe("Balls: 3");
  fireEvent.click(ball);

  expect(ballsValue.textContent).toBe("Balls: 0");
})