package com.demo.nopcommerce.stepdefs;

import com.demo.nopcommerce.pages.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class EndToEndStepdefs {
    @And("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().clickOnComputersTab();
    }

    @And("^I click on desktop tab$")
    public void iClickOnDesktopTab() throws InterruptedException {
        new ComputerPage().clickOnDesktopTab();
    }

    @When("^I click on products sort by$")
    public void iClickOnProductsSortBy() {
        new DesktopPage().clickOnSortBy();
    }

    @And("^I click on Z to A from drop down$")
    public void iClickOnZToAFromDropDown() {
        new DesktopPage().clickOnZToAFromDropDown();
    }

    @Then("^products title should be in reverse order$")
    public void productsTitleShouldBeInReverseOrder() {
        new DesktopPage().setProductTitleByReverseOrder();
    }

    @And("^I click on A To Z from drop down$")
    public void iClickOnAToZFromDropDown() {
        new DesktopPage().clickOnAToZFromDropDown();
    }

    @And("^I click on add to cart$")
    public void iClickOnAddToCart() {
        new DesktopPage().VerifyClickOnAddToCart();
    }

    @And("^I select select proccesor GHz Intel Pentium Dual-Core$")
    public void iSelectSelectProccesorGHzIntelPentiumDualCore() {
        new BuildYourOwnComputerPage().selectProcessorFromField();
    }


    @And("^I select RAM (\\d+)GB$")
    public void iSelectRAMGB(int index) {
        new BuildYourOwnComputerPage().selectRAMFromField(2);

    }

    @And("^I click on HDD radio button$")
    public void iClickOnHDDRadioButton() {
        new BuildYourOwnComputerPage().clickOnHDDRadioBtn();
    }

    @And("^I click on OS radio button$")
    public void iClickOnOSRadioButton() {
        new BuildYourOwnComputerPage().clickOnOSRadioBtn();
    }

    @And("^I click on total commander check box$")
    public void iClickOnTotalCommanderCheckBox() {
        new BuildYourOwnComputerPage().clickOnTotalCommanderCheckBox();
    }

    @And("^I verify price updated successfully$")
    public void iVerifyPriceUpdatedSuccessfully() {
        Assert.assertEquals("$1,475.00",new BuildYourOwnComputerPage().VerifyPriceUpdatedSuccessfully());
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().VerifyAddToCartButton();
    }

    @And("^I verify add to cart button successfully$")
    public void iVerifyAddToCartButtonSuccessfully() {
        Assert.assertEquals("The product has been added to your shopping cart",new BuildYourOwnComputerPage().VerifyThatAddToCartButtonSuccessfully());
    }

    @And("^I click on cross button to close$")
    public void iClickOnCrossButtonToClose() {
        new BuildYourOwnComputerPage().clickToCrossBtnToClose();

    }

    @And("^I mouse hover to shopping cart$")
    public void iMouseHoverToShoppingCart() {
        new BuildYourOwnComputerPage().mouseHoverToShoppingCart();
    }

    @And("^I click on go to cart$")
    public void iClickOnGoToCart() {
        new BuildYourOwnComputerPage().clickOnGoToCart();
    }

    @And("^I click on qty boc to clear default value$")
    public void iClickOnQtyBocToClearDefaultValue() {
        new CartPage().clickToClearAddQtyBox();
    }

    @And("^I added qrt \"([^\"]*)\"$")
    public void iAddedQrt()  {
        new CartPage().clickToAddQtyBox();
    }

    @And("^I click to update shopping cart$")
    public void iClickToUpdateShoppingCart() {
        new CartPage().clickToUpdateShoppingCart();
    }

    @Then("^price should be updated successfully$")
    public void priceShouldBeUpdatedSuccessfully() {
        Assert.assertEquals("$2,950.00",new CartPage().getMessageToVerifyUpdateCart());
    }



}
