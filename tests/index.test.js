// TODO: Write some tests for this project

const { getCode } = require("../dist/index");

describe("httpsc", () => {
  test("getCode returns a correct values", () => {
    const received = getCode(404);
    const expected = {
      code: 404,
      description:
        "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.",
      shortDescription: "Not Found"
    };

    expect(received).toEqual(expected);
  });

  test("getCode returns null for nonexisting values", () => {
    const received = getCode(123456789);
    const expected = undefined;

    expect(received).toEqual(expected);
  });
});
