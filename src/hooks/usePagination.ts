'use client'

import { useEffect, useState } from 'react'

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const paginatedItems = items.slice(startIndex, endIndex)

  useEffect(() => {
    setCurrentPage(1)
  }, [itemsPerPage, items.length])

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedItems,
  }
}
