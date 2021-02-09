import React from 'react';
import { render } from '@testing-library/react';
import {
  ButtonTestkit,
  CheckboxTestkit,
  InputAreaTestkit,
  InputTestkit,
  TextTestkit,
} from 'wix-style-react/dist/testkit';
import App from './App';

const renderButtonDriver = (baseElement, dataHook) =>
  ButtonTestkit({
    wrapper: baseElement,
    dataHook,
  });

const getCheckboxDriver = (baseElement) =>
  CheckboxTestkit({
    wrapper: baseElement,
    dataHook: 'terms-checkbox',
  });

const getInputDriver = (baseElement) =>
  InputTestkit({
    wrapper: baseElement,
    dataHook: 'name-input',
  });

const getInputAreaDriver = (baseElement) =>
  InputAreaTestkit({
    wrapper: baseElement,
    dataHook: 'fun-fact-input',
  });

const getSubmittedTextDriver = (baseElement) =>
  TextTestkit({
    wrapper: baseElement,
    dataHook: 'submitted-name-title',
  });

describe('App', () => {
  it('should display Submitted info section on form submit', async () => {
    const { baseElement } = render(<App />);
    const inputDriver = getInputDriver(baseElement);
    const checkboxDriver = getCheckboxDriver(baseElement);
    const buttonDriver = renderButtonDriver(baseElement, 'submit-button');

    await inputDriver.enterText('Zivile');
    await checkboxDriver.click();
    await buttonDriver.click();

    const textDriver = getSubmittedTextDriver(baseElement);

    expect(await textDriver.exists()).toBe(true);
  });

  it('should not submit form if required fields are not filled', async () => {
    const { baseElement } = render(<App />);

    const inputAreaDriver = getInputAreaDriver(baseElement);
    const buttonDriver = renderButtonDriver(baseElement, 'submit-button');

    await inputAreaDriver.enterText('This is a fun fact');
    await buttonDriver.click();

    const textDriver = getSubmittedTextDriver(baseElement);

    expect(await textDriver.exists()).toBe(false);
  });

  it('should clear a form', async () => {
    const { baseElement } = render(<App />);

    const inputDriver = getInputDriver(baseElement);
    const checkboxDriver = getCheckboxDriver(baseElement);
    const inputAreaDriver = getInputDriver(baseElement);
    const clearButtonDriver = renderButtonDriver(baseElement, 'clear-button');

    await inputDriver.enterText('Zivile');
    await checkboxDriver.click();
    await inputAreaDriver.enterText('This is a fun fact');

    await clearButtonDriver.click();

    expect(await inputDriver.getText()).toBe('');
    expect(await checkboxDriver.isChecked()).toBe(false);
    expect(await inputAreaDriver.getValue()).toBe('');
  });
});
