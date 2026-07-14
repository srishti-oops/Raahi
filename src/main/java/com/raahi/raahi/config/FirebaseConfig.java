package com.raahi.raahi.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;

import java.io.ByteArrayInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

@Configuration
public class FirebaseConfig {

    @PostConstruct
    public void initialize() throws IOException {

        InputStream serviceAccount;

        String firebaseCredentials = System.getenv("FIREBASE_CREDENTIALS");

        if (firebaseCredentials != null && !firebaseCredentials.isBlank()) {

            serviceAccount = new ByteArrayInputStream(
                    firebaseCredentials.getBytes(StandardCharsets.UTF_8));

        } else {

            serviceAccount = new FileInputStream(
                    System.getProperty("user.home")
                            + "/Documents/raahi-d60af-firebase-adminsdk-fbsvc-001ef2e7a7.json");

        }

        FirebaseOptions options = FirebaseOptions.builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .build();

        if (FirebaseApp.getApps().isEmpty()) {
            FirebaseApp.initializeApp(options);
        }
    }
}