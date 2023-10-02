import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const userData = [
  { email: 'yoosghn@gmail.com', password: '1234' },
  { email: 'user@example.com', password: '1234' },
]

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const matchingUser = userData.find(
      (user) => user.email === email && user.password === password
    )

    if (matchingUser) {
      navigate('/')
      setError(null)
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-container">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="input-container">
          <input
            type="text"
            name="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="btn-container">
          <button type="submit" className="login-btn">
            Log In
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
