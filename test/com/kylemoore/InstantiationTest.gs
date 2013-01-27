package com.kylemoore

class InstantiationTest {

  function testHelloWorld() {
    var a = new HelloWorld()
    print(a == null ? "a is null" : "a is not null")
  }

}