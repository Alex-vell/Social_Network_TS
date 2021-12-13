import React from "react";
import TestRenderer from 'react-test-renderer';
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = TestRenderer.create(<ProfileStatusWithHooks status='We fly!!!' updateUserStatus={console.log}/>)
        const instance = component.root
        expect(instance.props.status).toBe('We fly!!!')
    })

    test('after creation <span> should be displayed', () => {
        const component = TestRenderer.create(<ProfileStatusWithHooks status='We fly!!!' updateUserStatus={console.log}/>)
        const root = component.root
        const span = root.findAllByType('span')
        expect(span).not.toBeNull()
    })

    test('after creation <input> should not be displayed', () => {
        const component = TestRenderer.create(<ProfileStatusWithHooks status='We fly!!!' updateUserStatus={console.log}/>)
        const root = component.root

        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })

    test('after creation <span> should contains correct status', () => {
        const component = TestRenderer.create(<ProfileStatusWithHooks status='We fly!!!' updateUserStatus={console.log}/>)
        const root = component.root
        const span = root.findByType('span')
        expect(span.children[0]).toBe('We fly!!!')
    })

    test('input should be displayed in editMode instead of span', () => {
        const component = TestRenderer.create(<ProfileStatusWithHooks status='We fly!!!' updateUserStatus={console.log}/>)
        const root = component.root
        const span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('We fly!!!')
    })

    // test('callback should be called', () => {
    //     const mockCallback = jest.fn()
    //     const component = TestRenderer.create(<ProfileStatusWithHooks status='We fly!!!' updateUserStatus={mockCallback}/>)
    //     const instance = component.getInstance()
    //     instance.deactivateEditMode()
    //     expect(mockCallback.mock.calls.length).toBe(1)
    // })
})


