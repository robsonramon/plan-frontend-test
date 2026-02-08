'use client'
import React from 'react'

import { useIsMobile } from '@/hooks/useIsMobile'

import styles from './Pagination.module.scss'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (_page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const isMobile = useIsMobile()
  if (totalPages <= 1) return null
  const getPages = () => {
    const pages: (number | 'dots')[] = []
    const delta = isMobile ? 0 : 1

    const range: number[] = []

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i > 0 && i <= totalPages) {
        range.push(i)
      }
    }

    if (!range.includes(1)) {
      pages.push(1)
      if (range[0] > 2) pages.push('dots')
    }

    range.forEach((p) => pages.push(p))

    if (!range.includes(totalPages)) {
      if (range[range.length - 1] < totalPages - 1) pages.push('dots')
      pages.push(totalPages)
    }

    return pages
  }

  const pages = getPages()

  return (
    <nav className={styles.pagination} aria-label="Paginação">
      <button
        aria-label="Página anterior"
        className={styles.arrow}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}>
        ←
      </button>

      <ul className={styles.pages}>
        {pages.map((page, index) =>
          page === 'dots' ? (
            <li key={`dots-${index}`} className={styles.dots}>
              …
            </li>
          ) : (
            <li key={page}>
              <button
                className={`${styles.pageButton} ${
                  page === currentPage ? styles.active : ''
                }`}
                onClick={() => onPageChange(page)}
                aria-current={page === currentPage ? 'page' : undefined}>
                {page}
              </button>
            </li>
          ),
        )}
      </ul>

      <button
        aria-label="Próxima página"
        className={styles.arrow}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}>
        →
      </button>
    </nav>
  )
}
