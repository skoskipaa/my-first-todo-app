import React from 'react'
import renderer from 'react-test-renderer'

import App from './App'

describe('The <App /> component', () => {
    it('has 4 children', () => {
        const tree = renderer.create(<App />).toJSON()
        expect(tree.children.length).toBe(4)
    })

    // use 'yarn test --updateSnapshot' after UI changes
    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
