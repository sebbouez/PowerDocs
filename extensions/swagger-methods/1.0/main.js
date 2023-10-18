import {PowerDocsExtension} from "PowerDocs.Lib";

var ext = PowerDocsExtension.create();

function renderSwaggerMethod(arg) {
    // the "arg" argument will contain the HTTP method
    // the markdown block will look like this:
    // ::: swagger-method GET
    // 
    // :::

    let html = "<div class='swagger-method http-method-" + arg + "'>";
    html += "<span class='leftPart'>" + arg + "</span>";
    html += "<span class='rightPart'>@content</span>";
    html += "</div>";
    return html;
}

ext.registerStyleSheet("Swagger method block", "swagger-styles.css");
ext.registerBlockRenderer("Swagger method block", "swagger-method", renderSwaggerMethod);




