import { PowerDocsExtension } from "PowerDocs.Lib";

var ext = PowerDocsExtension.create();
ext.registerLanguageDictionary("French", "index.dic", "thes.dat");