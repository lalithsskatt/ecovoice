function Toast({ message, type = 'info', visible }) {
  if (!visible || !message) {
    return null
  }

  const styles = {
    info: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300',
    success: 'border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950/60 dark:text-green-300',
    error: 'border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/60 dark:text-red-300',
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 rounded-2xl border px-4 py-3 shadow-lg ${styles[type]}`}>
      {message}
    </div>
  )
}

export default Toast
