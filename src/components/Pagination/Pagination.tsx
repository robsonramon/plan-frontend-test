'use client'
import React from 'react'

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
  if (totalPages <= 1) return null

  const getPages = () => {
    const pages: (number | 'dots')[] = []

    const showPages = new Set<number>()

    // sempre apresentar as duas primeiras páginas
    showPages.add(1)
    showPages.add(2)

    // sempre apresentar as duas últimas páginas
    showPages.add(totalPages)
    showPages.add(totalPages - 1)

    // páginas próximas da atual
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 0 && i <= totalPages) {
        showPages.add(i)
      }
    }

    const sortedPages = Array.from(showPages).sort((a, b) => a - b)

    sortedPages.forEach((page, index) => {
      if (index > 0 && page - sortedPages[index - 1] > 1) {
        pages.push('dots')
      }
      pages.push(page)
    })

    return pages
  }

  const pages = getPages()

  return (
    <nav className={styles.pagination} aria-label="Paginação">
      <button
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
        className={styles.arrow}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}>
        →
      </button>
    </nav>
  )
}
