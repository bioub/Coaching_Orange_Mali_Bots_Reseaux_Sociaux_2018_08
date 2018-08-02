package tech.formation.unirestjava;

public class Contact {
    public String prenom;

    public Contact(String prenom) {
        this.prenom = prenom;
    }
    
    public String hello() {
        return "Bonjour je m'appelle " + this.prenom;
    }
}
