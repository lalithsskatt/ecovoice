import { useState } from 'react'

function ImageUpload({ label, accept = 'image/*', onChange, className = '' }) {
  const [preview, setPreview] = useState('')

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    setPreview(URL.createObjectURL(file))
    onChange?.(event)
  }

  return (
    <div className={`space-y-3 ${className}`.trim()}>
      {label && <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">{label}</label>}
      <input type="file" accept={accept} onChange={handleFileChange} className="block w-full text-sm text-slate-700 dark:text-slate-100" />
      {preview && <img src={preview} alt="Preview" className="mt-3 max-h-60 w-full rounded-3xl object-cover" />}
    </div>
  )
}

export default ImageUpload
