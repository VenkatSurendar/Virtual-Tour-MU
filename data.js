var APP_DATA = {
  scenes: [
    {
      id: "0-1st-round-about",
      name: "1st round-about",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        yaw: -0.036424262650310624,
        pitch: -0.10440967649457633,
        fov: 1.2568540081498036,
      },
      linkHotspots: [
        {
          yaw: 1.1269794729380536,
          pitch: -0.005236288079807139,
          rotation: 0,
          target: "1-mu-building",
        },
      ],
      infoHotspots: [
        {
          yaw: -3.13245004525802,
          pitch: -0.11373468340584125,
          title: "Main Gate",
          // "text": "Text"
        },
      ],
    },
    {
      id: "1-mu-building",
      name: "MU Building",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.6759686152668181,
          pitch: -0.014685622681467336,
          rotation: 0,
          target: "0-1st-round-about",
        },
        {
          yaw: 1.4093766880996377,
          pitch: -0.05684505193858058,
          rotation: 0,
          target: "2-lobby",
        },
        {
          yaw: 3.1190941829590484,
          pitch: 0.09537495708370791,
          rotation: 0,
          target: "4-basketball-court",
        },
      ],
      infoHotspots: [
        {
          yaw: -2.1662741146502125,
          pitch: 0.014783783356499214,
          title: "Volleyball Court",
          // "text": "Text"
        },
      ],
    },
    {
      id: "2-lobby",
      name: "Lobby",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.7450333068138555,
          pitch: 0.19408053974181705,
          rotation: 0,
          target: "3-llt",
        },
        {
          yaw: -1.6696240752557472,
          pitch: 0.04131686099630194,
          rotation: 0,
          target: "1-mu-building",
        },
      ],
      infoHotspots: [
        {
          yaw: -0.2538104627961424,
          pitch: 0.0862675490934457,
          title: "Notice Board",
          // "text": "Text"
        },
        {
          yaw: 1.5038330154672552,
          pitch: 0.22324445613301336,
          title: "Security Desk",
          // "text": "Text"
        },
      ],
    },
    {
      id: "3-llt",
      name: "LLt",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.536687022164405,
          pitch: 0.26700390955198117,
          rotation: 0,
          target: "2-lobby",
        },
      ],
      infoHotspots: [
        {
          yaw: -2.5806494356541236,
          pitch: 0.5548903256314794,
          title: "Large Lecture Theater",
          // "text": "Text"
        },
      ],
    },
    {
      id: "4-basketball-court",
      name: "Basketball court",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
      ],
      faceSize: 320,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.9026156450179741,
          pitch: -0.05285218367093947,
          rotation: 5.497787143782138,
          target: "5-dorms",
        },
        {
          yaw: 2.2425339028363958,
          pitch: 0.11303068851699649,
          rotation: 11.780972450961727,
          target: "1-mu-building",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.4421186748484853,
          pitch: -0.05042719721889277,
          title: "Basketball Court",
          // "text": "Text"
        },
      ],
    },
    {
      id: "5-dorms",
      name: "Dorms",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
      ],
      faceSize: 320,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.5077024214176777,
          pitch: -0.043861600820655156,
          rotation: 0,
          target: "4-basketball-court",
        },
        {
          yaw: 1.8700943414813338,
          pitch: -0.03705093985909791,
          rotation: 0.7853981633974483,
          target: "6-hostels",
        },
      ],
      infoHotspots: [
        {
          yaw: 1.137434130328817,
          pitch: -0.1266768591847569,
          title: "Satpura Hostel Block",
          // "text": "Text"
        },
      ],
    },
    {
      id: "6-hostels",
      name: "Hostels",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2048,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.2592910176933074,
          pitch: 0.0688087662021708,
          rotation: 0,
          target: "5-dorms",
        },
      ],
      infoHotspots: [
        {
          yaw: 1.3096245733747374,
          pitch: 0.010346021706372,
          title: "Canteen",
          text: "All Snack type and fast foods are available.",
        },
        {
          yaw: 1.3067958405128248,
          pitch: -0.22416500767228698,
          title: "Mess",
          text: "Here Breakfast, Lunch, Snacks and Dinner is servered.&nbsp;",
        },
        {
          yaw: -2.1231875852913156,
          pitch: -0.2938857366200409,
          title: "Gym Room",
          text: "Well equipped gym for students.",
        },
        {
          yaw: -1.6187947136705745,
          pitch: -0.06281985483893848,
          title: "Clinic",
          text: "General medical care with ambulance service.",
        },
      ],
    },
  ],
  name: "Project Title",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: true,
    viewControlButtons: true,
  },
};
