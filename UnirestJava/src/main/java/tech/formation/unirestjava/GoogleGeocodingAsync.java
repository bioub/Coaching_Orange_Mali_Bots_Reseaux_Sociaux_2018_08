package tech.formation.unirestjava;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.async.Callback;
import com.mashape.unirest.http.exceptions.UnirestException;
import java.util.concurrent.Future;
import java.util.logging.Level;
import java.util.logging.Logger;

public class GoogleGeocodingAsync {

    public static void main(String[] args) {
        System.out.println("Google Geocoding API");
        String adresse = "3 rue la Bourse Paris";

        Future<HttpResponse<JsonNode>> future = Unirest.get("https://maps.googleapis.com/maps/api/geocode/json")
                .queryString("address", adresse)
                .asJsonAsync(new Callback<JsonNode>() {
                    @Override
                    public void completed(HttpResponse<JsonNode> res) {
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
                    }

                    @Override
                    public void failed(UnirestException ex) {
                        Logger.getLogger(GoogleGeocodingSync.class.getName()).log(Level.SEVERE, null, ex);
                    }

                    @Override
                    public void cancelled() {
                        System.out.println("The request has been cancelled");
                    }
                });

    }

}
