/* -----------------------------------------------------------
   Malerbetrieb Bäßgen — minimaler, seitenübergreifender
   Aufruf-/Klick-Tracker. Kein Cookie, kein Fremddienst, geht
   direkt an den eigenen n8n-Webhook. Einmal pro Domain hier
   liegen lassen, auf jeder Seite per <script src="/tracking.js">
   einbinden — funktioniert automatisch für jede neue Seite,
   weil "pfad" die aktuelle URL mitschickt.

   Auf der Seite selbst stehen danach window.tracke(event) zur
   Verfügung, falls eine Seite zusätzlich eigene Klicks/Events
   melden will (z. B. Klick auf den Haupt-Button, abgeschicktes
   Formular). Ein Seitenaufruf wird automatisch beim Laden
   gemeldet, ohne dass die Seite selbst etwas tun muss.
   ----------------------------------------------------------- */
(function(){
  var TRACK_URL = "https://n8n.ichbindeinmaler.de/webhook/tracking";
  var quelle = new URLSearchParams(location.search).get('q') || 'direkt';

  function tracke(event, extra){
    try{
      var daten = { event: event, quelle: quelle, pfad: location.pathname,
                    referrer: document.referrer || null, zeit: new Date().toISOString() };
      if (extra){ for (var k in extra){ daten[k] = extra[k]; } }
      /* Bewusst kein sendBeacon: das schickt Cross-Origin-Anfragen
         immer mit Credentials, was vom n8n-Webhook einen expliziten
         Access-Control-Allow-Credentials-Header verlangen würde.
         fetch mit keepalive übersteht einen Seitenwechsel genauso
         und braucht nur das normale CORS-Setup, das schon läuft. */
      fetch(TRACK_URL, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(daten),
        keepalive: true,
        credentials: 'omit'
      }).catch(function(){});
    }catch(err){ /* Tracking darf die Seite nie stoeren */ }
  }

  window.tracke = tracke;
  tracke('seitenaufruf');
})();
