const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 'Lighthouse, Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // no need to capture the return value since we are not checking it
  });

  it("returns [2, 3] for  [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [2]] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });

  it("returns 'fail' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // => will always fail!
  });
});





