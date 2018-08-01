package tech.formation.unirestjava;

import java.util.HashMap;
import java.util.Map;

public class ExempleMap {

    public static void main(String[] args) {
        Map<String, String> capitales = new HashMap<>();
        
        capitales.put("France", "Paris");
        capitales.put("Mali", "Bamako");
        capitales.put("Espagne", "Madrid");
        
        System.out.println(capitales.get("Mali")); // Bamako
        
        System.out.println(capitales.size()); // 3
        
        capitales.remove("Espagne");
        System.out.println(capitales.size()); // 3
    }
}
