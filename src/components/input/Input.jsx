import React, { useState } from "react";

export default function Input({
  cls, value, click,
  pl, type, src,
  id,
  name,
  keypress,
  keydown,
  keyup,
  req,
  apt,
  disable,
  height,
  width,
  change,
  checked,
  step,
  multiple,
  readOnly,
  max,
  min,
  maxLen,
  minLen,
  alt,
  styles, focus

}) {

  if (click && !src) {
    return (
      <input type={ type } value={ value } disabled={ disable ? disable : false } name={ name } accept={ apt } className={ cls } height={ height }
        width={ width }
        id={ id } onClick={ click } style={ styles }
      />
    );
  }
  if (type === "textarea") {
    return (
      <textarea value={ value } onKeyDown={ keypress || keydown } onKeyUp={ keyup } disabled={ disable ? disable : false } name={ name } className={ cls } id={ id } onChange={ change }
        onClick={ click } style={ styles } placeholder={ pl }
        maxLength={ maxLen }
        height={ height }
        onFocus={ focus }
        width={ width } minLength={ minLen }
        min={ min }
        max={ max }  >
      </textarea>
    );
  }
  if (src && [ "file", "audio", "vidoe" ].includes(type)) {
    return (
      <>
        <input type={ type } onChange={ change } name={ name } style={ { display: 'none' } } accept={ apt } multiple={ multiple } />
        <input
          type="image" disabled={ disable ? disable : false } height={ height }
          width={ width }
          className={ cls } id={ id } src={ src }
          onClick={ (e) => { e.preventDefault(), document.getElementsByName(name)[ 0 ].click() } } style={ styles } />
        <label className={ cls + '-label' } id={ id + '-label' }>
          { pl }
        </label>
      </>
    )
  } else
    if (src) {
      return <input type="image" name={ name } disabled={ disable ? disable : false } className={ cls } id={ id } src={ src }
        height={ height }
        width={ width } onClick={ click } style={ styles } onKeyDown={ keypress || keydown } onKeyUp={ keyup } alt={ alt } />;
    } else {
      return (
        <input
          type={ type }
          required={ req ? req : true }
          placeholder={ pl }
          name={ name }
          step={ step }
          accept={ apt }
          disabled={ disable ? disable : false }
          checked={ checked }
          className={ cls }
          value={ value }
          id={ id }
          maxLength={ maxLen }
          minLength={ minLen }
          min={ min }
          max={ max }
          height={ height }
          width={ width }
          onChange={ change }
          style={ styles }
          onFocus={ focus }
          onKeyDown={ keypress || keydown }
          onKeyUp={ keyup } />
      );
    }
}
