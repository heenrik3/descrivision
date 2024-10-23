import { useContext, useState, createContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(true)
	const user = {
		name: 'Henrique',
		password: '',
	}

	const login = () => setIsAuth(true)
	const logout = () => setIsAuth(false)

	const value = { isAuth, login, logout, user }

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
