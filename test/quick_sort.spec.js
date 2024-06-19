import { expect } from "chai";
import { describe } from "mocha";
import { quick_sort } from "../algoritms/sort/quick_sort.js";

describe("Сортировка Хоара (быстрая) лучший O(n^2), худший O(n*log(n)), НЕ УСТОЙЧИВ ([1,1] - поменяются местами), память O(n) | O(log(n))",()=>{
    it("Массив [1000,200,30,4,-50,0]",()=>{
        expect(quick_sort([1000,200,30,4,-50,0]).toString()).equal([-50,0,4,30,200,1000].toString());
    })
    it("Массив [-50]",()=>{
        expect(quick_sort([-50]).toString()).equal([-50].toString());
    })
    it("Массив []",()=>{
        expect(quick_sort([]).toString()).equal([].toString());
    })
})