var APP_DATA = {
  "scenes": [
    {
      "id": "0-the-uncharted-lands",
      "name": "The Uncharted Lands",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 2.9046739928717615,
        "pitch": -0.3600567181271117,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.5906400251008748,
          "pitch": 0.08037869640521933,
          "rotation": 0,
          "target": "5-through-the-warzone"
        },
        {
          "yaw": 0.219183893756,
          "pitch": -1.4919602609103766,
          "rotation": 0,
          "target": "1-the-drone-view---1"
        },
        {
          "yaw": 2.3181358185254624,
          "pitch": 0.1266179056036254,
          "rotation": 4.71238898038469,
          "target": "2-the-ambush"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.45287579920497656,
          "pitch": 0.083915853952238,
          "title": "Towards the Buildings",
          "text": "This way seems to lead towards the destroyed building complex."
        },
        {
          "yaw": 2.4363472276301046,
          "pitch": 0.14011661635140626,
          "title": "Towards the Open Road",
          "text": "This way leads to the open road"
        },
        {
          "yaw": -0.43332575196518164,
          "pitch": -1.3272526554202884,
          "title": "Use the Drone",
          "text": "The Drone would be useful to get additional information"
        },
        {
          "yaw": -2.323928308808476,
          "pitch": -0.11484221297289565,
          "title": "The Explosion",
          "text": "Seems like the openning of quantum tunnel made an explosion. You better get out from here quickly because someone can arrive here looking for the explosion."
        },
        {
          "yaw": 2.7408373698337476,
          "pitch": -0.3818751918356522,
          "title": "The Arrival",
          "text": "You just arrived to a point of time 4 years before the Nuclear War. You seems to be in right in the middle of a warzone in the battle between humans and humanoids. Better to send your drone up gather many infromation as possible.<div><br></div><div>Your goal is to reach the headquarters of the human intelligence research center.</div>"
        }
      ]
    },
    {
      "id": "1-the-drone-view---1",
      "name": "The Drone View - 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.3859167971651836,
        "pitch": 0.041107757651374754,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.1989602796625434,
          "pitch": -0.3022158074837833,
          "rotation": 3.141592653589793,
          "target": "0-the-uncharted-lands"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.03651488532835678,
          "pitch": 0.10307066403334808,
          "title": "The Destroyed Building Complex",
          "text": "It may be safer to go through this and find a way out rather than go out in the open through the war zone."
        },
        {
          "yaw": 2.252070748458663,
          "pitch": 0.5627598787775199,
          "title": "The Open Road",
          "text": "It may be faster to go through here. But it could be dangerous since you are in open. There seems to be several soldiers there as well."
        },
        {
          "yaw": 1.3602179028619172,
          "pitch": -0.29670256224743774,
          "title": "Go Back",
          "text": "Get the drone back"
        }
      ]
    },
    {
      "id": "2-the-ambush",
      "name": "The Ambush",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -0.09393527622916054,
        "pitch": -0.36388562014526826,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.7688255673940567,
          "pitch": -0.48053460087906075,
          "rotation": 0,
          "target": "3-throught-the-smoke"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.43759805969112975,
          "pitch": -0.5320237511912964,
          "title": "Danger!",
          "text": "You decided go in the open. Suddenly a battalion of humanoid soldiers ambush you and surrounds you. You have only one option remaining. <br><br>The Smoke Bomb! Throw it to your right."
        },
        {
          "yaw": 1.9328967779027533,
          "pitch": -0.4511430149308211,
          "title": "Throw the Smoke Bomb",
          "text": "This will reduce the visibility of the soldiers and allows you to escape."
        }
      ]
    },
    {
      "id": "3-throught-the-smoke",
      "name": "Throught the Smoke",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 1.8131795443621908,
        "pitch": -0.3011193796154963,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.8040203821068133,
          "pitch": -0.21383060707216828,
          "rotation": 0,
          "target": "4-back-again"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9825770085056647,
          "pitch": -0.20477355824641563,
          "title": "Escape",
          "text": "Now is your chance to escape through the smoke"
        }
      ]
    },
    {
      "id": "4-back-again",
      "name": "Back Again",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": 2.741091940605676,
        "pitch": -0.15753554592645358,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.6019839505256375,
          "pitch": 0.10333642706888924,
          "rotation": 0,
          "target": "5-through-the-warzone"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.741091940605676,
          "pitch": -0.15753554592645358,
          "title": "Danger!",
          "text": "The soldiers are following you. You should quickly find a way to hide."
        },
        {
          "yaw": -0.44951135461348635,
          "pitch": 0.10126502137985227,
          "title": "The Hiding Sopt",
          "text": "May be there is a hiding spot in those buildings."
        }
      ]
    },
    {
      "id": "5-through-the-warzone",
      "name": "Through the Warzone",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": -2.9115157049545104,
        "pitch": 0.05783692165803345,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.6314029559310192,
          "pitch": 0.21466826320465593,
          "rotation": 0,
          "target": "8-the-rubbles"
        },
        {
          "yaw": -2.8500647820174247,
          "pitch": 0.05470677242544042,
          "rotation": 0,
          "target": "6-the-batallion"
        },
        {
          "yaw": -0.02572327614773151,
          "pitch": 0.2739424621736113,
          "rotation": 0,
          "target": "4-back-again"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.491325667280055,
          "pitch": 0.20798609007138502,
          "title": "Entrance to the Building Complex",
          "text": "An open door to enter the building complex. The perfect hiding spot."
        },
        {
          "yaw": -2.6892732950532974,
          "pitch": 0.04484019076086021,
          "title": "Path in the open",
          "text": "Navigate down the open path."
        },
        {
          "yaw": 0.18671301333464996,
          "pitch": 0.28168411468836396,
          "title": "Back to the Starting Postion",
          "text": "Go back to the place where you arrived."
        }
      ]
    },
    {
      "id": "6-the-batallion",
      "name": "The Batallion",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04709580856305706,
          "pitch": -0.017652555255089908,
          "rotation": 0,
          "target": "7-surrender"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.22584253472559013,
          "pitch": -0.025832005303957573,
          "title": "Attack!",
          "text": "A large group of humanoid battalion suddenly surrounds you. Seems like they've been watching you walking down in the open.<br><br>Now you are surrounded from all the sides. Even the smoke bomb is not an option. Only option is to fight your way through...."
        }
      ]
    },
    {
      "id": "7-surrender",
      "name": "Surrender",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.14911387866893477,
          "pitch": -0.002912977596288613,
          "rotation": 0,
          "target": "0-the-uncharted-lands"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "title": "Mission Failed",
          "text": "The battalion was too large to handle by yourself. You tried your best, but you got captured.<br><br>Start over again...."
        }
      ]
    },
    {
      "id": "8-the-rubbles",
      "name": "The Rubbles",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05173410975270265,
          "pitch": 0.11951226688372252,
          "rotation": 0,
          "target": "9-the-lost-cause"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8243305244751404,
          "pitch": 0.1858533558327249,
          "title": "Troops are Marching!",
          "text": "You can hear the footsteps of marching troops down the road below. Best option is to go through this corridor quietly. There is no turning back now."
        }
      ]
    },
    {
      "id": "9-the-lost-cause",
      "name": "The Lost Cause",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.628476603684426,
          "pitch": -1.3542675774534132,
          "rotation": 18.84955592153877,
          "target": "10-the-drone-view--2"
        },
        {
          "yaw": 2.8186646366502526,
          "pitch": 0.21539342363199054,
          "rotation": 0,
          "target": "8-the-rubbles"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.231431117420005,
          "pitch": -0.002867168528574382,
          "title": "Where to go?",
          "text": "The drone is recharged and ready to go again. May be using it will be helpful."
        },
        {
          "yaw": 3.001847009039076,
          "pitch": 0.1969540279377444,
          "title": "To the Building",
          "text": "Back to the building you came through"
        },
        {
          "yaw": 0.4098805112509911,
          "pitch": -1.4260641648990315,
          "title": "Use the Drone",
          "text": "Use the drone to get an areal view to find your way out&nbsp;"
        }
      ]
    },
    {
      "id": "10-the-drone-view--2",
      "name": "The Drone View -2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.500041156936078,
        "pitch": 0.17939508829030615,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": 0.6772331775783051,
          "pitch": 0.1579086854666656,
          "rotation": 3.141592653589793,
          "target": "11-the-way-out"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.904685794058416,
          "pitch": 0.31515078352706816,
          "title": "The Open Road",
          "text": "Soldiers are still marching down that road. But you avoided them by coming through the building."
        },
        {
          "yaw": -1.75122646488599,
          "pitch": 0.07210757275464452,
          "title": "The Destroyed Building",
          "text": "This is the building you came through"
        },
        {
          "yaw": 0.8686342535336795,
          "pitch": 0.16979688537790416,
          "title": "The Main Road",
          "text": "This road heading away from the warzone. May be you should go towards this street. Time to bring back the drone."
        }
      ]
    },
    {
      "id": "11-the-way-out",
      "name": "The Way Out",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.28375213176570036,
          "pitch": 0.1899759209354599,
          "rotation": 0,
          "target": "12-back-on-the-track"
        },
        {
          "yaw": 2.7954357336482705,
          "pitch": 0.18504509009023806,
          "rotation": 0,
          "target": "8-the-rubbles"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.10273541003866526,
          "pitch": 0.19385327324290458,
          "title": "To the Main Road",
          "text": "This way leads towards the main road as seen from the drone."
        },
        {
          "yaw": 2.9530520841634793,
          "pitch": 0.1842924079480568,
          "title": "To the Building",
          "text": "Back to the building you came through"
        }
      ]
    },
    {
      "id": "12-back-on-the-track",
      "name": "Back on the Track",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3328,
      "initialViewParameters": {
        "yaw": -3.081051584034171,
        "pitch": -0.2599109424280748,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": 2.053871582932967,
          "pitch": 0.19908614645475353,
          "rotation": 0,
          "target": "13-my-ride"
        },
        {
          "yaw": 0.013805171794180282,
          "pitch": 0.025919512062108296,
          "rotation": 4.71238898038469,
          "target": "11-the-way-out"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.14810654908777643,
          "pitch": 0.03161465135190511,
          "title": "Out of Your Mind?",
          "text": "Go back to the War Zone!"
        },
        {
          "yaw": 2.174551574185897,
          "pitch": 0.21183042999233948,
          "title": "The Ride",
          "text": "Seems like you can take this vehicle and go towards the headquaters."
        },
        {
          "yaw": -3.1344734186159453,
          "pitch": 0.042676840360154955,
          "title": "Out of the Hell",
          "text": "You finally came out of the War Zone. This road should be leading towards the city where the headquaters is located. May be I should search for a vehicle to quickly get out of here."
        }
      ]
    },
    {
      "id": "13-my-ride",
      "name": "My Ride",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -1.0926108175345597,
        "pitch": 0.17662474637122827,
        "fov": 1.202998265166714
      },
      "linkHotspots": [
        {
          "yaw": -0.06322263242428683,
          "pitch": -0.6558858254412065,
          "rotation": 0,
          "target": "14-the-headquarters"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.152489544310221,
          "pitch": -0.6449468575956594,
          "title": "The City",
          "text": "You can see the city in the near distance. Now it is just a matter of time you arrive in the headquaters."
        }
      ]
    },
    {
      "id": "14-the-headquarters",
      "name": "The Headquarters",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.14247585730565504,
        "pitch": -0.32038613171219055,
        "fov": 1.202998265166714
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.053413494542594364,
          "pitch": -0.5404674287802198,
          "title": "Mission Complete!",
          "text": "Great Job! You successfully arrived at the&nbsp;headquarters of the human intelligence research center.&nbsp;<div><br></div><div>But the challenge is far from over. You see humanoids are trying to infultrate the headquaters as you arrive...<br><br>But that is a story for another time...</div>"
        }
      ]
    }
  ],
  "name": "Mission to Headquaters",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
