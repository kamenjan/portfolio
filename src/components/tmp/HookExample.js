import React, { useEffect, useState, useRef } from 'react'

const HookExample = props => {
  // console.log('ExampleHook functional component called')
  const [initialized, setInitialized] = useState('no')

  React.useEffect(() => {
    console.log('rendered MyComponent')
    // setInitialized('jeste')

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log('unmounting...')
  })

  return <div>{initialized}</div>
}

export default React.memo(HookExample)
