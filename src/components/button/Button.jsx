import React from 'react'
import "./button.css"

export default function Button({ cls, id, style, value, click }) {
 
 
 return (
  <button className={ cls ? cls : "btnComponent" } id={ id } style={ style } onClick={ click } >{ value } </button>

 )
}
