import { expect } from "chai";
import { describe } from "mocha";
import { select_sort } from "../algoritms/sort/select_sort.js";

describe("Сортировка выбором лучший O(n^2), худший O(n^2), НЕ УСТОЙЧИВ ([1,1] - поменяются местами), память O(1)",()=>{
    it("Массив [1000,200,30,4,-50,0]",()=>{
        expect(select_sort([1000,200,30,4,-50,0]).toString()).equal([-50,0,4,30,200,1000].toString());
    })
    it("Массив [-50]",()=>{
        expect(select_sort([-50]).toString()).equal([-50].toString());
    })
    it("Массив []",()=>{
        expect(select_sort([])).equal(null);
    })
})