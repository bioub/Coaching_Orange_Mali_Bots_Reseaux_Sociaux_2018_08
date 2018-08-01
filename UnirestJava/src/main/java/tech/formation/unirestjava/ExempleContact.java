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
public class ExempleContact {

    public static void main(String[] args) {
        Contact fatou = new Contact("Fatou");
        System.out.println(fatou.prenom); // Fatou
        System.out.println(fatou.hello()); // Bonjour je m'appelle Fatou
    }
}
