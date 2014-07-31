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

test("s = struct { uint x; if (x > 0) uint y }", {
  type: "Program",
  start: 0,
  end: 40,
  body: [{
    type: "ExpressionStatement",
    start: 0,
    end: 40,
    expression: {
      type: "AssignmentExpression",
      start: 0,
      end: 40,
      operator: "=",
      left: {
        type: "Identifier",
        start: 0,
        end: 1,
        name: "s"
      },
      right: {
        type: "StructExpression",
        start: 4,
        end: 40,
        id: null,
        params: [],
        defaults: [],
        rest: null,
        generator: false,
        binaryType: null,
        body: {
          type: "BlockStatement",
          start: 11,
          end: 40,
          body: [
            {
              type: "VariableDeclaration",
              start: 13,
              end: 19,
              declarations: [{
                type: "VariableDeclarator",
                start: 18,
                end: 19,
                id: {
                  type: "Identifier",
                  start: 18,
                  end: 19,
                  name: "x"
                },
                init: null
              }],
              kind: "typed",
              binaryType: {
                type: "Identifier",
                start: 13,
                end: 17,
                name: "uint"
              }
            },
            {
              type: "IfStatement",
              start: 21,
              end: 38,
              test: {
                type: "BinaryExpression",
                start: 25,
                end: 30,
                left: {
                  type: "Identifier",
                  start: 25,
                  end: 26,
                  name: "x"
                },
                operator: ">",
                right: {
                  type: "Literal",
                  start: 29,
                  end: 30,
                  value: 0,
                  raw: "0"
                }
              },
              consequent: {
                type: "VariableDeclaration",
                start: 32,
                end: 38,
                declarations: [{
                  type: "VariableDeclarator",
                  start: 37,
                  end: 38,
                  id: {
                    type: "Identifier",
                    start: 37,
                    end: 38,
                    name: "y"
                  },
                  init: null
                }],
                kind: "typed",
                binaryType: {
                  type: "Identifier",
                  start: 32,
                  end: 36,
                  name: "uint"
                }
              },
              alternate: null
            }
          ]
        },
        expression: false
      }
    }
  }]
});

test("s = struct (x) { if (x > 0) uint y }", {
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
        name: "s"
      },
      right: {
        type: "StructExpression",
        start: 4,
        end: 36,
        id: null,
        params: [{
          type: "Identifier",
          start: 12,
          end: 13,
          name: "x"
        }],
        defaults: [],
        rest: null,
        generator: false,
        binaryType: null,
        body: {
          type: "BlockStatement",
          start: 15,
          end: 36,
          body: [{
            type: "IfStatement",
            start: 17,
            end: 34,
            test: {
              type: "BinaryExpression",
              start: 21,
              end: 26,
              left: {
                type: "Identifier",
                start: 21,
                end: 22,
                name: "x"
              },
              operator: ">",
              right: {
                type: "Literal",
                start: 25,
                end: 26,
                value: 0,
                raw: "0"
              }
            },
            consequent: {
              type: "VariableDeclaration",
              start: 28,
              end: 34,
              declarations: [{
                type: "VariableDeclarator",
                start: 33,
                end: 34,
                id: {
                  type: "Identifier",
                  start: 33,
                  end: 34,
                  name: "y"
                },
                init: null
              }],
              kind: "typed",
              binaryType: {
                type: "Identifier",
                start: 28,
                end: 32,
                name: "uint"
              }
            },
            alternate: null
          }]
        },
        expression: false
      }
    }
  }]
});

test("s = struct S { uint x, y }", {
  type: "Program",
  start: 0,
  end: 26,
  body: [{
    type: "ExpressionStatement",
    start: 0,
    end: 26,
    expression: {
      type: "AssignmentExpression",
      start: 0,
      end: 26,
      operator: "=",
      left: {
        type: "Identifier",
        start: 0,
        end: 1,
        name: "s"
      },
      right: {
        type: "StructDeclaration",
        start: 4,
        end: 26,
        id: {
          type: "Identifier",
          start: 11,
          end: 12,
          name: "S"
        },
        params: [],
        defaults: [],
        rest: null,
        generator: false,
        binaryType: null,
        body: {
          type: "BlockStatement",
          start: 13,
          end: 26,
          body: [{
            type: "VariableDeclaration",
            start: 15,
            end: 24,
            declarations: [
              {
                type: "VariableDeclarator",
                start: 20,
                end: 21,
                id: {
                  type: "Identifier",
                  start: 20,
                  end: 21,
                  name: "x"
                },
                init: null
              },
              {
                type: "VariableDeclarator",
                start: 23,
                end: 24,
                id: {
                  type: "Identifier",
                  start: 23,
                  end: 24,
                  name: "y"
                },
                init: null
              }
            ],
            kind: "typed",
            binaryType: {
              type: "Identifier",
              start: 15,
              end: 19,
              name: "uint"
            }
          }]
        },
        expression: false
      }
    }
  }]
});

