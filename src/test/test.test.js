import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import AboutFile from '../Components/AboutFile/AboutFile';
import '@testing-library/jest-dom/extend-expect';

/**
 * @jest-environment jsdom
 */

const InfoBook = {
  metadata: {
    author: "Test",
    cover_img: null,
    description: "Test",
    filename: "Test.pdf",
    page: "0",
  }
}
const err = {
  status : "cry"
}


// err tests 
test('If button props isLoading == true then button refresh disabled',  () => {
  const { container } = render(
    <BrowserRouter>
      <AboutFile error={true} isLoading={true} InfoBook={InfoBook} />
    </BrowserRouter>)

  expect(screen.getByRole('button', { name: "обновить" })).toBeDisabled()
});


test('is there h1 with text - Не удалось загрузить документ :( ', () => {
  const { container } = render(
    <BrowserRouter>
      <AboutFile error={true} InfoBook={InfoBook} />
    </BrowserRouter>)
  screen.getByText('Не удалось загрузить документ :(')
});


test('check error status in UI', () => {
  const { container } = render(
    <BrowserRouter>
      <AboutFile error={err} InfoBook={InfoBook} />
    </BrowserRouter>)
  screen.getByText(err.status)
});

test('close error alert', () => {
  const { container } = render(
    <BrowserRouter>
      <AboutFile error={err} InfoBook={InfoBook} />
    </BrowserRouter>)
    fireEvent.click()
  screen.getByText(err.status)
});