jQuery.entwine("ss",function($){var setDirectionForLocale=function(){var currentLocale=$.cookie("FluentLocale_CMS");if(void 0!==currentLocale){var config=function(){if(window&&window.ss&&window.ss.config&&window.ss.config.sections){var config=window.ss.config.sections.find(function(next){return"SilverStripe\\Admin\\LeftAndMain"===next.name});if(config)return config.fluentrtl||{}}return{}}();if(void 0===config.locales||0===config.locales.length)return;var dir="ltr";if(config.locales.forEach(function(locale){locale.code==currentLocale&&(dir=locale.dir)}),$("html").removeClass("ltr").removeClass("rtl").addClass(dir),"undefined"!=typeof tinymce)for(var i=0;i<tinymce.editors.length;i++){var editorInstance=tinymce.editors[i];editorInstance.getElement().classList.contains("fluent__localised-field")&&(editorInstance.directionality=dir,editorInstance.getBody().setAttribute("dir",dir))}}};$(".cms-fluent-selector").entwine({onmatch:function(){setDirectionForLocale()}}),$(".cms-content").entwine({onmatch:function(){setDirectionForLocale()}}),$(".field.htmleditor iframe").entwine({onmatch:function(){setDirectionForLocale()}})});
//# sourceMappingURL=fluent-rtl.js.map
