/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tech.formation.unirestjava;

/**
 *
 * @author romain
 */
public class Contact {
    public String prenom;

    public Contact(String prenom) {
        this.prenom = prenom;
    }
    
    public String hello() {
        return "Bonjour je m'appelle " + this.prenom;
    }
}
