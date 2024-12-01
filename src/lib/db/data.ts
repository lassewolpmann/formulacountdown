import type { RaceData } from "$lib/types/RaceData";

interface SeriesData {
    [key: string]: YearData
}

interface YearData {
    races: RaceData[]
}

export const data: { [key: string]: SeriesData } = {
    "f1": {
        "2024": {
            "races": [
                {
                    "name": "Bahrain",
                    "location": "Sakhir",
                    "latitude": 26.037,
                    "longitude": 50.5112,
                    "round": 1,
                    "slug": "bahrain-grand-prix",
                    "localeKey": "bahrain-grand-prix",
                    "sessions": {
                        "fp1": "2024-02-29T11:30:00Z",
                        "fp2": "2024-02-29T15:00:00Z",
                        "fp3": "2024-03-01T12:30:00Z",
                        "qualifying": "2024-03-01T16:00:00Z",
                        "gp": "2024-03-02T15:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Saudi Arabian",
                    "location": "Jeddah",
                    "latitude": 21.485811,
                    "longitude": 39.192505,
                    "round": 2,
                    "slug": "saudi-arabia-grand-prix",
                    "localeKey": "saudi-arabia-grand-prix",
                    "sessions": {
                        "fp1": "2024-03-07T13:30:00Z",
                        "fp2": "2024-03-07T17:10:00Z",
                        "fp3": "2024-03-08T13:30:00Z",
                        "qualifying": "2024-03-08T17:00:00Z",
                        "gp": "2024-03-09T17:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Australian",
                    "location": "Melbourne",
                    "latitude": -37.8373,
                    "longitude": 144.9666,
                    "round": 3,
                    "slug": "australian-grand-prix",
                    "localeKey": "australian-grand-prix",
                    "sessions": {
                        "fp1": "2024-03-22T01:30:00Z",
                        "fp2": "2024-03-22T05:00:00Z",
                        "fp3": "2024-03-23T01:30:00Z",
                        "qualifying": "2024-03-23T05:00:00Z",
                        "gp": "2024-03-24T04:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Japanese",
                    "location": "Suzuka",
                    "latitude": 35.3689,
                    "longitude": 138.9256,
                    "round": 18,
                    "slug": "japanese-grand-prix",
                    "localeKey": "japanese-grand-prix",
                    "sessions": {
                        "fp1": "2024-04-05T02:30:00Z",
                        "fp2": "2024-04-05T06:00:00Z",
                        "fp3": "2024-04-06T02:30:00Z",
                        "qualifying": "2024-04-06T06:00:00Z",
                        "gp": "2024-04-07T05:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Chinese",
                    "location": "Shanghai",
                    "latitude": 31.3807,
                    "longitude": 121.2498,
                    "round": 3,
                    "slug": "chinese-grand-prix",
                    "localeKey": "chinese-grand-prix",
                    "sessions": {
                        "fp1": "2024-04-19T03:30:00Z",
                        "sprintQualifying": "2024-04-19T07:30:00Z",
                        "sprint": "2024-04-20T03:00:00Z",
                        "qualifying": "2024-04-20T07:00:00Z",
                        "gp": "2024-04-21T07:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Miami",
                    "location": "Miami",
                    "latitude": 25.957764,
                    "longitude": -80.238835,
                    "round": 6,
                    "slug": "miami-grand-prix",
                    "localeKey": "miami-grand-prix",
                    "sessions": {
                        "fp1": "2024-05-03T16:30:00Z",
                        "sprintQualifying": "2024-05-03T20:30:00Z",
                        "sprint": "2024-05-04T16:00:00Z",
                        "qualifying": "2024-05-04T20:00:00Z",
                        "gp": "2024-05-05T20:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Emilia Romagna Grand Prix",
                    "location": "Imola",
                    "latitude": 44.344576,
                    "longitude": 11.713808,
                    "round": 4,
                    "slug": "emilia-romagna-grand-prix",
                    "localeKey": "emilia-romagna-grand-prix",
                    "sessions": {
                        "fp1": "2024-05-17T11:30:00Z",
                        "fp2": "2024-05-17T15:00:00Z",
                        "fp3": "2024-05-18T10:30:00Z",
                        "qualifying": "2024-05-18T14:00:00Z",
                        "gp": "2024-05-19T13:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Monaco",
                    "location": "Monte Carlo",
                    "latitude": 43.7338,
                    "longitude": 7.4215,
                    "round": 8,
                    "slug": "monaco-grand-prix",
                    "localeKey": "monaco-grand-prix",
                    "sessions": {
                        "fp1": "2024-05-24T11:30:00Z",
                        "fp2": "2024-05-24T15:00:00Z",
                        "fp3": "2024-05-25T10:30:00Z",
                        "qualifying": "2024-05-25T14:00:00Z",
                        "gp": "2024-05-26T13:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Canadian",
                    "location": "Montreal",
                    "latitude": 45.5034,
                    "longitude": -73.5267,
                    "round": 10,
                    "slug": "canadian-grand-prix",
                    "localeKey": "canadian-grand-prix",
                    "sessions": {
                        "fp1": "2024-06-07T17:30:00Z",
                        "fp2": "2024-06-07T21:00:00Z",
                        "fp3": "2024-06-08T16:30:00Z",
                        "qualifying": "2024-06-08T20:00:00Z",
                        "gp": "2024-06-09T18:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Spanish",
                    "location": "Catalunya",
                    "latitude": 41.5638,
                    "longitude": 2.2585,
                    "round": 9,
                    "slug": "spanish-grand-prix",
                    "localeKey": "spanish-grand-prix",
                    "sessions": {
                        "fp1": "2024-06-21T11:30:00Z",
                        "fp2": "2024-06-21T15:00:00Z",
                        "fp3": "2024-06-22T10:30:00Z",
                        "qualifying": "2024-06-22T14:00:00Z",
                        "gp": "2024-06-23T13:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Austrian",
                    "location": "Spielberg",
                    "latitude": 47.2225,
                    "longitude": 14.7607,
                    "round": 11,
                    "slug": "austrian-grand-prix",
                    "localeKey": "austrian-grand-prix",
                    "sessions": {
                        "fp1": "2024-06-28T10:30:00Z",
                        "sprintQualifying": "2024-06-28T14:30:00Z",
                        "sprint": "2024-06-29T10:00:00Z",
                        "qualifying": "2024-06-29T14:00:00Z",
                        "gp": "2024-06-30T13:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "British",
                    "location": "Silverstone",
                    "latitude": 52.0706,
                    "longitude": -1.0174,
                    "round": 12,
                    "slug": "british-grand-prix",
                    "localeKey": "british-grand-prix",
                    "sessions": {
                        "fp1": "2024-07-05T11:30:00Z",
                        "fp2": "2024-07-05T15:00:00Z",
                        "fp3": "2024-07-06T10:30:00Z",
                        "qualifying": "2024-07-06T14:00:00Z",
                        "gp": "2024-07-07T14:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Hungarian",
                    "location": "Budapest",
                    "latitude": 47.583,
                    "longitude": 19.2526,
                    "round": 13,
                    "slug": "hungarian-grand-prix",
                    "localeKey": "hungarian-grand-prix",
                    "sessions": {
                        "fp1": "2024-07-19T11:30:00Z",
                        "fp2": "2024-07-19T15:00:00Z",
                        "fp3": "2024-07-20T10:30:00Z",
                        "qualifying": "2024-07-20T14:00:00Z",
                        "gp": "2024-07-21T13:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Belgian",
                    "location": "Spa-Francorchamps",
                    "latitude": 50.444,
                    "longitude": 5.9687,
                    "round": 14,
                    "slug": "belgian-grand-prix",
                    "localeKey": "belgian-grand-prix",
                    "sessions": {
                        "fp1": "2024-07-26T11:30:00Z",
                        "fp2": "2024-07-26T15:00:00Z",
                        "fp3": "2024-07-27T10:30:00Z",
                        "qualifying": "2024-07-27T14:00:00Z",
                        "gp": "2024-07-28T13:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Dutch",
                    "location": "Zandvoort",
                    "latitude": 52.388408,
                    "longitude": 4.547122,
                    "round": 15,
                    "slug": "dutch-grand-prix",
                    "localeKey": "dutch-grand-prix",
                    "sessions": {
                        "fp1": "2024-08-23T10:30:00Z",
                        "fp2": "2024-08-23T14:00:00Z",
                        "fp3": "2024-08-24T09:30:00Z",
                        "qualifying": "2024-08-24T13:00:00Z",
                        "gp": "2024-08-25T13:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Italian",
                    "location": "Monza",
                    "latitude": 45.6169,
                    "longitude": 9.2825,
                    "round": 16,
                    "slug": "italian-grand-prix",
                    "localeKey": "italian-grand-prix",
                    "sessions": {
                        "fp1": "2024-08-30T11:30:00Z",
                        "fp2": "2024-08-30T15:00:00Z",
                        "fp3": "2024-08-31T10:30:00Z",
                        "qualifying": "2024-08-31T14:00:00Z",
                        "gp": "2024-09-01T13:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Azerbaijan",
                    "location": "Baku",
                    "latitude": 40.3699,
                    "longitude": 49.8433,
                    "round": 5,
                    "slug": "azerbaijan-grand-prix",
                    "localeKey": "azerbaijan-grand-prix",
                    "sessions": {
                        "fp1": "2024-09-13T09:30:00Z",
                        "fp2": "2024-09-13T13:00:00Z",
                        "fp3": "2024-09-14T08:30:00Z",
                        "qualifying": "2024-09-14T12:00:00Z",
                        "gp": "2024-09-15T11:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Singapore",
                    "location": "Singapore",
                    "latitude": 1.2857,
                    "longitude": 103.8575,
                    "round": 17,
                    "slug": "singapore-grand-prix",
                    "localeKey": "singapore-grand-prix",
                    "sessions": {
                        "fp1": "2024-09-20T09:30:00Z",
                        "fp2": "2024-09-20T13:00:00Z",
                        "fp3": "2024-09-21T09:30:00Z",
                        "qualifying": "2024-09-21T13:00:00Z",
                        "gp": "2024-09-22T12:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "United States",
                    "location": "Austin",
                    "latitude": 30.1328,
                    "longitude": -97.6411,
                    "round": 20,
                    "slug": "us-grand-prix",
                    "localeKey": "us-grand-prix",
                    "sessions": {
                        "fp1": "2024-10-18T17:30:00Z",
                        "sprintQualifying": "2024-10-18T21:30:00Z",
                        "sprint": "2024-10-19T18:00:00Z",
                        "qualifying": "2024-10-19T22:00:00Z",
                        "gp": "2024-10-20T19:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Mexican",
                    "location": "Mexico City",
                    "latitude": 19.4028,
                    "longitude": -99.0986,
                    "round": 21,
                    "slug": "mexican-grand-prix",
                    "localeKey": "mexico-grand-prix",
                    "sessions": {
                        "fp1": "2024-10-25T18:30:00Z",
                        "fp2": "2024-10-25T22:00:00Z",
                        "fp3": "2024-10-26T17:30:00Z",
                        "qualifying": "2024-10-26T21:00:00Z",
                        "gp": "2024-10-27T20:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Brazilian",
                    "location": "Sao Paulo",
                    "latitude": -23.7014,
                    "longitude": -46.6969,
                    "round": 22,
                    "slug": "brazilian-grand-prix",
                    "localeKey": "brazilian-grand-prix",
                    "sessions": {
                        "fp1": "2024-11-01T14:30:00Z",
                        "sprintQualifying": "2024-11-01T18:30:00Z",
                        "sprint": "2024-11-02T14:00:00Z",
                        "qualifying": "2024-11-03T10:30:00Z",
                        "gp": "2024-11-03T15:30:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Las Vegas",
                    "location": "Las Vegas",
                    "latitude": 36.166747,
                    "longitude": -115.148708,
                    "round": 23,
                    "slug": "las-vegas-grand-prix",
                    "localeKey": "las-vegas-grand-prix",
                    "sessions": {
                        "fp1": "2024-11-22T02:30:00Z",
                        "fp2": "2024-11-22T06:00:00Z",
                        "fp3": "2024-11-23T02:30:00Z",
                        "qualifying": "2024-11-23T06:00:00Z",
                        "gp": "2024-11-24T06:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Qatar",
                    "location": "Doha",
                    "latitude": 25.490292,
                    "longitude": 51.45303,
                    "round": 19,
                    "slug": "qatar-grand-prix",
                    "localeKey": "qatar-grand-prix",
                    "sessions": {
                        "fp1": "2024-11-29T13:30:00Z",
                        "sprintQualifying": "2024-11-29T17:30:00Z",
                        "sprint": "2024-11-30T14:00:00Z",
                        "qualifying": "2024-11-30T18:00:00Z",
                        "gp": "2024-12-01T16:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Abu Dhabi",
                    "location": "Yas Marina",
                    "latitude": 24.4821,
                    "longitude": 54.3482,
                    "round": 24,
                    "slug": "abu-dhabi-grand-prix",
                    "localeKey": "abu-dhabi-grand-prix",
                    "sessions": {
                        "fp1": "2024-12-06T09:30:00Z",
                        "fp2": "2024-12-06T13:00:00Z",
                        "fp3": "2024-12-07T10:30:00Z",
                        "qualifying": "2024-12-07T14:00:00Z",
                        "gp": "2024-12-08T13:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                }
            ]
        }
    },
    "f1-academy": {
        "2024": {
            "races": [
                {
                    "name": "Jeddah",
                    "location": "Jeddah",
                    "latitude": 21.485811,
                    "longitude": 39.192505,
                    "round": 1,
                    "slug": "jeddah",
                    "localeKey": "jeddah",
                    "sessions": {
                        "fp1": "2024-03-07T11:05:00Z",
                        "qualifying1": "2024-03-07T18:30:00Z",
                        "qualifying2": "2024-03-07T18:30:00Z",
                        "race1": "2024-03-08T12:10:00Z",
                        "race2": "2024-03-09T12:05:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Miami",
                    "location": "USA",
                    "latitude": 0,
                    "longitude": 0,
                    "round": 2,
                    "slug": "miami",
                    "localeKey": "miami",
                    "sessions": {
                        "fp1": "2024-05-03T14:00:00Z",
                        "fp2": "2024-05-03T19:20:00Z",
                        "qualifying1": "2024-05-04T14:25:00Z",
                        "qualifying2": "2024-05-04T14:25:00Z",
                        "race1": "2024-05-04T18:05:00Z",
                        "race2": "2024-05-05T17:05:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Barcelona",
                    "location": "Spain",
                    "latitude": 0,
                    "longitude": 0,
                    "round": 3,
                    "slug": "barcelona",
                    "localeKey": "barcelona",
                    "sessions": {
                        "fp1": "2024-06-21T06:50:00Z",
                        "qualifying1": "2024-06-21T16:30:00Z",
                        "qualifying2": "2024-06-21T16:30:00Z",
                        "race1": "2024-06-22T16:00:00Z",
                        "race2": "2024-06-23T06:50:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Zandvoort",
                    "location": "Netherlands",
                    "latitude": 0,
                    "longitude": 0,
                    "round": 4,
                    "slug": "zandvoort",
                    "localeKey": "zandvoort",
                    "sessions": {
                        "fp1": "2024-08-23T08:10:00Z",
                        "fp2": "2024-08-23T15:30:00Z",
                        "qualifying1": "2024-08-24T08:15:00Z",
                        "qualifying2": "2024-08-24T08:15:00Z",
                        "race1": "2024-08-25T06:30:00Z",
                        "race2": "2024-08-25T08:40:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Singapore",
                    "location": "Singapore",
                    "latitude": 1.2857,
                    "longitude": 103.8575,
                    "round": 5,
                    "slug": "singapore",
                    "localeKey": "singapore",
                    "sessions": {
                        "fp1": "2024-09-20T07:20:00Z",
                        "qualifying1": "2024-09-20T11:00:00Z",
                        "qualifying2": "2024-09-20T11:00:00Z",
                        "race1": "2024-09-21T07:05:00Z",
                        "race2": "2024-09-22T07:35:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Qatar",
                    "location": "Doha",
                    "latitude": 25.490292,
                    "longitude": 51.45303,
                    "round": 6,
                    "slug": "qatar",
                    "localeKey": "qatar",
                    "sessions": {
                        "fp1": "2024-11-29T10:00:00Z",
                        "fp2": "2024-11-29T15:00:00Z",
                        "qualifying1": "2024-11-30T12:20:00Z",
                        "race1": "2024-11-30T20:05:00Z",
                        "race2": "2024-12-01T11:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Abu Dhabi",
                    "location": "Yas Marina",
                    "latitude": 24.4821,
                    "longitude": 54.3482,
                    "round": 7,
                    "slug": "abu-dhabi",
                    "localeKey": "abu-dhabi",
                    "sessions": {
                        "fp1": "2024-12-06T05:50:00Z",
                        "qualifying1": "2024-12-06T14:35:00Z",
                        "race1": "2024-12-07T16:15:00Z",
                        "race2": "2024-12-08T07:25:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                }
            ]
        }
    },
    "f2": {
        "2024": {
            "races": [
                {
                    "name": "Bahrain",
                    "location": "Sakhir",
                    "latitude": 26.037,
                    "longitude": 50.5112,
                    "round": 1,
                    "slug": "bahrain",
                    "localeKey": "bahrain",
                    "sessions": {
                        "practice": "2024-02-29T09:05:00Z",
                        "qualifying": "2024-02-29T13:55:00Z",
                        "sprint": "2024-03-01T14:15:00Z",
                        "feature": "2024-03-02T10:30:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Saudi Arabian",
                    "location": "Jeddah",
                    "latitude": 21.485811,
                    "longitude": 39.192505,
                    "round": 2,
                    "slug": "saudi-arabia",
                    "localeKey": "saudi-arabia",
                    "sessions": {
                        "practice": "2024-03-07T09:55:00Z",
                        "qualifying": "2024-03-07T15:00:00Z",
                        "sprint": "2024-03-08T15:10:00Z",
                        "feature": "2024-03-09T13:25:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Australian",
                    "location": "Melbourne",
                    "latitude": -37.8373,
                    "longitude": 144.9666,
                    "round": 3,
                    "slug": "melbourne",
                    "localeKey": "melbourne",
                    "sessions": {
                        "practice": "2024-03-21T23:00:00Z",
                        "qualifying": "2024-03-22T06:30:00Z",
                        "sprint": "2024-03-23T03:15:00Z",
                        "feature": "2024-03-24T00:35:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Emilia Romagna",
                    "location": "Imola",
                    "latitude": 44.344576,
                    "longitude": 11.713808,
                    "round": 4,
                    "slug": "emilia-romagna",
                    "localeKey": "emilia-romagna",
                    "sessions": {
                        "practice": "2024-05-17T09:05:00Z",
                        "qualifying": "2024-05-17T14:00:00Z",
                        "sprint": "2024-05-18T12:15:00Z",
                        "feature": "2024-05-19T08:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Monaco",
                    "location": "Monte Carlo",
                    "latitude": 43.7338,
                    "longitude": 7.4215,
                    "round": 5,
                    "slug": "monaco",
                    "localeKey": "monaco",
                    "sessions": {
                        "practice": "2024-05-23T13:00:00Z",
                        "qualifying": "2024-05-24T13:10:00Z",
                        "sprint": "2024-05-25T12:15:00Z",
                        "feature": "2024-05-26T07:40:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Spanish",
                    "location": "Barcelona",
                    "latitude": 41.5638,
                    "longitude": 2.2585,
                    "round": 6,
                    "slug": "spanish",
                    "localeKey": "spanish",
                    "sessions": {
                        "practice": "2024-06-21T09:05:00Z",
                        "qualifying": "2024-06-21T13:55:00Z",
                        "sprint": "2024-06-22T12:15:00Z",
                        "feature": "2024-06-23T09:35:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Austrian",
                    "location": "Spielberg",
                    "latitude": 47.2225,
                    "longitude": 14.7607,
                    "round": 7,
                    "slug": "austrian",
                    "localeKey": "austrian",
                    "sessions": {
                        "practice": "2024-06-28T08:05:00Z",
                        "qualifying": "2024-06-28T12:55:00Z",
                        "sprint": "2024-06-29T11:30:00Z",
                        "feature": "2024-06-30T08:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "British",
                    "location": "Silverstone",
                    "latitude": 52.0706,
                    "longitude": -1.0174,
                    "round": 8,
                    "slug": "british",
                    "localeKey": "british",
                    "sessions": {
                        "practice": "2024-07-05T09:00:00Z",
                        "qualifying": "2024-07-05T14:00:00Z",
                        "sprint": "2024-07-06T12:15:00Z",
                        "feature": "2024-07-07T08:55:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Hungarian",
                    "location": "Budapest",
                    "latitude": 47.583,
                    "longitude": 19.2526,
                    "round": 9,
                    "slug": "hungarian",
                    "localeKey": "hungarian",
                    "sessions": {
                        "practice": "2024-07-19T09:05:00Z",
                        "qualifying": "2024-07-19T14:00:00Z",
                        "sprint": "2024-07-20T12:15:00Z",
                        "feature": "2024-07-21T08:05:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Belgian",
                    "location": "Spa-Francorchamps",
                    "latitude": 50.444,
                    "longitude": 5.9687,
                    "round": 10,
                    "slug": "belgian",
                    "localeKey": "belgian",
                    "sessions": {
                        "practice": "2024-07-26T09:00:00Z",
                        "qualifying": "2024-07-26T14:00:00Z",
                        "sprint": "2024-07-27T16:15:00Z",
                        "feature": "2024-07-28T08:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Italian",
                    "location": "Monza",
                    "latitude": 45.6169,
                    "longitude": 9.2825,
                    "round": 11,
                    "slug": "italian",
                    "localeKey": "italian",
                    "sessions": {
                        "practice": "2024-08-30T09:00:00Z",
                        "qualifying": "2024-08-30T14:00:00Z",
                        "sprint": "2024-08-31T12:15:00Z",
                        "feature": "2024-09-01T08:05:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Azerbaijan",
                    "location": "Baku",
                    "latitude": 40.3699,
                    "longitude": 49.8433,
                    "round": 12,
                    "slug": "azerbaijan",
                    "localeKey": "azerbaijan",
                    "sessions": {
                        "practice": "2024-09-13T07:00:00Z",
                        "qualifying": "2024-09-13T11:00:00Z",
                        "sprint": "2024-09-14T10:15:00Z",
                        "feature": "2024-09-15T07:35:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Qatar",
                    "location": "Doha",
                    "latitude": 25.490292,
                    "longitude": 51.45303,
                    "round": 13,
                    "slug": "qatar",
                    "localeKey": "qatar",
                    "sessions": {
                        "practice": "2024-11-29T11:05:00Z",
                        "qualifying": "2024-11-29T16:10:00Z",
                        "sprint": "2024-11-30T16:20:00Z",
                        "feature": "2024-12-01T12:20:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Abu Dhabi",
                    "location": "Yas Marina",
                    "latitude": 24.4821,
                    "longitude": 54.3482,
                    "round": 14,
                    "slug": "abu-dhabi",
                    "localeKey": "abu-dhabi",
                    "sessions": {
                        "practice": "2024-12-06T07:05:00Z",
                        "qualifying": "2024-12-06T11:00:00Z",
                        "sprint": "2024-12-07T12:15:00Z",
                        "feature": "2024-12-08T09:25:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                }
            ]
        }
    },
    "f3": {
        "2024": {
            "races": [
                {
                    "name": "Bahrain",
                    "location": "Sakhir",
                    "latitude": 26.037,
                    "longitude": 50.5112,
                    "round": 1,
                    "slug": "bahrain",
                    "localeKey": "bahrain",
                    "sessions": {
                        "practice": "2024-02-29T07:55:00Z",
                        "qualifying": "2024-02-29T13:00:00Z",
                        "sprint": "2024-03-01T10:15:00Z",
                        "feature": "2024-03-02T09:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Australian",
                    "location": "Melbourne",
                    "latitude": -37.8373,
                    "longitude": 144.9666,
                    "round": 2,
                    "slug": "melbourne",
                    "localeKey": "melbourne",
                    "sessions": {
                        "practice": "2024-03-21T21:50:00Z",
                        "qualifying": "2024-03-22T03:00:00Z",
                        "sprint": "2024-03-23T00:15:00Z",
                        "feature": "2024-03-23T22:05:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Emilia Romagna",
                    "location": "Imola",
                    "latitude": 44.344576,
                    "longitude": 11.713808,
                    "round": 3,
                    "slug": "emilia-romagna",
                    "localeKey": "emilia-romagna",
                    "sessions": {
                        "practice": "2024-05-17T07:55:00Z",
                        "qualifying": "2024-05-17T13:05:00Z",
                        "sprint": "2024-05-18T08:05:00Z",
                        "feature": "2024-05-19T06:30:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Monaco",
                    "location": "Monte Carlo",
                    "latitude": 43.7338,
                    "longitude": 7.4215,
                    "round": 4,
                    "slug": "monaco",
                    "localeKey": "monaco",
                    "sessions": {
                        "practice": "2024-05-23T11:10:00Z",
                        "qualifying": "2024-05-24T09:05:00Z",
                        "sprint": "2024-05-25T08:45:00Z",
                        "feature": "2024-05-26T06:00:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Spanish",
                    "location": "Catalunya",
                    "latitude": 41.5638,
                    "longitude": 2.2585,
                    "round": 5,
                    "slug": "spanish",
                    "localeKey": "spanish",
                    "sessions": {
                        "practice": "2024-06-21T07:55:00Z",
                        "qualifying": "2024-06-21T13:00:00Z",
                        "sprint": "2024-06-22T08:40:00Z",
                        "feature": "2024-06-23T08:05:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Austrian",
                    "location": "Spielberg",
                    "latitude": 47.2225,
                    "longitude": 14.7607,
                    "round": 6,
                    "slug": "austrian",
                    "localeKey": "austrian",
                    "sessions": {
                        "practice": "2024-06-28T06:55:00Z",
                        "qualifying": "2024-06-28T12:00:00Z",
                        "sprint": "2024-06-29T07:30:00Z",
                        "feature": "2024-06-30T06:30:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "British",
                    "location": "Silverstone",
                    "latitude": 52.0706,
                    "longitude": -1.0174,
                    "round": 7,
                    "slug": "british",
                    "localeKey": "british",
                    "sessions": {
                        "practice": "2024-07-05T07:40:00Z",
                        "qualifying": "2024-07-05T13:05:00Z",
                        "sprint": "2024-07-06T17:10:00Z",
                        "feature": "2024-07-07T07:20:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Hungarian",
                    "location": "Budapest",
                    "latitude": 47.583,
                    "longitude": 19.2526,
                    "round": 8,
                    "slug": "hungarian",
                    "localeKey": "hungarian",
                    "sessions": {
                        "practice": "2024-07-19T07:55:00Z",
                        "qualifying": "2024-07-19T13:05:00Z",
                        "sprint": "2024-07-20T07:50:00Z",
                        "feature": "2024-07-21T06:25:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Belgian",
                    "location": "Spa-Francorchamps",
                    "latitude": 50.444,
                    "longitude": 5.9687,
                    "round": 9,
                    "slug": "belgian",
                    "localeKey": "belgian",
                    "sessions": {
                        "practice": "2024-07-26T07:45:00Z",
                        "qualifying": "2024-07-26T13:05:00Z",
                        "sprint": "2024-07-27T07:50:00Z",
                        "feature": "2024-07-28T06:30:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                },
                {
                    "name": "Italian",
                    "location": "Monza",
                    "latitude": 45.6169,
                    "longitude": 9.2825,
                    "round": 10,
                    "slug": "italian",
                    "localeKey": "italian",
                    "sessions": {
                        "practice": "2024-08-30T07:35:00Z",
                        "qualifying": "2024-08-30T13:00:00Z",
                        "sprint": "2024-08-31T07:30:00Z",
                        "feature": "2024-09-01T06:35:00Z"
                    },
                    "flag": "",
                    "prettySessions": []
                }
            ]
        }
    }
}