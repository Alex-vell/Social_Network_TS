import React from "react";
import TestRenderer from 'react-test-renderer';
import {Pagination} from "./Pagination";


describe('Pagination component test', () => {
    test('page count is 11 but should be showed only 10', () => {
        const component = TestRenderer.create(<Pagination totalItemsCount={11}
        pageSize={1}
        portionSize={10}
        onPageChangedCallback={() => {}}
        currentPage={1}/>)
        const root = component.root
        const spans = root.findAllByType('span')
        expect(spans.length).toBe(10)
    })

    test('if page count is more then 10 button `>` should be present', () => {
        const component = TestRenderer.create(<Pagination totalItemsCount={11}
                                                          pageSize={1}
                                                          portionSize={10}
                                                          onPageChangedCallback={() => {}}
                                                          currentPage={1}/>)
        const root = component.root
        const button = root.findAllByType('button')
        expect(button.length).toBe(1)
    })

})
