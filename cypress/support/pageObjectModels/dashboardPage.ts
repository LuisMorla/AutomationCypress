class Dashboard {
    Elements = {
        contactMenu: () => cy.get('[data-target="#exampleModal"]'),
        formContactEmail: () => cy.get('#recipient-email'),
        formContactName: () => cy.get('#recipient-name'),
        formContactMessage: () => cy.get('#message-text'),
        sendMessageBtn: () => cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    contactNav(){
        return this.Elements.contactMenu()
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
}

export default Dashboard; 