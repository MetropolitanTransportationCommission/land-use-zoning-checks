/*var projection = ol.proj.get('EPSG:4326');
var projectionExtent = projection.getExtent();
*/

function init(){

var map = L.map('map').setView([37.7, -122.4], 11);

// replace "toner" here with "terrain" or "watercolor"
var layer = new L.StamenTileLayer("toner");
map.addLayer(layer);

/*var zoning_wms = L.tileLayer.wms("http://10.1.1.204:8081/geoserver/gwc/service/wms?", {
    layers: 'mtc:all_codes_colors',
    styles: 'mtc:all_colors',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "MTC"
});
zoning_wms.addTo(map);*/

var multifamily = L.tileLayer.wms('http://10.1.1.204:8081/geoserver/gwc/service/wms?', {
    layers: 'mtc:all_codes_colors',
    styles: 'mtc:hm-t',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "MTC"
}).addTo(map);

var mixedemployment = L.tileLayer.wms('http://10.1.1.204:8081/geoserver/gwc/service/wms?', {
    layers: 'mtc:all_codes_colors',
    styles: 'mtc:me-t',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "MTC"
}).addTo(map);

var mixedretail = L.tileLayer.wms('http://10.1.1.204:8081/geoserver/gwc/service/wms?', {
    layers: 'mtc:all_codes_colors',
    styles: 'mtc:mt-t',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "MTC"
}).addTo(map);

var mixedresidential = L.tileLayer.wms('http://10.1.1.204:8081/geoserver/gwc/service/wms?', {
    layers: 'mtc:all_codes_colors',
    styles: 'mtc:mr-t',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "MTC"
}).addTo(map);

var retailbigbox = L.tileLayer.wms('http://10.1.1.204:8081/geoserver/gwc/service/wms?', {
    layers: 'mtc:all_codes_colors',
    styles: 'mtc:rb-t',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "MTC"
}).addTo(map);

var retailstripmall = L.tileLayer.wms('http://10.1.1.204:8081/geoserver/gwc/service/wms?', {
    layers: 'mtc:all_codes_colors',
    styles: 'mtc:rs-t',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "MTC"
}).addTo(map);

var office = L.tileLayer.wms('http://10.1.1.204:8081/geoserver/gwc/service/wms?', {
    layers: 'mtc:all_codes_colors',
    styles: 'mtc:of-t',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "MTC"
}).addTo(map);

var singlefamilydetached = L.tileLayer.wms('http://10.1.1.204:8081/geoserver/gwc/service/wms?', {
    layers: 'mtc:all_codes_colors',
    styles: 'mtc:hs-t',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "MTC"
}).addTo(map);

// Layer switcher
document.getElementById('multifamily').onclick = function () {
    var enable = this.className !== 'active';
    multifamily.setOpacity(enable ? 1 : 0);
    this.className = enable ? 'active' : '';
    return false;
};

document.getElementById('mixedemployment').onclick = function () {
    var enable = this.className !== 'active';
    mixedemployment.setOpacity(enable ? 1 : 0);
    this.className = enable ? 'active' : '';
    return false;
};

document.getElementById('mixedresidential').onclick = function () {
    var enable = this.className !== 'active';
    mixedresidential.setOpacity(enable ? 1 : 0);
    this.className = enable ? 'active' : '';
    return false;
};

document.getElementById('mixedretail').onclick = function () {
    var enable = this.className !== 'active';
    mixedretail.setOpacity(enable ? 1 : 0);
    this.className = enable ? 'active' : '';
    return false;
};

document.getElementById('singlefamilydetached').onclick = function () {
    var enable = this.className !== 'active';
    singlefamilydetached.setOpacity(enable ? 1 : 0);
    this.className = enable ? 'active' : '';
    return false;
};

document.getElementById('retailstripmall').onclick = function () {
    var enable = this.className !== 'active';
    retailstripmall.setOpacity(enable ? 1 : 0);
    this.className = enable ? 'active' : '';
    return false;
};

document.getElementById('retailbigbox').onclick = function () {
    var enable = this.className !== 'active';
    retailbigbox.setOpacity(enable ? 1 : 0);
    this.className = enable ? 'active' : '';
    return false;
};

document.getElementById('office').onclick = function () {
    var enable = this.className !== 'active';
    office.setOpacity(enable ? 1 : 0);
    this.className = enable ? 'active' : '';
    return false;
};

}