var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "WATERLOO",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2025/half_field.png",
      "clickRestriction": "one",
      "dimensions": "6 6",
      "allowableResponses": "1 7 13 19 25 31",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Line",
      "code": "al",
      "type": "bool"
    },
    { "name": "Coral L1",
      "code": "ac1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "Auto Scoring Position",
      "code": "asp",
      "type": "clickable_image",
      "filename": "2025/reef.png",
      "dimensions": "6 6",
      "allowableResponses": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 17 18 19 20 23 24 25 26 27 28 29 30 31 32 33 34 35 36",
      "shape": "circle 5 black red true"
    },
    { "name": "Processor Score",
      "code": "aps",
      "type": "counter"
    },
    { "name": "Net Score",
      "code": "ans",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Coral L1",
      "code": "tc1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "Human Player Throw",
      "code": "tc5",
      "type": "counter"
    },
    { "name": "Processor Score",
      "code": "tc6",
      "type": "counter"
    },
    { "name": "Net Score",
      "code": "tc7",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "Coral": "Coral Station<br>",
        "floor": "Floor<br>",
        "both": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Scored in<br>Opponent<br>Processor",
      "code": "opp",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Barge Timer",
      "code": "ebt",
      "type": "timer"
    },
    { "name": "Final Robot Status",
      "code": "efs",
      "type":"radio",
      "choices": {
        "Prk": "Parked<br>",
        "PrkF": "Parked/Failed Climb<br>",
        "Shallow": "Shallow Cage<br>",
        "DeepCage": "Deep Cage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Attained Coopertition Pt",
      "code": "cop",
      "type": "bool"
    },
    { "name": "Algae Left in Reef",
      "code": "alr",
      "type": "number",
      "min": 0,
      "max": 9,
      "defaultValue": 0
    },
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "NE": "Not Effective<br>",
        "AVE": "Average<br>",
        "VE": "Very Effective<br>",
        "X": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "B-AVE": "Below Average<br>",
        "AVE": "Average<br>",
        "G": "Good<br>",
        "E": "Excellent<br>",
        "X": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Coral (>2)",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Dropped Algae (>2)",
      "code": "da",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    }
  ]
}`;
