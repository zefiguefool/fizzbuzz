import { fizzbuzz } from "../script"


test('Le premier chiffre affiché est 1', function() {
    expect(fizzbuzz(1)).toBe(1)
})

test('On a fizz quand le nombre est divisible par 3', function() {
    expect(fizzbuzz(3)).toBe("fizz")
})

test('On a buzz quand le nombre est divisible par 5', function() {
    expect(fizzbuzz(5)).toBe("buzz")
})

test('On a fizzbuzz est nombre est divisible par 3 et 5', function() {
    expect(fizzbuzz(15)).toBe("fizzbuzz")
})
