import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import IgView from './ig-view';
import 'element-internals-polyfill';

test('renders IgView component', () => {
  const wrapper = render(<IgView />);
  expect(wrapper).toBeTruthy();
});