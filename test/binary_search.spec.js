import { expect } from "chai";
import { describe } from "mocha";
import { binary_search } from "../algoritms/search/binary_search.js";

describe("Бинарный поиск (только для отсортированных массивов) лучший =  О(1), худший = О(log(n)) (основание у log  = 2) , память O(1) ",()=>{
    it("Массив [-1,0,1,2,3,4,5,6,7,8,9,10] ищем 4",()=>{
        expect(binary_search([-1,0,1,2,3,4,5,6,7,8,9,10],4)).equal(5);
    })
    it("Массив [-1,0,1,2,3,4,5,6,7,8,9,10] ищем -1",()=>{
        expect(binary_search([-1,0,1,2,3,4,5,6,7,8,9,10],-1)).equal(0);
    })
    it("Массив [] ищем 32",()=>{
        expect(binary_search([],32)).equal(null);
    })
    it("Массив [1] ищем 32",()=>{
        expect(binary_search([1],32)).equal(null);
    })
})