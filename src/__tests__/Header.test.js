import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<Header /> with no props', () => {
    const container = shallow(<Header />);
    it('should match the snapshot', () => {
      expect(container.html()).toMatchSnapshot();
      expect(container.find('img').prop('src')).toEqual('https://www.southerncrossaustereo.com.au:443/media/1973/logo-sca.svg');
      expect(container.find('img').prop('alt')).toEqual('SCA');
      expect(container.find('img').prop('title')).toEqual('SCA');
      expect(container.find('img').prop('className')).toEqual('logo');
    })
})
