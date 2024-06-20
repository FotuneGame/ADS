import { expect } from "chai";
import { describe } from "mocha";
import { bfs } from "../algoritms/search/bfs.js";

// Cписок смежности
const graph = {};
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']
// Матрица смежности
const matrix = [
    [0,1,1,0,0,0,0],
    [0,0,0,0,1,0,0],
    [0,0,0,1,0,1,0],
    [0,0,0,0,1,0,0],
    [0,0,0,0,0,0,1],
    [0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0],
]

describe("Для графа поиск в ширину BFS, O(кол-во вершин + ребёр),  память O(кол-во вершин) (доп АТД Очередь)",()=>{
    it("1) Граф 1 из a в g",()=>{
        expect(bfs(graph,'a','g')).equal(true);
    })
    it("2) Граф 1 из a в n",()=>{
        expect(bfs(graph,'a','n')).equal(false);
    })

})
