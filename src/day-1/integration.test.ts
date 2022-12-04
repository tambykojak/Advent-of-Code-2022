import { partOne, partTwo } from "."

describe("Problem 1", () => {
    let input = [[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]]
    let newLineSeperator = "\r\n"
    let inputStr = input.map((i) => i.join(newLineSeperator)).join(newLineSeperator + newLineSeperator)  

    it("Part 1", () => {
        const answer = partOne(inputStr)
        expect(answer).toBe(24000)
    })

    it("Part 2", () => {
        const answer = partTwo(inputStr)
        expect(answer).toBe(45000)
    })
})