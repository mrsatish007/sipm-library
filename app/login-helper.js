// This is a helper script to set up librarian login in localStorage
// You can run this in your browser console to log in as a librarian

function loginAsLibrarian() {
  // Set login status
  localStorage.setItem('isLoggedIn', 'true');
  
  // Set user info with librarian role
  const userInfo = {
    name: 'P V N VARMA',
    role: 'librarian',
    id: 'lib123'
  };
  
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  
  console.log('Logged in as librarian successfully!');
  console.log('You can now navigate to /librarian to see the dashboard with profile');
}

// Execute the function
loginAsLibrarian();