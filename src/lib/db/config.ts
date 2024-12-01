import type { DataConfig } from "$lib/types/RaceData";

export const config: { [key: string]: DataConfig } = {
    "f1": {
        "sessionLengths": {
            "fp1":60,
            "fp2":60,
            "fp3":60,
            "qualifying":60,
            "sprintQualifying":45,
            "sprint":30,
            "gp":120
        },
        "availableYears": [2024],
        "sessions": ["fp1", "fp2", "fp3", "qualifying", "sprintQualifying", "sprint", "gp"]
    },
    "f1-academy": {
        "sessionLengths": {
            "fp1":40,
            "fp2":40,
            "qualifying1":15,
            "qualifying2":15,
            "race1":30,
            "race2":20,
            "race3":30
        },
        "availableYears": [2024],
        "sessions": ["fp1", "fp2", "qualifying1", "qualifying2", "race1", "race2", "race3"]
    },
    "f2": {
        "sessionLengths": {
            "practice": 45,
            "qualifying": 30,
            "sprint": 45,
            "feature": 60
        },
        "availableYears": [2024],
        "sessions": ["practice", "qualifying", "sprint", "feature"]
    },
    "f3": {
        "sessionLengths": {
            "practice": 45,
            "qualifying": 30,
            "sprint": 40,
            "feature": 45
        },
        "availableYears": [2024],
        "sessions": ["practice", "qualifying", "sprint", "feature"]
    }
}