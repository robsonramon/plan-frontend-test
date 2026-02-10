'use client'

import { useEffect, useState } from 'react'

export function useItemsPerPage() {
  const getItemsPerPage = () => {
    const width = window.innerWidth

    if (width <= 320) return 2
    if (width <= 767) return 2
    if (width <= 1024) return 6
    return 8
  }

  const [itemsPerPage, setItemsPerPage] = useState(8)

  useEffect(() => {
    function handleResize() {
      setItemsPerPage(getItemsPerPage())
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return itemsPerPage
}
