import React from 'react';
import { render } from "@testing-library/react";
import Counter from '../Counter';

// src/__tests__/Counter.spec.js
describe('Counter', () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = getByTestId("count").textContent;
    expect(countValue).toEqual("0");
  })
});