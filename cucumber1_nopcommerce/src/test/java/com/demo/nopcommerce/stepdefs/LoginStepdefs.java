package com.demo.nopcommerce.stepdefs;

import com.demo.nopcommerce.pages.CartPage;
import com.demo.nopcommerce.pages.HomePage;
import com.demo.nopcommerce.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepdefs {
    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should be navigate to login page successfully$")
    public void iShouldBeNavigateToLoginPageSuccessfully() {
        new LoginPage().getWelcomeText();
    }

    @And("^I enter email address \"([^\"]*)\"$")
    public void iEnterEmailAddress(String email)  {
        new LoginPage().enterEmailId(email);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should get en error message$")
    public void iShouldGetEnErrorMessage() {
        Assert.assertEquals("Login was unsuccessful. Please correct the errors and try again.\n" +
                "No customer account found",new LoginPage().VerifyErrorMessage());
    }

    @And("^I click on log out button$")
    public void iClickOnLogOutButton() {
        new CartPage().clickOnLogOut();
    }

    @Then("^I should be able to login successfully$")
    public void iShouldBeAbleToLoginSuccessfully() {
        Assert.assertEquals("Welcome to our store",new HomePage().VerifyLoginSuccessfully());
    }
}
