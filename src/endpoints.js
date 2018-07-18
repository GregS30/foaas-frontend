/*
  fetch(`http://localhost:5000/operations`)
    .then(res => res.json())
    .then(json => {
      let regex = /\/\w+\/:from/;
      let endpoints = json.filter(j => regex.test(j.url));
      console.log(JSON.stringify(endpoints, undefined, 2));
    });
*/
const endpoints = [
  {
    "name": "Asshole",
    "url": "/asshole/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Awesome",
    "url": "/awesome/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Bag",
    "url": "/bag/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Because",
    "url": "/because/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Bucket",
    "url": "/bucket/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Bye",
    "url": "/bye/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Cool Story",
    "url": "/cool/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Cup",
    "url": "/cup/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Diabetes",
    "url": "/diabetes/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Everyone",
    "url": "/everyone/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Everything",
    "url": "/everything/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Family",
    "url": "/family/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Fascinating",
    "url": "/fascinating/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Flying",
    "url": "/flying/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "FYYFF",
    "url": "/fyyff/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Give",
    "url": "/give/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Fuck you and the horse you rode in on",
    "url": "/horse/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Immensity",
    "url": "/immensity/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Life",
    "url": "/life/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Looking",
    "url": "/looking/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Maybe",
    "url": "/maybe/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Fuck Me",
    "url": "/me/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "mornin",
    "url": "/mornin/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "No",
    "url": "/no/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Pink",
    "url": "/pink/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Programmer",
    "url": "/programmer/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Question",
    "url": "/question/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Retard",
    "url": "/retard/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "That's fucking ridiculous",
    "url": "/ridiculous/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "RTFM",
    "url": "/rtfm/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "sake",
    "url": "/sake/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Fuck This Shit",
    "url": "/shit/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Single",
    "url": "/single/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Thanks",
    "url": "/thanks/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Fuck That",
    "url": "/that/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Fuck This",
    "url": "/this/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Too",
    "url": "/too/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Tucker",
    "url": "/tucker/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "What",
    "url": "/what/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Zayn",
    "url": "/zayn/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  },
  {
    "name": "Zero",
    "url": "/zero/:from",
    "fields": [
      {
        "name": "From",
        "field": "from"
      }
    ]
  }
];

export default endpoints;
