import React from 'react'
import "../common/Spinner.css"


export default function Spinner(variant) {
  return (
    
      <div className={"spinner-border text-" + variant + " text-center"} role="status">
          <span className="sr-only"></span>
      </div>
    
  )
}
