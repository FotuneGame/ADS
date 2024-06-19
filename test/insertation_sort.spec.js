import { expect } from "chai";
import { describe } from "mocha";
import { insertation_sort } from "../algoritms/sort/insertation_sort.js";

describe("Сортировка вставками лучший O(n), худший O(n^2), УСТОЙЧИВ ([1,1] - не поменяются местами), память O(1)",()=>{
    it("Массив [1000,200,30,4,-50,0]",()=>{
        expect(insertation_sort([1000,200,30,4,-50,0]).toString()).equal([-50,0,4,30,200,1000].toString());
    })
    it("Массив [-50]",()=>{
        expect(insertation_sort([-50]).toString()).equal([-50].toString());
    })
    it("Массив []",()=>{
        expect(insertation_sort([])).equal(null);
    })
})