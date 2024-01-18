package com.example.tae.controller;

import com.example.tae.entity.Contract.Contract;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ProductInformationRegistrationController {
    @GetMapping("ProductInformationRegistration")
    public String ProductInformationRegistration(){
        return "ProductInformationRegistration";
    }

    @GetMapping("ProductContractModal")
    public String ProductContractModal(){
        return "ProductContractModal";
    }


    // 대분류 리스트 검색 하여 리턴

    // 중분류 리스트 검색 하여 리턴

    // 소분류 리스트 검색 하여 리턴


//    @PostMapping("/asd")
//    @ResponseBody
//    public ResponseEntity<Contract> asd() {
//
//        Contract contract = new Contract();
//
//        return ResponseEntity.status(HttpStatus.OK).body(contract);
//    }

}
