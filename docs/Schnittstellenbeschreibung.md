# Schnittstellendokumentation

## Designprozess

Für die Umsetzung wurden zunächst verschiedene Entwürfe in Form von Mockups angelegt (siehe `./mockups`).
Alle Entwürfe wurden für eine Webanwendung angelegt mit unterschiedlichen Geräteklassen als Fokus.
Gemeinsam haben alle Entwürfe die Aufteilung auf zwei verschiedene Seiten, um die Unterscheidung zwischen geometrischen
Figuren (Shapes, 2D) und geometrischen Körpern (Solid Figures, 3D) zu gewährleisten, da diese leicht unterschiedliche
Darstellungen und Funktionen bieten können sollen.

![Entwurf 1](./mockups/Variant%201%20-%20Shapes.png)
Im ersten Entwurf ist die Navigation als SideNav auf der linken Seite angelegt. Dieser Navigationsbereich bleibt
dauerhaft eingeblendet, sodass zu jeder Zeit zwischen den beiden Seiten gewechselt werden kann.
Der Content einer Seite ist abgesehen von einem Header zweispaltig aufgebaut. Die eine Seite ist dabei für die
Datenerfassung, die andere für die Darstellung von Ergebnissen und einer Vorschau vorgesehen. Dieser grundlegende Aufbau
ist für die beiden Seiten identisch.  
Die Auswahl der Figur oder des Körpers erfolgt in diesem Entwurf über eine typische SelectBox, in der alle verfügbaren
Formen angezeigt und ausgewählt werden können.

---

![Entwurf 2](./mockups/Variant%202%20-%20Figures.png)
Der zweite Entwurf verfolgt einen ähnlichen Ansatz, bietet jedoch eine deutlich andere Auswahl zwischen den verfügbaren
Figuren bzw. Körpern.
Über dem zweispaltigen Layout ist in diesem Entwurf eine separate Auswahl der Form. Hier sind die verfügbaren Formen auf
den ersten Blick sichtbar und mit einer kleinen Vorschau versehen.

---

![Entwurf 3](./mockups/Variant%203%20-%20Shapes.png)
Der dritte Entwurf kehrt wieder zu der Auswahl mittels SelectBox zurück, da dies zum einen einfacher zu implementieren
und zu anderem übersichtlicher gestaltet ist. In diesem Entwurf wird dafür die Seitennavigation durch eine tab basierte
BottomNavigation ausgetauscht. Dies reduziert die notwendige Bildschirmbreite, die für die Anwendung benötigt wird und
ist so besser für mittlere Bildschirmgrößen wie Tablets geeignet.

---

![Entwurf Mobile](./mockups/Variant%20Mobile%20-%20Figures.png)  
Noch einen Schritt weiter geht der vierte Entwurf für die mobile Ansicht. Die BottomNavigation wird auch hier verwendet,
jedoch wird der Content der Seiten nicht mehr in einem zweispaltigen Layout, sondern untereinander angezeigt. Dadurch
wird die Anwendung auch auf Mobilgeräten nutzbar.

## Beschreibung der finalen Benutzerschnittstelle

### Layout

Für die fertige Anwendung sind die jeweils die besten Ideen aus den einzelnen Entwürfen übernommen und durch weitere
Verbesserungen erweitert worden.

Zum einen wurde die BottomNavigation durch eine HeaderNavigation ausgetauscht. Diese ermöglicht ein
platzsparendes Layout und fördert zudem die intuitive Bedienung, da sich die Navigation häufig oberhalb des Contents
befindet. Zudem schafft dies Platz für einen Footer in der Anwendung, der in diesem Fall beispielsweise für einen Link
zum Impressum der Seite genutzt werden kann. Dies ist nötig, da die Anwendung im Internet öffentlich deployt wird und
somit der Impressumspflicht unterliegt. Für Mobilgeräte wird diese HeaderNavigation zusätzlich durch eine ein- und
ausblendbare SideNavigation ersetzt. Durch
ein solches responsives Layout ergibt sich für jede Bildschirmgröße die optimale Ansicht.

Für die Formularfelder zur Dateneingabe wurden jeweils Input-Varianten ausgewählt, die keine Fehleingaben zulassen. Auf
diese Weise können die Nutzereingaben ohne eine aufwendige Validierung direkt verwendet werden und dem Nutzer bleiben
lästige Fehleingaben oder Fehlermeldungen erspart:

**Auswahl Figur bzw. Körper**  
So wurde für die Auswahl der Figur oder des Körpers eine SelectBox
verwendet, die nur die verfügbaren Formen als Option bietet.

**Name**  
Das Textfeld für den Namen erlaubt sämtliche Eingaben, enthält jedoch eine Zeichenbeschränkung.

**Farbe**  
Die Auswahl der Farbe ist über einen ColorPicker gelöst, der immer nur tatsächlich vorhandene Hex-Codes für die
verschiedenen Farben erzeugt.

**Seitenlängen**  
Zuletzt bleiben die numerischen Inputs für die Seitenlängen der Figuren oder Körper. Bei diesen Feldern wurden als
Kompromiss sogenannte Slider eingesetzt. Zwar erlauben diese Slider nur die Auswahl von Werten in einem vorgegebenen
Rahmen, allerdings bringt der Einsatz von Slidern gleich zwei wichtige Vorteile mit sich:
Zum einen wird keine weitere Validierung der Inputs auf negative Werte benötigt. Zum anderen wurde sich dafür
entschieden, eine Vorschau für die gewählte Form oder den gewählten Körper anzuzeigen. Ein Slider mit festen Minimal-
und Maximalwerten verhindert hierbei einen Overflow beim Skalieren der Vorschau, sodass die Auswirkung der Änderung
eines Wertes für den User direkt ersichtlich bleibt.

### Seite: Figuren (Shapes)

Auf dieser Seite kann eine Figur aus der Liste verfügbarer Figuren ausgewählt werden. Für diese Figur kann ein Name
vergeben und eine Farbe gewählt werden. Zusätzlich können über zwei Parameter die Seitenlängen bzw. die für die
geometrischen Rechnungen benötigten Längen eingestellt werden.

Nachdem eine Figur gewählt wurde, erscheint direkt eine Vorschau der gewählten Figur mit den aktuell eingestellten
Parametern. Änderungen an den Parameter werden direkt auch in der Vorschau geändert. Zusätzlich zur Anzeige des Namen
und der geometrischen Vorschau in gewählter Farbe werden noch die berechneten Werte für die Fläche und den Umfang
der Figur ausgegeben.

### Seite: Körper (Solid Figures)

Auf dieser Seite kann ein Körper aus der Liste verfügbarer Körper ausgewählt werden. Für diesen Körper kann ein Name
vergeben und eine Farbe gewählt werden. Zusätzlich können über drei Parameter die Seitenlängen bzw. die für die
geometrischen Rechnungen benötigten Längen eingestellt werden.

Nachdem ein Körper gewählt wurde, erscheint direkt eine Vorschau des gewählten Körpers mit den aktuell eingestellten
Parametern. Änderungen an den Parameter werden direkt auch in der Vorschau geändert. Zusätzlich zur Anzeige des Namen
und der geometrischen Vorschau in gewählter Farbe werden noch die berechneten Werte für die Oberfläche und das Volumen
des Körpers ausgegeben.

Die geometrische Vorschau kann zudem frei variiert werden. Die Vorschau verwendet eine grafische Schnittstelle der
gängigen Browser (WebGL) und ermöglicht so das Zoomen, Drehen oder Verschieben des gezeigten Körpers.

### Seite: Impressum

Auf dieser Seite wird das Impressum angezeigt (Impressumspflicht).