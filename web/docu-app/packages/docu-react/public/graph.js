__docu_app_graph__ = {
  "position": {
    "x": 0.0,
    "y": 0.0
  },
  "size": {
    "width": 2882.0,
    "height": 2204.0
  },
  "layoutOptions": null,
  "canvasBounds": {
    "x": -1.0,
    "y": -1.0,
    "width": -1.0,
    "height": -1.0
  },
  "revision": 0,
  "type": "graph",
  "id": "graph",
  "children": [
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 782.6666666666666,
        "y": 352.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOEmail",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOEmail_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOEmail_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOEmail_iconlabel"
                }
              ]
            },
            {
              "text": "DOEmail",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOEmail_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOEmail_attrs",
          "children": [
            {
              "text": " - AdresseOID : EString",
              "type": "label:text",
              "id": "DOEmail_AdresseOID"
            },
            {
              "text": " - Bezeichnung : EString",
              "type": "label:text",
              "id": "DOEmail_Bezeichnung"
            },
            {
              "text": " - DefaultAdresse : EString",
              "type": "label:text",
              "id": "DOEmail_DefaultAdresse"
            },
            {
              "text": " - EmailOID : EString",
              "type": "label:text",
              "id": "DOEmail_EmailOID"
            },
            {
              "text": " - StandardEmpfaenger : EString",
              "type": "label:text",
              "id": "DOEmail_StandardEmpfaenger"
            },
            {
              "text": " - SuchFeld : EString",
              "type": "label:text",
              "id": "DOEmail_SuchFeld"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 390.35897435897436,
        "y": 1992.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOPartnerSuchErgebnisse",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOPartnerSuchErgebnisse_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOPartnerSuchErgebnisse_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOPartnerSuchErgebnisse_iconlabel"
                }
              ]
            },
            {
              "text": "DOPartnerSuchErgebnisse",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOPartnerSuchErgebnisse_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOPartnerSuchErgebnisse_attrs",
          "children": [
            {
              "text": " - DQL : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnisse_DQL"
            },
            {
              "text": " - Message : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnisse_Message"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartnerSuchErgebnisse",
      "targetId": "DOPartnerSuchErgebnis",
      "routingPoints": [
        {
          "x": 490.35897435897436,
          "y": 1992.0
        },
        {
          "x": 490.35897435897436,
          "y": 1832.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartnerSuchErgebnisse_DOPartnerSuchErgebnis_PartnerSuchErgebnis",
      "children": [
        {
          "text": "PartnerSuchErgebnis",
          "position": {
            "x": 488.35897435897436,
            "y": 1912.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerSuchErgebnisse_DOPartnerSuchErgebnis_PartnerSuchErgebnis_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 423.69230769230774,
        "y": 1632.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOPartnerSuchErgebnis",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOPartnerSuchErgebnis_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOPartnerSuchErgebnis_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOPartnerSuchErgebnis_iconlabel"
                }
              ]
            },
            {
              "text": "DOPartnerSuchErgebnis",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOPartnerSuchErgebnis_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOPartnerSuchErgebnis_attrs",
          "children": [
            {
              "text": " - Kontengruppe : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_Kontengruppe"
            },
            {
              "text": " - Name : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_Name"
            },
            {
              "text": " - Name2 : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_Name2"
            },
            {
              "text": " - Name3 : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_Name3"
            },
            {
              "text": " - Name4 : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_Name4"
            },
            {
              "text": " - Ort : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_Ort"
            },
            {
              "text": " - Ortsteil : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_Ortsteil"
            },
            {
              "text": " - Partnernummer : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_Partnernummer"
            },
            {
              "text": " - Partneroid : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_Partneroid"
            },
            {
              "text": " - Plz : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_Plz"
            },
            {
              "text": " - RowNum : EBigDecimal",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_RowNum"
            },
            {
              "text": " - Searchfield : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_Searchfield"
            },
            {
              "text": " - Strasseundhausnr : EString",
              "type": "label:text",
              "id": "DOPartnerSuchErgebnis_Strasseundhausnr"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 12.0,
        "y": 12.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOCallInfo",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOCallInfo_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOCallInfo_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOCallInfo_iconlabel"
                }
              ]
            },
            {
              "text": "DOCallInfo",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOCallInfo_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOCallInfo_attrs",
          "children": [
            {
              "text": " - DQL : EString",
              "type": "label:text",
              "id": "DOCallInfo_DQL"
            },
            {
              "text": " - ElapTime : ELongObject",
              "type": "label:text",
              "id": "DOCallInfo_ElapTime"
            },
            {
              "text": " - IntervalEnd : ELongObject",
              "type": "label:text",
              "id": "DOCallInfo_IntervalEnd"
            },
            {
              "text": " - IntervalStart : ELongObject",
              "type": "label:text",
              "id": "DOCallInfo_IntervalStart"
            },
            {
              "text": " - Message : EString",
              "type": "label:text",
              "id": "DOCallInfo_Message"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 640.3589743589744,
        "y": 1992.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOPartnerAdressen",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOPartnerAdressen_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOPartnerAdressen_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOPartnerAdressen_iconlabel"
                }
              ]
            },
            {
              "text": "DOPartnerAdressen",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOPartnerAdressen_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOPartnerAdressen_attrs",
          "children": []
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOPartnerAdressen",
      "type": "edge:aggregation",
      "id": "DOPartnerAdressen_null_CallInfo",
      "children": [
        {
          "text": "CallInfo",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerAdressen_null_CallInfo_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartnerAdressen",
      "targetId": "DOPartner",
      "routingPoints": [
        {
          "x": 773.6923076923076,
          "y": 1992.0
        },
        {
          "x": 773.6923076923076,
          "y": 1952.0
        },
        {
          "x": 923.6923076923076,
          "y": 1952.0
        },
        {
          "x": 923.6923076923076,
          "y": 1832.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartnerAdressen_DOPartner_Partner",
      "children": [
        {
          "text": "Partner",
          "position": {
            "x": 921.6923076923076,
            "y": 1912.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerAdressen_DOPartner_Partner_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartnerAdressen",
      "targetId": "DOPartnerSuchErgebnis",
      "routingPoints": [
        {
          "x": 707.025641025641,
          "y": 1992.0
        },
        {
          "x": 707.025641025641,
          "y": 1872.0
        },
        {
          "x": 557.0256410256411,
          "y": 1872.0
        },
        {
          "x": 557.0256410256411,
          "y": 1832.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartnerAdressen_DOPartnerSuchErgebnis_PartnerSuchergebnis",
      "children": [
        {
          "text": "PartnerSuchergebnis",
          "position": {
            "x": 705.025641025641,
            "y": 1912.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerAdressen_DOPartnerSuchErgebnis_PartnerSuchergebnis_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 857.025641025641,
        "y": 1632.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOPartner",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOPartner_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOPartner_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOPartner_iconlabel"
                }
              ]
            },
            {
              "text": "DOPartner",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOPartner_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOPartner_attrs",
          "children": [
            {
              "text": " - AbweichenderLeistungsempfaenger : EString",
              "type": "label:text",
              "id": "DOPartner_AbweichenderLeistungsempfaenger"
            },
            {
              "text": " - AenderungsDatum : EDate",
              "type": "label:text",
              "id": "DOPartner_AenderungsDatum"
            },
            {
              "text": " - AltePartnerNummer : EString",
              "type": "label:text",
              "id": "DOPartner_AltePartnerNummer"
            },
            {
              "text": " - Anrede : EString",
              "type": "label:text",
              "id": "DOPartner_Anrede"
            },
            {
              "text": " - Ansprechpartnernummer : EString",
              "type": "label:text",
              "id": "DOPartner_Ansprechpartnernummer"
            },
            {
              "text": " - Anzeigename : EString",
              "type": "label:text",
              "id": "DOPartner_Anzeigename"
            },
            {
              "text": " - AuditMaengel : EString",
              "type": "label:text",
              "id": "DOPartner_AuditMaengel"
            },
            {
              "text": " - AuditMaengelIO : EBooleanObject",
              "type": "label:text",
              "id": "DOPartner_AuditMaengelIO"
            },
            {
              "text": " - AuftragsSperre : EString",
              "type": "label:text",
              "id": "DOPartner_AuftragsSperre"
            },
            {
              "text": " - BehoerdenNummer : EString",
              "type": "label:text",
              "id": "DOPartner_BehoerdenNummer"
            },
            {
              "text": " - Bemerkungversand : EString",
              "type": "label:text",
              "id": "DOPartner_Bemerkungversand"
            },
            {
              "text": " - Branche : EString",
              "type": "label:text",
              "id": "DOPartner_Branche"
            },
            {
              "text": " - BuchungsSperre : EString",
              "type": "label:text",
              "id": "DOPartner_BuchungsSperre"
            },
            {
              "text": " - CodeGruppeVers : EString",
              "type": "label:text",
              "id": "DOPartner_CodeGruppeVers"
            },
            {
              "text": " - DsnPartnernummer : EString",
              "type": "label:text",
              "id": "DOPartner_DsnPartnernummer"
            },
            {
              "text": " - Eintrittstr : EString",
              "type": "label:text",
              "id": "DOPartner_Eintrittstr"
            },
            {
              "text": " - ElektronischerRechnungsVersand : EBooleanObject",
              "type": "label:text",
              "id": "DOPartner_ElektronischerRechnungsVersand"
            },
            {
              "text": " - FAL : EBooleanObject",
              "type": "label:text",
              "id": "DOPartner_FAL"
            },
            {
              "text": " - FakturaSperre : EString",
              "type": "label:text",
              "id": "DOPartner_FakturaSperre"
            },
            {
              "text": " - Funktion : EString",
              "type": "label:text",
              "id": "DOPartner_Funktion"
            },
            {
              "text": " - Geburtsdatum : EDate",
              "type": "label:text",
              "id": "DOPartner_Geburtsdatum"
            },
            {
              "text": " - Geschlecht : EString",
              "type": "label:text",
              "id": "DOPartner_Geschlecht"
            },
            {
              "text": " - Hauptpartnernummer : EString",
              "type": "label:text",
              "id": "DOPartner_Hauptpartnernummer"
            },
            {
              "text": " - InformationHinweis : ELongObject",
              "type": "label:text",
              "id": "DOPartner_InformationHinweis"
            },
            {
              "text": " - KnzSammel : EString",
              "type": "label:text",
              "id": "DOPartner_KnzSammel"
            },
            {
              "text": " - KnzSonderKunde : EString",
              "type": "label:text",
              "id": "DOPartner_KnzSonderKunde"
            },
            {
              "text": " - KnzZahlart : EString",
              "type": "label:text",
              "id": "DOPartner_KnzZahlart"
            },
            {
              "text": " - KonditionsGruppeGA : EString",
              "type": "label:text",
              "id": "DOPartner_KonditionsGruppeGA"
            },
            {
              "text": " - KontaktSperre : EString",
              "type": "label:text",
              "id": "DOPartner_KontaktSperre"
            },
            {
              "text": " - Kontengruppe : EString",
              "type": "label:text",
              "id": "DOPartner_Kontengruppe"
            },
            {
              "text": " - Kundengruppe : EString",
              "type": "label:text",
              "id": "DOPartner_Kundengruppe"
            },
            {
              "text": " - LieferSperre : EString",
              "type": "label:text",
              "id": "DOPartner_LieferSperre"
            },
            {
              "text": " - LoeschSperre : EString",
              "type": "label:text",
              "id": "DOPartner_LoeschSperre"
            },
            {
              "text": " - LoeschVormerkung : EString",
              "type": "label:text",
              "id": "DOPartner_LoeschVormerkung"
            },
            {
              "text": " - Lohnfaktoren : EString",
              "type": "label:text",
              "id": "DOPartner_Lohnfaktoren"
            },
            {
              "text": " - MitarbeiterKreis : EString",
              "type": "label:text",
              "id": "DOPartner_MitarbeiterKreis"
            },
            {
              "text": " - Mithilfe : EString",
              "type": "label:text",
              "id": "DOPartner_Mithilfe"
            },
            {
              "text": " - Mypartner : EString",
              "type": "label:text",
              "id": "DOPartner_Mypartner"
            },
            {
              "text": " - Myprintjob : EString",
              "type": "label:text",
              "id": "DOPartner_Myprintjob"
            },
            {
              "text": " - Myprobjaendauftrag : EString",
              "type": "label:text",
              "id": "DOPartner_Myprobjaendauftrag"
            },
            {
              "text": " - NLL : EBooleanObject",
              "type": "label:text",
              "id": "DOPartner_NLL"
            },
            {
              "text": " - Name : EString",
              "type": "label:text",
              "id": "DOPartner_Name"
            },
            {
              "text": " - Name2 : EString",
              "type": "label:text",
              "id": "DOPartner_Name2"
            },
            {
              "text": " - Name3 : EString",
              "type": "label:text",
              "id": "DOPartner_Name3"
            },
            {
              "text": " - Name4 : EString",
              "type": "label:text",
              "id": "DOPartner_Name4"
            },
            {
              "text": " - OU : EString",
              "type": "label:text",
              "id": "DOPartner_OU"
            },
            {
              "text": " - PartnerOID : EString",
              "type": "label:text",
              "id": "DOPartner_PartnerOID"
            },
            {
              "text": " - Partnernummer : EString",
              "type": "label:text",
              "id": "DOPartner_Partnernummer"
            },
            {
              "text": " - PersonalNummer : EString",
              "type": "label:text",
              "id": "DOPartner_PersonalNummer"
            },
            {
              "text": " - Preisgruppe : EString",
              "type": "label:text",
              "id": "DOPartner_Preisgruppe"
            },
            {
              "text": " - PreislistenTyp : EString",
              "type": "label:text",
              "id": "DOPartner_PreislistenTyp"
            },
            {
              "text": " - Rentner : EBooleanObject",
              "type": "label:text",
              "id": "DOPartner_Rentner"
            },
            {
              "text": " - RollenTyp : EString",
              "type": "label:text",
              "id": "DOPartner_RollenTyp"
            },
            {
              "text": " - Sepamandat : EString",
              "type": "label:text",
              "id": "DOPartner_Sepamandat"
            },
            {
              "text": " - Sprache : EString",
              "type": "label:text",
              "id": "DOPartner_Sprache"
            },
            {
              "text": " - Steuernummer1 : EString",
              "type": "label:text",
              "id": "DOPartner_Steuernummer1"
            },
            {
              "text": " - Titel1 : EString",
              "type": "label:text",
              "id": "DOPartner_Titel1"
            },
            {
              "text": " - Titel2 : EString",
              "type": "label:text",
              "id": "DOPartner_Titel2"
            },
            {
              "text": " - TitelDekraIntern : EString",
              "type": "label:text",
              "id": "DOPartner_TitelDekraIntern"
            },
            {
              "text": " - TitelDekraIntern2 : EString",
              "type": "label:text",
              "id": "DOPartner_TitelDekraIntern2"
            },
            {
              "text": " - UmsatzsteuerIdentNr : EString",
              "type": "label:text",
              "id": "DOPartner_UmsatzsteuerIdentNr"
            },
            {
              "text": " - Unternehmen : EBooleanObject",
              "type": "label:text",
              "id": "DOPartner_Unternehmen"
            },
            {
              "text": " - VerkaeuferGruppe : EString",
              "type": "label:text",
              "id": "DOPartner_VerkaeuferGruppe"
            },
            {
              "text": " - VerkaufsBuero : EString",
              "type": "label:text",
              "id": "DOPartner_VerkaufsBuero"
            },
            {
              "text": " - Versandblattart : EBigDecimal",
              "type": "label:text",
              "id": "DOPartner_Versandblattart"
            },
            {
              "text": " - VertriebsText : EString",
              "type": "label:text",
              "id": "DOPartner_VertriebsText"
            },
            {
              "text": " - Verwaltungva : EString",
              "type": "label:text",
              "id": "DOPartner_Verwaltungva"
            },
            {
              "text": " - Vkorg : EString",
              "type": "label:text",
              "id": "DOPartner_Vkorg"
            },
            {
              "text": " - XSIType : EString",
              "type": "label:text",
              "id": "DOPartner_XSIType"
            },
            {
              "text": " - ZahlSperre : EString",
              "type": "label:text",
              "id": "DOPartner_ZahlSperre"
            },
            {
              "text": " - ZuordnungsNr : EString",
              "type": "label:text",
              "id": "DOPartner_ZuordnungsNr"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOPartner",
      "targetId": "DOAdresse",
      "routingPoints": [
        {
          "x": 1041.6410256410256,
          "y": 1632.0
        },
        {
          "x": 1041.6410256410256,
          "y": 1592.0
        },
        {
          "x": 2319.0,
          "y": 1592.0
        },
        {
          "x": 2319.0,
          "y": 912.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartner_DOAdresse_Adresse",
      "children": [
        {
          "text": "Adresse",
          "position": {
            "x": 2317.0,
            "y": 1172.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartner_DOAdresse_Adresse_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartner",
      "targetId": "DOAnsprechpartner",
      "routingPoints": [
        {
          "x": 918.5641025641025,
          "y": 1632.0
        },
        {
          "x": 918.5641025641025,
          "y": 1472.0
        },
        {
          "x": 666.0,
          "y": 1472.0
        },
        {
          "x": 666.0,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartner_DOAnsprechpartner_Ansprechpartner",
      "children": [
        {
          "text": "Ansprechpartner",
          "position": {
            "x": 664.0,
            "y": 1352.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartner_DOAnsprechpartner_Ansprechpartner_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOPartner",
      "targetId": "DOLohnfaktor",
      "routingPoints": [
        {
          "x": 949.3333333333333,
          "y": 1632.0
        },
        {
          "x": 949.3333333333333,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartner_DOLohnfaktor_DoLohnfaktoren",
      "children": [
        {
          "text": "DoLohnfaktoren",
          "position": {
            "x": 952.3333333333333,
            "y": 1352.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartner_DOLohnfaktor_DoLohnfaktoren_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartner",
      "targetId": "DOFSDZugangPartner",
      "routingPoints": [
        {
          "x": 903.1794871794872,
          "y": 1632.0
        },
        {
          "x": 903.1794871794872,
          "y": 1512.0
        },
        {
          "x": 416.0,
          "y": 1512.0
        },
        {
          "x": 416.0,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartner_DOFSDZugangPartner_FSDZugang",
      "children": [
        {
          "text": "FSDZugang",
          "position": {
            "x": 414.0,
            "y": 1352.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartner_DOFSDZugangPartner_FSDZugang_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartner",
      "targetId": "DOKlassifikation",
      "routingPoints": [
        {
          "x": 995.4871794871794,
          "y": 1632.0
        },
        {
          "x": 995.4871794871794,
          "y": 1472.0
        },
        {
          "x": 1666.0,
          "y": 1472.0
        },
        {
          "x": 1666.0,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartner_DOKlassifikation_Klassifikation",
      "children": [
        {
          "text": "Klassifikation",
          "position": {
            "x": 1664.0,
            "y": 1352.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartner_DOKlassifikation_Klassifikation_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartner",
      "targetId": "DOLohnfaktor",
      "routingPoints": [
        {
          "x": 933.9487179487179,
          "y": 1632.0
        },
        {
          "x": 933.9487179487179,
          "y": 1432.0
        },
        {
          "x": 882.6666666666666,
          "y": 1432.0
        },
        {
          "x": 882.6666666666666,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartner_DOLohnfaktor_Lohnfaktor",
      "children": [
        {
          "text": "Lohnfaktor",
          "position": {
            "x": 880.6666666666666,
            "y": 1352.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartner_DOLohnfaktor_Lohnfaktor_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartner",
      "targetId": "DOMahnInfo",
      "routingPoints": [
        {
          "x": 980.1025641025641,
          "y": 1632.0
        },
        {
          "x": 980.1025641025641,
          "y": 1432.0
        },
        {
          "x": 1416.0,
          "y": 1432.0
        },
        {
          "x": 1416.0,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartner_DOMahnInfo_MahnInfo",
      "children": [
        {
          "text": "MahnInfo",
          "position": {
            "x": 1414.0,
            "y": 1352.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartner_DOMahnInfo_MahnInfo_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartner",
      "targetId": "DOPA9030",
      "routingPoints": [
        {
          "x": 1010.8717948717948,
          "y": 1632.0
        },
        {
          "x": 1010.8717948717948,
          "y": 1512.0
        },
        {
          "x": 1916.0,
          "y": 1512.0
        },
        {
          "x": 1916.0,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartner_DOPA9030_PA9030",
      "children": [
        {
          "text": "PA9030",
          "position": {
            "x": 1914.0,
            "y": 1352.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartner_DOPA9030_PA9030_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartner",
      "targetId": "DOPartnerStandardRollen",
      "routingPoints": [
        {
          "x": 872.4102564102564,
          "y": 1632.0
        },
        {
          "x": 872.4102564102564,
          "y": 1592.0
        },
        {
          "x": 112.0,
          "y": 1592.0
        },
        {
          "x": 112.0,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartner_DOPartnerStandardRollen_PartnerStandardRollen",
      "children": [
        {
          "text": "PartnerStandardRollen",
          "position": {
            "x": 110.0,
            "y": 1352.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartner_DOPartnerStandardRollen_PartnerStandardRollen_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartner",
      "targetId": "DOSteuerinfo",
      "routingPoints": [
        {
          "x": 1026.2564102564102,
          "y": 1632.0
        },
        {
          "x": 1026.2564102564102,
          "y": 1552.0
        },
        {
          "x": 2166.0,
          "y": 1552.0
        },
        {
          "x": 2166.0,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartner_DOSteuerinfo_Steuerinfo",
      "children": [
        {
          "text": "Steuerinfo",
          "position": {
            "x": 2164.0,
            "y": 1352.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartner_DOSteuerinfo_Steuerinfo_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartner",
      "targetId": "DOTechnischeHinterlegung",
      "routingPoints": [
        {
          "x": 964.7179487179487,
          "y": 1632.0
        },
        {
          "x": 964.7179487179487,
          "y": 1392.0
        },
        {
          "x": 1166.0,
          "y": 1392.0
        },
        {
          "x": 1166.0,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartner_DOTechnischeHinterlegung_TechnischeHinterlegung",
      "children": [
        {
          "text": "TechnischeHinterlegung",
          "position": {
            "x": 1164.0,
            "y": 1352.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartner_DOTechnischeHinterlegung_TechnischeHinterlegung_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOPartner",
      "targetId": "DOVertriebsbereich",
      "routingPoints": [
        {
          "x": 887.7948717948717,
          "y": 1632.0
        },
        {
          "x": 887.7948717948717,
          "y": 1552.0
        },
        {
          "x": 265.0,
          "y": 1552.0
        },
        {
          "x": 265.0,
          "y": 952.0
        },
        {
          "x": 178.66666666666666,
          "y": 952.0
        },
        {
          "x": 178.66666666666666,
          "y": 912.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartner_DOVertriebsbereich_Vertriebsbereich",
      "children": [
        {
          "text": "Vertriebsbereich",
          "position": {
            "x": 263.0,
            "y": 1172.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartner_DOVertriebsbereich_Vertriebsbereich_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 2252.3333333333335,
        "y": 712.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOAdresse",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOAdresse_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOAdresse_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOAdresse_iconlabel"
                }
              ]
            },
            {
              "text": "DOAdresse",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOAdresse_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOAdresse_attrs",
          "children": [
            {
              "text": " - AdresseOID : EString",
              "type": "label:text",
              "id": "DOAdresse_AdresseOID"
            },
            {
              "text": " - Bundesland : EString",
              "type": "label:text",
              "id": "DOAdresse_Bundesland"
            },
            {
              "text": " - Gebaeude : EString",
              "type": "label:text",
              "id": "DOAdresse_Gebaeude"
            },
            {
              "text": " - Land : EString",
              "type": "label:text",
              "id": "DOAdresse_Land"
            },
            {
              "text": " - MobilNummer : EString",
              "type": "label:text",
              "id": "DOAdresse_MobilNummer"
            },
            {
              "text": " - MobilNummerAnzeigeKnz : EBooleanObject",
              "type": "label:text",
              "id": "DOAdresse_MobilNummerAnzeigeKnz"
            },
            {
              "text": " - Ort : EString",
              "type": "label:text",
              "id": "DOAdresse_Ort"
            },
            {
              "text": " - OrtPlz : EString",
              "type": "label:text",
              "id": "DOAdresse_OrtPlz"
            },
            {
              "text": " - Ortsteil : EString",
              "type": "label:text",
              "id": "DOAdresse_Ortsteil"
            },
            {
              "text": " - Plz : EString",
              "type": "label:text",
              "id": "DOAdresse_Plz"
            },
            {
              "text": " - PlzDerFirma : EString",
              "type": "label:text",
              "id": "DOAdresse_PlzDerFirma"
            },
            {
              "text": " - PlzDesPostfach : EString",
              "type": "label:text",
              "id": "DOAdresse_PlzDesPostfach"
            },
            {
              "text": " - Postfach : EString",
              "type": "label:text",
              "id": "DOAdresse_Postfach"
            },
            {
              "text": " - Raumnummer : EString",
              "type": "label:text",
              "id": "DOAdresse_Raumnummer"
            },
            {
              "text": " - Stockwerk : EString",
              "type": "label:text",
              "id": "DOAdresse_Stockwerk"
            },
            {
              "text": " - StrasseUndHausNr : EString",
              "type": "label:text",
              "id": "DOAdresse_StrasseUndHausNr"
            },
            {
              "text": " - Telefax : EString",
              "type": "label:text",
              "id": "DOAdresse_Telefax"
            },
            {
              "text": " - Telefon1 : EString",
              "type": "label:text",
              "id": "DOAdresse_Telefon1"
            },
            {
              "text": " - Telefon2 : EString",
              "type": "label:text",
              "id": "DOAdresse_Telefon2"
            },
            {
              "text": " - TransportZone : EString",
              "type": "label:text",
              "id": "DOAdresse_TransportZone"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOAdresse",
      "targetId": "DOEmail",
      "routingPoints": [
        {
          "x": 2319.0,
          "y": 712.0
        },
        {
          "x": 2319.0,
          "y": 592.0
        },
        {
          "x": 916.0,
          "y": 592.0
        },
        {
          "x": 916.0,
          "y": 552.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOAdresse_DOEmail_Email",
      "children": [
        {
          "text": "Email",
          "position": {
            "x": 2317.0,
            "y": 632.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOAdresse_DOEmail_Email_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOAdresse",
      "targetId": "DOHomePage",
      "routingPoints": [
        {
          "x": 2385.666666666667,
          "y": 712.0
        },
        {
          "x": 2385.666666666667,
          "y": 552.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOAdresse_DOHomePage_HomePage",
      "children": [
        {
          "text": "HomePage",
          "position": {
            "x": 2383.666666666667,
            "y": 632.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOAdresse_DOHomePage_HomePage_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 2285.666666666667,
        "y": 352.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOHomePage",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOHomePage_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOHomePage_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOHomePage_iconlabel"
                }
              ]
            },
            {
              "text": "DOHomePage",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOHomePage_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOHomePage_attrs",
          "children": [
            {
              "text": " - DefaultAdresse : EString",
              "type": "label:text",
              "id": "DOHomePage_DefaultAdresse"
            },
            {
              "text": " - HomePageOID : EString",
              "type": "label:text",
              "id": "DOHomePage_HomePageOID"
            },
            {
              "text": " - Standardempfaenger : EString",
              "type": "label:text",
              "id": "DOHomePage_Standardempfaenger"
            },
            {
              "text": " - SuchFeld : EString",
              "type": "label:text",
              "id": "DOHomePage_SuchFeld"
            },
            {
              "text": " - UriTyp : EString",
              "type": "label:text",
              "id": "DOHomePage_UriTyp"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 566.0,
        "y": 1072.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOAnsprechpartner",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOAnsprechpartner_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOAnsprechpartner_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOAnsprechpartner_iconlabel"
                }
              ]
            },
            {
              "text": "DOAnsprechpartner",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOAnsprechpartner_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOAnsprechpartner_attrs",
          "children": [
            {
              "text": " - AenderungsDatum : EDate",
              "type": "label:text",
              "id": "DOAnsprechpartner_AenderungsDatum"
            },
            {
              "text": " - AltePartnerNummer : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_AltePartnerNummer"
            },
            {
              "text": " - Anrede : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Anrede"
            },
            {
              "text": " - Ansprechpartnernummer : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Ansprechpartnernummer"
            },
            {
              "text": " - AuditMaengel : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_AuditMaengel"
            },
            {
              "text": " - AuditMaengelIO : EBooleanObject",
              "type": "label:text",
              "id": "DOAnsprechpartner_AuditMaengelIO"
            },
            {
              "text": " - AuftragsSperre : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_AuftragsSperre"
            },
            {
              "text": " - Bemerkungversand : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Bemerkungversand"
            },
            {
              "text": " - Branche : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Branche"
            },
            {
              "text": " - BuchungsSperre : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_BuchungsSperre"
            },
            {
              "text": " - CodeGruppeVers : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_CodeGruppeVers"
            },
            {
              "text": " - DsnPartnernummer : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_DsnPartnernummer"
            },
            {
              "text": " - EintrittStr : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_EintrittStr"
            },
            {
              "text": " - FAL : EBooleanObject",
              "type": "label:text",
              "id": "DOAnsprechpartner_FAL"
            },
            {
              "text": " - FakturaSperre : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_FakturaSperre"
            },
            {
              "text": " - Funktion : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Funktion"
            },
            {
              "text": " - Geburtsdatum : EDate",
              "type": "label:text",
              "id": "DOAnsprechpartner_Geburtsdatum"
            },
            {
              "text": " - Geschlecht : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Geschlecht"
            },
            {
              "text": " - InformationHinweis : ELongObject",
              "type": "label:text",
              "id": "DOAnsprechpartner_InformationHinweis"
            },
            {
              "text": " - KnzSammel : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_KnzSammel"
            },
            {
              "text": " - KnzSonderKunde : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_KnzSonderKunde"
            },
            {
              "text": " - KnzZahlart : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_KnzZahlart"
            },
            {
              "text": " - KonditionsGruppeGA : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_KonditionsGruppeGA"
            },
            {
              "text": " - KontaktSperre : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_KontaktSperre"
            },
            {
              "text": " - Kontengruppe : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Kontengruppe"
            },
            {
              "text": " - Kundengruppe : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Kundengruppe"
            },
            {
              "text": " - Kurzbezeichnung : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Kurzbezeichnung"
            },
            {
              "text": " - LieferSperre : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_LieferSperre"
            },
            {
              "text": " - LoeschSperre : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_LoeschSperre"
            },
            {
              "text": " - LoeschVormerkung : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_LoeschVormerkung"
            },
            {
              "text": " - Lohnfaktoren : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Lohnfaktoren"
            },
            {
              "text": " - Mitarbeiterkreis : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Mitarbeiterkreis"
            },
            {
              "text": " - Mithilfe : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Mithilfe"
            },
            {
              "text": " - Mypartner : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Mypartner"
            },
            {
              "text": " - Myprintjob : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Myprintjob"
            },
            {
              "text": " - Myprobjaendauftrag : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Myprobjaendauftrag"
            },
            {
              "text": " - NLL : EBooleanObject",
              "type": "label:text",
              "id": "DOAnsprechpartner_NLL"
            },
            {
              "text": " - Name : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Name"
            },
            {
              "text": " - Name2 : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Name2"
            },
            {
              "text": " - Name3 : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Name3"
            },
            {
              "text": " - Name4 : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Name4"
            },
            {
              "text": " - OU : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_OU"
            },
            {
              "text": " - PartnerOID : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_PartnerOID"
            },
            {
              "text": " - Partnernummer : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Partnernummer"
            },
            {
              "text": " - PersonalNummer : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_PersonalNummer"
            },
            {
              "text": " - Preisgruppe : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Preisgruppe"
            },
            {
              "text": " - PreislistenTyp : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_PreislistenTyp"
            },
            {
              "text": " - Rentner : EBooleanObject",
              "type": "label:text",
              "id": "DOAnsprechpartner_Rentner"
            },
            {
              "text": " - RollenTyp : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_RollenTyp"
            },
            {
              "text": " - Sepamandat : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Sepamandat"
            },
            {
              "text": " - Sprache : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Sprache"
            },
            {
              "text": " - Steuernummer1 : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Steuernummer1"
            },
            {
              "text": " - Titel1 : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Titel1"
            },
            {
              "text": " - Titel2 : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Titel2"
            },
            {
              "text": " - Titeldekraintern : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Titeldekraintern"
            },
            {
              "text": " - Titeldekraintern2 : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Titeldekraintern2"
            },
            {
              "text": " - Umsatzsteueridentnr : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Umsatzsteueridentnr"
            },
            {
              "text": " - Unternehmen : EBooleanObject",
              "type": "label:text",
              "id": "DOAnsprechpartner_Unternehmen"
            },
            {
              "text": " - VerkaeuferGruppe : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_VerkaeuferGruppe"
            },
            {
              "text": " - VerkaufsBuero : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_VerkaufsBuero"
            },
            {
              "text": " - Versandblattart : EBigDecimal",
              "type": "label:text",
              "id": "DOAnsprechpartner_Versandblattart"
            },
            {
              "text": " - Vertriebstext : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Vertriebstext"
            },
            {
              "text": " - Vkorg : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_Vkorg"
            },
            {
              "text": " - XSIType : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_XSIType"
            },
            {
              "text": " - ZahlSperre : EString",
              "type": "label:text",
              "id": "DOAnsprechpartner_ZahlSperre"
            },
            {
              "text": " - ZuordnungsNr : ELongObject",
              "type": "label:text",
              "id": "DOAnsprechpartner_ZuordnungsNr"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOAnsprechpartner",
      "targetId": "DOAnsprechpartnerAdresse",
      "routingPoints": [
        {
          "x": 666.0,
          "y": 1072.0
        },
        {
          "x": 666.0,
          "y": 912.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOAnsprechpartner_DOAnsprechpartnerAdresse_Adresse",
      "children": [
        {
          "text": "Adresse",
          "position": {
            "x": 664.0,
            "y": 992.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOAnsprechpartner_DOAnsprechpartnerAdresse_Adresse_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 566.0,
        "y": 712.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOAnsprechpartnerAdresse",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOAnsprechpartnerAdresse_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOAnsprechpartnerAdresse_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOAnsprechpartnerAdresse_iconlabel"
                }
              ]
            },
            {
              "text": "DOAnsprechpartnerAdresse",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOAnsprechpartnerAdresse_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOAnsprechpartnerAdresse_attrs",
          "children": [
            {
              "text": " - AdresseOID : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_AdresseOID"
            },
            {
              "text": " - Bundesland : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_Bundesland"
            },
            {
              "text": " - Gebaeude : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_Gebaeude"
            },
            {
              "text": " - Land : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_Land"
            },
            {
              "text": " - MobilNummer : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_MobilNummer"
            },
            {
              "text": " - MobilNummerAnzeigeKnz : EBooleanObject",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_MobilNummerAnzeigeKnz"
            },
            {
              "text": " - Ort : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_Ort"
            },
            {
              "text": " - OrtPlz : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_OrtPlz"
            },
            {
              "text": " - Ortsteil : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_Ortsteil"
            },
            {
              "text": " - Plz : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_Plz"
            },
            {
              "text": " - PlzDerFirma : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_PlzDerFirma"
            },
            {
              "text": " - PlzDesPostfach : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_PlzDesPostfach"
            },
            {
              "text": " - Postfach : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_Postfach"
            },
            {
              "text": " - Raumnummer : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_Raumnummer"
            },
            {
              "text": " - Stockwerk : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_Stockwerk"
            },
            {
              "text": " - StrasseUndHausNr : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_StrasseUndHausNr"
            },
            {
              "text": " - Telefax : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_Telefax"
            },
            {
              "text": " - Telefon1 : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_Telefon1"
            },
            {
              "text": " - Telefon2 : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_Telefon2"
            },
            {
              "text": " - TransportZone : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerAdresse_TransportZone"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOAnsprechpartnerAdresse",
      "targetId": "DOEmail",
      "routingPoints": [
        {
          "x": 699.3333333333333,
          "y": 712.0
        },
        {
          "x": 699.3333333333333,
          "y": 672.0
        },
        {
          "x": 849.3333333333333,
          "y": 672.0
        },
        {
          "x": 849.3333333333333,
          "y": 552.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOAnsprechpartnerAdresse_DOEmail_Email",
      "children": [
        {
          "text": "Email",
          "position": {
            "x": 847.3333333333333,
            "y": 632.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOAnsprechpartnerAdresse_DOEmail_Email_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOAnsprechpartnerAdresse",
      "targetId": "DOAnsprechpartnerHomePage",
      "routingPoints": [
        {
          "x": 632.6666666666666,
          "y": 712.0
        },
        {
          "x": 632.6666666666666,
          "y": 552.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOAnsprechpartnerAdresse_DOAnsprechpartnerHomePage_HomePage",
      "children": [
        {
          "text": "HomePage",
          "position": {
            "x": 630.6666666666666,
            "y": 632.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOAnsprechpartnerAdresse_DOAnsprechpartnerHomePage_HomePage_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 532.6666666666666,
        "y": 352.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOAnsprechpartnerHomePage",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOAnsprechpartnerHomePage_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOAnsprechpartnerHomePage_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOAnsprechpartnerHomePage_iconlabel"
                }
              ]
            },
            {
              "text": "DOAnsprechpartnerHomePage",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOAnsprechpartnerHomePage_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOAnsprechpartnerHomePage_attrs",
          "children": [
            {
              "text": " - DefaultAdresse : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerHomePage_DefaultAdresse"
            },
            {
              "text": " - HomePageOID : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerHomePage_HomePageOID"
            },
            {
              "text": " - Standardempfaenger : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerHomePage_Standardempfaenger"
            },
            {
              "text": " - SuchFeld : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerHomePage_SuchFeld"
            },
            {
              "text": " - UriTyp : EString",
              "type": "label:text",
              "id": "DOAnsprechpartnerHomePage_UriTyp"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 816.0,
        "y": 1072.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOLohnfaktor",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOLohnfaktor_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOLohnfaktor_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOLohnfaktor_iconlabel"
                }
              ]
            },
            {
              "text": "DOLohnfaktor",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOLohnfaktor_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOLohnfaktor_attrs",
          "children": [
            {
              "text": " - AendDate : EDate",
              "type": "label:text",
              "id": "DOLohnfaktor_AendDate"
            },
            {
              "text": " - AendPers : EString",
              "type": "label:text",
              "id": "DOLohnfaktor_AendPers"
            },
            {
              "text": " - AenderbarDurchSv : EBooleanObject",
              "type": "label:text",
              "id": "DOLohnfaktor_AenderbarDurchSv"
            },
            {
              "text": " - CaravanGlatt : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_CaravanGlatt"
            },
            {
              "text": " - CaravanInstandset : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_CaravanInstandset"
            },
            {
              "text": " - CaravanLackieren : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_CaravanLackieren"
            },
            {
              "text": " - CaravanStrukturiert : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_CaravanStrukturiert"
            },
            {
              "text": " - CaravanUPE : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_CaravanUPE"
            },
            {
              "text": " - CaravanVerbringung : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_CaravanVerbringung"
            },
            {
              "text": " - Fahrzeugart : EIntegerObject",
              "type": "label:text",
              "id": "DOLohnfaktor_Fahrzeugart"
            },
            {
              "text": " - Hersteller : EString",
              "type": "label:text",
              "id": "DOLohnfaktor_Hersteller"
            },
            {
              "text": " - Herstellercode : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_Herstellercode"
            },
            {
              "text": " - KraftradHerstellerFlaeche : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_KraftradHerstellerFlaeche"
            },
            {
              "text": " - KraftradKlasse1 : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_KraftradKlasse1"
            },
            {
              "text": " - KraftradMetalic : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_KraftradMetalic"
            },
            {
              "text": " - KraftradPerl : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_KraftradPerl"
            },
            {
              "text": " - KraftradUPE : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_KraftradUPE"
            },
            {
              "text": " - KraftradUni : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_KraftradUni"
            },
            {
              "text": " - KraftradVerbringung : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_KraftradVerbringung"
            },
            {
              "text": " - Kurzbeschreibung : EString",
              "type": "label:text",
              "id": "DOLohnfaktor_Kurzbeschreibung"
            },
            {
              "text": " - LkwAZT : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwAZT"
            },
            {
              "text": " - LkwAufschlagMinEff : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwAufschlagMinEff"
            },
            {
              "text": " - LkwFlaeche : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwFlaeche"
            },
            {
              "text": " - LkwHerst : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwHerst"
            },
            {
              "text": " - LkwHerstellerFlaeche : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwHerstellerFlaeche"
            },
            {
              "text": " - LkwKlasse1 : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwKlasse1"
            },
            {
              "text": " - LkwKlasse2 : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwKlasse2"
            },
            {
              "text": " - LkwKlasse3 : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwKlasse3"
            },
            {
              "text": " - LkwKlasse5 : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwKlasse5"
            },
            {
              "text": " - LkwLackierungMaterial : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwLackierungMaterial"
            },
            {
              "text": " - LkwMaterialMet : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwMaterialMet"
            },
            {
              "text": " - LkwMaterialPerl : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwMaterialPerl"
            },
            {
              "text": " - LkwMaterialUni : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwMaterialUni"
            },
            {
              "text": " - LkwUPE : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwUPE"
            },
            {
              "text": " - LkwVerbringung : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_LkwVerbringung"
            },
            {
              "text": " - Lohnfaktorart : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_Lohnfaktorart"
            },
            {
              "text": " - LohnfaktorenOID : EString",
              "type": "label:text",
              "id": "DOLohnfaktor_LohnfaktorenOID"
            },
            {
              "text": " - PkwAZT : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwAZT"
            },
            {
              "text": " - PkwAufschlagMinEff : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwAufschlagMinEff"
            },
            {
              "text": " - PkwFlaeche : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwFlaeche"
            },
            {
              "text": " - PkwHerst : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwHerst"
            },
            {
              "text": " - PkwHerstellerFlaeche : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwHerstellerFlaeche"
            },
            {
              "text": " - PkwKlasse1 : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwKlasse1"
            },
            {
              "text": " - PkwKlasse2 : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwKlasse2"
            },
            {
              "text": " - PkwKlasse3 : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwKlasse3"
            },
            {
              "text": " - PkwKlasse5 : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwKlasse5"
            },
            {
              "text": " - PkwLackierungMaterial : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwLackierungMaterial"
            },
            {
              "text": " - PkwMaterialMet : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwMaterialMet"
            },
            {
              "text": " - PkwMaterialPerl : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwMaterialPerl"
            },
            {
              "text": " - PkwMaterialUni : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwMaterialUni"
            },
            {
              "text": " - PkwUPE : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwUPE"
            },
            {
              "text": " - PkwVerbringung : EBigDecimal",
              "type": "label:text",
              "id": "DOLohnfaktor_PkwVerbringung"
            },
            {
              "text": " - ProductKey : EString",
              "type": "label:text",
              "id": "DOLohnfaktor_ProductKey"
            },
            {
              "text": " - VertragspartnerNr : EString",
              "type": "label:text",
              "id": "DOLohnfaktor_VertragspartnerNr"
            },
            {
              "text": " - Zertifizierung : EString",
              "type": "label:text",
              "id": "DOLohnfaktor_Zertifizierung"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOLohnfaktor",
      "targetId": "DORandfahnenCode",
      "routingPoints": [
        {
          "x": 916.0,
          "y": 1072.0
        },
        {
          "x": 916.0,
          "y": 912.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOLohnfaktor_DORandfahnenCode_RandfahnenCode",
      "children": [
        {
          "text": "RandfahnenCode",
          "position": {
            "x": 914.0,
            "y": 992.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOLohnfaktor_DORandfahnenCode_RandfahnenCode_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 816.0,
        "y": 712.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DORandfahnenCode",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DORandfahnenCode_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DORandfahnenCode_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DORandfahnenCode_iconlabel"
                }
              ]
            },
            {
              "text": "DORandfahnenCode",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DORandfahnenCode_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DORandfahnenCode_attrs",
          "children": [
            {
              "text": " - FahrzeugArt : EBigDecimal",
              "type": "label:text",
              "id": "DORandfahnenCode_FahrzeugArt"
            },
            {
              "text": " - Oid : EString",
              "type": "label:text",
              "id": "DORandfahnenCode_Oid"
            },
            {
              "text": " - RandfahnenCode : EString",
              "type": "label:text",
              "id": "DORandfahnenCode_RandfahnenCode"
            },
            {
              "text": " - Wert : EString",
              "type": "label:text",
              "id": "DORandfahnenCode_Wert"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 316.0,
        "y": 1072.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOFSDZugangPartner",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOFSDZugangPartner_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOFSDZugangPartner_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOFSDZugangPartner_iconlabel"
                }
              ]
            },
            {
              "text": "DOFSDZugangPartner",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOFSDZugangPartner_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOFSDZugangPartner_attrs",
          "children": [
            {
              "text": " - Fsdkennung : EString",
              "type": "label:text",
              "id": "DOFSDZugangPartner_Fsdkennung"
            },
            {
              "text": " - Fsdkennungabstr : EString",
              "type": "label:text",
              "id": "DOFSDZugangPartner_Fsdkennungabstr"
            },
            {
              "text": " - Fsdkennungbisstr : EString",
              "type": "label:text",
              "id": "DOFSDZugangPartner_Fsdkennungbisstr"
            },
            {
              "text": " - Lfdnr : EIntegerObject",
              "type": "label:text",
              "id": "DOFSDZugangPartner_Lfdnr"
            },
            {
              "text": " - Nname : EString",
              "type": "label:text",
              "id": "DOFSDZugangPartner_Nname"
            },
            {
              "text": " - Oid : EString",
              "type": "label:text",
              "id": "DOFSDZugangPartner_Oid"
            },
            {
              "text": " - Vname : EString",
              "type": "label:text",
              "id": "DOFSDZugangPartner_Vname"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 1566.0,
        "y": 1072.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOKlassifikation",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOKlassifikation_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOKlassifikation_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOKlassifikation_iconlabel"
                }
              ]
            },
            {
              "text": "DOKlassifikation",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOKlassifikation_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOKlassifikation_attrs",
          "children": [
            {
              "text": " - AtWrt : EString",
              "type": "label:text",
              "id": "DOKlassifikation_AtWrt"
            },
            {
              "text": " - ClassType : EString",
              "type": "label:text",
              "id": "DOKlassifikation_ClassType"
            },
            {
              "text": " - InternerFliesskommaWert : EBigDecimal",
              "type": "label:text",
              "id": "DOKlassifikation_InternerFliesskommaWert"
            },
            {
              "text": " - KlassifikationClass : EString",
              "type": "label:text",
              "id": "DOKlassifikation_KlassifikationClass"
            },
            {
              "text": " - KlassifikationOID : EString",
              "type": "label:text",
              "id": "DOKlassifikation_KlassifikationOID"
            },
            {
              "text": " - MassEinheit : EString",
              "type": "label:text",
              "id": "DOKlassifikation_MassEinheit"
            },
            {
              "text": " - MassEinheitBis : EString",
              "type": "label:text",
              "id": "DOKlassifikation_MassEinheitBis"
            },
            {
              "text": " - MaterialNummerVuG : EString",
              "type": "label:text",
              "id": "DOKlassifikation_MaterialNummerVuG"
            },
            {
              "text": " - MerkmalBezeichnung : EString",
              "type": "label:text",
              "id": "DOKlassifikation_MerkmalBezeichnung"
            },
            {
              "text": " - MerkmalName : EString",
              "type": "label:text",
              "id": "DOKlassifikation_MerkmalName"
            },
            {
              "text": " - MerkmalWert : EString",
              "type": "label:text",
              "id": "DOKlassifikation_MerkmalWert"
            },
            {
              "text": " - MerkmalWertBis : EString",
              "type": "label:text",
              "id": "DOKlassifikation_MerkmalWertBis"
            },
            {
              "text": " - Mypartner : EString",
              "type": "label:text",
              "id": "DOKlassifikation_Mypartner"
            },
            {
              "text": " - OperandWertBis : EString",
              "type": "label:text",
              "id": "DOKlassifikation_OperandWertBis"
            },
            {
              "text": " - OperandWertVon : EString",
              "type": "label:text",
              "id": "DOKlassifikation_OperandWertVon"
            },
            {
              "text": " - ZaehlerAusprWert : EBigDecimal",
              "type": "label:text",
              "id": "DOKlassifikation_ZaehlerAusprWert"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 1316.0,
        "y": 1072.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOMahnInfo",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOMahnInfo_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOMahnInfo_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOMahnInfo_iconlabel"
                }
              ]
            },
            {
              "text": "DOMahnInfo",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOMahnInfo_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOMahnInfo_attrs",
          "children": [
            {
              "text": " - Buchungskreis : EString",
              "type": "label:text",
              "id": "DOMahnInfo_Buchungskreis"
            },
            {
              "text": " - DatumGerichtlMahnverfahrenStr : EString",
              "type": "label:text",
              "id": "DOMahnInfo_DatumGerichtlMahnverfahrenStr"
            },
            {
              "text": " - DatumLetzteMahnung : EDate",
              "type": "label:text",
              "id": "DOMahnInfo_DatumLetzteMahnung"
            },
            {
              "text": " - Mahnbereich : EString",
              "type": "label:text",
              "id": "DOMahnInfo_Mahnbereich"
            },
            {
              "text": " - MahninfoOID : EString",
              "type": "label:text",
              "id": "DOMahnInfo_MahninfoOID"
            },
            {
              "text": " - Mahnsperre : EString",
              "type": "label:text",
              "id": "DOMahnInfo_Mahnsperre"
            },
            {
              "text": " - Mahnstufe : EString",
              "type": "label:text",
              "id": "DOMahnInfo_Mahnstufe"
            },
            {
              "text": " - Mahnverfahren : EString",
              "type": "label:text",
              "id": "DOMahnInfo_Mahnverfahren"
            },
            {
              "text": " - Mypartner : EString",
              "type": "label:text",
              "id": "DOMahnInfo_Mypartner"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 1816.0,
        "y": 1072.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOPA9030",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOPA9030_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOPA9030_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOPA9030_iconlabel"
                }
              ]
            },
            {
              "text": "DOPA9030",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOPA9030_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOPA9030_attrs",
          "children": [
            {
              "text": " - Hauptverantwortlicher : EBooleanObject",
              "type": "label:text",
              "id": "DOPA9030_Hauptverantwortlicher"
            },
            {
              "text": " - OID : EString",
              "type": "label:text",
              "id": "DOPA9030_OID"
            },
            {
              "text": " - ObjektID : EString",
              "type": "label:text",
              "id": "DOPA9030_ObjektID"
            },
            {
              "text": " - Objektbezeichnung : EString",
              "type": "label:text",
              "id": "DOPA9030_Objektbezeichnung"
            },
            {
              "text": " - Objektkuerzel : EString",
              "type": "label:text",
              "id": "DOPA9030_Objektkuerzel"
            },
            {
              "text": " - Verkaufergruppe : EString",
              "type": "label:text",
              "id": "DOPA9030_Verkaufergruppe"
            },
            {
              "text": " - Verkaufsbuero : EString",
              "type": "label:text",
              "id": "DOPA9030_Verkaufsbuero"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 12.0,
        "y": 1072.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOPartnerStandardRollen",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOPartnerStandardRollen_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOPartnerStandardRollen_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOPartnerStandardRollen_iconlabel"
                }
              ]
            },
            {
              "text": "DOPartnerStandardRollen",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOPartnerStandardRollen_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOPartnerStandardRollen_attrs",
          "children": [
            {
              "text": " - Kuerzel : EString",
              "type": "label:text",
              "id": "DOPartnerStandardRollen_Kuerzel"
            },
            {
              "text": " - Owner : EString",
              "type": "label:text",
              "id": "DOPartnerStandardRollen_Owner"
            },
            {
              "text": " - PartnerStandardRollenOID : EString",
              "type": "label:text",
              "id": "DOPartnerStandardRollen_PartnerStandardRollenOID"
            },
            {
              "text": " - Partnernummer : EString",
              "type": "label:text",
              "id": "DOPartnerStandardRollen_Partnernummer"
            },
            {
              "text": " - Sparte : EString",
              "type": "label:text",
              "id": "DOPartnerStandardRollen_Sparte"
            },
            {
              "text": " - Verkaufsorganisation : EString",
              "type": "label:text",
              "id": "DOPartnerStandardRollen_Verkaufsorganisation"
            },
            {
              "text": " - Vertriebsweg : EString",
              "type": "label:text",
              "id": "DOPartnerStandardRollen_Vertriebsweg"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOPartnerStandardRollen",
      "targetId": "DOVertriebsbereich",
      "routingPoints": [
        {
          "x": 112.0,
          "y": 1072.0
        },
        {
          "x": 112.0,
          "y": 912.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartnerStandardRollen_DOVertriebsbereich_Vertriebsbereich",
      "children": [
        {
          "text": "Vertriebsbereich",
          "position": {
            "x": 110.0,
            "y": 992.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerStandardRollen_DOVertriebsbereich_Vertriebsbereich_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 45.33333333333334,
        "y": 712.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOVertriebsbereich",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOVertriebsbereich_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOVertriebsbereich_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOVertriebsbereich_iconlabel"
                }
              ]
            },
            {
              "text": "DOVertriebsbereich",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOVertriebsbereich_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOVertriebsbereich_attrs",
          "children": [
            {
              "text": " - AuftragsSperre : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_AuftragsSperre"
            },
            {
              "text": " - BuchungsSperre : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_BuchungsSperre"
            },
            {
              "text": " - FakturaSperre : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_FakturaSperre"
            },
            {
              "text": " - KonditionsArt : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_KonditionsArt"
            },
            {
              "text": " - KontaktSperre : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_KontaktSperre"
            },
            {
              "text": " - LieferSperre : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_LieferSperre"
            },
            {
              "text": " - LoeschSperre : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_LoeschSperre"
            },
            {
              "text": " - LoeschVormerkung : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_LoeschVormerkung"
            },
            {
              "text": " - Sparte : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_Sparte"
            },
            {
              "text": " - VerkaufsOrganisation : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_VerkaufsOrganisation"
            },
            {
              "text": " - VertriebsbereichOID : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_VertriebsbereichOID"
            },
            {
              "text": " - Vertriebsweg : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_Vertriebsweg"
            },
            {
              "text": " - ZahlSperre : EString",
              "type": "label:text",
              "id": "DOVertriebsbereich_ZahlSperre"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 2066.0,
        "y": 1072.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOSteuerinfo",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOSteuerinfo_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOSteuerinfo_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOSteuerinfo_iconlabel"
                }
              ]
            },
            {
              "text": "DOSteuerinfo",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOSteuerinfo_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOSteuerinfo_attrs",
          "children": [
            {
              "text": " - LieferndesLand : EString",
              "type": "label:text",
              "id": "DOSteuerinfo_LieferndesLand"
            },
            {
              "text": " - SteuerKlassifikation : EString",
              "type": "label:text",
              "id": "DOSteuerinfo_SteuerKlassifikation"
            },
            {
              "text": " - SteuerinfoOID : EString",
              "type": "label:text",
              "id": "DOSteuerinfo_SteuerinfoOID"
            },
            {
              "text": " - Steuertyp : EString",
              "type": "label:text",
              "id": "DOSteuerinfo_Steuertyp"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 1066.0,
        "y": 1072.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOTechnischeHinterlegung",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOTechnischeHinterlegung_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOTechnischeHinterlegung_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOTechnischeHinterlegung_iconlabel"
                }
              ]
            },
            {
              "text": "DOTechnischeHinterlegung",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOTechnischeHinterlegung_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOTechnischeHinterlegung_attrs",
          "children": [
            {
              "text": " - AtWrt : EString",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_AtWrt"
            },
            {
              "text": " - InternerFliesskommaWert : EBigDecimal",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_InternerFliesskommaWert"
            },
            {
              "text": " - MassEinheit : EString",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_MassEinheit"
            },
            {
              "text": " - MassEinheitBis : EString",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_MassEinheitBis"
            },
            {
              "text": " - MaterialNummerVuG : EString",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_MaterialNummerVuG"
            },
            {
              "text": " - MerkmalBezeichnung : EString",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_MerkmalBezeichnung"
            },
            {
              "text": " - MerkmalName : EString",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_MerkmalName"
            },
            {
              "text": " - MerkmalWert : EString",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_MerkmalWert"
            },
            {
              "text": " - MerkmalWertBis : EString",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_MerkmalWertBis"
            },
            {
              "text": " - Mypartner : EString",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_Mypartner"
            },
            {
              "text": " - OperandWertBis : EString",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_OperandWertBis"
            },
            {
              "text": " - OperandWertVon : EString",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_OperandWertVon"
            },
            {
              "text": " - TechnischeHinterlegungOID : EString",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_TechnischeHinterlegungOID"
            },
            {
              "text": " - ZaehlerAusprWert : EBigDecimal",
              "type": "label:text",
              "id": "DOTechnischeHinterlegung_ZaehlerAusprWert"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 2670.0,
        "y": 712.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOPartnerRefType",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOPartnerRefType_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOPartnerRefType_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOPartnerRefType_iconlabel"
                }
              ]
            },
            {
              "text": "DOPartnerRefType",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOPartnerRefType_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOPartnerRefType_attrs",
          "children": [
            {
              "text": " - Partnernummer : EString",
              "type": "label:text",
              "id": "DOPartnerRefType_Partnernummer"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOPartnerRefType",
      "targetId": "DOVertriebsbereichType",
      "routingPoints": [
        {
          "x": 2770.0,
          "y": 712.0
        },
        {
          "x": 2770.0,
          "y": 552.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartnerRefType_DOVertriebsbereichType_Vertriebsbereich",
      "children": [
        {
          "text": "Vertriebsbereich",
          "position": {
            "x": 2768.0,
            "y": 632.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerRefType_DOVertriebsbereichType_Vertriebsbereich_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 2670.0,
        "y": 352.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOVertriebsbereichType",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOVertriebsbereichType_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOVertriebsbereichType_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOVertriebsbereichType_iconlabel"
                }
              ]
            },
            {
              "text": "DOVertriebsbereichType",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOVertriebsbereichType_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOVertriebsbereichType_attrs",
          "children": [
            {
              "text": " - Sparte : EString",
              "type": "label:text",
              "id": "DOVertriebsbereichType_Sparte"
            },
            {
              "text": " - VerkaufsOrganisation : EString",
              "type": "label:text",
              "id": "DOVertriebsbereichType_VerkaufsOrganisation"
            },
            {
              "text": " - Vertriebsweg : EString",
              "type": "label:text",
              "id": "DOVertriebsbereichType_Vertriebsweg"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 890.3589743589744,
        "y": 1992.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOPartnerData",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOPartnerData_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOPartnerData_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOPartnerData_iconlabel"
                }
              ]
            },
            {
              "text": "DOPartnerData",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOPartnerData_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOPartnerData_attrs",
          "children": []
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartnerData",
      "targetId": "DOPartner",
      "routingPoints": [
        {
          "x": 990.3589743589744,
          "y": 1992.0
        },
        {
          "x": 990.3589743589744,
          "y": 1832.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartnerData_DOPartner_Partner",
      "children": [
        {
          "text": "Partner",
          "position": {
            "x": 988.3589743589744,
            "y": 1912.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerData_DOPartner_Partner_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 232.0,
        "y": 12.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "CallInfo",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "CallInfo_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "CallInfo_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "CallInfo_iconlabel"
                }
              ]
            },
            {
              "text": "CallInfo",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "CallInfo_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "CallInfo_attrs",
          "children": [
            {
              "text": " - DQL : EString",
              "type": "label:text",
              "id": "CallInfo_DQL"
            },
            {
              "text": " - ElapTime : EString",
              "type": "label:text",
              "id": "CallInfo_ElapTime"
            },
            {
              "text": " - Message : EString",
              "type": "label:text",
              "id": "CallInfo_Message"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 452.0,
        "y": 12.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOLohnfaktorenRandfahnenCode",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOLohnfaktorenRandfahnenCode_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOLohnfaktorenRandfahnenCode_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOLohnfaktorenRandfahnenCode_iconlabel"
                }
              ]
            },
            {
              "text": "DOLohnfaktorenRandfahnenCode",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOLohnfaktorenRandfahnenCode_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOLohnfaktorenRandfahnenCode_attrs",
          "children": [
            {
              "text": " - Oid : EString",
              "type": "label:text",
              "id": "DOLohnfaktorenRandfahnenCode_Oid"
            },
            {
              "text": " - RandfahnenCode : EString",
              "type": "label:text",
              "id": "DOLohnfaktorenRandfahnenCode_RandfahnenCode"
            },
            {
              "text": " - Wert : EString",
              "type": "label:text",
              "id": "DOLohnfaktorenRandfahnenCode_Wert"
            },
            {
              "text": " - FahrzeugArt : EIntegerObject",
              "type": "label:text",
              "id": "DOLohnfaktorenRandfahnenCode_FahrzeugArt"
            },
            {
              "text": " - Myaplohnfaktoren : EString",
              "type": "label:text",
              "id": "DOLohnfaktorenRandfahnenCode_Myaplohnfaktoren"
            },
            {
              "text": " - Myapplohnfaktoren : EString",
              "type": "label:text",
              "id": "DOLohnfaktorenRandfahnenCode_Myapplohnfaktoren"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 672.0,
        "y": 12.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOPHierarchy",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOPHierarchy_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOPHierarchy_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOPHierarchy_iconlabel"
                }
              ]
            },
            {
              "text": "DOPHierarchy",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOPHierarchy_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOPHierarchy_attrs",
          "children": [
            {
              "text": " - GueltigAb : EDate",
              "type": "label:text",
              "id": "DOPHierarchy_GueltigAb"
            },
            {
              "text": " - GueltigBis : EDate",
              "type": "label:text",
              "id": "DOPHierarchy_GueltigBis"
            },
            {
              "text": " - HKunnr : EString",
              "type": "label:text",
              "id": "DOPHierarchy_HKunnr"
            },
            {
              "text": " - HSpart : EString",
              "type": "label:text",
              "id": "DOPHierarchy_HSpart"
            },
            {
              "text": " - HVkOrg : EString",
              "type": "label:text",
              "id": "DOPHierarchy_HVkOrg"
            },
            {
              "text": " - HVtWeg : EString",
              "type": "label:text",
              "id": "DOPHierarchy_HVtWeg"
            },
            {
              "text": " - Kennzeichnungknoten : EString",
              "type": "label:text",
              "id": "DOPHierarchy_Kennzeichnungknoten"
            },
            {
              "text": " - Kunnr : EString",
              "type": "label:text",
              "id": "DOPHierarchy_Kunnr"
            },
            {
              "text": " - Mandant : EString",
              "type": "label:text",
              "id": "DOPHierarchy_Mandant"
            },
            {
              "text": " - Oid : EString",
              "type": "label:text",
              "id": "DOPHierarchy_Oid"
            },
            {
              "text": " - ParentPartnerOid : EString",
              "type": "label:text",
              "id": "DOPHierarchy_ParentPartnerOid"
            },
            {
              "text": " - PartnerOid : EString",
              "type": "label:text",
              "id": "DOPHierarchy_PartnerOid"
            },
            {
              "text": " - Spart : EString",
              "type": "label:text",
              "id": "DOPHierarchy_Spart"
            },
            {
              "text": " - Type : EString",
              "type": "label:text",
              "id": "DOPHierarchy_Type"
            },
            {
              "text": " - VkOrg : EString",
              "type": "label:text",
              "id": "DOPHierarchy_VkOrg"
            },
            {
              "text": " - VtWeg : EString",
              "type": "label:text",
              "id": "DOPHierarchy_VtWeg"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 892.0,
        "y": 12.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOLohnfaktorenMaterialNummer",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOLohnfaktorenMaterialNummer_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOLohnfaktorenMaterialNummer_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOLohnfaktorenMaterialNummer_iconlabel"
                }
              ]
            },
            {
              "text": "DOLohnfaktorenMaterialNummer",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOLohnfaktorenMaterialNummer_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOLohnfaktorenMaterialNummer_attrs",
          "children": [
            {
              "text": " - Oid : EString",
              "type": "label:text",
              "id": "DOLohnfaktorenMaterialNummer_Oid"
            },
            {
              "text": " - MaterialNummer : EString",
              "type": "label:text",
              "id": "DOLohnfaktorenMaterialNummer_MaterialNummer"
            },
            {
              "text": " - Myaplohnfaktoren : EString",
              "type": "label:text",
              "id": "DOLohnfaktorenMaterialNummer_Myaplohnfaktoren"
            },
            {
              "text": " - Myapplohnfaktoren : EString",
              "type": "label:text",
              "id": "DOLohnfaktorenMaterialNummer_Myapplohnfaktoren"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 1382.0,
        "y": 52.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOHierarchyPartner",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOHierarchyPartner_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOHierarchyPartner_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOHierarchyPartner_iconlabel"
                }
              ]
            },
            {
              "text": "DOHierarchyPartner",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOHierarchyPartner_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOHierarchyPartner_attrs",
          "children": [
            {
              "text": " - Name : EString",
              "type": "label:text",
              "id": "DOHierarchyPartner_Name"
            },
            {
              "text": " - Name2 : EString",
              "type": "label:text",
              "id": "DOHierarchyPartner_Name2"
            },
            {
              "text": " - Name3 : EString",
              "type": "label:text",
              "id": "DOHierarchyPartner_Name3"
            },
            {
              "text": " - Name4 : EString",
              "type": "label:text",
              "id": "DOHierarchyPartner_Name4"
            },
            {
              "text": " - Ort : EString",
              "type": "label:text",
              "id": "DOHierarchyPartner_Ort"
            },
            {
              "text": " - Partnernummer : EString",
              "type": "label:text",
              "id": "DOHierarchyPartner_Partnernummer"
            },
            {
              "text": " - RollenTyp : EString",
              "type": "label:text",
              "id": "DOHierarchyPartner_RollenTyp"
            },
            {
              "text": " - StrasseUndHausNr : EString",
              "type": "label:text",
              "id": "DOHierarchyPartner_StrasseUndHausNr"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOHierarchyPartner",
      "targetId": "DOHierarchyPartner",
      "routingPoints": [
        {
          "x": 1482.0,
          "y": 52.0
        },
        {
          "x": 1482.0,
          "y": 12.0
        },
        {
          "x": 1332.0,
          "y": 12.0
        },
        {
          "x": 1332.0,
          "y": 332.0
        },
        {
          "x": 1482.0,
          "y": 332.0
        },
        {
          "x": 1482.0,
          "y": 252.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOHierarchyPartner_DOHierarchyPartner_Parent",
      "children": [
        {
          "text": "Parent",
          "position": {
            "x": 1332.0,
            "y": 332.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOHierarchyPartner_DOHierarchyPartner_Parent_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 2370.0,
        "y": 1072.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOPartnerHierarchie",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOPartnerHierarchie_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOPartnerHierarchie_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOPartnerHierarchie_iconlabel"
                }
              ]
            },
            {
              "text": "DOPartnerHierarchie",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOPartnerHierarchie_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOPartnerHierarchie_attrs",
          "children": [
            {
              "text": " - AnzeigenameGWM : EString",
              "type": "label:text",
              "id": "DOPartnerHierarchie_AnzeigenameGWM"
            },
            {
              "text": " - Kennzeichnungknoten : EString",
              "type": "label:text",
              "id": "DOPartnerHierarchie_Kennzeichnungknoten"
            },
            {
              "text": " - Name : EString",
              "type": "label:text",
              "id": "DOPartnerHierarchie_Name"
            },
            {
              "text": " - Name2 : EString",
              "type": "label:text",
              "id": "DOPartnerHierarchie_Name2"
            },
            {
              "text": " - Name3 : EString",
              "type": "label:text",
              "id": "DOPartnerHierarchie_Name3"
            },
            {
              "text": " - Name4 : EString",
              "type": "label:text",
              "id": "DOPartnerHierarchie_Name4"
            },
            {
              "text": " - PartnerNummer : EString",
              "type": "label:text",
              "id": "DOPartnerHierarchie_PartnerNummer"
            },
            {
              "text": " - PartnerOid : EString",
              "type": "label:text",
              "id": "DOPartnerHierarchie_PartnerOid"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOPartnerHierarchie",
      "targetId": "DOAdresse",
      "routingPoints": [
        {
          "x": 2436.6666666666665,
          "y": 1072.0
        },
        {
          "x": 2436.6666666666665,
          "y": 952.0
        },
        {
          "x": 2385.666666666667,
          "y": 952.0
        },
        {
          "x": 2385.666666666667,
          "y": 912.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartnerHierarchie_DOAdresse_Adresse",
      "children": [
        {
          "text": "Adresse",
          "position": {
            "x": 2434.6666666666665,
            "y": 992.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerHierarchie_DOAdresse_Adresse_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOPartnerHierarchie",
      "type": "edge:aggregation",
      "id": "DOPartnerHierarchie_null_CallInfo",
      "children": [
        {
          "text": "CallInfo",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerHierarchie_null_CallInfo_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartnerHierarchie",
      "targetId": "DOPartnerHierarchie",
      "routingPoints": [
        {
          "x": 2503.3333333333335,
          "y": 1072.0
        },
        {
          "x": 2503.3333333333335,
          "y": 1032.0
        },
        {
          "x": 2620.0,
          "y": 1032.0
        },
        {
          "x": 2620.0,
          "y": 1312.0
        },
        {
          "x": 2503.3333333333335,
          "y": 1312.0
        },
        {
          "x": 2503.3333333333335,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartnerHierarchie_DOPartnerHierarchie_Partner",
      "children": [
        {
          "text": "Partner",
          "position": {
            "x": 12.0,
            "y": 2192.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerHierarchie_DOPartnerHierarchie_Partner_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 2670.0,
        "y": 1072.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOHierarchyElement",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOHierarchyElement_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOHierarchyElement_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOHierarchyElement_iconlabel"
                }
              ]
            },
            {
              "text": "DOHierarchyElement",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOHierarchyElement_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOHierarchyElement_attrs",
          "children": [
            {
              "text": " - CompoundKey : EString",
              "type": "label:text",
              "id": "DOHierarchyElement_CompoundKey"
            },
            {
              "text": " - GueltigAb : EDate",
              "type": "label:text",
              "id": "DOHierarchyElement_GueltigAb"
            },
            {
              "text": " - GueltigBis : EDate",
              "type": "label:text",
              "id": "DOHierarchyElement_GueltigBis"
            },
            {
              "text": " - HierarchyType : EString",
              "type": "label:text",
              "id": "DOHierarchyElement_HierarchyType"
            },
            {
              "text": " - Kennzeichnungknoten : EString",
              "type": "label:text",
              "id": "DOHierarchyElement_Kennzeichnungknoten"
            },
            {
              "text": " - Mandant : EString",
              "type": "label:text",
              "id": "DOHierarchyElement_Mandant"
            }
          ]
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOHierarchyElement",
      "targetId": "DOPartnerRefType",
      "routingPoints": [
        {
          "x": 2803.3333333333335,
          "y": 1072.0
        },
        {
          "x": 2803.3333333333335,
          "y": 912.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOHierarchyElement_DOPartnerRefType_Child",
      "children": [
        {
          "text": "Child",
          "position": {
            "x": 2806.3333333333335,
            "y": 992.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOHierarchyElement_DOPartnerRefType_Child_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOHierarchyElement",
      "targetId": "DOPartnerRefType",
      "routingPoints": [
        {
          "x": 2736.6666666666665,
          "y": 1072.0
        },
        {
          "x": 2736.6666666666665,
          "y": 912.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOHierarchyElement_DOPartnerRefType_Parent",
      "children": [
        {
          "text": "Parent",
          "position": {
            "x": 2734.6666666666665,
            "y": 992.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOHierarchyElement_DOPartnerRefType_Parent_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 2370.0,
        "y": 1632.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOPartnerHierarchies",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOPartnerHierarchies_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOPartnerHierarchies_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOPartnerHierarchies_iconlabel"
                }
              ]
            },
            {
              "text": "DOPartnerHierarchies",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOPartnerHierarchies_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOPartnerHierarchies_attrs",
          "children": []
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..1",
      "sourceId": "DOPartnerHierarchies",
      "type": "edge:aggregation",
      "id": "DOPartnerHierarchies_null_CallInfo",
      "children": [
        {
          "text": "CallInfo",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerHierarchies_null_CallInfo_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartnerHierarchies",
      "targetId": "DOHierarchyElement",
      "routingPoints": [
        {
          "x": 2503.3333333333335,
          "y": 1632.0
        },
        {
          "x": 2503.3333333333335,
          "y": 1592.0
        },
        {
          "x": 2770.0,
          "y": 1592.0
        },
        {
          "x": 2770.0,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartnerHierarchies_DOHierarchyElement_HierarchyElement",
      "children": [
        {
          "text": "HierarchyElement",
          "position": {
            "x": 2768.0,
            "y": 1352.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerHierarchies_DOHierarchyElement_HierarchyElement_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-edge",
        "aggregation"
      ],
      "multiplicitySource": "0..1",
      "multiplicityTarget": "0..-1",
      "sourceId": "DOPartnerHierarchies",
      "targetId": "DOPartnerHierarchie",
      "routingPoints": [
        {
          "x": 2436.6666666666665,
          "y": 1632.0
        },
        {
          "x": 2436.6666666666665,
          "y": 1272.0
        }
      ],
      "type": "edge:aggregation",
      "id": "DOPartnerHierarchies_DOPartnerHierarchie_PartnerHierarchie",
      "children": [
        {
          "text": "PartnerHierarchie",
          "position": {
            "x": 2434.6666666666665,
            "y": 1352.0
          },
          "size": {
            "width": 0.0,
            "height": 0.0
          },
          "type": "label:text",
          "id": "DOPartnerHierarchies_DOPartnerHierarchie_PartnerHierarchie_name"
        }
      ]
    },
    {
      "cssClasses": [
        "ecore-node"
      ],
      "expanded": true,
      "strokeWidth": 0.0,
      "layout": "vbox",
      "position": {
        "x": 1112.0,
        "y": 12.0
      },
      "size": {
        "width": 200.0,
        "height": 200.0
      },
      "type": "node:class",
      "id": "DOFSDZugang",
      "children": [
        {
          "layout": "hbox",
          "position": {
            "x": 0.0,
            "y": 0.0
          },
          "type": "comp:header",
          "id": "DOFSDZugang_header",
          "children": [
            {
              "layout": "stack",
              "position": {
                "x": 0.0,
                "y": 0.0
              },
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "icon",
              "id": "DOFSDZugang_icon",
              "children": [
                {
                  "text": "C",
                  "position": {
                    "x": 0.0,
                    "y": 0.0
                  },
                  "size": {
                    "width": 0.0,
                    "height": 0.0
                  },
                  "type": "label:icon",
                  "id": "DOFSDZugang_iconlabel"
                }
              ]
            },
            {
              "text": "DOFSDZugang",
              "layoutOptions": {
                "resizeContainer": false,
                "hAlign": "center"
              },
              "type": "label:heading",
              "id": "DOFSDZugang_classname"
            }
          ]
        },
        {
          "layout": "vbox",
          "layoutOptions": {
            "hAlign": "left"
          },
          "type": "comp:comp",
          "id": "DOFSDZugang_attrs",
          "children": [
            {
              "text": " - Fsdkennung : EString",
              "type": "label:text",
              "id": "DOFSDZugang_Fsdkennung"
            },
            {
              "text": " - Fsdkennungabstr : EString",
              "type": "label:text",
              "id": "DOFSDZugang_Fsdkennungabstr"
            },
            {
              "text": " - Fsdkennungbisstr : EString",
              "type": "label:text",
              "id": "DOFSDZugang_Fsdkennungbisstr"
            },
            {
              "text": " - Lfdnr : EIntegerObject",
              "type": "label:text",
              "id": "DOFSDZugang_Lfdnr"
            },
            {
              "text": " - Nname : EString",
              "type": "label:text",
              "id": "DOFSDZugang_Nname"
            },
            {
              "text": " - Oid : EString",
              "type": "label:text",
              "id": "DOFSDZugang_Oid"
            },
            {
              "text": " - Vname : EString",
              "type": "label:text",
              "id": "DOFSDZugang_Vname"
            }
          ]
        }
      ]
    }
  ]
}