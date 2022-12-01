package stepDefinitions;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



public class InternetBanking {

    WebDriver driver;

    @Given("user launch chrome browser")
    public void user_launch_chrome_browser() throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "C://Windows//DRIVERS//chromedriver_win32//chromedriver.exe");
        driver=new ChromeDriver();
        Thread.sleep(5000);
    }

    @When("user open Internet Banking home page")
    public void user_open_Internet_Banking_home_page() throws InterruptedException {
        driver.get("https://www.demo.bnz.co.nz/client/");
        Thread.sleep(20000);
    }

    @When("user click menu button")
    public void user_click_menu_button() throws InterruptedException {
        driver.findElement(By.xpath("//*[@id=\"left\"]/div[1]/div/button")).click();
        Thread.sleep(5000);

    }

    @When("user click payees")
    public void user_click_payees() throws InterruptedException {
        driver.findElement(By.xpath("//*[@id=\"left\"]/div[1]/div/div[3]/section/div[2]/nav[1]/ul/li[3]/a")).click();
        Thread.sleep(5000);
    }

    @Then("user verifies that Payees page is loaded")
    public void user_verifies_that_Payees_page_is_loaded() throws InterruptedException {
        boolean status = driver.findElement(By.xpath("//*[@id=\"YouMoney\"]/div/div/div[3]/section/header/h1/span")).isDisplayed();
        Assert.assertTrue(status);
        Thread.sleep(5000);

    }

    //TC2
    @When("user click add button")
    public void user_click_add_button() throws InterruptedException {
        driver.findElement(By.xpath("//div[@id='YouMoney']//div//header//div//button")).click();
        Thread.sleep(5000);

    }

    @When("user input payees details")
    public void user_input_payees_details() throws InterruptedException {
        driver.findElement(By.xpath("//*[@id=\"ComboboxInput-apm-name\"]")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"ComboboxInput-apm-name\"]")).sendKeys("Vhannette Tejada");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id='ComboboxList-apm-name']")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"apm-bank\"]")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"apm-bank\"]")).sendKeys("81");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"apm-branch\"]")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"apm-branch\"]")).sendKeys("1234");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"apm-account\"]")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"apm-account\"]")).sendKeys("5678923");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"apm-suffix\"]")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"apm-suffix\"]")).sendKeys("027");
        Thread.sleep(2000);

    }

    @When("user click add payee button")
    public void user_click_add_payee_button() throws InterruptedException {
        driver.findElement(By.xpath("//div[@class='row controls']//button[contains(.,'Add')]")).click();
        Thread.sleep(5000);
    }

    @Then("user verifies that new payee has been added in the list of payee")
    public void user_verifies_that_new_payee_has_been_added_in_the_list_of_payee() throws InterruptedException {
        driver.findElement(By.xpath("//*[@id=\"notification\"]/div/span")).click();
        Thread.sleep(5000);

    }

    //TC3
    @Then("user gets and error message")
    public void user_gets_and_error_message() throws InterruptedException {
        boolean status = driver.findElement(By.xpath("//*[@id=\"ComboboxInput-apm-name\"]")).isDisplayed();
        Assert.assertTrue(status);
        Thread.sleep(5000);

    }

    //TC4
    @Then("user verifies that new payee has been added in the list of payee and the list is sorted in ascending order by default")
    public void user_verifies_that_new_payee_has_been_added_in_the_list_of_payee_and_the_list_is_sorted_in_ascending_order_by_default() throws InterruptedException {
        driver.findElement(By.xpath("//ul//div//p//span[contains(.,'Auckland Council')]")).isDisplayed();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//ul//div//p//span[contains(.,'Babysitter')]")).isDisplayed();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//ul//div//p//span[contains(.,'Cleaners')]")).isDisplayed();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//ul//div//p//span[contains(.,'MERIDIAN ENERGY')]")).isDisplayed();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//ul//div//p//span[contains(.,'Vhannette Tejada')]")).isDisplayed();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//ul//div//p//span[contains(.,'VODAFONE NZ LTD (MOBILE)')]")).isDisplayed();
        Thread.sleep(2000);
    }

    @Then("user click name header")
    public void user_click_name_header() throws InterruptedException {
        driver.findElement(By.xpath("//h3[@class='js-payee-name-column CustomSection-headingSpread u-textStyle-bold']//span")).click();
        Thread.sleep(2000);
    }

    @Then("user verifies that the list is sorted in descending order")
    public void user_verifies_that_the_list_is_sorted_in_descending_order() throws InterruptedException {
        driver.findElement(By.xpath("//ul//div//p//span[contains(.,'VODAFONE NZ LTD (MOBILE)')]")).isDisplayed();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//ul//div//p//span[contains(.,'Vhannette Tejada')]")).isDisplayed();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//ul//div//p//span[contains(.,'MERIDIAN ENERGY')]")).isDisplayed();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//ul//div//p//span[contains(.,'Cleaners')]")).isDisplayed();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//ul//div//p//span[contains(.,'Babysitter')]")).isDisplayed();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//ul//div//p//span[contains(.,'Auckland Council')]")).isDisplayed();
        Thread.sleep(2000);
        driver.close();

    }

    //TC5
    @When("user click pay and transfer button")
    public void user_click_pay_and_transfer_button() throws InterruptedException {
        driver.findElement(By.xpath("//*[@id=\"left\"]/div[1]/div/div[3]/section/div[2]/nav[1]/ul/li[1]/button")).click();
        Thread.sleep(2000);

    }

    @When("transfer from Every day Account to Bill Account")
    public void transfer_from_Every_day_Account_to_Bill_Account() throws InterruptedException {
        driver.findElement(By.xpath("/html/body/div[8]/div/div/div/div/div[1]/div/div[1]/button")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("/html/body/div[8]/div/div/div[2]/div/div/ul/li[2]/button/div/div/div[2]/p[1]")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("/html/body/div[8]/div/div/div/div/div[1]/div/div[2]/button")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("/html/body/div[8]/div/div/div[2]/div/div/div[1]/span/span[1]/input")).sendKeys("bills");
        Thread.sleep(2000);
        driver.findElement(By.xpath("/html/body/div[8]/div/div/div[2]/div/div/section/ul/li/button/div/div/div[2]/p[1]")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@name='amount']")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@name='amount']")).sendKeys("500");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"paymentForm\"]/div[4]/div/button[1]/span")).click();
        Thread.sleep(2000);
    }

    @Then("transfer successful message is displayed")
    public void transfer_successful_message_is_displayed() throws InterruptedException {
        driver.findElement(By.xpath("//*[@id=\"notification\"]/div")).isDisplayed();
        Thread.sleep(2000);

    }

    @Then("user verifies that the current balance of Everyday account and Bill counts are correct")
    public void user_verifies_that_the_current_balance_of_Everyday_account_and_Bill_counts_are_correct() throws InterruptedException {
        driver.findElement(By.xpath("//*[@id=\"account-ACC-5\"]/div[2]/span[1]/h3")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"acount-header-title-bar-id-ACC-5\"]/div[1]/span")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"account-ACC-1\"]/div[2]/span[1]/h3")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"acount-header-title-bar-id-ACC-1\"]/div[1]/span")).click();
        Thread.sleep(2000);
        driver.close();
    }

}
    





