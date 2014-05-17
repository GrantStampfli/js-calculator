var chai = require ('chai');
var expect = chai.expect;
var _ = require('../index');

describe ('calculator()', function () {
	it('has tests', function () {
		expect(_.calc).to.not.be.null;
	});
	it('adds two numbers together', function () {
		expect(_.calc.add(24, 26)).to.eql(50);
	});
	it('subtracts two numbers', function () {
		expect(_.calc.sub(10, 8)).to.eql(2);
	});
});