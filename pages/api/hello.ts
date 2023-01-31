import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(
        {
            "divisions": [
                {
                    "name": "Division 1",
                    "id": 1,
                    "season": "Season 26",
                    "teamsheet": "https://docs.google.com/spreadsheets/d/1YN6KLYPUf9ozd-hAP5eAmtmP1wpnGKGriH1xqEQz63I/edit#gid=98635696",
                    "draftsheet": "https://docs.google.com/spreadsheets/d/1YN6KLYPUf9ozd-hAP5eAmtmP1wpnGKGriH1xqEQz63I/edit#gid=1298448049",
                    "teams": [
                        {
                            "name": "Vanilla",
                            "players": [
                                {
                                    "account_id": "195945156",
                                    "mmr": 7390,
                                    "discord": "Vanilla#5395",
                                    "pos_pref": [
                                        5,
                                        1,
                                        3,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        10,
                                        6,
                                        93
                                    ],
                                    "country": "JP",
                                    "name": "Vanilla",
                                    "coins": 68
                                },
                                {
                                    "account_id": "107696053",
                                    "mmr": 5720,
                                    "discord": "nfd#8672",
                                    "pos_pref": [
                                        1,
                                        1,
                                        1,
                                        1,
                                        5
                                    ],
                                    "alts": [
                                        "206055337"
                                    ],
                                    "top3": [
                                        136,
                                        5,
                                        9
                                    ],
                                    "country": "GB",
                                    "name": "nfd",
                                    "coins": 30
                                },
                                {
                                    "account_id": "235880461",
                                    "mmr": 5800,
                                    "discord": "\u7cbe\u795e#5968",
                                    "pos_pref": [
                                        1,
                                        5,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [
                                        "158251283"
                                    ],
                                    "top3": [
                                        13,
                                        106,
                                        136
                                    ],
                                    "country": "CA",
                                    "name": "midking)",
                                    "coins": 21
                                },
                                {
                                    "account_id": "135425789",
                                    "mmr": 5800,
                                    "discord": "valakii#9864",
                                    "pos_pref": [
                                        1,
                                        1,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [
                                        "394354622",
                                        "121484049"
                                    ],
                                    "top3": [
                                        6,
                                        100,
                                        54
                                    ],
                                    "country": "HU",
                                    "name": "valakiiiiiiiiii",
                                    "coins": 15
                                },
                                {
                                    "account_id": "146060489",
                                    "mmr": 5000,
                                    "discord": "Gecko#4440",
                                    "pos_pref": [
                                        1,
                                        1,
                                        5,
                                        5,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        86,
                                        100,
                                        85
                                    ],
                                    "country": "GB",
                                    "name": "Gecko",
                                    "coins": 2
                                }
                            ]
                        },
                        {
                            "name": "SoLO",
                            "players": [
                                {
                                    "account_id": "309314822",
                                    "mmr": 6340,
                                    "discord": "SoLO-#2306",
                                    "pos_pref": [
                                        5,
                                        5,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        25,
                                        106,
                                        13
                                    ],
                                    "country": null,
                                    "name": "SoLO",
                                    "coins": 95
                                },
                                {
                                    "account_id": "113805244",
                                    "mmr": 5200,
                                    "discord": "Jammytwit#3201",
                                    "pos_pref": [
                                        1,
                                        1,
                                        1,
                                        5,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        100,
                                        19,
                                        123
                                    ],
                                    "country": null,
                                    "name": "Jammy",
                                    "coins": 27
                                },
                                {
                                    "account_id": "81345482",
                                    "mmr": 6090,
                                    "discord": "Kenshi#9999",
                                    "pos_pref": [
                                        5,
                                        1,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        70,
                                        8,
                                        54
                                    ],
                                    "country": "VG",
                                    "name": "Kenshi",
                                    "coins": 62
                                },
                                {
                                    "account_id": "110881046",
                                    "mmr": 5410,
                                    "discord": "jihadi swamp#9160",
                                    "pos_pref": [
                                        3,
                                        3,
                                        5,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        100,
                                        29,
                                        19
                                    ],
                                    "country": "GB",
                                    "name": "jihapse",
                                    "coins": 2
                                },
                                {
                                    "account_id": "125155223",
                                    "mmr": 5200,
                                    "discord": "Calli#6536",
                                    "pos_pref": [
                                        1,
                                        1,
                                        1,
                                        5,
                                        1
                                    ],
                                    "alts": [
                                        "82158317"
                                    ],
                                    "top3": [
                                        123,
                                        136,
                                        119
                                    ],
                                    "country": "TH",
                                    "name": "Calli",
                                    "coins": 4
                                }
                            ]
                        },
                        {
                            "name": "Bonjwa",
                            "players": [
                                {
                                    "account_id": "81952474",
                                    "mmr": 7000,
                                    "discord": "OKA#6460",
                                    "pos_pref": [
                                        2,
                                        1,
                                        5,
                                        4,
                                        3
                                    ],
                                    "alts": [],
                                    "top3": [
                                        43,
                                        96,
                                        60
                                    ],
                                    "country": "ES",
                                    "name": "Bonjwa",
                                    "coins": 81
                                },
                                {
                                    "account_id": "287978960",
                                    "mmr": 6200,
                                    "discord": "Cv\u00e6kt#3672",
                                    "pos_pref": [
                                        5,
                                        2,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        100,
                                        54,
                                        44
                                    ],
                                    "country": "FO",
                                    "name": "Cvaekt",
                                    "coins": 17
                                },
                                {
                                    "account_id": "51973692",
                                    "mmr": 6490,
                                    "discord": "Dredi#1109",
                                    "pos_pref": [
                                        2,
                                        1,
                                        1,
                                        5,
                                        4
                                    ],
                                    "alts": [
                                        "122797909"
                                    ],
                                    "top3": [
                                        53,
                                        9,
                                        58
                                    ],
                                    "country": "FI",
                                    "name": "Dredi",
                                    "coins": 18
                                },
                                {
                                    "account_id": "113312766",
                                    "mmr": 6700,
                                    "discord": "play#9832",
                                    "pos_pref": [
                                        5,
                                        1,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [
                                        "1248511897"
                                    ],
                                    "top3": [
                                        120,
                                        86,
                                        128
                                    ],
                                    "country": "DK",
                                    "name": "play",
                                    "coins": 11
                                },
                                {
                                    "account_id": "167275877",
                                    "mmr": 5860,
                                    "discord": "PraiseTheMangology#4767",
                                    "pos_pref": [
                                        3,
                                        4,
                                        4,
                                        4,
                                        4
                                    ],
                                    "alts": [],
                                    "top3": [
                                        112,
                                        136,
                                        8
                                    ],
                                    "country": "DE",
                                    "name": "Mango",
                                    "coins": 5
                                }
                            ]
                        },
                        {
                            "name": "Knaryaa",
                            "players": [
                                {
                                    "account_id": "111557371",
                                    "mmr": 6010,
                                    "discord": "Knaryaa#3922",
                                    "pos_pref": [
                                        4,
                                        2,
                                        5,
                                        3,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        16,
                                        6,
                                        69
                                    ],
                                    "country": "TR",
                                    "name": "Knaryaa",
                                    "coins": 98
                                },
                                {
                                    "account_id": "172239333",
                                    "mmr": 6850,
                                    "discord": "Frau#0986",
                                    "pos_pref": [
                                        2,
                                        5,
                                        2,
                                        2,
                                        2
                                    ],
                                    "alts": [
                                        "147355064"
                                    ],
                                    "top3": [
                                        87,
                                        39,
                                        31
                                    ],
                                    "country": null,
                                    "name": "Frau",
                                    "coins": 42
                                },
                                {
                                    "account_id": "91516368",
                                    "mmr": 6710,
                                    "discord": "Stylezzz#2894",
                                    "pos_pref": [
                                        1,
                                        1,
                                        1,
                                        5,
                                        4
                                    ],
                                    "alts": [],
                                    "top3": [],
                                    "country": "GR",
                                    "name": "Stylezz",
                                    "coins": 34
                                },
                                {
                                    "account_id": "1182296166",
                                    "mmr": 6300,
                                    "discord": "AutoMode#6346",
                                    "pos_pref": [
                                        3,
                                        2,
                                        5,
                                        2,
                                        1
                                    ],
                                    "alts": [
                                        "422115609"
                                    ],
                                    "top3": [
                                        129,
                                        81,
                                        135
                                    ],
                                    "country": "UA",
                                    "name": "sukui",
                                    "coins": 11
                                },
                                {
                                    "account_id": "174026441",
                                    "mmr": 5420,
                                    "discord": "TuEg#4693",
                                    "pos_pref": [
                                        1,
                                        1,
                                        3,
                                        5,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        119,
                                        30,
                                        5
                                    ],
                                    "country": "RU",
                                    "name": "TuEg",
                                    "coins": 11
                                }
                            ]
                        },
                        {
                            "name": "ImBaSaRgArEpA",
                            "players": [
                                {
                                    "account_id": "86719611",
                                    "mmr": 5900,
                                    "discord": "imbasargarepa#6883",
                                    "pos_pref": [
                                        2,
                                        1,
                                        4,
                                        5,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        111,
                                        129,
                                        7
                                    ],
                                    "country": "RS",
                                    "name": "ImBaSaRgArEpA",
                                    "coins": 110
                                },
                                {
                                    "account_id": "40916046",
                                    "mmr": 7000,
                                    "discord": "Solveig.Larsson#1797",
                                    "pos_pref": [
                                        1,
                                        2,
                                        4,
                                        2,
                                        5
                                    ],
                                    "alts": [
                                        "126587125"
                                    ],
                                    "top3": [
                                        104,
                                        137,
                                        19
                                    ],
                                    "country": "SE",
                                    "name": "Maff",
                                    "coins": 45
                                },
                                {
                                    "account_id": "26773166",
                                    "mmr": 6660,
                                    "discord": "Neox#6937",
                                    "pos_pref": [
                                        1,
                                        2,
                                        5,
                                        5,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        135,
                                        16,
                                        100
                                    ],
                                    "country": null,
                                    "name": "Neox",
                                    "coins": 32
                                },
                                {
                                    "account_id": "184601350",
                                    "mmr": 5450,
                                    "discord": "f mega#4220",
                                    "pos_pref": [
                                        5,
                                        5,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        100,
                                        7,
                                        123
                                    ],
                                    "country": "CI",
                                    "name": "f",
                                    "coins": 3
                                },
                                {
                                    "account_id": "314442736",
                                    "mmr": 5000,
                                    "discord": "Nebojsa#0028",
                                    "pos_pref": [
                                        4,
                                        4,
                                        3,
                                        3,
                                        3
                                    ],
                                    "alts": [],
                                    "top3": [
                                        53,
                                        86,
                                        111
                                    ],
                                    "country": "RS",
                                    "name": "Krastavac",
                                    "coins": 1
                                }
                            ]
                        },
                        {
                            "name": "legitsplit",
                            "players": [
                                {
                                    "account_id": "84075077",
                                    "mmr": 5560,
                                    "discord": "legitsplit#9039",
                                    "pos_pref": [
                                        5,
                                        1,
                                        2,
                                        1,
                                        1
                                    ],
                                    "alts": [
                                        "253941611"
                                    ],
                                    "top3": [
                                        104,
                                        53,
                                        67
                                    ],
                                    "country": "BR",
                                    "name": "legitsplit",
                                    "coins": 113
                                },
                                {
                                    "account_id": "451589360",
                                    "mmr": 7030,
                                    "discord": "Draagaan#3737",
                                    "pos_pref": [
                                        3,
                                        5,
                                        1,
                                        3,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        113,
                                        52,
                                        19
                                    ],
                                    "country": "GB",
                                    "name": "Draagaan",
                                    "coins": 80
                                },
                                {
                                    "account_id": "75376818",
                                    "mmr": 5970,
                                    "discord": "WHONOOBNOW#8549",
                                    "pos_pref": [
                                        5,
                                        3,
                                        5,
                                        5,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        78,
                                        33,
                                        135
                                    ],
                                    "country": "GB",
                                    "name": "WHONOOBNOW",
                                    "coins": 15
                                },
                                {
                                    "account_id": "119695137",
                                    "mmr": 5900,
                                    "discord": "KTZ#0001",
                                    "pos_pref": [
                                        1,
                                        2,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [
                                        "859259335"
                                    ],
                                    "top3": [
                                        100,
                                        52,
                                        126
                                    ],
                                    "country": "IE",
                                    "name": "KTZ",
                                    "coins": 18
                                },
                                {
                                    "account_id": "123988641",
                                    "mmr": 5000,
                                    "discord": "sinnoh#5894",
                                    "pos_pref": [
                                        4,
                                        5,
                                        3,
                                        2,
                                        1
                                    ],
                                    "alts": [
                                        "1130448749"
                                    ],
                                    "top3": [
                                        2,
                                        74,
                                        19
                                    ],
                                    "country": null,
                                    "name": "Indie",
                                    "coins": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Division 2",
                    "id": 2,
                    "season": "Season 26",
                    "teamsheet": "https://docs.google.com/spreadsheets/d/1YN6KLYPUf9ozd-hAP5eAmtmP1wpnGKGriH1xqEQz63I/edit#gid=811469601",
                    "draftsheet": "https://docs.google.com/spreadsheets/d/1YN6KLYPUf9ozd-hAP5eAmtmP1wpnGKGriH1xqEQz63I/edit#gid=1298448049",
                    "teams": [
                        {
                            "name": "DominicS",
                            "players": [
                                {
                                    "account_id": "56404086",
                                    "mmr": 5240,
                                    "discord": "DominicS#7109",
                                    "pos_pref": [
                                        1,
                                        1,
                                        5,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        61,
                                        92,
                                        33
                                    ],
                                    "country": "GB",
                                    "name": "DominicS",
                                    "coins": 82
                                },
                                {
                                    "account_id": "106742399",
                                    "mmr": 4730,
                                    "discord": "Advam#3347",
                                    "pos_pref": [
                                        5,
                                        4,
                                        2,
                                        2,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        52,
                                        114,
                                        19
                                    ],
                                    "country": null,
                                    "name": "Big Gunson",
                                    "coins": 11
                                },
                                {
                                    "account_id": "150031206",
                                    "mmr": 4010,
                                    "discord": "AndrewF#2448",
                                    "pos_pref": [
                                        3,
                                        1,
                                        5,
                                        4,
                                        2
                                    ],
                                    "alts": [],
                                    "top3": [
                                        100,
                                        97,
                                        120
                                    ],
                                    "country": "CZ",
                                    "name": "Ondrej",
                                    "coins": 5
                                },
                                {
                                    "account_id": "187137003",
                                    "mmr": 4940,
                                    "discord": "Hugh Idyit#5181",
                                    "pos_pref": [
                                        5,
                                        3,
                                        3,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        28,
                                        74,
                                        54
                                    ],
                                    "country": "AT",
                                    "name": "Olaf",
                                    "coins": 5
                                },
                                {
                                    "account_id": "249248089",
                                    "mmr": 3900,
                                    "discord": "TheProblem#6741",
                                    "pos_pref": [
                                        1,
                                        1,
                                        1,
                                        3,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        66,
                                        26,
                                        45
                                    ],
                                    "country": "RO",
                                    "name": "TheProblem",
                                    "coins": 61
                                }
                            ]
                        },
                        {
                            "name": "B\u00fc\u00f6",
                            "players": [
                                {
                                    "account_id": "279050958",
                                    "mmr": 4520,
                                    "discord": "Boo... Who?#2515",
                                    "pos_pref": [
                                        5,
                                        5,
                                        5,
                                        5,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        100,
                                        86,
                                        114
                                    ],
                                    "country": "ZW",
                                    "name": "B\u00fc\u00f6",
                                    "coins": 95
                                },
                                {
                                    "account_id": "38319872",
                                    "mmr": 4380,
                                    "discord": "zGrozemaG#4821",
                                    "pos_pref": [
                                        2,
                                        1,
                                        5,
                                        3,
                                        4
                                    ],
                                    "alts": [],
                                    "top3": [],
                                    "country": "LT",
                                    "name": "zGrozemaG",
                                    "coins": 16
                                },
                                {
                                    "account_id": "71375201",
                                    "mmr": 4400,
                                    "discord": "Bianco#1991",
                                    "pos_pref": [
                                        5,
                                        1,
                                        5,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        92,
                                        78,
                                        77
                                    ],
                                    "country": "AT",
                                    "name": "Bianco",
                                    "coins": 25
                                },
                                {
                                    "account_id": "42710307",
                                    "mmr": 5000,
                                    "discord": "dodo#9725",
                                    "pos_pref": [
                                        4,
                                        5,
                                        3,
                                        2,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [],
                                    "country": "HR",
                                    "name": "Dodo",
                                    "coins": 30
                                },
                                {
                                    "account_id": "464676703",
                                    "mmr": 4670,
                                    "discord": "ginger#0545",
                                    "pos_pref": [
                                        5,
                                        1,
                                        3,
                                        3,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        28,
                                        76,
                                        75
                                    ],
                                    "country": null,
                                    "name": "Ginger",
                                    "coins": 5
                                }
                            ]
                        },
                        {
                            "name": "Petchef",
                            "players": [
                                {
                                    "account_id": "49120950",
                                    "mmr": 4210,
                                    "discord": "Petchef#9326",
                                    "pos_pref": [
                                        2,
                                        3,
                                        1,
                                        5,
                                        4
                                    ],
                                    "alts": [],
                                    "top3": [
                                        86,
                                        100,
                                        101
                                    ],
                                    "country": null,
                                    "name": "Petchef",
                                    "coins": 104
                                },
                                {
                                    "account_id": "40625516",
                                    "mmr": 5240,
                                    "discord": "Raytoran#1650",
                                    "pos_pref": [
                                        3,
                                        1,
                                        5,
                                        4,
                                        2
                                    ],
                                    "alts": [],
                                    "top3": [
                                        20
                                    ],
                                    "country": null,
                                    "name": "Raytoran",
                                    "coins": 43
                                },
                                {
                                    "account_id": "101465865",
                                    "mmr": 5460,
                                    "discord": "Flame#2345",
                                    "pos_pref": [
                                        3,
                                        5,
                                        3,
                                        2,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        137,
                                        100,
                                        120
                                    ],
                                    "country": "GB",
                                    "name": "Flame",
                                    "coins": 61
                                },
                                {
                                    "account_id": "73877347",
                                    "mmr": 4400,
                                    "discord": "greenman#9113",
                                    "pos_pref": [
                                        5,
                                        5,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        100,
                                        11,
                                        25
                                    ],
                                    "country": "NL",
                                    "name": "greenman",
                                    "coins": 0
                                },
                                {
                                    "account_id": "59174607",
                                    "mmr": 4200,
                                    "discord": "DagensDubbel#5609",
                                    "pos_pref": [
                                        4,
                                        3,
                                        5,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        36,
                                        92,
                                        135
                                    ],
                                    "country": "SE",
                                    "name": "Lil-Rob2009",
                                    "coins": 0
                                }
                            ]
                        },
                        {
                            "name": "Adi",
                            "players": [
                                {
                                    "account_id": "151517806",
                                    "mmr": 5340,
                                    "discord": "Adi#5791",
                                    "pos_pref": [
                                        2,
                                        5,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        17,
                                        106,
                                        126
                                    ],
                                    "country": null,
                                    "name": "Adi",
                                    "coins": 78
                                },
                                {
                                    "account_id": "302449792",
                                    "mmr": 5500,
                                    "discord": "\u6708\u89c6#2841",
                                    "pos_pref": [
                                        5,
                                        2,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        106,
                                        15,
                                        22
                                    ],
                                    "country": null,
                                    "name": "Grief",
                                    "coins": 58
                                },
                                {
                                    "account_id": "243368997",
                                    "mmr": 4100,
                                    "discord": "kotklopot#8584",
                                    "pos_pref": [
                                        2,
                                        1,
                                        3,
                                        4,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        37,
                                        100,
                                        75
                                    ],
                                    "country": "PL",
                                    "name": "kotklopot",
                                    "coins": 15
                                },
                                {
                                    "account_id": "180895009",
                                    "mmr": 4240,
                                    "discord": "Morgs#2530",
                                    "pos_pref": [
                                        3,
                                        5,
                                        5,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [],
                                    "country": "IE",
                                    "name": "Morgs",
                                    "coins": 1
                                },
                                {
                                    "account_id": "220385033",
                                    "mmr": 4250,
                                    "discord": "LookAlive#7053",
                                    "pos_pref": [
                                        3,
                                        1,
                                        4,
                                        5,
                                        2
                                    ],
                                    "alts": [],
                                    "top3": [
                                        109,
                                        8,
                                        20
                                    ],
                                    "country": null,
                                    "name": "LookAlive",
                                    "coins": 4
                                }
                            ]
                        },
                        {
                            "name": "BarryBeeDespair",
                            "players": [
                                {
                                    "account_id": "89681488",
                                    "mmr": 4470,
                                    "discord": "BarryBeeBenson#3736",
                                    "pos_pref": [
                                        4,
                                        2,
                                        4,
                                        5,
                                        3
                                    ],
                                    "alts": [],
                                    "top3": [
                                        100,
                                        70,
                                        123
                                    ],
                                    "country": null,
                                    "name": "BarryBeeDespair",
                                    "coins": 96
                                },
                                {
                                    "account_id": "253571081",
                                    "mmr": 4600,
                                    "discord": "mash#0016",
                                    "pos_pref": [
                                        5,
                                        4,
                                        3,
                                        2,
                                        1
                                    ],
                                    "alts": [
                                        "185482839"
                                    ],
                                    "top3": [],
                                    "country": "FR",
                                    "name": "sham",
                                    "coins": 30
                                },
                                {
                                    "account_id": "54024614",
                                    "mmr": 4980,
                                    "discord": "wewlad#6341",
                                    "pos_pref": [
                                        4,
                                        5,
                                        3,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        136,
                                        11,
                                        76
                                    ],
                                    "country": null,
                                    "name": "wewlad#6341",
                                    "coins": 16
                                },
                                {
                                    "account_id": "84712191",
                                    "mmr": 4800,
                                    "discord": "Regurgitard#0969",
                                    "pos_pref": [
                                        1,
                                        2,
                                        5,
                                        3,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        37,
                                        79,
                                        113
                                    ],
                                    "country": "SE",
                                    "name": "Regurgitard",
                                    "coins": 11
                                },
                                {
                                    "account_id": "141104117",
                                    "mmr": 3570,
                                    "discord": "Spas#0420",
                                    "pos_pref": [
                                        3,
                                        1,
                                        2,
                                        5,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        86,
                                        5,
                                        87
                                    ],
                                    "country": "BG",
                                    "name": "Spas",
                                    "coins": 39
                                }
                            ]
                        },
                        {
                            "name": "Syrphx",
                            "players": [
                                {
                                    "account_id": "327434422",
                                    "mmr": 5100,
                                    "discord": "Syrphx (Collapse Fan)#7614",
                                    "pos_pref": [
                                        1,
                                        1,
                                        5,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        19,
                                        137,
                                        11
                                    ],
                                    "country": "GB",
                                    "name": "Syrphx",
                                    "coins": 84
                                },
                                {
                                    "account_id": "27997450",
                                    "mmr": 5400,
                                    "discord": "Mikel#1913",
                                    "pos_pref": [
                                        1,
                                        1,
                                        5,
                                        1,
                                        1
                                    ],
                                    "alts": [
                                        "76065597"
                                    ],
                                    "top3": [
                                        135,
                                        100,
                                        29
                                    ],
                                    "country": "SE",
                                    "name": "Mikel",
                                    "coins": 84
                                },
                                {
                                    "account_id": "102346907",
                                    "mmr": 5500,
                                    "discord": "KappaRoss#2744",
                                    "pos_pref": [
                                        5,
                                        3,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [
                                        "445996081"
                                    ],
                                    "top3": [
                                        11,
                                        76,
                                        25
                                    ],
                                    "country": "EE",
                                    "name": "Haisu :)",
                                    "coins": 0
                                },
                                {
                                    "account_id": "125847008",
                                    "mmr": 4600,
                                    "discord": "Rinku#7684",
                                    "pos_pref": [
                                        2,
                                        5,
                                        1,
                                        2,
                                        3
                                    ],
                                    "alts": [],
                                    "top3": [
                                        126,
                                        52,
                                        22
                                    ],
                                    "country": null,
                                    "name": "Rinku",
                                    "coins": 0
                                },
                                {
                                    "account_id": "188263974",
                                    "mmr": 3520,
                                    "discord": "sir owl of booze#9688",
                                    "pos_pref": [
                                        3,
                                        5,
                                        3,
                                        3,
                                        3
                                    ],
                                    "alts": [],
                                    "top3": [
                                        23,
                                        106,
                                        2
                                    ],
                                    "country": "GB",
                                    "name": "Owl",
                                    "coins": 0
                                }
                            ]
                        },
                        {
                            "name": "Tal",
                            "players": [
                                {
                                    "account_id": "81581521",
                                    "mmr": 4830,
                                    "discord": "Tal#9504",
                                    "pos_pref": [
                                        4,
                                        2,
                                        5,
                                        3,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        8,
                                        14,
                                        47
                                    ],
                                    "country": "IL",
                                    "name": "Tal",
                                    "coins": 90
                                },
                                {
                                    "account_id": "98027915",
                                    "mmr": 4340,
                                    "discord": "shaked#4686",
                                    "pos_pref": [
                                        4,
                                        3,
                                        5,
                                        5,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        101,
                                        86,
                                        96
                                    ],
                                    "country": "IL",
                                    "name": "Shaked ",
                                    "coins": 23
                                },
                                {
                                    "account_id": "17120982",
                                    "mmr": 5490,
                                    "discord": "Denden#0001",
                                    "pos_pref": [
                                        5,
                                        1,
                                        3,
                                        2,
                                        1
                                    ],
                                    "alts": [
                                        "851543499"
                                    ],
                                    "top3": [
                                        137,
                                        47,
                                        22
                                    ],
                                    "country": null,
                                    "name": "Denden",
                                    "coins": 22
                                },
                                {
                                    "account_id": "94011129",
                                    "mmr": 4670,
                                    "discord": "gladp#4500",
                                    "pos_pref": [
                                        4,
                                        5,
                                        4,
                                        4,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        13,
                                        113,
                                        43
                                    ],
                                    "country": "GB",
                                    "name": "gladp",
                                    "coins": 30
                                },
                                {
                                    "account_id": "106497878",
                                    "mmr": 4180,
                                    "discord": "KhezuC#9927",
                                    "pos_pref": [
                                        1,
                                        1,
                                        3,
                                        5,
                                        4
                                    ],
                                    "alts": [],
                                    "top3": [
                                        129,
                                        23,
                                        55
                                    ],
                                    "country": "GB",
                                    "name": "KhezuC",
                                    "coins": 15
                                }
                            ]
                        },
                        {
                            "name": "GRIMM",
                            "players": [
                                {
                                    "account_id": "55866317",
                                    "mmr": 4500,
                                    "discord": "GRIMM#0808",
                                    "pos_pref": [
                                        5,
                                        3,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        56,
                                        6,
                                        8
                                    ],
                                    "country": "LT",
                                    "name": "GRIMM",
                                    "coins": 96
                                },
                                {
                                    "account_id": "118379443",
                                    "mmr": 5250,
                                    "discord": "5YN3R6Y#2788",
                                    "pos_pref": [
                                        2,
                                        1,
                                        2,
                                        4,
                                        4
                                    ],
                                    "alts": [
                                        "300000700"
                                    ],
                                    "top3": [],
                                    "country": "CZ",
                                    "name": "5YN3R6Y",
                                    "coins": 42
                                },
                                {
                                    "account_id": "859609158",
                                    "mmr": 5350,
                                    "discord": "Iggy#1785",
                                    "pos_pref": [
                                        5,
                                        4,
                                        2,
                                        1,
                                        3
                                    ],
                                    "alts": [],
                                    "top3": [
                                        32,
                                        19,
                                        14
                                    ],
                                    "country": "GB",
                                    "name": "iggy",
                                    "coins": 44
                                },
                                {
                                    "account_id": "61634693",
                                    "mmr": 4380,
                                    "discord": "KillerPanda#2507",
                                    "pos_pref": [
                                        3,
                                        1,
                                        3,
                                        5,
                                        2
                                    ],
                                    "alts": [],
                                    "top3": [
                                        7,
                                        123,
                                        41
                                    ],
                                    "country": "NL",
                                    "name": "Killerpanda",
                                    "coins": 5
                                },
                                {
                                    "account_id": "108164252",
                                    "mmr": 4190,
                                    "discord": "Aronix#9363",
                                    "pos_pref": [
                                        5,
                                        3,
                                        5,
                                        2,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        108,
                                        135,
                                        73
                                    ],
                                    "country": "SE",
                                    "name": "Aronix",
                                    "coins": 5
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Division 3",
                    "id": 3,
                    "season": "Season 26",
                    "teamsheet": "https://docs.google.com/spreadsheets/d/1YN6KLYPUf9ozd-hAP5eAmtmP1wpnGKGriH1xqEQz63I/edit#gid=285081328",
                    "draftsheet": "https://docs.google.com/spreadsheets/d/1YN6KLYPUf9ozd-hAP5eAmtmP1wpnGKGriH1xqEQz63I/edit#gid=1298448049",
                    "teams": [
                        {
                            "name": "Nullagon",
                            "players": [
                                {
                                    "account_id": "59155507",
                                    "mmr": 3500,
                                    "discord": "nullagon#0039",
                                    "pos_pref": [
                                        4,
                                        1,
                                        1,
                                        5,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        89,
                                        79,
                                        81
                                    ],
                                    "country": "JP",
                                    "name": "Nullagon",
                                    "coins": 43
                                },
                                {
                                    "account_id": "72407726",
                                    "mmr": 3900,
                                    "discord": "Lgy#0596",
                                    "pos_pref": [
                                        1,
                                        1,
                                        5,
                                        4,
                                        3
                                    ],
                                    "alts": [],
                                    "top3": [
                                        104,
                                        32,
                                        67
                                    ],
                                    "country": "HR",
                                    "name": "Lgy",
                                    "coins": 48
                                },
                                {
                                    "account_id": "101035027",
                                    "mmr": 3520,
                                    "discord": "Reformation#5712",
                                    "pos_pref": [
                                        5,
                                        5,
                                        2,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [],
                                    "country": "GR",
                                    "name": "Reformation",
                                    "coins": 20
                                },
                                {
                                    "account_id": "99374795",
                                    "mmr": 1070,
                                    "discord": "jeromehage#8212",
                                    "pos_pref": [
                                        4,
                                        3,
                                        2,
                                        4,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        25,
                                        94,
                                        30
                                    ],
                                    "country": null,
                                    "name": "Jh",
                                    "coins": 2
                                },
                                {
                                    "account_id": "119777741",
                                    "mmr": 2010,
                                    "discord": "DarkShokBlade#4650",
                                    "pos_pref": [
                                        3,
                                        3,
                                        4,
                                        4,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        123,
                                        14,
                                        32
                                    ],
                                    "country": "RO",
                                    "name": "DarkShokBlade",
                                    "coins": 7
                                }
                            ]
                        },
                        {
                            "name": "kaldrama",
                            "players": [
                                {
                                    "account_id": "251347639",
                                    "mmr": 4200,
                                    "discord": "kaldrama #5722",
                                    "pos_pref": [
                                        3,
                                        5,
                                        2,
                                        1,
                                        1
                                    ],
                                    "alts": [
                                        "842468164"
                                    ],
                                    "top3": [
                                        76,
                                        22,
                                        5
                                    ],
                                    "country": "HR",
                                    "name": "kaldrama",
                                    "coins": 50
                                },
                                {
                                    "account_id": "252657179",
                                    "mmr": 3400,
                                    "discord": "Ruski#8145",
                                    "pos_pref": [
                                        2,
                                        1,
                                        3,
                                        5,
                                        3
                                    ],
                                    "alts": [],
                                    "top3": [
                                        86,
                                        75,
                                        136
                                    ],
                                    "country": "GB",
                                    "name": "Ruski",
                                    "coins": 30
                                },
                                {
                                    "account_id": "49567307",
                                    "mmr": 3800,
                                    "discord": "hi(5)#4375",
                                    "pos_pref": [
                                        2,
                                        2,
                                        5,
                                        4,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        120,
                                        32,
                                        68
                                    ],
                                    "country": null,
                                    "name": "hi5",
                                    "coins": 20
                                },
                                {
                                    "account_id": "167445998",
                                    "mmr": 2590,
                                    "discord": "naitruu#0073",
                                    "pos_pref": [
                                        2,
                                        1,
                                        2,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        25,
                                        1,
                                        31
                                    ],
                                    "country": "EH",
                                    "name": "naitru.u",
                                    "coins": 8
                                },
                                {
                                    "account_id": "417207821",
                                    "mmr": 2260,
                                    "discord": "Pappila#3300",
                                    "pos_pref": [
                                        5,
                                        2,
                                        4,
                                        3,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        44,
                                        6,
                                        97
                                    ],
                                    "country": "FI",
                                    "name": "Pappila",
                                    "coins": 12
                                }
                            ]
                        },
                        {
                            "name": "Yaz",
                            "players": [
                                {
                                    "account_id": "184869837",
                                    "mmr": 3310,
                                    "discord": "UniqueWithATwist#9692",
                                    "pos_pref": [
                                        2,
                                        1,
                                        1,
                                        4,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        5,
                                        85,
                                        64
                                    ],
                                    "country": "GB",
                                    "name": "Yaz",
                                    "coins": 34
                                },
                                {
                                    "account_id": "65159250",
                                    "mmr": 4130,
                                    "discord": "Leiya \u2661#6227",
                                    "pos_pref": [
                                        5,
                                        1,
                                        3,
                                        2,
                                        2
                                    ],
                                    "alts": [],
                                    "top3": [
                                        89,
                                        114,
                                        109
                                    ],
                                    "country": "NO",
                                    "name": "Leiya",
                                    "coins": 71
                                },
                                {
                                    "account_id": "340261787",
                                    "mmr": 1450,
                                    "discord": "\ud83e\udd84Lil' Fibert\ud83e\udd84#0112",
                                    "pos_pref": [
                                        1,
                                        1,
                                        5,
                                        5,
                                        4
                                    ],
                                    "alts": [],
                                    "top3": [
                                        47,
                                        104,
                                        101
                                    ],
                                    "country": "IL",
                                    "name": "Gal",
                                    "coins": 1
                                },
                                {
                                    "account_id": "47768835",
                                    "mmr": 2860,
                                    "discord": "Pajazo#5937",
                                    "pos_pref": [
                                        5,
                                        2,
                                        3,
                                        5,
                                        3
                                    ],
                                    "alts": [],
                                    "top3": [
                                        19,
                                        126,
                                        41
                                    ],
                                    "country": null,
                                    "name": "Pajazo",
                                    "coins": 14
                                },
                                {
                                    "account_id": "23765698",
                                    "mmr": 180,
                                    "discord": "bernard humperdink#4031",
                                    "pos_pref": [
                                        5,
                                        1,
                                        5,
                                        5,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        29,
                                        2,
                                        128
                                    ],
                                    "country": "TD",
                                    "name": "Bernard humperdink",
                                    "coins": 0
                                }
                            ]
                        },
                        {
                            "name": "HungryBrowny",
                            "players": [
                                {
                                    "account_id": "89873399",
                                    "mmr": 3140,
                                    "discord": "HungryBrowny#2822",
                                    "pos_pref": [
                                        4,
                                        5,
                                        3,
                                        3,
                                        2
                                    ],
                                    "alts": [
                                        "180711725"
                                    ],
                                    "top3": [
                                        100,
                                        7,
                                        14
                                    ],
                                    "country": "GB",
                                    "name": "HungryBrowny",
                                    "coins": 25
                                },
                                {
                                    "account_id": "78114459",
                                    "mmr": 3600,
                                    "discord": "canin#4746",
                                    "pos_pref": [
                                        4,
                                        2,
                                        5,
                                        5,
                                        2
                                    ],
                                    "alts": [
                                        "116001397"
                                    ],
                                    "top3": [
                                        26,
                                        16,
                                        8
                                    ],
                                    "country": "DK",
                                    "name": "canin",
                                    "coins": 29
                                },
                                {
                                    "account_id": "41403942",
                                    "mmr": 3200,
                                    "discord": "dimes#1000",
                                    "pos_pref": [
                                        5,
                                        1,
                                        4,
                                        2,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        129,
                                        67,
                                        41
                                    ],
                                    "country": "RU",
                                    "name": "Dimes",
                                    "coins": 20
                                },
                                {
                                    "account_id": "106706457",
                                    "mmr": 3580,
                                    "discord": "Thereisnofork#1401",
                                    "pos_pref": [
                                        4,
                                        3,
                                        2,
                                        4,
                                        4
                                    ],
                                    "alts": [],
                                    "top3": [
                                        34,
                                        25,
                                        128
                                    ],
                                    "country": "NL",
                                    "name": "Azg",
                                    "coins": 15
                                },
                                {
                                    "account_id": "150522382",
                                    "mmr": 3130,
                                    "discord": "Luke#7792",
                                    "pos_pref": [
                                        2,
                                        1,
                                        3,
                                        5,
                                        4
                                    ],
                                    "alts": [],
                                    "top3": [
                                        135,
                                        73,
                                        27
                                    ],
                                    "country": "DE",
                                    "name": "Luke",
                                    "coins": 31
                                }
                            ]
                        },
                        {
                            "name": "Marty",
                            "players": [
                                {
                                    "account_id": "88342733",
                                    "mmr": 4150,
                                    "discord": "Marty#5313",
                                    "pos_pref": [
                                        4,
                                        5,
                                        3,
                                        3,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        14,
                                        123,
                                        56
                                    ],
                                    "country": "GB",
                                    "name": "Marty",
                                    "coins": 63
                                },
                                {
                                    "account_id": "69119093",
                                    "mmr": 3370,
                                    "discord": "Daft#0891",
                                    "pos_pref": [
                                        1,
                                        1,
                                        1,
                                        2,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        111,
                                        5,
                                        121
                                    ],
                                    "country": "LT",
                                    "name": "Daftcunt",
                                    "coins": 25
                                },
                                {
                                    "account_id": "199498251",
                                    "mmr": 2390,
                                    "discord": "loo#9335",
                                    "pos_pref": [
                                        1,
                                        2,
                                        5,
                                        4,
                                        3
                                    ],
                                    "alts": [],
                                    "top3": [
                                        15,
                                        61,
                                        80
                                    ],
                                    "country": null,
                                    "name": "loo",
                                    "coins": 9
                                },
                                {
                                    "account_id": "95033645",
                                    "mmr": 3170,
                                    "discord": "iwashomeanyway#4631",
                                    "pos_pref": [
                                        4,
                                        3,
                                        5,
                                        2,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        59,
                                        14,
                                        97
                                    ],
                                    "country": "LC",
                                    "name": "iwashomeanyway",
                                    "coins": 15
                                },
                                {
                                    "account_id": "89507638",
                                    "mmr": 390,
                                    "discord": "XIIBULLETS#5934",
                                    "pos_pref": [
                                        1,
                                        1,
                                        5,
                                        5,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        75,
                                        30,
                                        71
                                    ],
                                    "country": null,
                                    "name": "XIIBULLETS",
                                    "coins": 8
                                }
                            ]
                        },
                        {
                            "name": "Eeshie",
                            "players": [
                                {
                                    "account_id": "94550441",
                                    "mmr": 3350,
                                    "discord": "Eeshie#4753",
                                    "pos_pref": [
                                        1,
                                        5,
                                        4,
                                        1,
                                        2
                                    ],
                                    "alts": [],
                                    "top3": [
                                        136,
                                        17,
                                        34
                                    ],
                                    "country": "RU",
                                    "name": "Eeshie",
                                    "coins": 25
                                },
                                {
                                    "account_id": "69347241",
                                    "mmr": 3500,
                                    "discord": "grimreapaaah#7725",
                                    "pos_pref": [
                                        3,
                                        5,
                                        3,
                                        3,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        126,
                                        74,
                                        30
                                    ],
                                    "country": "GB",
                                    "name": "GrimR",
                                    "coins": 16
                                },
                                {
                                    "account_id": "182730622",
                                    "mmr": 3890,
                                    "discord": "quas wex exort#9269",
                                    "pos_pref": [
                                        4,
                                        5,
                                        1,
                                        3,
                                        1
                                    ],
                                    "alts": [
                                        "153585811"
                                    ],
                                    "top3": [
                                        74,
                                        106,
                                        23
                                    ],
                                    "country": "GB",
                                    "name": "caiser101",
                                    "coins": 51
                                },
                                {
                                    "account_id": "157346177",
                                    "mmr": 3200,
                                    "discord": "Bogisa#9058",
                                    "pos_pref": [
                                        2,
                                        1,
                                        3,
                                        5,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        9,
                                        83,
                                        86
                                    ],
                                    "country": "RS",
                                    "name": "Bogisa",
                                    "coins": 15
                                },
                                {
                                    "account_id": "59488464",
                                    "mmr": 1770,
                                    "discord": "Swagboi#0403",
                                    "pos_pref": [
                                        5,
                                        1,
                                        5,
                                        1,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        35,
                                        6,
                                        136
                                    ],
                                    "country": null,
                                    "name": "Swagboi",
                                    "coins": 13
                                }
                            ]
                        },
                        {
                            "name": "lil o.g. \u0421\u043a\u0440\u0438\u043f",
                            "players": [
                                {
                                    "account_id": "30428142",
                                    "mmr": 4050,
                                    "discord": "lil o.g. \u0421\u043a\u0440\u0438\u043f#6058",
                                    "pos_pref": [
                                        1,
                                        1,
                                        1,
                                        5,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        87,
                                        123,
                                        75
                                    ],
                                    "country": "MD",
                                    "name": "lil o.g. \u0421\u043a\u0440\u0438\u043f",
                                    "coins": 35
                                },
                                {
                                    "account_id": "53555116",
                                    "mmr": 3490,
                                    "discord": "Noketchup#7817",
                                    "pos_pref": [
                                        1,
                                        1,
                                        3,
                                        5,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        26,
                                        30,
                                        20
                                    ],
                                    "country": null,
                                    "name": "Yesketchup",
                                    "coins": 32
                                },
                                {
                                    "account_id": "125477453",
                                    "mmr": 3510,
                                    "discord": "Sakohmd#4781",
                                    "pos_pref": [
                                        1,
                                        1,
                                        3,
                                        5,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        9,
                                        14,
                                        123
                                    ],
                                    "country": "FR",
                                    "name": "sakoh",
                                    "coins": 7
                                },
                                {
                                    "account_id": "105128443",
                                    "mmr": 3450,
                                    "discord": "Moggoblin#8154",
                                    "pos_pref": [
                                        5,
                                        3,
                                        1,
                                        4,
                                        3
                                    ],
                                    "alts": [
                                        "1042021698"
                                    ],
                                    "top3": [
                                        89,
                                        6,
                                        93
                                    ],
                                    "country": null,
                                    "name": "Moggoblin",
                                    "coins": 35
                                },
                                {
                                    "account_id": "28888813",
                                    "mmr": 1660,
                                    "discord": "Vade#6190",
                                    "pos_pref": [
                                        1,
                                        1,
                                        1,
                                        4,
                                        5
                                    ],
                                    "alts": [],
                                    "top3": [
                                        68,
                                        5,
                                        101
                                    ],
                                    "country": "GB",
                                    "name": "Vade",
                                    "coins": 11
                                }
                            ]
                        },
                        {
                            "name": "Lightning",
                            "players": [
                                {
                                    "account_id": "376256780",
                                    "mmr": 4100,
                                    "discord": "Lightning#5977",
                                    "pos_pref": [
                                        5,
                                        5,
                                        1,
                                        1,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        13,
                                        10,
                                        113
                                    ],
                                    "country": "IS",
                                    "name": "Lightning",
                                    "coins": 95
                                },
                                {
                                    "account_id": "71904413",
                                    "mmr": 2580,
                                    "discord": "FredAstaire#5111",
                                    "pos_pref": [
                                        2,
                                        3,
                                        1,
                                        5,
                                        3
                                    ],
                                    "alts": [],
                                    "top3": [
                                        21,
                                        119,
                                        9
                                    ],
                                    "country": "GB",
                                    "name": "Fred Astaire",
                                    "coins": 16
                                },
                                {
                                    "account_id": "106401172",
                                    "mmr": 2250,
                                    "discord": "KarlTheCommie#6370",
                                    "pos_pref": [
                                        3,
                                        2,
                                        5,
                                        5,
                                        3
                                    ],
                                    "alts": [],
                                    "top3": [
                                        15,
                                        100,
                                        120
                                    ],
                                    "country": "GB",
                                    "name": "KarlTheCommie",
                                    "coins": 8
                                },
                                {
                                    "account_id": "256219495",
                                    "mmr": 1710,
                                    "discord": "nothing#8080",
                                    "pos_pref": [
                                        3,
                                        2,
                                        4,
                                        5,
                                        2
                                    ],
                                    "alts": [],
                                    "top3": [
                                        8,
                                        100,
                                        10
                                    ],
                                    "country": "IT",
                                    "name": "Nothing",
                                    "coins": 1
                                },
                                {
                                    "account_id": "65341388",
                                    "mmr": 840,
                                    "discord": "kneight#9843",
                                    "pos_pref": [
                                        4,
                                        3,
                                        5,
                                        2,
                                        1
                                    ],
                                    "alts": [],
                                    "top3": [
                                        80,
                                        93,
                                        15
                                    ],
                                    "country": "US",
                                    "name": "Nate",
                                    "coins": 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    )
}
  