test("struct (x) {} x", {
  type: "Program",
  start: 0,
  end: 15,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 15,
    declarations: [{
      type: "VariableDeclarator",
      start: 14,
      end: 15,
      id: {
        type: "Identifier",
        start: 14,
        end: 15,
        name: "x"
      },
      init: null
    }],
    kind: "typed",
    binaryType: {
      type: "StructExpression",
      start: 0,
      end: 13,
      id: null,
      params: [{
        type: "Identifier",
        start: 8,
        end: 9,
        name: "x"
      }],
      defaults: [],
      rest: null,
      generator: false,
      binaryType: null,
      body: {
        type: "BlockStatement",
        start: 11,
        end: 13,
        body: []
      },
      expression: false
    }
  }]
});

test("struct S { uint x, y }", {
  type: "Program",
  start: 0,
  end: 22,
  body: [{
    type: "StructDeclaration",
    start: 0,
    end: 22,
    id: {
      type: "Identifier",
      start: 7,
      end: 8,
      name: "S"
    },
    params: [],
    defaults: [],
    rest: null,
    generator: false,
    binaryType: null,
    body: {
      type: "BlockStatement",
      start: 9,
      end: 22,
      body: [{
        type: "VariableDeclaration",
        start: 11,
        end: 20,
        declarations: [
          {
            type: "VariableDeclarator",
            start: 16,
            end: 17,
            id: {
              type: "Identifier",
              start: 16,
              end: 17,
              name: "x"
            },
            init: null
          },
          {
            type: "VariableDeclarator",
            start: 19,
            end: 20,
            id: {
              type: "Identifier",
              start: 19,
              end: 20,
              name: "y"
            },
            init: null
          }
        ],
        kind: "typed",
        binaryType: {
          type: "Identifier",
          start: 11,
          end: 15,
          name: "uint"
        }
      }]
    },
    expression: false
  }]
});

test("struct S { uint x, y } s", {
  type: "Program",
  start: 0,
  end: 24,
  body: [{
    type: "VariableDeclaration",
    start: 0,
    end: 24,
    declarations: [{
      type: "VariableDeclarator",
      start: 23,
      end: 24,
      id: {
        type: "Identifier",
        start: 23,
        end: 24,
        name: "s"
      },
      init: null
    }],
    kind: "typed",
    binaryType: {
      type: "StructDeclaration",
      start: 0,
      end: 22,
      id: {
        type: "Identifier",
        start: 7,
        end: 8,
        name: "S"
      },
      params: [],
      defaults: [],
      rest: null,
      generator: false,
      binaryType: null,
      body: {
        type: "BlockStatement",
        start: 9,
        end: 22,
        body: [{
          type: "VariableDeclaration",
          start: 11,
          end: 20,
          declarations: [
            {
              type: "VariableDeclarator",
              start: 16,
              end: 17,
              id: {
                type: "Identifier",
                start: 16,
                end: 17,
                name: "x"
              },
              init: null
            },
            {
              type: "VariableDeclarator",
              start: 19,
              end: 20,
              id: {
                type: "Identifier",
                start: 19,
                end: 20,
                name: "y"
              },
              init: null
            }
          ],
          kind: "typed",
          binaryType: {
            type: "Identifier",
            start: 11,
            end: 15,
            name: "uint"
          }
        }]
      },
      expression: false
    }
  }]
});

// fail tests

testFail("uint x() {}, y", "Unexpected token (1:11)");

testFail("uint x, y() {}", "Unexpected token (1:12)");

testFail("uint x() = 1", "Unexpected token (1:9)");

testFail("struct s", "Unexpected token (1:8)");

testFail("struct (x) {}", "Unexpected token (1:13)");
