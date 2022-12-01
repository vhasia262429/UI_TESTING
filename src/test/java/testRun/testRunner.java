package testRun;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty",
                "html:target/cucumber-reports/cucumber.html",
                "json:target/cucumber.json",
                "junit:target/cucumber.xml",
                "rerun:target/rerun.text"
        },
        features = {"src/test/resources/features/InternetBanking.feature"},
        glue = {"stepDefinitions"},
        tags = {"@PayeePage or @PaymentPage"},
        monochrome = true
)
public class testRunner {

}


