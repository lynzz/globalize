(function($) {
    var invariant = $.cultures.invariant,
        standard = invariant.calendars.standard,
        culture = $.cultures["es-VE"] = $.extend(true, {}, invariant, {
        name: "es-VE",
        englishName: "Spanish (Bolivarian Republic of Venezuela)",
        nativeName: "Español (Republica Bolivariana de Venezuela)",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["$ -n","$ n"],
                ',': ".",
                '.': ",",
                symbol: "Bs. F."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],["dom","lun","mar","mié","jue","vie","sáb"]],
                months: [["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]],
                AM: "a.m.",
                PM: "p.m.",
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm tt",
                    F: "dddd, dd\u0027 de \u0027MMMM\u0027 de \u0027yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 de \u0027yyyy"
                }
            })
        }
    });
    culture.calendar = culture.calendars.standard;
})(jQuery);