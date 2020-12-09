package com.bank.testsuite;


import com.bank.pages.*;
import com.bank.testbase.TestBase;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;


public class BankTest extends TestBase {
    HomePage homepage;
    BankManagerLoginPage bankManagerLoginPage;
    OpenAccountPage openAccountPage;
    CustomersPage customersPage;
    CustomerLoginPage customerLoginPage;
    AccountPage accountPage;
    AddCustomerPage addCustomerPage;

    @BeforeMethod(groups = {"sanity","smoke","regression"})
    public void setUp() {
        homepage = new HomePage();
        bankManagerLoginPage = new BankManagerLoginPage();
        openAccountPage = new OpenAccountPage();
        customersPage = new CustomersPage();
        customerLoginPage = new CustomerLoginPage();
        accountPage = new AccountPage();
        addCustomerPage = new AddCustomerPage();
    }

    @Test(groups = {"smoke","regression"})
    public void bankManagerShouldAddCustomerSuccessfully()  {
        homepage.clickOnManagerLoginLink();
        bankManagerLoginPage.clickOnAddCustomerLink();
        addCustomerPage.enterFirstName("Ram");
        addCustomerPage.enterLastName("Krishna");
        addCustomerPage.enterPostCode("NW1 5BW");
        addCustomerPage.clickToAddCustomerBtn();
        addCustomerPage.verifyPopUpMessage();
    }

    @Test(groups = {"sanity","regression"})
    public void bankManagerShouldOpenAccountSuccessfully() {
        homepage.clickOnManagerLoginLink();
        bankManagerLoginPage.clickOnAddCustomerLink();
        addCustomerPage.enterFirstName("Ram");
        addCustomerPage.enterLastName("Krishna");
        addCustomerPage.enterPostCode("NW1 5BW");
        addCustomerPage.clickToAddCustomerBtn();
        addCustomerPage.verifyPopUpMessage();
        bankManagerLoginPage.clickOnOpenAccountBtn();
        openAccountPage.clickOnCustomerDropDown("Ram Krishna", 6);
        openAccountPage.clickOnPoundFromDropDown(2);
        openAccountPage.clickOnProcessBtn();
        openAccountPage.verifyAccountCreatedSuccessfully();
    }

    @Test(groups = {"sanity","regression"})
    public void customerShouldLoginAndLogoutSuccessfully() {
        homepage.clickOnManagerLoginLink();
        bankManagerLoginPage.clickOnAddCustomerLink();
        addCustomerPage.enterFirstName("Ram");
        addCustomerPage.enterLastName("Krishna");
        addCustomerPage.enterPostCode("NW1 5BW");
        addCustomerPage.clickToAddCustomerBtn();
        addCustomerPage.verifyPopUpMessage();
        customersPage.clickOnHomeBtn();
        homepage.clickOnCustomerLoginLink();
        openAccountPage.clickOnCustomerDropDown("Ram Krishna", 6);
        customerLoginPage.clickOnLoginBtn();
        customersPage.isLogoutDisplayed();
        customersPage.clickOnLogoutBtn();
        customersPage.verifyYourNameDisplay();
    }

    @Test (groups = {"regression"})
    public void customerShouldDepositMoneySuccessfully() {
        homepage.clickOnManagerLoginLink();
        bankManagerLoginPage.clickOnAddCustomerLink();
        addCustomerPage.enterFirstName("Ram");
        addCustomerPage.enterLastName("Krishna");
        addCustomerPage.enterPostCode("NW1 5BW");
        addCustomerPage.clickToAddCustomerBtn();
        addCustomerPage.verifyPopUpMessage();
        bankManagerLoginPage.clickOnOpenAccountBtn();
        openAccountPage.clickOnCustomerDropDown("Ram Krishna", 6);
        openAccountPage.clickOnPoundFromDropDown(2);
        openAccountPage.clickOnProcessBtn();
        openAccountPage.verifyAccountCreatedSuccessfully();
        customersPage.clickOnHomeBtn();
        homepage.clickOnCustomerLoginLink();
        openAccountPage.clickOnCustomerDropDown("Ram Krishna", 6);
        customerLoginPage.clickOnLoginBtn();
        accountPage.ClickOnDepositTab();
        accountPage.depositMoney("100");
        accountPage.ClickOnDepositFinalTab();
        String expectedMessage = "Deposit Successful";
        String actualMessage = accountPage.getMessageToVerifyDeposit();
        Assert.assertEquals(expectedMessage, actualMessage);

    }

    @Test(groups = {"regression"})
    public void customerShouldWithdrawMoneySuccessfully() {
        homepage.clickOnManagerLoginLink();
        bankManagerLoginPage.clickOnAddCustomerLink();
        addCustomerPage.enterFirstName("Ram");
        addCustomerPage.enterLastName("Krishna");
        addCustomerPage.enterPostCode("NW1 5BW");
        addCustomerPage.clickToAddCustomerBtn();
        addCustomerPage.verifyPopUpMessage();
        bankManagerLoginPage.clickOnOpenAccountBtn();
        openAccountPage.clickOnCustomerDropDown("Ram Krishna", 6);
        openAccountPage.clickOnPoundFromDropDown(2);
        openAccountPage.clickOnProcessBtn();
        openAccountPage.verifyAccountCreatedSuccessfully();
        customersPage.clickOnHomeBtn();
        homepage.clickOnCustomerLoginLink();
        openAccountPage.clickOnCustomerDropDown("Ram Krishna", 6);
        customerLoginPage.clickOnLoginBtn();
        accountPage.ClickOnDepositTab();
        accountPage.depositMoney("100");
        accountPage.ClickOnDepositFinalTab();
        String expectedMessage = "Deposit Successful";
        String actualMessage = accountPage.getMessageToVerifyDeposit();
        Assert.assertEquals(expectedMessage, actualMessage);
        customersPage.clickOnHomeBtn();
        homepage.clickOnCustomerLoginLink();
        openAccountPage.clickOnCustomerDropDown("Ram Krishna", 6);
        customerLoginPage.clickOnLoginBtn();
        accountPage.clickToWithdrawalBtn();
        accountPage.enterWithdrawalAmount("50");
        accountPage.ClickOnWithdrawalFinalTab();
        expectedMessage = "Transaction successful";
        actualMessage = accountPage.getMessageToVerify();
        Assert.assertEquals(expectedMessage, actualMessage);

    }
}
