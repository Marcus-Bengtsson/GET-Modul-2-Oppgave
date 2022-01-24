function goToLogin(){
    model.app.page = 'userLogin';
    updateMainView();
}

// Check if unputs are valid and if so, store them as a new user
    // Store firstname in input