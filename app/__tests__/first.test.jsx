import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Index from '../index';

describe('Welcome page', function () {
  let component;
  component = mount(<MemoryRouter><Index /></MemoryRouter>);
  component.update();
  test('Page should have a container div', function () {
    expect(component.find('#eui-app-container').exists()).toEqual(true);
  });
});