export class Dashboard {
    Elements = {
        formContactEmail: () => cy.get('#recipient-email'),
        formContactName: () => cy.get('#recipient-name'),
        formContactMessage: () => cy.get('#message-text'),
        sendMessageBtn: () => cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        menuBtn: () => cy.get('.navbar-nav > .nav-item > .nav-link'),
        usernameInput: ()=> cy.get('#loginusername', {timeout: 30000}),
        passwordInput: ()=> cy.get('#loginpassword', {timeout: 30000}),
        loginBtn: ()=> cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary', {timeout: 30000}),
        categoriesSection: ()=> cy.get('#cat'),
        usernameSignUp: ()=> cy.get('#sign-username', {timeout: 30000}),
        passwordSignUp: ()=> cy.get('#sign-password', {timeout: 30000}),
        signUpBtn: ()=> cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        signUpNavbar: ()=> cy.get('#signin2')
    }

    menuPageBtn(){
        return this.Elements.menuBtn()
    }


    contactEmail(){
        return this.Elements.formContactEmail()
    }

    contactName(){
        return this.Elements.formContactName()
    }

    contactMessage(){
        return this.Elements.formContactMessage()
    }

    sendMessage(){
        return this.Elements.sendMessageBtn()
    }

    username(){
        return this.Elements.usernameInput()
    }

    password(){
        return this.Elements.passwordInput()
    }

    loginButton(){
        return this.Elements.loginBtn()
    }

    categories(){
        return this.Elements.categoriesSection()
    }

    usernameSignUp(){
        return this.Elements.usernameSignUp()
    }

    passwordSignUp(){
        return this.Elements.passwordSignUp()
    }

    signUp(){
        return this.Elements.signUpBtn()
    }

    signUpNav(){
        return this.Elements.signUpNavbar()
    }

}
