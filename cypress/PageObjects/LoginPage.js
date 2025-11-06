class Login {
    user="#username"
    pass= "#password"
    click="#submit"
    verify=".post-title"
    logoutt=".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color"

  setUserName(username) {
    cy.get(this.user).type(username);
  }
  setPassword(password) {
    cy.get(this.pass).type(password);
  }
  submit() {
    cy.get(this.click).click();
  }

  verifyLogin() {
    cy.get(this.verify).should("have.text", "Logged In Successfully");
  }

  logout(){
    cy.get(this.logoutt).click()
  }
}

export default Login;
