import React from 'react';
import { mount } from 'enzyme';
import Image from '..';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';

const src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

describe('Image', () => {
  mountTest(Image);
  rtlTest(Image);
  it('Default preview props', () => {
    const wrapper = mount(<Image src={src} preview={{ visible: true }} />);

    expect(wrapper.find('Preview').prop('transitionName')).toBe('ant-zoom');
    expect(wrapper.find('Preview').prop('maskTransitionName')).toBe('ant-fade');
  });
  it('Default Group preview props', () => {
    const wrapper = mount(
      <Image.PreviewGroup preview={{ visible: true }}>
        <Image src={src} />
      </Image.PreviewGroup>,
    );

    expect(wrapper.find('Preview').prop('transitionName')).toBe('ant-zoom');
    expect(wrapper.find('Preview').prop('maskTransitionName')).toBe('ant-fade');
  });
  it('Customize preview props', () => {
    const wrapper = mount(
      <Image
        src={src}
        preview={{ visible: true, transitionName: 'abc', maskTransitionName: 'def' }}
      />,
    );

    expect(wrapper.find('Preview').prop('transitionName')).toBe('abc');
    expect(wrapper.find('Preview').prop('maskTransitionName')).toBe('def');
  });
  it('Customize Group preview props', () => {
    const wrapper = mount(
      <Image.PreviewGroup
        preview={{ visible: true, transitionName: 'abc', maskTransitionName: 'def' }}
      >
        <Image src={src} />
      </Image.PreviewGroup>,
    );

    expect(wrapper.find('Preview').prop('transitionName')).toBe('abc');
    expect(wrapper.find('Preview').prop('maskTransitionName')).toBe('def');
  });
});
