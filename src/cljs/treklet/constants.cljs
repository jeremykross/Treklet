(ns treklet.constants)

(def -server-addr- "http://localhost"     )
(def -sockio-addr- (str -server-addr- ":8081/" ))
(def -file-addr-   (str -server-addr- ":8082/" ))
(def -image-dir-   (str -file-addr-   "images/"))
