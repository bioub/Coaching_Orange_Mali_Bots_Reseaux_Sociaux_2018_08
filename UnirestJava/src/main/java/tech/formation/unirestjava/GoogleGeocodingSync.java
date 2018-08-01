package tech.formation.unirestjava;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class GoogleGeocodingSync {

    public static void main(String[] args) {
        System.out.println("Google Geocoding API");
        String adresse = "3 rue la Bourse Paris";
        
        try {
            HttpResponse<JsonNode> res = Unirest.get("https://maps.googleapis.com/maps/api/geocode/json")
                    .queryString("address", adresse)
                    .asJson();
            
            if (res.getBody().getObject().has("error_message")) {
                System.out.println("Erreur de Google API");
                System.out.println(res.getBody().getObject().getString("error_message"));
                System.exit(1);
            }
            
            String formatted_address = res.getBody().getObject().getJSONArray("results").getJSONObject(0).getString("formatted_address");
            double lat = res.getBody().getObject().getJSONArray("results").getJSONObject(0).getJSONObject("geometry").getJSONObject("location").getDouble("lat");
            double lng = res.getBody().getObject().getJSONArray("results").getJSONObject(0).getJSONObject("geometry").getJSONObject("location").getDouble("lng");
            
            System.out.println("Formatted Address : " + formatted_address);
            System.out.println("Latitude : " + lat);
            System.out.println("Longitude : " + lng);
        } catch (UnirestException ex) {
            Logger.getLogger(GoogleGeocodingSync.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
}
