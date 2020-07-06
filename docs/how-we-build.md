### Why Feature-first

A very nice article [here](https://engineering.kapost.com/2016/01/organizing-large-react-applications/) outlines several
 benefits to feature-first. By doing so, multiple teams in different timezones at Monstar can work on the same project by
 staying within their own isolated feature directory and rarely need to traverse feature boundaries. This will enable
 greater ownership over a feature and enable the product to scale as we continue adding more features.


## Code Style

Typescript: We write our applications in Typescript using types, and avoiding `any` at all costs. We allow Typescript to
provide us full type-safety and powerful autocompletion.

- Use arrow functions when you can
- Specify the least-most-specific type. (i.e. do not use `any`).

```typescript

export const add(a: number, b: number): number => a + b;

```


### React Components: Functional-first

Write functional components and _avoid_ class components. If you need `state` and class component-like methods use
[hooks](https://reactjs.org/docs/hooks-intro.html).

Hooks come with a set of [gotchas](https://medium.com/fuzz/react-hooks-gotchas-b8fcd25cc1b6) that you should be aware of.

Functional components do have some drawbacks, such as same ability to override `shouldComponentUpdate`. Wrapping the export like:

```
import deepEqual from "fast-deep-equal";

export default memo(MyComponent, (prev, next) => deepEqual(prev, next));
```

Can help produce similar capabilities.

#### Avoid Direct Networking Code in your components, use Redux

Use Redux to load and store state from the network into the global store.
Do not store networking data in the `state` of your component. This will allow sharing state across component
boundaries without need to pass down props through multiple levels. Pass down props can lead to a lot of unnecessary renders
throughout your hierarchy.

Using [redux-saga](https://github.com/redux-saga/redux-saga), we can control how data loads to a very fine level and execute
`async` actions in a powerful and concise way.

#### When you need global data, use reselect + selectors

Use [reselect](https://github.com/reduxjs/reselect) for more expensive global calculations such as `filter`, `for` loops,
`map`, and other transformations on collections of data. This enables performance benefits by avoiding recalculating unless
inputs change during renders.

With Rematch, we use [rematch-select](https://github.com/rematch/rematch/blob/master/docs/plugins/select.md) to perform
efficient selections with Rematch.