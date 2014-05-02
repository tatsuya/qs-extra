var qs = require('../');
var expect = require('expect.js');

describe('qs.add()', function() {
  it('should support the basics', function() {
    expect(qs.add('color=red', 'size', 'small')).to.eql('color=red&size=small');
    expect(qs.add('color=red&size=small', 'size', 'large')).to.eql('color=red&size=small&size=large');
  });

  it('should ignore invalid parameters', function() {
    expect(qs.add('color=red')).to.eql('color=red');
    expect(qs.add('color=red', 'size')).to.eql('color=red');
    expect(qs.add('color=red', 'size', 160)).to.eql('color=red');
    expect(qs.add('color=red', undefined, 'small')).to.eql('color=red');
  });

  it('should not prevent general parse/stringify features', function() {
    expect(qs.add('color', 'size', 'small')).to.eql('color=&size=small');
    expect(qs.add('color', 'color', 'red')).to.eql('color=red');
  });
});