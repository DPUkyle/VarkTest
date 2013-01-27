classpath "com.kylemoore.VarkTest:VarkTest:1.0-SNAPSHOT"

uses gw.vark.annotations.Target
uses gw.lang.Param
uses com.kylemoore.HelloWorld

var buildDir = file("build")
var classesDir = buildDir.file("classes")
var testClassesDir = buildDir.file("testclasses")
var distDir = buildDir.file("dist")

@Target
function echoHello() {
  Ant.echo(:message = "Hello World")
}

/**
 * A target with one argument.
 */
@Target
@Param("foo", "An argument called foo")
function targetWithArg(foo : String) {
  Ant.echo(:message = "foo: ${foo} (${typeof foo})")
}

/**
 * Simple hello world which instantiates a Gosu class
 */
@Target
function helloWorld() {
  var hw = new HelloWorld()
  Ant.echo(:message = "done.")
  //new HelloWorld()
}

//@Target
//function 
