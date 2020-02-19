import React, { useRef, forwardRef } from 'react'

function App() {
  console.log(`App render:${Date.now()}`)
  const buttonRef = useRef(null)

  return (
    <div>
       <div>{Date.now()}</div>
      <Button3 ref={buttonRef}></Button3>
    </div>
  )
}

// Button2 这个函数会在 APP 形成 virtual DOM 之后执行 
const Button2 = (props, ref) => {
  console.log(`Button2执行:${Date.now()}`)
  console.log(ref)
return <button ref={ref} {...props}>hahha </button>
}

const Button3 = forwardRef(Button2)
console.log(Button3)


export default App