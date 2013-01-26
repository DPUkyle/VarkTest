package com.kylemoore

uses org.apache.logging.log4j.Logger
uses org.apache.logging.log4j.LogManager

class HelloWorld {

  static var logger : Logger = LogManager.getLogger("") // root logger

  construct() {
    init()
  }

  private function init() : void {
    logger.info("Hello world")
  }

}
