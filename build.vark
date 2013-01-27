classpath "com.kylemoore:VarkTest:1.0-SNAPSHOT"

uses gw.vark.annotations.Target
uses gw.lang.Param
uses com.kylemoore.HelloWorld

/**
 * Simple hello world which instantiates a Gosu class
 */
@Target
function helloWorld() {
  var hw = new HelloWorld()
}
