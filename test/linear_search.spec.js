import { expect } from "chai";
import { describe } from "mocha";
import { linear_search } from "../algoritms/search/linear_search.js";

describe("Линейный поиск лучший =  О(1), худший = О(n) , память O(1) ",()=>{
    it("Массив [1,3,5,76,32,0,-1] ищем 32:",()=>{
        expect(linear_search([1,3,5,76,32,0,-1],32)).equal(4);
    })
    it("Массив [] ищем 32",()=>{
        expect(linear_search([],32)).equal(null);
    })
    it("Массив [1] ищем 32",()=>{
        expect(linear_search([1],32)).equal(null);
    })
})