import { parseInputStringIntoCalorieGroups, getHighestNumbers, sumCalorieGroups } from "."

describe("Problem 1", () => {
    describe("#parseInputIntoCalorieGroupings", () => {
        it("parses the input string into a 2d array of numbers.", () => {
            let input = [[458, 236, 7778], [2053], [1562, 9848, 132], [4910, 4939, 1389, 3753, 312]]
            let newLineSeperator = "\r\n"
            let inputStr = input.map((i) => i.join(newLineSeperator)).join(newLineSeperator + newLineSeperator)

            const calorieGroupings = parseInputStringIntoCalorieGroups(inputStr)
            expect(calorieGroupings).toHaveLength(4)
            expect(calorieGroupings[0]).toHaveLength(3)
            expect(calorieGroupings[1]).toHaveLength(1)
            expect(calorieGroupings[2]).toHaveLength(3)
            expect(calorieGroupings[3]).toHaveLength(5)
        })
    })

    describe("#sumCalorieGroups", () => {
        it("sums the calorie groups.", () => {
            let input = [[1, 2, 3], [1], [1, 2, 3], [1, 2, 3, 4, 5]]
            const sums = sumCalorieGroups(input)
            expect(sums).toHaveLength(4)
            expect(sums[0]).toBe(6)
            expect(sums[1]).toBe(1)
            expect(sums[2]).toBe(6)
            expect(sums[3]).toBe(15)
        })
    })

    describe("#getHighestNumbers", () => {
        it("returns the correct amount of highest numbers", () => {
            let input = [1, 2, 3, 4, 5]
            expect(getHighestNumbers(input, 1)).toHaveLength(1)
            expect(getHighestNumbers(input, 2)).toHaveLength(2)
            expect(getHighestNumbers(input, 3)).toHaveLength(3)
            expect(getHighestNumbers(input, 4)).toHaveLength(4)
        })

        it("returns the correct highest numbers", () => {
            let input = [1, 2, 3, 4, 5]
            const highestNumbers = getHighestNumbers(input, 2)
            expect(highestNumbers).toContain(5)
            expect(highestNumbers).toContain(4)
        })

        describe("when the amount of numbers is less than the target amount of numbers.", () => {
            it("returns the input array", () => {
                let input = [1, 2, 3, 4, 5]
                const highestNumbers = getHighestNumbers(input, 10)
                expect(highestNumbers).toEqual(input)
            })
        })
    })
})