package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());
    @FindBy(xpath = "//button[contains(text(),'Customer Login')]")
    WebElement _customerLoginLink;

    @FindBy(xpath = "//button[contains(text(),'Bank Manager Login')]")
    WebElement _bankManagerLoginLink;


    //This method will click to customer login link
    public void clickOnCustomerLoginLink() {
        Reporter.addStepLog("clicking on customer login link " + _customerLoginLink.toString() + "<br>");
     clickOnElement(_customerLoginLink);
        log.info("clicking on customer login link " + _customerLoginLink.toString());
    }

    //This method will click to bank manager login link
    public void clickOnManagerLoginLink(){
       // waitUntilElementToBeClickable(_bankManagerLoginLink,20);
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Reporter.addStepLog("clicking on bank manager login link " + _bankManagerLoginLink.toString() + "<br>");
        log.info("clicking on bank manager login link " + _bankManagerLoginLink.toString());
        clickOnElement(_bankManagerLoginLink);
    }



}
