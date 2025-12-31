"use client"

import { useEffect } from "react"

export default function useAntiInspect() {
  useEffect(() => {
    // Disable right-click
    const disableContextMenu = (e: MouseEvent) => e.preventDefault()
    document.addEventListener("contextmenu", disableContextMenu)

    // Disable key shortcuts
    const disableKeys = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
      ) {
        e.preventDefault()
      }
    }
    document.addEventListener("keydown", disableKeys)

    // Disable image drag / save
    const blockImageActions = (e: Event) => {
      const target = e.target as HTMLElement
      if (target?.tagName === "IMG") {
        e.preventDefault()
      }
    }
    document.addEventListener("dragstart", blockImageActions)
    document.addEventListener("mousedown", blockImageActions)
    document.addEventListener("copy", blockImageActions)

    // DevTools size detection
    let devtoolsOpen = false
    const threshold = 160

    const interval = setInterval(() => {
      const widthDiff = window.outerWidth - window.innerWidth
      const heightDiff = window.outerHeight - window.innerHeight

      if (widthDiff > threshold || heightDiff > threshold) {
        if (!devtoolsOpen) {
          devtoolsOpen = true
          document.body.innerHTML = ""
          window.location.href = "/access-denied"
        }
      } else {
        devtoolsOpen = false
      }
    }, 500)

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu)
      document.removeEventListener("keydown", disableKeys)
      document.removeEventListener("dragstart", blockImageActions)
      document.removeEventListener("mousedown", blockImageActions)
      document.removeEventListener("copy", blockImageActions)
      clearInterval(interval)
    }
  }, [])
}
