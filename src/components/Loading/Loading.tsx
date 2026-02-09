import React from 'react'

import styles from './Loading.module.scss'

type LoadingProps = {
  message?: string
}

export function Loading({
  message = 'Carregando informações...',
}: LoadingProps) {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <div className={styles.spinner} />
      <p>{message}</p>
    </div>
  )
}
