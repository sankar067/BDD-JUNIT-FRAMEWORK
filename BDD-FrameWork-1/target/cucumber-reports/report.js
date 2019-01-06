$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scenario1.feature");
formatter.feature({
  "line": 1,
  "name": "Mercury Demo Site Automation Using Cucumber and pageFactory model",
  "description": "",
  "id": "mercury-demo-site-automation-using-cucumber-and-pagefactory-model",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1016993,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch Browser Chrome in Local environment.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to Home Page \"http://newtours.demoaut.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.Launch_Browser()"
});
formatter.result({
  "duration": 7453939297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 23
    }
  ],
  "location": "Steps.Navigate_to_Home_Page(String)"
});
formatter.result({
  "duration": 2466731394,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Mercury Demo Site - End-To-End Flow",
  "description": "",
  "id": "mercury-demo-site-automation-using-cucumber-and-pagefactory-model;mercury-demo-site---end-to-end-flow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Given Navigate to Home Page \"http://newtours.demoaut.com/\""
    }
  ],
  "line": 9,
  "name": "Validate Login screen",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Login to Mercury Site using username as \"mercury\" and password as \"mercury\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Login \"Pass\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select Trip as \"Round Trip\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Select number of passenger from list is \"4\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Departing from \"Sydney\" on date, month \"November\" day \"31\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Arriving In \"London\" return date, month \"December\" day \"30\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Ticket Preference \"First class\" and select airline from list \"Unified Airlines\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "continue to select flight",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.login_screen()"
});
formatter.result({
  "duration": 175206999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 41
    },
    {
      "val": "mercury",
      "offset": 67
    }
  ],
  "location": "Steps.user_is_login(String,String)"
});
formatter.result({
  "duration": 5010385619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass",
      "offset": 7
    }
  ],
  "location": "Steps.login_sucess(String)"
});
formatter.result({
  "duration": 194999005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Round Trip",
      "offset": 16
    }
  ],
  "location": "Steps.select_trip_type(String)"
});
formatter.result({
  "duration": 277567460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 41
    }
  ],
  "location": "Steps.select_passenger(String)"
});
formatter.result({
  "duration": 547519951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 16
    },
    {
      "val": "November",
      "offset": 40
    },
    {
      "val": "31",
      "offset": 55
    }
  ],
  "location": "Steps.enter_departure_details(String,String,String)"
});
formatter.result({
  "duration": 1087462055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 13
    },
    {
      "val": "December",
      "offset": 41
    },
    {
      "val": "30",
      "offset": 56
    }
  ],
  "location": "Steps.enter_arrival_details(String,String,String)"
});
formatter.result({
  "duration": 1045163074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First class",
      "offset": 19
    },
    {
      "val": "Unified Airlines",
      "offset": 62
    }
  ],
  "location": "Steps.flight_pref_and_airline(String,String)"
});
formatter.result({
  "duration": 546405674,
  "status": "passed"
});
formatter.match({
  "location": "Steps.find_flightdetails()"
});
formatter.result({
  "duration": 2191051996,
  "status": "passed"
});
formatter.after({
  "duration": 163805027,
  "error_message": "org.openqa.selenium.NoSuchSessionException: no such session\n  (Driver info: chromedriver\u003d2.39.562718 (9a2698cba08cf5a471a29d30c8b3e12becabb0e9),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027SYS-SKB-1612201\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.39.562718 (9a2698cba08cf5..., userDataDir: C:\\Users\\skbeh\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: f679b4818b4509e017d82ab0b9b594e9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat StepDefinition.Steps.after(Steps.java:40)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.uri("scenario2.feature");
formatter.feature({
  "line": 1,
  "name": "Cucumber Automation Demo - Mecury Site \u0026 PageFactory Model",
  "description": "",
  "id": "cucumber-automation-demo---mecury-site-\u0026-pagefactory-model",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Mercury Site - Login Data Validation",
  "description": "",
  "id": "cucumber-automation-demo---mecury-site-\u0026-pagefactory-model;mercury-site---login-data-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@P2"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Given Navigate to Home Page \"http://newtours.demoaut.com/\""
    }
  ],
  "line": 9,
  "name": "Validate Login screen",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Login to Mercury Site using username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Login \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "Login Validation Test",
  "description": "",
  "id": "cucumber-automation-demo---mecury-site-\u0026-pagefactory-model;mercury-site---login-data-validation;login-validation-test",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "status"
      ],
      "line": 13,
      "id": "cucumber-automation-demo---mecury-site-\u0026-pagefactory-model;mercury-site---login-data-validation;login-validation-test;1"
    },
    {
      "cells": [
        "test",
        "test",
        "Pass"
      ],
      "line": 14,
      "id": "cucumber-automation-demo---mecury-site-\u0026-pagefactory-model;mercury-site---login-data-validation;login-validation-test;2"
    },
    {
      "cells": [
        "mercury",
        "mercury",
        "Pass"
      ],
      "line": 15,
      "id": "cucumber-automation-demo---mecury-site-\u0026-pagefactory-model;mercury-site---login-data-validation;login-validation-test;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 305930,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch Browser Chrome in Local environment.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to Home Page \"http://newtours.demoaut.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.Launch_Browser()"
});
formatter.result({
  "duration": 4015022570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 23
    }
  ],
  "location": "Steps.Navigate_to_Home_Page(String)"
});
formatter.result({
  "duration": 1542344102,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Mercury Site - Login Data Validation",
  "description": "",
  "id": "cucumber-automation-demo---mecury-site-\u0026-pagefactory-model;mercury-site---login-data-validation;login-validation-test;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@P2"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Given Navigate to Home Page \"http://newtours.demoaut.com/\""
    }
  ],
  "line": 9,
  "name": "Validate Login screen",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Login to Mercury Site using username as \"test\" and password as \"test\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Login \"Pass\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.login_screen()"
});
formatter.result({
  "duration": 152921471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 41
    },
    {
      "val": "test",
      "offset": 64
    }
  ],
  "location": "Steps.user_is_login(String,String)"
});
formatter.result({
  "duration": 2630354655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass",
      "offset": 7
    }
  ],
  "location": "Steps.login_sucess(String)"
});
formatter.result({
  "duration": 20535023543,
  "error_message": "org.junit.ComparisonFailure: Login Validation :  expected:\u003c[Pass]\u003e but was:\u003c[FAIL]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat pageobject.LoginPage.After_Login(LoginPage.java:56)\r\n\tat StepDefinition.Steps.login_sucess(Steps.java:67)\r\n\tat ✽.Then Login \"Pass\"(scenario2.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1106953891,
  "status": "passed"
});
formatter.before({
  "duration": 965152,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch Browser Chrome in Local environment.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to Home Page \"http://newtours.demoaut.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.Launch_Browser()"
});
formatter.result({
  "duration": 4129953682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 23
    }
  ],
  "location": "Steps.Navigate_to_Home_Page(String)"
});
formatter.result({
  "duration": 1557627161,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Mercury Site - Login Data Validation",
  "description": "",
  "id": "cucumber-automation-demo---mecury-site-\u0026-pagefactory-model;mercury-site---login-data-validation;login-validation-test;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@P2"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Given Navigate to Home Page \"http://newtours.demoaut.com/\""
    }
  ],
  "line": 9,
  "name": "Validate Login screen",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Login to Mercury Site using username as \"mercury\" and password as \"mercury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Login \"Pass\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.login_screen()"
});
formatter.result({
  "duration": 184919315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 41
    },
    {
      "val": "mercury",
      "offset": 67
    }
  ],
  "location": "Steps.user_is_login(String,String)"
});
formatter.result({
  "duration": 5215011818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass",
      "offset": 7
    }
  ],
  "location": "Steps.login_sucess(String)"
});
formatter.result({
  "duration": 173021327,
  "status": "passed"
});
formatter.after({
  "duration": 1139337668,
  "status": "passed"
});
});