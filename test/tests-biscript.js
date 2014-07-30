// Tests for typed scripting on top of JavaScript.

if (typeof exports != "undefined") {
  var test = require("./driver.js").test;
  var testFail = require("./driver.js").testFail;
  var testAssert = require("./driver.js").testAssert;
}

test("f = uint x => x * 2", {
  type: "Program",
  start: 0,
  end: 19,
  body: [{
    type: "ExpressionStatement",
    start: 0,
    end: 19,
    expression: {
      type: "AssignmentExpression",
      start: 0,
      end: 19,
      operator: "=",
      left: {
        type: "Identifier",
        start: 0,
        end: 1,
        name: "f"
      },
      right: {
        type: "ArrowFunctionExpression",
        start: 4,
        end: 19,
        id: null,
        params: [{
          type: "Identifier",
          start: 9,
          end: 10,
          name: "x"
        }],
        defaults: [],
        rest: null,
        generator: false,
        binaryType: {
          type: "Identifier",
          start: 4,
          end: 8,
          name: "uint"
        },
        body: {
          type: "BinaryExpression",
          start: 14,
          end: 19,
          left: {
            type: "Identifier",
            start: 14,
            end: 15,
            name: "x"
          },
          operator: "*",
          right: {
            type: "Literal",
            start: 18,
            end: 19,
            value: 2,
            raw: "2"
          }
        },
        expression: true
      }
    }
  }]
});

test("f = uint x => { return x * 2 }", {
  type: "Program",
  start: 0,
  end: 30,
  body: [{
    type: "ExpressionStatement",
    start: 0,
    end: 30,
    expression: {
      type: "AssignmentExpression",
      start: 0,
      end: 30,
      operator: "=",
      left: {
        type: "Identifier",
        start: 0,
        end: 1,
        name: "f"
      },
      right: {
        type: "ArrowFunctionExpression",
        start: 4,
        end: 30,
        id: null,
        params: [{
          type: "Identifier",
          start: 9,
          end: 10,
          name: "x"
        }],
        defaults: [],
        rest: null,
        generator: false,
        binaryType: {
          type: "Identifier",
          start: 4,
          end: 8,
          name: "uint"
        },
        body: {
          type: "BlockStatement",
          start: 14,
          end: 30,
          body: [{
            type: "ReturnStatement",
            start: 16,
            end: 28,
            argument: {
              type: "BinaryExpression",
              start: 23,
              end: 28,
              left: {
                type: "Identifier",
                start: 23,
                end: 24,
                name: "x"
              },
              operator: "*",
              right: {
                type: "Literal",
                start: 27,
                end: 28,
                value: 2,
                raw: "2"
              }
            }
          }]
        },
        expression: false
      }
    }
  }]
});

test("f = uint (x, y) => x + y", {
  type: "Program",
  start: 0,
  end: 24,
  body: [{
    type: "ExpressionStatement",
    start: 0,
    end: 24,
    expression: {
      type: "AssignmentExpression",
      start: 0,
      end: 24,
      operator: "=",
      left: {
        type: "Identifier",
        start: 0,
        end: 1,
        name: "f"
      },
      right: {
        type: "ArrowFunctionExpression",
        start: 4,
        end: 24,
        id: null,
        params: [
          {
            type: "Identifier",
            start: 10,
            end: 11,
            name: "x"
          },
          {
            type: "Identifier",
            start: 13,
            end: 14,
            name: "y"
          }
        ],
        defaults: [],
        rest: null,
        generator: false,
        binaryType: {
          type: "Identifier",
          start: 4,
          end: 8,
          name: "uint"
        },
        body: {
          type: "BinaryExpression",
          start: 19,
          end: 24,
          left: {
            type: "Identifier",
            start: 19,
            end: 20,
            name: "x"
          },
          operator: "+",
          right: {
            type: "Identifier",
            start: 23,
            end: 24,
            name: "y"
          }
        },
        expression: true
      }
    }
  }]
});

test("f = uint (x, y) => { return x + y }", {
  type: "Program",
  start: 0,
  end: 35,
  body: [{
    type: "ExpressionStatement",
    start: 0,
    end: 35,
    expression: {
      type: "AssignmentExpression",
      start: 0,
      end: 35,
      operator: "=",
      left: {
        type: "Identifier",
        start: 0,
        end: 1,
        name: "f"
      },
      right: {
        type: "ArrowFunctionExpression",
        start: 4,
        end: 35,
        id: null,
        params: [
          {
            type: "Identifier",
            start: 10,
            end: 11,
            name: "x"
          },
          {
            type: "Identifier",
            start: 13,
            end: 14,
            name: "y"
          }
        ],
        defaults: [],
        rest: null,
        generator: false,
        binaryType: {
          type: "Identifier",
          start: 4,
          end: 8,
          name: "uint"
        },
        body: {
          type: "BlockStatement",
          start: 19,
          end: 35,
          body: [{
            type: "ReturnStatement",
            start: 21,
            end: 33,
            argument: {
              type: "BinaryExpression",
              start: 28,
              end: 33,
              left: {
                type: "Identifier",
                start: 28,
                end: 29,
                name: "x"
              },
              operator: "+",
              right: {
                type: "Identifier",
                start: 32,
                end: 33,
                name: "y"
              }
            }
          }]
        },
        expression: false
      }
    }
  }]
});

test("f = uint func(x, y) { return x + y }", {
  type: "Program",
  start: 0,
  end: 36,
  body: [{
    type: "ExpressionStatement",
    start: 0,
    end: 36,
    expression: {
      type: "AssignmentExpression",
      start: 0,
      end: 36,
      operator: "=",
      left: {
        type: "Identifier",
        start: 0,
        end: 1,
        name: "f"
      },
      right: {
        type: "FunctionExpression",
        start: 4,
        end: 36,
        id: {
          type: "Identifier",
          start: 9,
          end: 13,
          name: "func"
        },
        params: [
          {
            type: "Identifier",
            start: 14,
            end: 15,
            name: "x"
          },
          {
            type: "Identifier",
            start: 17,
            end: 18,
            name: "y"
          }
        ],
        defaults: [],
        rest: null,
        generator: false,
        binaryType: {
          type: "Identifier",
          start: 4,
          end: 8,
          name: "uint"
        },
        body: {
          type: "BlockStatement",
          start: 20,
          end: 36,
          body: [{
            type: "ReturnStatement",
            start: 22,
            end: 34,
            argument: {
              type: "BinaryExpression",
              start: 29,
              end: 34,
              left: {
                type: "Identifier",
                start: 29,
                end: 30,
                name: "x"
              },
              operator: "+",
              right: {
                type: "Identifier",
                start: 33,
                end: 34,
                name: "y"
              }
            }
          }]
        },
        expression: false
      }
    }
  }]
});