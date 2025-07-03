const sorting = require("../../app");

describe("Books names test suite", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

  it("Without pararms throw exeption", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });

  it("should be processed identical book titles written in different cases", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "гарри поттер",
      "ГАРРИ ПОТТЕР"
    ];

    const expected = [
      "Властелин Колец",
      "Гарри Поттер",
      "гарри поттер",
      "ГАРРИ ПОТТЕР",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });
});