if (typeof Spassky ==  'function') {
  QUnit.done = function(result) {
    if (result.failed > 0) {
      new Spassky().assert(false, "qunit failed");
    } else {
      new Spassky().assert(true, "qunit passed");
    }
  };
}
