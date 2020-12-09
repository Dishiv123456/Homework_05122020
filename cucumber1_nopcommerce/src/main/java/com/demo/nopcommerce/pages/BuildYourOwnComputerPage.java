package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BuildYourOwnComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());


    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement _ProcessordropDown;
    @FindBy(xpath = "//select[@id='product_attribute_1']/option[1]")
    WebElement _processorClick;
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement _RAMDropDown;
    @FindBy(xpath = "//dd[@id='product_attribute_input_3']/ul/li[2]//label[contains(text(),'400 GB [+$100.00]')]")
    WebElement _HDDRadioButton;
    @FindBy(xpath = "//dd[@id='product_attribute_input_4']//li[2]//label[contains(text(),'Vista Premium [+$60.00]')]")
    WebElement _OSRadioButton;
    @FindBy(xpath = "//dd[@id='product_attribute_input_5']//li[3]/input")
    WebElement _TotalCommanderCheckBox;
    @FindBy(xpath = "//span[contains(text(),'$1,475.00')]")
    WebElement _getTextPriceVerify;
    @FindBy(xpath = "//input[@id='add-to-cart-button-1']")
    WebElement _addToCartButton;
    @FindBy(xpath = "//body/div[@id='bar-notification']/div[1]/p[1]")
    WebElement _getTextFromCart;
    @FindBy(xpath = "//body/div[@id='bar-notification']/div[1]/span[1]")
    WebElement _closeXButton;
    @FindBy(xpath = "//span[contains(text(),'Shopping cart')]")
    WebElement _shoppingCartTab;
    @FindBy(xpath = "//body/div[6]/div[1]/div[1]/div[2]/div[2]/div[1]/div[4]/input[1]")
    WebElement _goToCartButton;

    //This method will select processor from drop down
    public void selectProcessorFromField() {
        waitFor(2);
        Reporter.addStepLog("select 2.2 GHz Intel Pentium Dual-Core E2200 " + _ProcessordropDown.toString() + "<br>");
        log.info("select 2.2 GHz Intel Pentium Dual-Core E2200" + _ProcessordropDown.toString());
        clickOnElement(_ProcessordropDown);
        waitFor(1);
        selectByIndexFromDropDown(_ProcessordropDown,0);

    }

    //This method will select RAM from RAM field
    public void selectRAMFromField(int index) {
        Reporter.addStepLog("select 8GB RAM  " + _RAMDropDown.toString() + "<br>");
        log.info("select 8GB RAM " + _RAMDropDown.toString());
        selectByIndexFromDropDown(_RAMDropDown, index);
    }

    //This method will click on HDD radio button Vista Premium [+$60.00]
    public void clickOnHDDRadioBtn() {
        Reporter.addStepLog("click on HDD radio button  " + _HDDRadioButton.toString() + "<br>");
        log.info("click on HDD radio button  " + _HDDRadioButton.toString());
        clickOnElement(_HDDRadioButton);
    }

    //This method will click on HDD radio button Vista Premium [+$60.00]
    public void clickOnOSRadioBtn() {
        Reporter.addStepLog("click on OS radio button  " + _OSRadioButton + "<br>");
        log.info("click on OS radio button  " + _OSRadioButton.toString());
        clickOnElement(_OSRadioButton);
    }

    //This method will click on To0tal Commander [+$5.0]
    public void clickOnTotalCommanderCheckBox() {
        Reporter.addStepLog("click on Total Commander [+$5.0] " + _TotalCommanderCheckBox.toString() + "<br>");
        log.info("click on Total Commander [+$5.0]  " + _TotalCommanderCheckBox.toString());
        mouseHoverToElementAndClick(_TotalCommanderCheckBox);
    }

    //This method will Verify the price "$1,475.00
    public String VerifyPriceUpdatedSuccessfully() {
        Reporter.addStepLog("Verify the price $1,475.00  " + _getTextPriceVerify.toString() + "<br>");
        log.info("Verify the price $1,475.00  " +_getTextPriceVerify.toString());
        return  getTextFromElement(_getTextPriceVerify);
    }
    //This method will click on Add to cart btn
    public void VerifyAddToCartButton() {
        Reporter.addStepLog("click on add to cart btn" + _addToCartButton.toString()+ "<br>");
        log.info("click on add to cart btn " +_addToCartButton.toString());
        clickOnElement(_addToCartButton);
    }
    //This method will get text from add to cart button
    public String VerifyThatAddToCartButtonSuccessfully() {
        Reporter.addStepLog("get text from to verify " + _getTextFromCart.toString() + "<br>");
        getTextFromElement(_getTextFromCart);
        log.info("get text from to verify " + _getTextFromCart.toString());
        return getTextFromElement(_getTextFromCart);
    }
    //this method will click on cross button
    public void clickToCrossBtnToClose() {
        Reporter.addStepLog("clicking on close button  " + _closeXButton.toString()+ "<br>");
        log.info("clicking on close button  " + _closeXButton.toString());
        mouseHoverToElementAndClick(_closeXButton);
    }
    //This method will mouse hover to shopping cat btn
    public void mouseHoverToShoppingCart() {
        Reporter.addStepLog("clicking on shopping cart  " + _shoppingCartTab.toString() + "<br>");
        log.info("clicking on shopping cart  " + _shoppingCartTab.toString());
        mouseHoverToElement(_shoppingCartTab);
    }
    //This method will click go to cart
    public void clickOnGoToCart() {
        Reporter.addStepLog("clicking on shopping cart  " +_goToCartButton.toString() + "<br>");
        log.info("licking on shopping cart  " +_goToCartButton.toString());
        clickOnElement(_goToCartButton);
    }
}