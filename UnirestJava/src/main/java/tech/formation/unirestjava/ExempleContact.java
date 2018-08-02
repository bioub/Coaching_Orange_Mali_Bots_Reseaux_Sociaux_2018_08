package tech.formation.unirestjava;

public class ExempleContact {

    public static void main(String[] args) {
        Contact fatou = new Contact("Fatou");
        System.out.println(fatou.prenom); // Fatou
        System.out.println(fatou.hello()); // Bonjour je m'appelle Fatou
    }
}
