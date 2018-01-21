import {describe, it} from 'mocha';
import sinon from 'sinon';
import should from 'should';
import css from '../../component/sample/sample.css';
import hbs from '../../component/sample/sample.hbs';
import sample from '../../component/sample';

describe('sample', () => {

  beforeEach(() => {
    sinon.stub(hbs);
  });


  it('#build', () => {
    sample.build();
    hbs.called.should.be.true();
  });
});
