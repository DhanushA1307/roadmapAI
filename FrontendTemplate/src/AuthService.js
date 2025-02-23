import pb from './pocketbase'  // Import the PocketBase client

// Register User
export const register = async (email, password) => {
  try {
    const user = await pb.collection('users').create({
      email,
      password
    });
    return user;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};

// Login User
export const login = async (email, password) => {
  try {
    const authData = await pb.collection('users').authWithPassword(email, password);
    return authData;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

// Logout User
export const logout = () => {
  pb.authStore.clear();  // Clears session after logout
  window.location.href="/";
};

// Check if User is Authenticated
export const isAuthenticated = () => {
  return pb.authStore.isValid;
};
