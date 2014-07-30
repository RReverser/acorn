// Tests for typed scripting on top of JavaScript.

if (typeof exports != "undefined") {
  var test = require("./driver.js").test;
  var testFail = require("./driver.js").testFail;
  var testAssert = require("./driver.js").testAssert;
}

// success tests

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

test("f = uint of => !of", {
  type: "Program",
  start: 0,
  end: 18,
  body: [{
    type: "ExpressionStatement",
    start: 0,
    end: 18,
    expression: {
      type: "AssignmentExpression",
      start: 0,
      end: 18,
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
        end: 18,
        id: null,
        params: [{
          type: "Identifier",
          start: 9,
          end: 11,
          name: "of"
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
          type: "UnaryExpression",
          start: 15,
          end: 18,
          operator: "!",
          prefix: true,
          argument: {
            type: "Identifier",
            start: 16,
            end: 18,
            name: "of"
          }
        },
        expression: true
      }
    }
  }]
});

test("uint x()", {
  type: "Program",
  start: 0,
  end: 8,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 8,
    declarations: [{
      type: "VariableDeclarator",
      start: 5,
      end: 8,
      id: {
        type: "CallPattern",
        start: 5,
        end: 8,
        callee: {
          type: "Identifier",
          start: 5,
          end: 6,
          name: "x"
        },
        arguments: []
      },
      init: null
    }],
    kind: "typed",
    binaryType: {
      type: "Identifier",
      start: 0,
      end: 4,
      name: "uint"
    }
  }]
});

test("uint x, y()", {
  type: "Program",
  start: 0,
  end: 11,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 11,
    declarations: [
      {
        type: "VariableDeclarator",
        start: 5,
        end: 6,
        id: {
          type: "Identifier",
          start: 5,
          end: 6,
          name: "x"
        },
        init: null
      },
      {
        type: "VariableDeclarator",
        start: 8,
        end: 11,
        id: {
          type: "CallPattern",
          start: 8,
          end: 11,
          callee: {
            type: "Identifier",
            start: 8,
            end: 9,
            name: "y"
          },
          arguments: []
        },
        init: null
      }
    ],
    kind: "typed",
    binaryType: {
      type: "Identifier",
      start: 0,
      end: 4,
      name: "uint"
    }
  }]
});

test("uint x = 0, y = 1", {
  type: "Program",
  start: 0,
  end: 17,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 17,
    declarations: [
      {
        type: "VariableDeclarator",
        start: 5,
        end: 10,
        id: {
          type: "Identifier",
          start: 5,
          end: 6,
          name: "x"
        },
        init: {
          type: "Literal",
          start: 9,
          end: 10,
          value: 0,
          raw: "0"
        }
      },
      {
        type: "VariableDeclarator",
        start: 12,
        end: 17,
        id: {
          type: "Identifier",
          start: 12,
          end: 13,
          name: "y"
        },
        init: {
          type: "Literal",
          start: 16,
          end: 17,
          value: 1,
          raw: "1"
        }
      }
    ],
    kind: "typed",
    binaryType: {
      type: "Identifier",
      start: 0,
      end: 4,
      name: "uint"
    }
  }]
});

// fail tests

testFail("uint x() {}, y", "Unexpected token (1:11)");

testFail("uint x, y() {}", "Unexpected token (1:12)");

testFail("uint x() = 1", "Unexpected token (1:9)");