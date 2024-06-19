import { expect } from "chai";
import { describe } from "mocha";
import { shell_sort } from "../algoritms/sort/shell_sort.js";

describe("Сортировка Шелла лучший O(n), худший O(n*(log(n))^2) | O(n^(3/2)), НЕ УСТОЙЧИВ ([1,1] - поменяются местами), память O(1)",()=>{
    it("Массив [1000,200,30,4,-50,0]",()=>{
        expect(shell_sort([1000,200,30,4,-50,0]).toString()).equal([-50,0,4,30,200,1000].toString());
    })
    it("Массив [-50]",()=>{
        expect(shell_sort([-50]).toString()).equal([-50].toString());
    })
    it("Массив []",()=>{
        expect(shell_sort([])).equal(null);
    })
})