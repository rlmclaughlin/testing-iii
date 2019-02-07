import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

describe("Controls/buttons", () => {
    it("Render buttons to toggle.", () => {
      const { getByText } = render(<Controls closed={false} locked={false} />);
      const lockButton = getByText(/lock gate/i);
      const closeButton = getByText(/close gate/i);
  
      expect(lockButton).toHaveTextContent(/lock gate/i);
      expect(closeButton).toHaveTextContent(/close gate/i);
    });

    it("Close gate turns to open gate when the button is clicked.", () => {
      const { getByText } = render(<Controls closed={false} locked={false} />);
      const closeButton = getByText(/close gate/i);
  
      fireEvent.click(closeButton);
  
      const openButton = getByText(/open gate/i);
  
      expect(openButton).toHaveTextContent(/open gate/i);
    });
  });