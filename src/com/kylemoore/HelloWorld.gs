package com.kylemoore

uses org.apache.logging.log4j.Logger
uses org.apache.logging.log4j.LogManager

/**
 * This class is meant to be instantiated with the hello-world vark target
 */
class HelloWorld {

  private static var _logger : Logger as readonly logger

  construct() {
    _logger = LogManager.getLogger("") // root logger
    init()
  }

  private function init() : void {
    var msg = "Hello cruel world!!"
    print("Error enabled? ${logger.ErrorEnabled}")
    print("Debug enabled? ${logger.DebugEnabled}")
    print("Warn enabled? ${logger.WarnEnabled}")
    print("Info enabled? ${logger.InfoEnabled}")
    logger.error(msg)
    logger.debug(msg)
    logger.warn(msg)
    logger.info(msg)

  }

}
