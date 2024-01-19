import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Thực hiện bất kỳ logic đăng nhập bổ sung nào ở đây
    setUser(userData);
  };

  const logout = () => {
    // Thực hiện bất kỳ logic đăng xuất nào ở đây
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
