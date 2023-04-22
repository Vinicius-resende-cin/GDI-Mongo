db = db.getSiblingDB("Main");

db.editais.drop();

db.editais.insertMany([
  {
    Edital: "03 / 2012",
    Finalidade: "Licitação",
    "Data Publicação": new Date("2012-04-23"),
    Validade: new Date("2012-10-23"),
    Obra: 80,
    Empresas: ["Estado de PERNAMBUCO (PE)", "CONSÓRCIO VEREDA-ENECON"]
  },
  {
    Edital: "21 / 2013",
    Finalidade: "Licitação",
    "Data Publicação": new Date("2013-07-01"),
    Validade: new Date("2014-02-01"),
    Obra: 1,
    Empresas: ["ECOPLAN ENGENHARIA - LTDA"]
  },
  {
    Edital: "15 / 2013",
    Finalidade: "Licitação",
    "Data Publicação": new Date("2013-05-11"),
    Validade: new Date("2013-11-11"),
    Obra: 20,
    Empresas: [
      "CONSÓRCIO VEREDA-ENECON",
      "JM/IGUATEMI",
      "GOV. ESTADO MATO GROSSO - SINFRA"
    ]
  },
  {
    Edital: "03 / 2015",
    Finalidade: "Licitação",
    "Data Publicação": new Date("2015-03-30"),
    Validade: new Date("2015-09-30"),
    Obra: 37,
    Empresas: ["ARTELESTE", "CONSÓRCIO BR-242/MT-ATRATIVA/CAMPESATTO/PROJECTA"]
  },
  {
    Edital: "03 / 2016",
    Finalidade: "Licitação",
    "Data Publicação": new Date("2016-12-12"),
    Validade: new Date("2017-06-12"),
    Obra: 4,
    Empresas: [
      "CONSÓRCIO CONTORNO",
      "CONSTRUTORA PELOTENSE LTDA",
      "ARTELESTE",
      "HYTEC CONSTRUÇÕES, TERRAPLENAGEM, E INCORPORAÇÃO LTDA"
    ]
  },
  {
    Edital: "03 / 2017",
    Finalidade: "Licitação",
    "Data Publicação": new Date("2017-02-07"),
    Validade: new Date("2017-08-07"),
    Obra: 135,
    Empresas: ["MAC ENGENHARIA LTDA", "CONSÓRCIO B C M", "JM/IGUATEMI"]
  },
  {
    Edital: "03 / 2018",
    Finalidade: "Licitação",
    "Data Publicação": new Date("2018-07-26"),
    Validade: new Date("2019-01-26"),
    Obra: 116,
    Empresas: ["CONSÓRCIO VEREDA-ENECON", "CONSÓRCIO LOCTEC-CAVA-ALTA-SETORSUL"]
  },
  {
    Edital: "03 / 2019",
    Finalidade: "Licitação",
    "Data Publicação": new Date("2019-01-07"),
    Validade: new Date("2019-07-07"),
    Obra: 27,
    Empresas: [
      "JM TERRAPLANAGEM CONSTRUÇÕES LTDA",
      "CONSÓRCIO SETEP - SOTEPA",
      "CONSÓRCIO PAVISERVICE/GEOSISTEMAS"
    ]
  },
  {
    Edital: "07 / 2015",
    Finalidade: "Licitação",
    "Data Publicação": new Date("2015-01-03"),
    Validade: new Date("2015-07-03"),
    Obra: 86,
    Empresas: [
      "CONSTRUTORA A GASPAR S/A",
      "CONSÓRCIO SETEP - SOTEPA",
      "CONSÓRCIO CONTRACTOR - IGUATEMI"
    ]
  },
  {
    Edital: "08 / 2019",
    Finalidade: "Licitação",
    "Data Publicação": new Date("2019-02-05"),
    Validade: new Date("2019-08-05"),
    Obra: 93,
    Empresas: ["CONSÓRCIO BTEC - VILASA", "TORC"]
  },
  {
    Edital: "17 / 2018",
    Finalidade: "Licitação",
    "Data Publicação": new Date("2018-11-17"),
    Validade: new Date("2019-05-17"),
    Obra: 101,
    Empresas: ["CONSÓRCIO EMPA - ENECON", "CONSÓRCIO NATAL PARNAMIRIM"]
  },
  {
    Edital: "17 / 2019",
    Finalidade: "Licitação",
    "Data Publicação": new Date("2019-04-12"),
    Validade: new Date("2019-04-12"),
    Obra: 57,
    Empresas: [
      "CONSÓRCIO B C M",
      "CONSÓRCIO GTP",
      "CONSÓRCIO NATAL PARNAMIRIM",
      "ARTELESTE"
    ]
  }
]);
