package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;



public class AddCustomerPage extends Utility {
private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    @FindBy(xpath ="//form[@name='myForm']/div[1]/input[1]")
    WebElement _firstNameField;
    @FindBy(xpath ="//form[@name='myForm']/div[2]/input[1]")
    WebElement _lastNameField;
    @FindBy(xpath ="//form[@name='myForm']/div[3]/input[1]")
    WebElement _postCodeField;
    @FindBy(xpath ="//form[@name='myForm']//button")
    WebElement _addCustomerBtn;


    //This method will enter first name
    public void enterFirstName(String name) {
        Reporter.addStepLog("Enter First Name " + _firstNameField.toString() + "<br>");
        sendTextToElement(_firstNameField, name);
        log.info("Enter First Name " + _firstNameField.toString());
    }

    //This method will enter last name
    public void enterLastName(String lastName) {
        Reporter.addStepLog("Enter Last Name " + _lastNameField.toString() + "<br>");
        sendTextToElement(_lastNameField, lastName);
        log.info("Enter Last Name " + _lastNameField.toString());
    }

    //This method will enter post code
    public void enterPostCode(String postCode) {
        Reporter.addStepLog("Enter Post Code " + _postCodeField.toString() + "<br>");
        sendTextToElement(_postCodeField, postCode);
        log.info("Enter Post Code " + _postCodeField.toString());
    }

    //This method will enter post code
    public void clickToAddCustomerBtn() {
        Reporter.addStepLog("clicking on add cutomer btn " + _addCustomerBtn.toString() + "<br>");
        log.info("clicking on add cutomer btn " + _addCustomerBtn.toString() );
        clickOnElement(_addCustomerBtn);
    }
    public void verifyPopUpMessage() {
        Alert alert = driver.switchTo().alert();
        String alertText = alert.getText();
        Assert.assertTrue(alertText.contains("Customer added successfully"));
        alert.accept();
    }
}


