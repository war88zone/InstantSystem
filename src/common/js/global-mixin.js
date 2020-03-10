/**
 * Global Vue JS Mixin
 * - beforeMount
 * - EpiLang
 *
 * @type {Object}
 */

import * as breakpoints from './global-breakpoints'
import Vue from 'vue'

// Create vue component to update breakpoint and orientation on event changes
// using vue component reactivity
const reactorComponent = new Vue({
  data () {
    return {
      currentBreakpoint: null,
      currentOrientation: null
    }
  }
})

// Manage device && orientation with events
const mediaQueries = () => {
  const updateCurrentBreakpoint = () => {
    let width = window.innerWidth

    if (width < breakpoints.BREAKPOINT_TABLET_WIDTH) {
      reactorComponent.currentBreakpoint = breakpoints.BREAKPOINT_PHONE
    } else if (width < breakpoints.BREAKPOINT_DESKTOP_WIDTH) {
      reactorComponent.currentBreakpoint = breakpoints.BREAKPOINT_TABLET
    } else {
      reactorComponent.currentBreakpoint = breakpoints.BREAKPOINT_DESKTOP
    }
  }

  const updateCurrentOrientation = () => {
    let mql = window.matchMedia('(orientation: portrait)')

    if (mql.matches) {
      reactorComponent.currentOrientation = breakpoints.BREAKPOINT_PORTRAIT
    } else {
      reactorComponent.currentOrientation = breakpoints.BREAKPOINT_LANDSCAPE
    }
  }

  window.addEventListener('resize', () => {
    updateCurrentBreakpoint()
  })

  window.addEventListener('orientationchange', () => {
    updateCurrentOrientation()
  })

  updateCurrentBreakpoint()
  updateCurrentOrientation()
}

mediaQueries()

export const globalMixin = {
  computed: {
    $_globalMixin_currentBreakpoint () {
      return reactorComponent.currentBreakpoint
    },
    $_globalMixin_currentOrientation () {
      return reactorComponent.currentOrientation
    }
  }
}
