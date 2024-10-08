const questionsetCategoryRead = {
    "id": "api.object.category.definition.read",
    "ver": "3.0",
    "ts": "2024-06-04T11:34:53ZZ",
    "params": {
        "resmsgid": "8a16c776-2342-49d2-a4db-1a6907a7a1d8",
        "msgid": null,
        "err": null,
        "status": "successful",
        "errmsg": null
    },
    "responseCode": "OK",
    "result": {
        "objectCategoryDefinition": {
            "identifier": "obj-cat:practice-question-set_questionset_all",
            "objectMetadata": {
                "config": {
                    "sourcingSettings": {
                        "collection": {
                            "maxDepth": 1,
                            "addFromLibraryEnabled": true,
                            "enableAddFromLibrary": true,
                            "objectType": "QuestionSet",
                            "primaryCategory": "Practice Question Set",
                            "isRoot": true,
                            "iconClass": "fa fa-book",
                            "children": {},
                            "hierarchy": {
                                "level1": {
                                    "name": "Section",
                                    "type": "Unit",
                                    "mimeType": "application/vnd.sunbird.questionset",
                                    "primaryCategory": "Practice Question Set",
                                    "iconClass": "fa fa-folder-o",
                                    "children": {
                                        "Question": [
                                            "Multiple Choice Question",
                                            "Subjective Question",
                                            "True False Question"
                                        ]
                                    }
                                }
                            },
                            "questionSet": {
                                "maxQuestionsLimit": 5
                            },
                            "createdByField": "foodCrops"
                        }
                    }
                },
                "questionSet": {
                    "maxQuestionsLimit": 3
                },
                "schema": {
                    "properties": {
                        "mimeType": {
                            "type": "string",
                            "enum": [
                                "application/vnd.sunbird.questionset"
                            ]
                        },
                        "verticals": {
                            "type": "string",
                            "enum": [
                                "Nipun Bharat",
                                "Adult Education",
                                "Vocational Education",
                                "CWSN",
                                "Virtual Labs"
                            ]
                        }
                    }
                }
            },
            "languageCode": [],
            "name": "Practice Question Set",
            "forms": {
                "childMetadata": {
                    "templateName": "",
                    "required": [],
                    "properties": [
                        {
                            "code": "name",
                            "dataType": "text",
                            "description": "Name of the content",
                            "editable": true,
                            "inputType": "text",
                            "label": "Title",
                            "name": "Title",
                            "placeholder": "Title",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1 required"
                            },
                            "required": true,
                            "visible": true,
                            "validations": [
                                {
                                    "type": "max",
                                    "value": "100",
                                    "message": "Input is Exceeded"
                                },
                                {
                                    "type": "required",
                                    "message": "Title is required"
                                }
                            ]
                        },
                        {
                            "code": "visibility",
                            "dataType": "text",
                            "description": "Visibility",
                            "editable": true,
                            "inputType": "nestedselect",
                            "label": "Visibility",
                            "name": "Visibility",
                            "placeholder": "Select Learning level",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            },
                            "required": false,
                            "visible": true,
                            "range": [
                                "Default",
                                "Private"
                            ],
                            "validations": []
                        },
                        {
                            "code": "complexityLevel",
                            "dataType": "list",
                            "description": "Learning level",
                            "editable": true,
                            "inputType": "nestedselect",
                            "label": "Learning level",
                            "name": "Learning level",
                            "placeholder": "Select Learning level",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            },
                            "required": false,
                            "visible": true,
                            "range": [
                                "remember",
                                "understand",
                                "apply",
                                "analyse",
                                "evaluate",
                                "create"
                            ],
                            "validations": []
                        },
                        {
                            "code": "board",
                            "default": "",
                            "visible": true,
                            "editable": false,
                            "dataType": "text",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            },
                            "description": "Board",
                            "label": "Board/Syllabus",
                            "required": false,
                            "name": "Board/Syllabus",
                            "inputType": "select",
                            "placeholder": "Select Board/Syllabus"
                        },
                        {
                            "code": "medium",
                            "visible": true,
                            "editable": false,
                            "default": "",
                            "dataType": "list",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            },
                            "description": "",
                            "label": "Medium",
                            "required": false,
                            "name": "Medium",
                            "inputType": "select",
                            "placeholder": "Select Medium"
                        },
                        {
                            "code": "gradeLevel",
                            "visible": true,
                            "editable": false,
                            "default": "",
                            "dataType": "list",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            },
                            "description": "Class",
                            "label": "Class",
                            "required": false,
                            "name": "Class",
                            "inputType": "select",
                            "placeholder": "Select Class"
                        },
                        {
                            "code": "subject",
                            "visible": true,
                            "editable": false,
                            "default": "",
                            "dataType": "list",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            },
                            "description": "",
                            "label": "Subject",
                            "required": false,
                            "name": "Subject",
                            "inputType": "select",
                            "placeholder": "Select Subject"
                        },
                        {
                            "code": "maxScore",
                            "dataType": "number",
                            "description": "Marks",
                            "editable": true,
                            "inputType": "text",
                            "label": "Marks:",
                            "name": "Marks",
                            "placeholder": "Marks",
                            "tooltip": "Provide marks of this question.",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1 required"
                            },
                            "validations": [
                                {
                                    "type": "pattern",
                                    "value": "^[1-9]{1}[0-9]*$",
                                    "message": "Input should be numeric"
                                },
                                {
                                    "type": "required",
                                    "message": "Marks is required"
                                }
                            ]
                        }
                    ]
                },
                "create": {
                    "templateName": "",
                    "required": [],
                    "properties": [
                        {
                            "name": "Basic details",
                            "fields": [
                                {
                                    "code": "appIcon",
                                    "name": "Icon",
                                    "label": "App Icon",
                                    "placeholder": "Icon",
                                    "description": "Icon for the question set",
                                    "dataType": "text",
                                    "inputType": "appIcon",
                                    "editable": true,
                                    "required": true,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1 required"
                                    }
                                },
                                {
                                    "code": "name",
                                    "name": "Name",
                                    "label": "Name",
                                    "placeholder": "Name",
                                    "description": "Name of the QuestionSet",
                                    "dataType": "text",
                                    "inputType": "text",
                                    "editable": true,
                                    "required": true,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1 required"
                                    },
                                    "validations": [
                                        {
                                            "type": "max",
                                            "value": "120",
                                            "message": "Input is Exceeded"
                                        },
                                        {
                                            "type": "required",
                                            "message": "Name is required"
                                        }
                                    ]
                                },
                                {
                                    "code": "description",
                                    "name": "Description",
                                    "label": "Description",
                                    "placeholder": "Description",
                                    "description": "Description of the content",
                                    "dataType": "text",
                                    "inputType": "textarea",
                                    "editable": true,
                                    "required": true,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1 required"
                                    },
                                    "validations": [
                                        {
                                            "type": "required",
                                            "message": "description is required"
                                        }
                                    ]
                                },
                                {
                                    "code": "keywords",
                                    "name": "Keywords",
                                    "label": "keywords",
                                    "placeholder": "Enter Keywords",
                                    "description": "Keywords for the Question Set",
                                    "dataType": "list",
                                    "inputType": "keywords",
                                    "editable": true,
                                    "required": false,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1"
                                    }
                                },
                                {
                                    "code": "instructions",
                                    "name": "Instructions",
                                    "label": "Instructions",
                                    "placeholder": "Enter Instructions",
                                    "description": "Instructions for the question set",
                                    "dataType": "text",
                                    "inputType": "richtext",
                                    "editable": true,
                                    "required": false,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-2 required"
                                    },
                                    "validations": [
                                        {
                                            "type": "maxLength",
                                            "value": "500",
                                            "message": "Input is Exceeded"
                                        }
                                    ]
                                },
                                {
                                    "code": "primaryCategory",
                                    "name": "Type",
                                    "label": "Type",
                                    "placeholder": "",
                                    "description": "Type or Category of the Question Set",
                                    "dataType": "text",
                                    "inputType": "text",
                                    "editable": false,
                                    "required": false,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1"
                                    }
                                },
                                {
                                    "code": "additionalCategories",
                                    "name": "Additional Category",
                                    "label": "Additional Category",
                                    "placeholder": "Select Additional Category",
                                    "description": "Additonal Category of the Question Set",
                                    "default": "",
                                    "dataType": "list",
                                    "inputType": "nestedselect",
                                    "editable": true,
                                    "required": false,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1"
                                    }
                                }
                            ]
                        },
                        {
                            "name": "Framework details",
                            "fields": [
                                {
                                    "code": "board",
                                    "name": "Board/Syllabus",
                                    "label": "Board/Syllabus",
                                    "placeholder": "Select Board/Syllabus",
                                    "description": "Board or Syallbus of the Question Set",
                                    "default": "",
                                    "dataType": "text",
                                    "inputType": "select",
                                    "editable": true,
                                    "required": true,
                                    "visible": true,
                                    "depends": [],
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1 required"
                                    },
                                    "validations": [
                                        {
                                            "type": "required",
                                            "message": "Board is required"
                                        }
                                    ]
                                },
                                {
                                    "code": "medium",
                                    "name": "Medium",
                                    "label": "Medium",
                                    "placeholder": "Select Medium",
                                    "description": "Medium of Instruction for the Question Set",
                                    "default": "",
                                    "dataType": "list",
                                    "inputType": "select",
                                    "editable": true,
                                    "required": true,
                                    "visible": true,
                                    "depends": [
                                        "board"
                                    ],
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1 required"
                                    },
                                    "validations": [
                                        {
                                            "type": "required",
                                            "message": "Medium is required"
                                        }
                                    ]
                                },
                                {
                                    "code": "gradeLevel",
                                    "name": "Class",
                                    "label": "Class",
                                    "placeholder": "Select Class",
                                    "description": "Class of the Question Set",
                                    "default": "",
                                    "dataType": "list",
                                    "inputType": "select",
                                    "editable": true,
                                    "required": true,
                                    "visible": true,
                                    "depends": [
                                        "board",
                                        "medium"
                                    ],
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1 required"
                                    },
                                    "validations": [
                                        {
                                            "type": "required",
                                            "message": "Class is required"
                                        }
                                    ]
                                },
                                {
                                    "code": "subject",
                                    "name": "Subject",
                                    "label": "Subject",
                                    "placeholder": "Select Subject",
                                    "description": "Subject of the Question Set",
                                    "default": "",
                                    "dataType": "list",
                                    "inputType": "select",
                                    "editable": true,
                                    "required": true,
                                    "visible": true,
                                    "depends": [
                                        "board",
                                        "medium",
                                        "gradeLevel"
                                    ],
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1 required"
                                    },
                                    "validations": [
                                        {
                                            "type": "required",
                                            "message": "Subject is required"
                                        }
                                    ]
                                },
                                {
                                    "code": "audience",
                                    "name": "Audience",
                                    "label": "Audience",
                                    "placeholder": "Select Audience",
                                    "description": "Audience of the Question Set",
                                    "dataType": "list",
                                    "inputType": "select",
                                    "editable": true,
                                    "required": true,
                                    "visible": true,
                                    "range": [
                                        "Student",
                                        "Teacher",
                                        "Administrator"
                                    ],
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1 required"
                                    },
                                    "validations": [
                                        {
                                            "type": "required",
                                            "message": "Audience is required"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Question set behaviour",
                            "fields": [
                                {
                                    "code": "maxTime",
                                    "name": "MaxTimer",
                                    "label": "Set Maximum Time",
                                    "placeholder": "HH:mm:ss",
                                    "description": "This is the maximum time allowed for the users to complete the assessment",
                                    "default": "3600",
                                    "dataType": "text",
                                    "inputType": "timer",
                                    "editable": true,
                                    "required": false,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1"
                                    },
                                    "validations": [
                                        {
                                            "type": "time",
                                            "message": "Please enter in hh:mm:ss",
                                            "value": "HH:mm:ss"
                                        },
                                        {
                                            "type": "max",
                                            "value": "05:59:59",
                                            "message": "max time should be less than 05:59:59"
                                        }
                                    ]
                                },
                                {
                                    "code": "showTimer",
                                    "name": "show Timer",
                                    "label": "show Timer",
                                    "placeholder": "show Timer",
                                    "description": "show Timer",
                                    "default": false,
                                    "dataType": "boolean",
                                    "inputType": "checkbox",
                                    "editable": true,
                                    "required": false,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1"
                                    }
                                },
                                {
                                    "code": "requiresSubmit",
                                    "name": "Submit Confirmation",
                                    "label": "Submit Confirmation Page",
                                    "placeholder": "Select Submit Confirmation",
                                    "description": "Allows users to review and submit the assessment",
                                    "dataType": "text",
                                    "inputType": "select",
                                    "output": "identifier",
                                    "range": [
                                        {
                                            "identifier": "Yes",
                                            "label": "Enable"
                                        },
                                        {
                                            "identifier": "No",
                                            "label": "Disable"
                                        }
                                    ],
                                    "editable": true,
                                    "required": false,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1"
                                    }
                                },
                                {
                                    "code": "maxAttempts",
                                    "name": "Max Attempts",
                                    "label": "Max Attempts",
                                    "placeholder": "Max Attempts",
                                    "description": "Max Attempts",
                                    "dataType": "number",
                                    "inputType": "select",
                                    "editable": true,
                                    "required": false,
                                    "visible": true,
                                    "range": [
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6,
                                        7,
                                        8,
                                        9,
                                        10,
                                        11,
                                        12,
                                        13,
                                        14,
                                        15,
                                        16,
                                        17,
                                        18,
                                        19,
                                        20,
                                        21,
                                        22,
                                        23,
                                        24,
                                        25
                                    ],
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1"
                                    }
                                },
                                {
                                    "code": "summaryType",
                                    "name": "summaryType",
                                    "label": "Summary Type",
                                    "placeholder": "Select Summary Type",
                                    "description": "summaryType",
                                    "dataType": "text",
                                    "inputType": "select",
                                    "editable": true,
                                    "required": false,
                                    "visible": true,
                                    "range": [
                                        "Complete",
                                        "Score",
                                        "Duration",
                                        "Score & Duration"
                                    ],
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1"
                                    }
                                }
                            ]
                        },
                        {
                            "name": "Question set behaviour",
                            "fields": [
                                {
                                    "code": "author",
                                    "name": "Author",
                                    "label": "Author",
                                    "placeholder": "Author",
                                    "description": "Author of the question set",
                                    "dataType": "text",
                                    "inputType": "text",
                                    "editable": true,
                                    "required": true,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1 required"
                                    },
                                    "validations": [
                                        {
                                            "type": "required",
                                            "message": "Author is required"
                                        }
                                    ]
                                },
                                {
                                    "code": "attributions",
                                    "name": "Attributions",
                                    "label": "Attributions",
                                    "placeholder": "Enter Attributions",
                                    "description": "Attributions of the question set",
                                    "dataType": "text",
                                    "inputType": "text",
                                    "editable": true,
                                    "required": false,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1"
                                    }
                                },
                                {
                                    "code": "copyright",
                                    "name": "Copyright & year",
                                    "label": "Copyright & year",
                                    "placeholder": "Copyright & year",
                                    "description": "Copyright & year",
                                    "dataType": "text",
                                    "inputType": "text",
                                    "editable": true,
                                    "required": false,
                                    "visible": true,
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1"
                                    }
                                },
                                {
                                    "code": "license",
                                    "name": "license",
                                    "label": "license",
                                    "placeholder": "Select license",
                                    "description": "license",
                                    "dataType": "text",
                                    "inputType": "select",
                                    "editable": true,
                                    "required": false,
                                    "visible": true,
                                    "range": "",
                                    "renderingHints": {
                                        "class": "sb-g-col-lg-1"
                                    }
                                }
                            ]
                        }
                    ]
                },
                "delete": {},
                "publish": {},
                "publishchecklist": {
                    "templateName": "",
                    "required": [],
                    "properties": []
                },
                "requestforchangeschecklist": {
                    "templateName": "",
                    "required": [],
                    "properties": [
                        {
                            "otherReason": "Other Issue(s) (if there are any other issues, tick this and provide details in the comments box)",
                            "contents": [
                                {
                                    "name": "Appropriateness",
                                    "checkList": [
                                        "Has Hate speech, Abuse, Violence, Profanity",
                                        "Has Sexual content, Nudity or Vulgarity",
                                        "Has Discriminatory or Defamatory content",
                                        "Is not suitable for children"
                                    ]
                                },
                                {
                                    "name": "Content details",
                                    "checkList": [
                                        "Inappropriate Title or Description",
                                        "Incorrect Board, Grade, Subject or Medium",
                                        "Inappropriate tags such as Resource Type or Concepts",
                                        "Irrelevant Keywords"
                                    ]
                                },
                                {
                                    "name": "Usability",
                                    "checkList": [
                                        "Content is NOT playing correctly",
                                        "CANNOT see the content clearly on Desktop and App",
                                        "Audio is NOT clear or NOT easy to understand",
                                        "Spelling mistakes found in text used",
                                        "Language is NOT simple to understand"
                                    ]
                                }
                            ],
                            "title": "Please tick the reasons for requesting changes and provide detailed comments:"
                        }
                    ]
                },
                "review": {},
                "search": {
                    "templateName": "",
                    "required": [],
                    "properties": [
                        {
                            "code": "primaryCategory",
                            "dataType": "list",
                            "description": "Type",
                            "editable": true,
                            "default": [],
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            },
                            "inputType": "nestedselect",
                            "label": "Question Type(s)",
                            "name": "Type",
                            "placeholder": "Select QuestionType",
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "board",
                            "visible": true,
                            "depends": [],
                            "editable": true,
                            "dataType": "list",
                            "description": "Board",
                            "label": "Board",
                            "required": false,
                            "name": "Board",
                            "inputType": "select",
                            "placeholder": "Select Board",
                            "output": "name",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            }
                        },
                        {
                            "code": "medium",
                            "visible": true,
                            "editable": true,
                            "dataType": "list",
                            "description": "",
                            "label": "Medium(s)",
                            "required": false,
                            "name": "Medium",
                            "inputType": "nestedselect",
                            "placeholder": "Select Medium",
                            "output": "name",
                            "depends": [
                                "board"
                            ],
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            }
                        },
                        {
                            "code": "gradeLevel",
                            "visible": true,
                            "depends": [
                                "board",
                                "medium"
                            ],
                            "editable": true,
                            "default": "",
                            "dataType": "list",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            },
                            "description": "Class",
                            "label": "Class(es)",
                            "required": false,
                            "name": "Class",
                            "inputType": "nestedselect",
                            "placeholder": "Select Class",
                            "output": "name"
                        },
                        {
                            "code": "subject",
                            "visible": true,
                            "depends": [
                                "board",
                                "medium",
                                "gradeLevel"
                            ],
                            "editable": true,
                            "default": "",
                            "dataType": "list",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            },
                            "description": "",
                            "label": "Subject(s)",
                            "required": false,
                            "name": "Subject",
                            "inputType": "nestedselect",
                            "placeholder": "Select Subject",
                            "output": "name"
                        }
                    ]
                },
                "searchConfig": {
                    "templateName": "",
                    "required": [],
                    "properties": [
                        {
                            "code": "primaryCategory",
                            "dataType": "list",
                            "description": "Type",
                            "editable": true,
                            "default": [],
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            },
                            "inputType": "nestedselect",
                            "label": "Question Type(s)",
                            "name": "Type",
                            "placeholder": "Select QuestionType",
                            "required": false,
                            "visible": true
                        },
                        {
                            "code": "board",
                            "visible": true,
                            "depends": [],
                            "editable": true,
                            "dataType": "list",
                            "description": "Board",
                            "label": "Board",
                            "required": false,
                            "name": "Board",
                            "inputType": "select",
                            "placeholder": "Select Board",
                            "output": "name",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            }
                        },
                        {
                            "code": "medium",
                            "visible": true,
                            "editable": true,
                            "dataType": "list",
                            "description": "",
                            "label": "Medium(s)",
                            "required": false,
                            "name": "Medium",
                            "inputType": "nestedselect",
                            "placeholder": "Select Medium",
                            "output": "name",
                            "depends": [
                                "board"
                            ],
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            }
                        },
                        {
                            "code": "gradeLevel",
                            "visible": true,
                            "depends": [
                                "board",
                                "medium"
                            ],
                            "editable": true,
                            "default": "",
                            "dataType": "list",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            },
                            "description": "Class",
                            "label": "Class(es)",
                            "required": false,
                            "name": "Class",
                            "inputType": "nestedselect",
                            "placeholder": "Select Class",
                            "output": "name"
                        },
                        {
                            "code": "subject",
                            "visible": true,
                            "depends": [
                                "board",
                                "medium",
                                "gradeLevel"
                            ],
                            "editable": true,
                            "default": "",
                            "dataType": "list",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            },
                            "description": "",
                            "label": "Subject(s)",
                            "required": false,
                            "name": "Subject",
                            "inputType": "nestedselect",
                            "placeholder": "Select Subject",
                            "output": "name"
                        }
                    ]
                },
                "unitMetadata": {
                    "templateName": "",
                    "required": [],
                    "properties": [
                        {
                            "code": "name",
                            "dataType": "text",
                            "description": "Name of the content",
                            "editable": true,
                            "inputType": "text",
                            "label": "Title",
                            "name": "Title",
                            "placeholder": "Title",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1 required"
                            },
                            "required": true,
                            "visible": true,
                            "validations": [
                                {
                                    "type": "max",
                                    "value": "120",
                                    "message": "Input is Exceeded"
                                },
                                {
                                    "type": "required",
                                    "message": "Title is required"
                                }
                            ]
                        },
                        {
                            "code": "description",
                            "dataType": "text",
                            "description": "Description of the content",
                            "editable": true,
                            "inputType": "textarea",
                            "label": "Description",
                            "name": "Description",
                            "placeholder": "Description",
                            "renderingHints": {
                                "class": "sb-g-col-lg-1 required"
                            },
                            "required": true,
                            "visible": true,
                            "validations": [
                                {
                                    "type": "max",
                                    "value": "500",
                                    "message": "Input is Exceeded"
                                }
                            ]
                        },
                        {
                            "code": "instructions",
                            "name": "Instructions",
                            "label": "Instructions",
                            "placeholder": "Enter Instructions",
                            "description": "Instructions for the section",
                            "dataType": "text",
                            "inputType": "richtext",
                            "editable": true,
                            "required": false,
                            "visible": true,
                            "renderingHints": {
                                "class": "sb-g-col-lg-2"
                            },
                            "validations": [
                                {
                                    "type": "maxLength",
                                    "value": "500",
                                    "message": "Input is Exceeded"
                                }
                            ]
                        },
                        {
                            "code": "maxQuestions",
                            "name": "Show Questions",
                            "label": "Count of questions to be displayed in this section",
                            "placeholder": "Input count of questions to be displayed",
                            "description": "By default all questions are shown unless specific count is entered.",
                            "default": "",
                            "dataType": "number",
                            "inputType": "select",
                            "editable": true,
                            "required": false,
                            "visible": true,
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            }
                        },
                        {
                            "code": "shuffle",
                            "name": "Shuffle Questions",
                            "label": "Shuffle Questions",
                            "placeholder": "Shuffle Questions",
                            "description": "If shuffle questions is selected, users are presented with questions in a random order whenever they attempt the assessment",
                            "default": "false",
                            "dataType": "boolean",
                            "inputType": "checkbox",
                            "editable": true,
                            "required": false,
                            "visible": true,
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            }
                        },
                        {
                            "code": "showFeedback",
                            "name": "Show Feedback",
                            "label": "Show Question Feedback",
                            "placeholder": "Select Option",
                            "description": "If feedback is selected, users are informed whether they have correctly answered question or not",
                            "dataType": "boolean",
                            "inputType": "checkbox",
                            "editable": true,
                            "required": false,
                            "visible": true,
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            }
                        },
                        {
                            "code": "showSolutions",
                            "name": "Show Solution",
                            "label": "Show Solution",
                            "placeholder": "Select Option",
                            "description": "If show solution is selected then solutions for each question will be shown to the user",
                            "dataType": "boolean",
                            "inputType": "checkbox",
                            "editable": true,
                            "required": false,
                            "visible": true,
                            "renderingHints": {
                                "class": "sb-g-col-lg-1"
                            }
                        }
                    ]
                },
                "update": {}
            }
        }
    }
}

module.exports = {
    objectCategoryDefinitionResponse: questionsetCategoryRead
};