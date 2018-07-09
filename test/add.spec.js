const expect = require('chai').expect;
const add = require('../index');

describe('測試套件add', () => {
    it('測試範例：：預期是3的各種測試', () => {
        expect(add(0, 3)).to.equal(3);
        expect(add(1, 2)).to.equal(3);
        expect(add(2, 1)).to.equal(3);
        expect(add(3, 0)).to.equal(3);
        expect(add(1.5, 1.5)).to.equal(3);
    });
    it('測試範例：：預期是9的各種測試', () => {
        expect(add(0, 9)).to.equal(9);
        expect(add(1, 8)).to.equal(9);
        expect(add(2, 7)).to.equal(9);
        expect(add(3, 6)).to.equal(9);
    });
});