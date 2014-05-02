var qs = require('../');
var expect = require('expect.js');

describe('qs.remove()', function() {
  it('should support the basics', function() {
    expect(qs.remove('color=red&size=small&size=large', 'size', 'large')).to.eql('color=red&size=small');
    expect(qs.remove('color=red&size=small', 'size', 'small')).to.eql('color=red');
    expect(qs.remove('color=red&size=small', 'size', 'large')).to.eql('color=red&size=small');
    expect(qs.remove('color=red&size=small', 'price', '100')).to.eql('color=red&size=small');
  });

  it('should ignore invalid parameters', function() {
    expect(qs.remove('color=red')).to.eql('color=red');
    expect(qs.remove('color=red', 'size')).to.eql('color=red');
    expect(qs.remove('color=red', 'size', 160)).to.eql('color=red');
    expect(qs.remove('color=red', undefined, 'small')).to.eql('color=red');
  });

  it('should not prevent general parse/stringify features', function() {
    expect(qs.remove('color', 'size', 'small')).to.eql('color=');
    expect(qs.remove('color', 'color', 'red')).to.eql('color=');
  });
});