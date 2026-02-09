import React from 'react'

import styles from './Error.module.scss'

type ErrorProps = {
  message?: string
  onRetry?: () => void
}

export function Error({
  message = 'Algo deu errado. Tente novamente.',
  onRetry,
}: ErrorProps) {
  return (
    <div className={styles.wrapper} role="alert" aria-live="assertive">
      <p>{message}</p>

      {onRetry && (
        <button className={styles.button} onClick={onRetry}>
          Tentar novamente
        </button>
      )}
    </div>
  )
}
