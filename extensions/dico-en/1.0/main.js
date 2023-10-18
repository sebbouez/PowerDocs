import { PowerDocsExtension } from "PowerDocs.Lib";

var ext = PowerDocsExtension.create();
ext.registerLanguageDictionary("English", "index.dic", "thes.dat");