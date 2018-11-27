import React from 'react';
import { Footer } from './Footer';

describe('Footer', () => {
  let wrapper;
  let mockWeather;
  beforeEach(() => {
    mockWeather = {
      icon: 'rain',
      high: 65,
      low: 20,
      summary: 'Its gonna be Cold man'
    };

    wrapper = shallow(<Footer weather={mockWeather} />);
  });

  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
