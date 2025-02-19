// "use client"

// import type React from "react"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export function SignUpForm() {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const router = useRouter()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     // TODO: Implement sign up logic
//     console.log("Sign up attempt with:", { name, email, password })
//     router.push("/dashboard")
//   }

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
//       <div>
//         <Label htmlFor="name">Name</Label>
//         <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//       </div>
//       <div>
//         <Label htmlFor="email">Email</Label>
//         <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <Label htmlFor="password">Password</Label>
//         <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       </div>
//       <Button type="submit" className="w-full">
//         Sign Up
//       </Button>
//     </form>
//   )
// }



'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signUp } from '@/app/actions/auth'

export function SignUpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await signUp(name, email, password)
    
    if (result.success) {
      router.push('/dashboard')
    } else {
      setError(result.error || 'Something went wrong')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
          {error}
        </div>
      )}
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  )
}

