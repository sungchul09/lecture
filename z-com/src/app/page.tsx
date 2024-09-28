'use client'
import React from 'react'

export default function page() {
  const submit = (formData: any) => {
    if(formData.get('age') !== 0) {
      return { message: 'no number!'}
    }
  }
  return (
    <div>
      <form action={submit}>
        <label htmlFor="age">나이</label>
        <input name="age" id="age"></input>
        <label htmlFor="name"></label>
        <input name="name" id="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
