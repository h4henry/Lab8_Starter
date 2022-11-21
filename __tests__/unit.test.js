// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Function 1
test('111-111-1111 is a phone number', () => {
    expect(functions.isPhoneNumber("111-111-1111")).toBe(true);
  });
test('111-111-1112 is a phone number', () => {
    expect(functions.isPhoneNumber("111-111-1112")).toBe(true);
  });
test('111-111-11 is not a phone number', () => {
    expect(functions.isPhoneNumber("111-111-11")).toBe(false);
  });
  
test('111-111-111 is not a phone number', () => {
    expect(functions.isPhoneNumber("111-111-111")).toBe(false);
  });

// Function 2

test('hhhh@ucsd.edu is an email', () => {
    expect(functions.isEmail("hhhh@ucsd.edu")).toBe(true);
  });
test('1234@ucsd.edu is an email', () => {
    expect(functions.isEmail("1234@ucsd.edu")).toBe(true);
  });
test('111-111-11 is not an email', () => {
    expect(functions.isEmail("111-111-11")).toBe(false);
  });
  
test('111-111-111 is not a an email', () => {
    expect(functions.isEmail("111-111-111")).toBe(false);
  });


// Function 3
test('hhhh@ucsd.edu is a strong password', () => {
    expect(functions.isStrongPassword("hhhh@ucsd.edu")).toBe(true);
  });
test('1234@ucsd.edu is a strong password', () => {
    expect(functions.isStrongPassword("1234@ucsd.edu")).toBe(true);
  });
test('1 is not a strong password', () => {
    expect(functions.isStrongPassword("1")).toBe(false);
  });
test('a is not a strong password', () => {
    expect(functions.isStrongPassword("a")).toBe(false);
  });

// Function 4
test('1/22/2022 is a date', () => {
    expect(functions.isDate("1/22/2022")).toBe(true);
  });
test('1/22/2020 is a date', () => {
    expect(functions.isDate("1/22/2020")).toBe(true);
  });
test('1 is not a date', () => {
    expect(functions.isDate("1")).toBe(false);
  });
test('a is not a date', () => {
    expect(functions.isDate("a")).toBe(false);
  });


// Function 5


test('123 is a hexcolor', () => {
    expect(functions.isHexColor("123")).toBe(true);
  });
test('122 is a hexcolor', () => {
    expect(functions.isHexColor("122")).toBe(true);
  });
test('1 is not a hexcolor', () => {
    expect(functions.isHexColor("1")).toBe(false);
  });
test('a is not a hexcolor', () => {
    expect(functions.isHexColor("a")).toBe(false);
  });