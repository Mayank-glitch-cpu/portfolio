"use client"

import { useEffect, useState } from 'react'

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const incrementCount = async () => {
      try {
        console.log('Fetching visit count...')
        const response = await fetch('/api/visit', { method: 'POST' })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log('Received data:', data)
        if (data.error) {
          throw new Error(data.error)
        }
        setCount(data.count)
      } catch (error) {
        console.error('Error fetching visit count:', error)
        // Check if error is an instance of Error before accessing message
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      }
    }

    incrementCount()
  }, [])

  console.log('Current count:', count)

  if (error) {
    return (
      <div className="fixed bottom-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm z-50 shadow-lg">
        Error: {error}
      </div>
    )
  }

  if (count === null) return null

  return (
    <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm z-50 shadow-lg border-2 border-secondary">
      Visits: {count}
    </div>
  )
}
