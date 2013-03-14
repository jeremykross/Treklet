goog.provide('treklet.constants');
goog.require('cljs.core');
treklet.constants._server_addr_ = "http://localhost";
treklet.constants._sockio_addr_ = [cljs.core.str(treklet.constants._server_addr_),cljs.core.str(":8081/")].join('');
treklet.constants._file_addr_ = [cljs.core.str(treklet.constants._server_addr_),cljs.core.str(":8082/")].join('');
treklet.constants._image_dir_ = [cljs.core.str(treklet.constants._file_addr_),cljs.core.str("images/")].join('');
