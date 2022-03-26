// XML file location
var movieXmlFile = 'sitemap.xml';

getXMLDocObject(movieXmlFile, function(xmlDoc) {

    // extract the info from the xmlDoc object
    var favmovies = xmlDoc.getElementsByTagName('FAVMOVIES')[0];
    var movie = catalog.getElementsByTagName('MOVIE')

	for (var i = 0; i < movie.length; i++) {

	    var childNodeName1 = movie[i].children[0].nodeName;
	    var childNodeValue1 = movie[i].children[0].innerHTML;

	    var childNodeName2 = movie[i].children[1].nodeName;
	    var childNodeValue2 = movie[i].children[1].innerHTML;

	    console.log(childNodeName1 + ': ' + childNodeValue1);
	    console.log(childNodeName2 + ': ' + childNodeValue2);
	    console.log('----');
	}
});

// get content and parse it to Document Object Model
function getXMLDocObject(xmlFile, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if ((this.readyState === 4) && (this.status === 200)) {
            var xmlContent = this.responseText;
            var xmlDoc = parseXML(xmlContent);
            callback(xmlDoc);
        }
    };
    xhttp.open('GET', xmlFile, true);
    xhttp.send();
}

// parse a text string into an XML DOM object
function parseXML(xmlContent) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
    return xmlDoc;
}


