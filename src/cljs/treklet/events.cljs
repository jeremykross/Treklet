(ns treklet.events
  (:require-macros [treklet.macros :as macro]))

(macro/make-event "avatar-changed"    :global-ns "treklet.events")
(macro/make-event "avatar-spoke"      :global-ns "treklet.events")
(macro/make-event "user-arrival"      :global-ns "treklet.events")
(macro/make-event "user-departure"    :global-ns "treklet.events")
(macro/make-event "mesg-for-user"     :global-ns "treklet.events")
(macro/make-event "user-repositioned" :global-ns "treklet.events")
(macro/make-event "plugin-run"        :global-ns "treklet.events")
(macro/make-event "overlay-changed"   :global-ns "treklet.events")

