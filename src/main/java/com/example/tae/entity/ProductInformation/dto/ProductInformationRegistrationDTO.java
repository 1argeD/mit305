package com.example.tae.entity.ProductInformation.dto;

import com.example.tae.entity.DummyData.DTO.PartDTO;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Transactional
public class ProductInformationRegistrationDTO {

    private int product_code;

    private PartDTO partDTO;

    private String product_name;

    private char product_abbreviation;

    private String texture;

    private int width;
    private int length;
    private int height;
    private int weight;

//    public ProductInformationRegistration productInformationRegistration () {
//
//        return ProductInformationRegistration.builder()
//                .product_code(product_code)
//                .part(part)
//                .product_name(product_name)
//                .product_abbreviation(product_abbreviation)
//                .texture(texture)
//                .width(width)
//                .length(length)
//                .height(height)
//                .weight(weight)
//                .build();
//    }

}