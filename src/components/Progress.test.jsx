import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Progress } from './Progress';
import ErrorMessage from './ErrorMessage';
import Step from './Step';

configure({adapter: new Adapter()});

describe('<Progress />', () => {
  it('should render an error message when number of steps < 2', () => {
    const wrapper = shallow(<Progress steps={['a']}/>);
    expect(wrapper.find(ErrorMessage)).toHaveLength(1);
  });

  it('should render an error message when number of steps > 5', () => {
    const wrapper = shallow(<Progress steps={['a', 'b', 'c', 'd', 'e', 'f']}/>);
    expect(wrapper.find(ErrorMessage)).toHaveLength(1);
  });

  it('should render steps', () => {
    const wrapper = shallow(<Progress steps={['a', 'b']}/>);
    expect(wrapper.find(Step)).toHaveLength(2);
  });
});
