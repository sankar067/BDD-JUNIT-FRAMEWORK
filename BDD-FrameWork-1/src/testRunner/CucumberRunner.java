package testRunner;

import com.vimalselvam.cucumber.listener.Reporter;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import managers.FileReaderManager;

import java.io.File;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/features",
        glue={"StepDefinition"},
//        plugin = { "pretty" ,"html:target/cucumber-reports"},// default plugin
        plugin = { 
        		"pretty" ,"html:target/cucumber-reports",
        		"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/html/report.html"
        		},
//        plugin = { "usage" },
//        tags = {"@P2"},
       monochrome = true
)

public class CucumberRunner {
   
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
//		Reporter.getExtentHtmlReport();
	}

}