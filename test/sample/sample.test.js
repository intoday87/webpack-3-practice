import $ from 'jquery';
import sample from '../../component/sample';

jest.mock('jquery');

describe('sample', () => {
  it('#build', () => {
    sample.build();

    expect($.get.mock.calls[0][0]).toBe('/hello');
  });
});
