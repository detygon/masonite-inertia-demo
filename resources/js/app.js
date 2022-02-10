import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

createInertiaApp({
  resolve: name => require(`./pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})

InertiaProgress.init({ color: '#4B5563' });

console.log('app.js')
