package com.erp.erp_backend.services;

import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class Util {

    public String base64Decoder(String encodedValue) {
        byte[] decodedBytes = Base64.getDecoder().decode(encodedValue);
        return new String(decodedBytes);
    }
}
