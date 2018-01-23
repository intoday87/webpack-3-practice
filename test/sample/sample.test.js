import sinon from 'sinon';
import should from 'should';
import $ from 'jquery';
import sample from '../../component/sample';

describe('sample', () => {

  it('#build', () => {
    sinon.stub($, 'get');

    sample.build();

    $.get.calledWith('/hello').should.be.true();
  });
});
