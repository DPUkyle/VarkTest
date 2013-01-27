package com.kylemoore

uses junit.framework.TestCase

class InstantiationTest extends TestCase {

  function testHelloWorld() {
    var a = new HelloWorld()
    assertNotNull(a)
  }

}