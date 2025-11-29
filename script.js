(function(){
    var script = {
 "children": [
  "this.MainViewer"
 ],
 "defaultVRPointer": "laser",
 "id": "rootPlayer",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "start": "this.init()",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "definitions": [{
 "vfov": 180,
 "label": "PAN-SB-2",
 "id": "panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_t.jpg",
 "overlays": [
  "this.overlay_E272C448_CEF2_532C_41C2_A03384153C8D",
  "this.overlay_E2C869FC_CEF1_F4E4_41D5_8D6517059472"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.94,
   "panorama": "this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410",
   "yaw": -167.38,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 48.41,
   "panorama": "this.panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612",
   "yaw": -71.17,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8669A9C5_CEB2_B525_41E1_634BA7C6BABA",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -131.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8410DAA7_CEB2_B764_41E9_76D75047E1D7",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_87F9B9FF_CEB2_B4E4_418E_6AF7D84F1EEC",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-MBW-3",
 "id": "panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_t.jpg",
 "overlays": [
  "this.overlay_EE15EFF7_CE56_4CE4_41DD_B8BD3FE4773A"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.83,
   "panorama": "this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99",
   "yaw": -135.23,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "vfov": 180,
 "label": "PAN-DB-1",
 "id": "panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_t.jpg",
 "overlays": [
  "this.overlay_FDFE6DD7_CED2_4D25_41C0_AF4F94163E22",
  "this.overlay_FDC0A95A_CED6_552F_41DB_8F96127E479A"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517"
  },
  {
   "backwardYaw": -100.31,
   "panorama": "this.panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214",
   "yaw": -9.62,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "vfov": 180,
 "label": "Pan-MB-W3",
 "id": "panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_t.jpg",
 "overlays": [
  "this.overlay_EA1AAA4C_CE5E_B724_4183_3669EB2FA15F"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -51.07,
   "panorama": "this.panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06",
   "yaw": 6.71,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 79.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_87B3FA15_CEB2_B725_41D5_156D40B95206",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -139.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85CBCAC3_CEB2_B71C_41D6_66BEEA54B3C7",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 95.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_844E7A86_CEB2_B724_41C5_E602D4D08864",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -107.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_87769A2A_CEB2_B76F_41C3_21996E8DC92B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 120.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_857BCB15_CEB2_B524_41E8_102E4BB4E509",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_869DB9A2_CEB2_B51C_41B8_50FEB7CF8665",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -133.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8654D9BA_CEB2_B56F_41D9_7DE2E82D2BB9",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "Pan-SW-1",
 "id": "panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_t.jpg",
 "overlays": [
  "this.overlay_E3CF33C5_CEF6_D525_41D3_49151C5BB4D8",
  "this.overlay_E3462F3B_CEF6_4D6C_41C0_25F289F0CBB2"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -20.92,
   "panorama": "this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410",
   "yaw": 170.01,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 111.22,
   "panorama": "this.panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E",
   "yaw": -100.56,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84726A9B_CEB2_B72D_41C2_D0A95BAD5E02",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 109.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85564B00_CEB2_B51C_41E8_0179A9002952",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_camera",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-Liv-2",
 "id": "panorama_C2753BB7_CE52_D564_41CA_8C4627237884",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_t.jpg",
 "overlays": [
  "this.overlay_DA5804F1_CE71_DCFC_41E7_7C804BDCBCF6",
  "this.overlay_DA3B82FB_CE71_B4EC_41C8_61103785300B",
  "this.overlay_DABAEB3F_CE76_7564_41E4_922FCC315D19"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -148.29,
   "panorama": "this.panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F",
   "yaw": 91.88,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -157.59,
   "panorama": "this.panorama_C27B8C05_CE52_F324_41DF_3341CA41455D",
   "yaw": -29.97,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -4.09,
   "panorama": "this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD",
   "yaw": -177.68,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "vfov": 180,
 "label": "Pan-MB-W4",
 "id": "panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_t.jpg",
 "overlays": [
  "this.overlay_D769926E_CE71_B7E4_41E4_F0EFE98BD78F",
  "this.overlay_EAF33861_CE5E_531C_41DF_E9F891A314D1",
  "this.overlay_EB955F61_CE53_CD1D_41E0_6A09D95F6F99"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 90.62,
   "panorama": "this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659",
   "yaw": -34.24,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -104.83,
   "panorama": "this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99",
   "yaw": -70.92,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -59.36,
   "panorama": "this.panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653",
   "yaw": 72.28,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 175.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_87C0A9EA_CEB2_B4EF_41E7_0EB688D7C69F",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-MB-2",
 "id": "panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_t.jpg",
 "overlays": [
  "this.overlay_D92BF904_CE7F_D524_41D8_21649F6BEBFF",
  "this.overlay_D9DA8C2C_CE7E_536B_41E8_63AF5FF1F288"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -16.4,
   "panorama": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483",
   "yaw": 40.88,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -71.42,
   "panorama": "this.panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F",
   "yaw": 141.37,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "vfov": 180,
 "label": "PAN-ENT-2",
 "id": "panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_t.jpg",
 "overlays": [
  "this.overlay_C0B8B66B_CE56_7FED_41E7_75EAD7E88FE5",
  "this.overlay_C0BE05AA_CE56_7D6C_41D3_5EF003329E89"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.44,
   "panorama": "this.panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282",
   "yaw": -179.44,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -176.18,
   "panorama": "this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD",
   "yaw": 4.7,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_873D4A48_CEB2_B72C_41E0_C73B87E2E21D",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-Kitchen-2",
 "id": "panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_t.jpg",
 "overlays": [
  "this.overlay_DFC07DF1_CE51_CCFC_41E0_0F0B0E794DCF"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.58,
   "panorama": "this.panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E",
   "yaw": -178.19,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -118.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84266AAD_CEB2_B764_41DB_3A6125010147",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-Liv-5",
 "id": "panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_t.jpg",
 "overlays": [
  "this.overlay_D22C1CBE_CE73_F364_41DF_619530D45637",
  "this.overlay_D067169B_CE71_DF2C_41CA_29DE6C637BA4",
  "this.overlay_D326CB56_CE4E_D527_41CF_3B669A818307",
  "this.overlay_D3FCFDF9_CE4E_4CEC_41D0_1A4BCD2355E6"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -44.54,
   "panorama": "this.panorama_C27B8C05_CE52_F324_41DF_3341CA41455D",
   "yaw": -173.41,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -118.4,
   "panorama": "this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410",
   "yaw": -11.12,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D"
  },
  {
   "backwardYaw": 46.15,
   "panorama": "this.panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2",
   "yaw": 101.67,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -88.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_87E5E9F4_CEB2_B4E4_41D3_4B223A3451CA",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-DB-3",
 "id": "panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_t.jpg",
 "overlays": [
  "this.overlay_FB1B184A_CED1_B32C_41DC_58B88C810C54",
  "this.overlay_F8FF28A2_CED1_D31F_41D5_78D85687C0F7"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 78.56,
   "panorama": "this.panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8",
   "yaw": -9.62,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 25.55,
   "panorama": "this.panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214",
   "yaw": -99.55,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -44.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_86A119A8_CEB2_B56C_41D7_160B50DC301D",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8435BAB4_CEB2_B764_41C6_216615A7094D",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -86.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85DA9ACA_CEB2_B72C_41E2_05AC396470E2",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "Pan-MB-W1",
 "id": "panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_t.jpg",
 "overlays": [
  "this.overlay_D6FC97B4_CE72_7D64_41BC_2DE6C6DA6368",
  "this.overlay_ECA27FD9_CE52_4D2C_41D5_0822BC23A85A"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 146.89,
   "panorama": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483",
   "yaw": 131.07,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -177.94,
   "panorama": "this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659",
   "yaw": -6.6,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 135.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_87AD9A0F_CEB2_B724_41DD_3B024D44638E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -148.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84A4FA74_CEB2_B7E4_41E0_697AC1FFC964",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-DW-1",
 "id": "panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_t.jpg",
 "overlays": [
  "this.overlay_FC6E490C_CED2_752B_41CA_273E14212024",
  "this.overlay_FDC6C82D_CED1_B364_41D8_F27EBB7BDD54"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 31.83,
   "panorama": "this.panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8",
   "yaw": 135.84,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 128.3,
   "panorama": "this.panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20",
   "yaw": -98.05,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 108.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_87D659EF_CEB2_B4E5_41E4_FF1AD2E1F968",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_870BEA34_CEB2_B764_41DB_AE26D4501D8F",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-Liv-4",
 "id": "panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_t.jpg",
 "overlays": [
  "this.overlay_D216570F_CE72_BD24_4184_D421F52C345F"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 101.67,
   "panorama": "this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744",
   "yaw": 46.15,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -9.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8742EA1A_CEB2_B72C_41E3_BA074625A6EC",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -78.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84CCFA4E_CEB2_B724_41CB_D80EA0471056",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 81.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_878F6A04_CEB2_B724_41E8_71F49B14A5AF",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -89.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85652B08_CEB2_B52C_41D4_6012E2AB1126",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -33.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_87041A2F_CEB2_B764_41B8_6D0F2DD7FBF6",
 "class": "PanoramaCamera"
},
{
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 27.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85B06AF2_CEB2_B4FF_41D8_1866971BE3E2",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 6.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85198B22_CEB2_B51F_41E1_F73D3D62689A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_camera",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-MBW-1",
 "id": "panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_t.jpg",
 "overlays": [
  "this.overlay_D00543F1_CE52_54FD_41D3_C6726AEA043B",
  "this.overlay_D0903E71_CE53_CFFC_41E6_FDB0C04E0D64",
  "this.overlay_D1AC5445_CE56_5324_41DA_85824356E29B",
  "this.overlay_D1B7A8B8_CE56_B36C_41E5_5A85CC3D405E"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -152.81,
   "panorama": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483",
   "yaw": 97.4,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -152.81,
   "panorama": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483",
   "yaw": -45.79,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -135.23,
   "panorama": "this.panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C",
   "yaw": -2.83,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -70.92,
   "panorama": "this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA",
   "yaw": -104.83,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -51.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84AA4A7B_CEB2_B7ED_41DF_2DF3B63DC7D6",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-MB-1",
 "id": "panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_t.jpg",
 "overlays": [
  "this.overlay_D8AE2E35_CE7E_4F64_41E9_90FC8BDFA8C0",
  "this.overlay_D9E244A3_CE7E_731C_41DF_F376ACF48924"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 91.88,
   "panorama": "this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884",
   "yaw": -148.29,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 141.37,
   "panorama": "this.panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7",
   "yaw": -71.42,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 22.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_863149E4_CEB2_B4E4_41E8_EE5F5698C9B1",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-Kitchen-1",
 "id": "panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_t.jpg",
 "overlays": [
  "this.overlay_DEB6CF4D_CE52_4D24_41DD_56B107E6F740",
  "this.overlay_DF137E97_CE52_CF25_41E8_5C96C4126C0F"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -178.19,
   "panorama": "this.panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5",
   "yaw": -1.58,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -44.54,
   "panorama": "this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD",
   "yaw": -135.73,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -154.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8593AAE5_CEB2_B4E4_41CF_46919ACD1D79",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "Pan-MB-W1.2",
 "id": "panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_t.jpg",
 "overlays": [
  "this.overlay_ECC5C27B_CE52_57EC_41CB_83A16C0B837F",
  "this.overlay_EA13A82A_CE53_D36F_41E1_AC93042DB559",
  "this.overlay_EBE0239F_CE52_7524_41A8_F12FBB486A76"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.95,
   "panorama": "this.panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06",
   "yaw": -84.73,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -34.24,
   "panorama": "this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA",
   "yaw": 90.62,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -6.6,
   "panorama": "this.panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9",
   "yaw": -177.94,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_camera",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-SB-3",
 "id": "panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_t.jpg",
 "overlays": [
  "this.overlay_E40513A4_CEF2_D51B_41DB_4E66540EEEA2"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -71.17,
   "panorama": "this.panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6",
   "yaw": 48.41,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -68.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84951A6E_CEB2_B7E4_41B3_EB1E6F9B15EA",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 135.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_86B769AD_CEB2_B564_41E8_9F28790CC2D5",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 12.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_87673A24_CEB2_B764_41DD_557F02291E58",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84011AA1_CEB2_B71D_41BA_AE21E2B26312",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 145.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_872FAA41_CEB2_B71D_4183_EA39E827DB0B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 163.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_867F29CC_CEB2_B524_41C4_852027204682",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-MB-4",
 "id": "panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_t.jpg",
 "overlays": [
  "this.overlay_D9ADD729_CE72_7D6D_41C5_A3D611991508",
  "this.overlay_D6293F02_CE72_4D1C_41D8_DACEABA0EED8",
  "this.overlay_D6E7ED8C_CE72_4D24_41E6_6E125FFE76E4",
  "this.overlay_D02A6214_CE52_B724_41C1_0C41A1C8D549"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 40.88,
   "panorama": "this.panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7",
   "yaw": -16.4,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 93.89,
   "panorama": "this.panorama_DBA4520F_CE72_D724_41CA_442EC6273E92",
   "yaw": 61.48,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 97.4,
   "panorama": "this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99",
   "yaw": -152.81,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 131.07,
   "panorama": "this.panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9",
   "yaw": 146.89,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 79.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85C4BABC_CEB2_B76B_41D0_96ABEA0ABE73",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C2753BB7_CE52_D564_41CA_8C4627237884_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 27.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85A13AEB_CEB2_B4EC_41E6_939248596925",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_865A29BF_CEB2_B564_41E7_B7D36796DA94",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_camera",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "Pan-MB-W5",
 "id": "panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_t.jpg",
 "overlays": [
  "this.overlay_E8F002DC_CE52_572B_41E2_6AA189DCBF5F"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 72.28,
   "panorama": "this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA",
   "yaw": -59.36,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "vfov": 180,
 "label": "Pan-SW-2",
 "id": "panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_t.jpg",
 "overlays": [
  "this.overlay_E3094F50_CEF1_CD3C_41C8_B7AF39CD96CB"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -100.56,
   "panorama": "this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517",
   "yaw": 111.22,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "vfov": 180,
 "label": "PAN-SB-1",
 "id": "panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_t.jpg",
 "overlays": [
  "this.overlay_E4779EC4_CEF2_4F24_41E1_945D5C0F6488",
  "this.overlay_E50966AD_CEF3_DF65_41E6_B3E1E6900E27",
  "this.overlay_E594F98F_CEF2_B524_41D8_4C4B1E3EAF20"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 170.01,
   "panorama": "this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517",
   "yaw": -20.92,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -11.12,
   "panorama": "this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744",
   "yaw": -118.4,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -167.38,
   "panorama": "this.panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6",
   "yaw": 2.94,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84867A66_CEB2_B7E4_41E3_5E6BDDEE0707",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 44.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84F0EA60_CEB2_B71C_41E3_8392B343017B",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-ENT-1",
 "id": "panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_t.jpg",
 "overlays": [
  "this.overlay_C00BD195_CE52_5524_41D3_6B7795D422E9"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.44,
   "panorama": "this.panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD",
   "yaw": 2.44,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_87197A3A_CEB2_B76C_41CE_974D949CB1D9",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "Pan-MB-W2",
 "id": "panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_t.jpg",
 "overlays": [
  "this.overlay_ED76CA9C_CE5E_D72B_41DE_E3A11F2D23DA",
  "this.overlay_EB1EAD16_CE5F_CD27_41AE_12A2E904DF2B"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -84.73,
   "panorama": "this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659",
   "yaw": -179.95,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 6.71,
   "panorama": "this.panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73",
   "yaw": -51.07,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "vfov": 180,
 "label": "PAN-DW-2",
 "id": "panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_t.jpg",
 "overlays": [
  "this.overlay_FC510E6C_CED6_CFEB_41C4_7F905A861E8E"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -98.05,
   "panorama": "this.panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982",
   "yaw": 128.3,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 108.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_860E89D2_CEB2_B53C_41C7_99ACC29507AD",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_camera",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-DB-2",
 "id": "panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_t.jpg",
 "overlays": [
  "this.overlay_FD17FD88_CED6_4D2C_41E5_42C734BD868E",
  "this.overlay_F2EAF6AD_CEB2_5F64_41DB_35F7C8063ACD"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -99.55,
   "panorama": "this.panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7",
   "yaw": 25.55,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -9.62,
   "panorama": "this.panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D",
   "yaw": -100.31,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "items": [
  {
   "media": "this.panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282",
   "camera": "this.panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD",
   "camera": "this.panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E",
   "camera": "this.panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5",
   "camera": "this.panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD",
   "camera": "this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884",
   "camera": "this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C27B8C05_CE52_F324_41DF_3341CA41455D",
   "camera": "this.panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2",
   "camera": "this.panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744",
   "camera": "this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F",
   "camera": "this.panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7",
   "camera": "this.panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBA4520F_CE72_D724_41CA_442EC6273E92",
   "camera": "this.panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483",
   "camera": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659",
   "camera": "this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9",
   "camera": "this.panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06",
   "camera": "this.panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73",
   "camera": "this.panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA",
   "camera": "this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653",
   "camera": "this.panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99",
   "camera": "this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728",
   "camera": "this.panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C",
   "camera": "this.panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410",
   "camera": "this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6",
   "camera": "this.panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612",
   "camera": "this.panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517",
   "camera": "this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E",
   "camera": "this.panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D",
   "camera": "this.panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214",
   "camera": "this.panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7",
   "camera": "this.panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8",
   "camera": "this.panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982",
   "camera": "this.panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "vfov": 180,
 "label": "PAN-MB-3",
 "id": "panorama_DBA4520F_CE72_D724_41CA_442EC6273E92",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_t.jpg",
 "overlays": [
  "this.overlay_D3417818_CE4E_B32C_41E2_36DC244C6576"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 61.48,
   "panorama": "this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483",
   "yaw": 93.89,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 31.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8623A9DE_CEB2_B524_41E1_D559C542B516",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -101.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_858C2ADF_CEB2_B725_41E8_13D3AAA08B12",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-Liv-3",
 "id": "panorama_C27B8C05_CE52_F324_41DF_3341CA41455D",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_t.jpg",
 "overlays": [
  "this.overlay_DDEB3FD7_CE72_4D24_41E3_0C93E894B113",
  "this.overlay_DA99EAFE_CE73_D4E7_41E9_1C17C37A12D8",
  "this.overlay_DD8DAF08_CE72_4D2D_41E5_71ABA33A66E9"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -29.97,
   "panorama": "this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884",
   "yaw": -157.59,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -173.41,
   "panorama": "this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744",
   "yaw": -44.54,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -38.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_87EA29FA_CEB2_B4EC_41BB_980B58AD5C01",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-Liv-1",
 "id": "panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_t.jpg",
 "overlays": [
  "this.overlay_DE10BC1D_CE52_5324_41E3_865DA224C1CB",
  "this.overlay_DEC5FD65_CE52_4DE4_41E2_68AF6BB7B6E5",
  "this.overlay_DFC40ABB_CE53_D76D_41DD_EA13EFCA6382"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.68,
   "panorama": "this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884",
   "yaw": -4.09,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 4.7,
   "panorama": "this.panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD",
   "yaw": -176.18,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -135.73,
   "panorama": "this.panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E",
   "yaw": -44.54,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 128.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84B94A80_CEB2_B71C_41C3_CD820F1DAB8B",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-DB-4",
 "id": "panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_t.jpg",
 "overlays": [
  "this.overlay_FC700DF7_CED2_CCE4_41E0_A89375AF0CA6",
  "this.overlay_FBF8523F_CED3_F764_41E1_34202CB314C5"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -9.62,
   "panorama": "this.panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7",
   "yaw": 78.56,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 135.84,
   "panorama": "this.panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982",
   "yaw": 31.83,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 61.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_864539B3_CEB2_B563_41B2_3298269A4E91",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -173.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_845DEA8D_CEB2_B724_41DC_3DE8BA87C280",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_861CE9D7_CEB2_B524_41AF_18F51769AD0C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 150.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_850AAB1B_CEB2_B52C_41D1_DB32C3068F8B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -48.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85FD7AD8_CEB2_B72C_41E5_16BD27299367",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -175.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84E14A5B_CEB2_B72D_41D1_283FC637E2EF",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 75.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8574CB0F_CEB2_B525_41E5_E569D9138DC2",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -82.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85E8DAD2_CEB2_B73C_41D7_7FDA4C3EF296",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 168.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_87506A1F_CEB2_B724_41E0_AA9E9C99358E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 44.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85477AF8_CEB2_B4EB_419D_54FBA9F59B7F",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84D3CA54_CEB2_B724_41E1_8003537B6ADD",
 "class": "PanoramaCamera"
},
{
 "vfov": 180,
 "label": "PAN-MBW-2",
 "id": "panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728",
 "hfovMax": 130,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_t.jpg",
 "overlays": [
  "this.overlay_D1315144_CE52_5524_41A3_358654C370EF",
  "this.overlay_EE773CF1_CE56_4CFC_41D2_0CD93AFE085F"
 ],
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_879EEA0A_CEB2_B72F_41E8_3C2414D64D45",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 80.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84637A94_CEB2_B724_41C3_2084CE557903",
 "class": "PanoramaCamera"
},
{
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeight": 10,
 "id": "MainViewer",
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "width": "100%",
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "height": "100%",
 "minHeight": 50,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "paddingLeft": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "minWidth": 100,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "shadow": false,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "transitionMode": "blending",
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "paddingTop": 0
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -71.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.72,
   "hfov": 7.7
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2B8C145_CEB2_5524_41D1_4E694E3F18D6",
   "yaw": -71.17,
   "pitch": -32.72,
   "hfov": 7.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E272C448_CEF2_532C_41C2_A03384153C8D",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612, this.camera_8410DAA7_CEB2_B764_41E9_76D75047E1D7); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -167.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.21,
   "hfov": 7.83
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB98FBEF_CEF3_F4E4_41E6_B093265249F0",
   "yaw": -167.38,
   "pitch": -31.21,
   "hfov": 7.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E2C869FC_CEF1_F4E4_41D5_8D6517059472",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410, this.camera_84011AA1_CEB2_B71D_41BA_AE21E2B26312); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -135.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.89,
   "hfov": 5.39
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E056054A_CE56_5D2F_41BB_F904EC4FD98E",
   "yaw": -135.23,
   "pitch": -16.89,
   "hfov": 5.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE15EFF7_CE56_4CE4_41DD_B8BD3FE4773A",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99, this.camera_861CE9D7_CEB2_B524_41AF_18F51769AD0C); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -150.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.66,
   "hfov": 5.27
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2BAB146_CEB2_5527_41D5_F6B832E18628",
   "yaw": -150.8,
   "pitch": -20.66,
   "hfov": 5.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FDFE6DD7_CED2_4D25_41C0_AF4F94163E22",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -9.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.94,
   "hfov": 8.23
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2BD5146_CEB2_5527_41DD_A5715D3E0F58",
   "yaw": -9.62,
   "pitch": -25.94,
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FDC0A95A_CED6_552F_41DB_8F96127E479A",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214, this.camera_85C4BABC_CEB2_B76B_41D0_96ABEA0ABE73); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 6.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.25,
   "hfov": 7.09
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E0524543_CE56_5D1C_41E6_2CD3B181E78E",
   "yaw": 6.71,
   "pitch": -39.25,
   "hfov": 7.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA1AAA4C_CE5E_B724_4183_3669EB2FA15F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06, this.camera_84B94A80_CEB2_B71C_41C3_CD820F1DAB8B); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -100.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.89,
   "hfov": 5.39
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB9BEBEF_CEF3_F4E4_41C9_F542A8E48A00",
   "yaw": -100.56,
   "pitch": -16.89,
   "hfov": 5.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E3CF33C5_CEF6_D525_41D3_49151C5BB4D8",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E, this.camera_84951A6E_CEB2_B7E4_41B3_EB1E6F9B15EA); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 170.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.01,
   "hfov": 4.25
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB9A3BEF_CEF3_F4E4_41E9_AFC0A60BE9DC",
   "yaw": 170.01,
   "pitch": -41.01,
   "hfov": 4.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E3462F3B_CEF6_4D6C_41C0_25F289F0CBB2",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410, this.camera_84867A66_CEB2_B7E4_41E3_5E6BDDEE0707); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -29.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.95,
   "hfov": 8.01
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05A653B_CE56_5D6C_41E0_4F8AD3BB040A",
   "yaw": -29.97,
   "pitch": -28.95,
   "hfov": 8.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA5804F1_CE71_DCFC_41E7_7C804BDCBCF6",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27B8C05_CE52_F324_41DF_3341CA41455D, this.camera_863149E4_CEB2_B4E4_41E8_EE5F5698C9B1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -177.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.48,
   "hfov": 7.45
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05BF53B_CE56_5D6C_41C5_D5B9F5A4CE11",
   "yaw": -177.68,
   "pitch": -35.48,
   "hfov": 7.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA3B82FB_CE71_B4EC_41C8_61103785300B",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD, this.camera_87C0A9EA_CEB2_B4EF_41E7_0EB688D7C69F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 91.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.85,
   "hfov": 5.58
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05BB53B_CE56_5D67_41DE_B607E745598D",
   "yaw": 91.88,
   "pitch": -7.85,
   "hfov": 5.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DABAEB3F_CE76_7564_41E4_922FCC315D19",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F, this.camera_8623A9DE_CEB2_B524_41E1_D559C542B516); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -70.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.15,
   "hfov": 5.39
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E053D543_CE56_5D27_41E2_6F5BFD7BE5D8",
   "yaw": -70.92,
   "pitch": -17.15,
   "hfov": 5.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D769926E_CE71_B7E4_41E4_F0EFE98BD78F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99, this.camera_8574CB0F_CEB2_B525_41E5_E569D9138DC2); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -34.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38,
   "hfov": 7.21
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E0538549_CE56_5D2D_41DD_22A8EBE8B425",
   "yaw": -34.24,
   "pitch": -38,
   "hfov": 7.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EAF33861_CE5E_531C_41DF_E9F891A314D1",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659, this.camera_85652B08_CEB2_B52C_41D4_6012E2AB1126); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 72.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -49.3,
   "hfov": 5.97
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E0531549_CE56_5D2D_41D6_D7D9CF41EE2B",
   "yaw": 72.28,
   "pitch": -49.3,
   "hfov": 5.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB955F61_CE53_CD1D_41E0_6A09D95F6F99",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653, this.camera_857BCB15_CEB2_B524_41E8_102E4BB4E509); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 40.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.7,
   "hfov": 8.1
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05FE541_CE56_5D1C_41D0_B64D7AF32E61",
   "yaw": 40.88,
   "pitch": -27.7,
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D92BF904_CE7F_D524_41D8_21649F6BEBFF",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483, this.camera_867F29CC_CEB2_B524_41C4_852027204682); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 141.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.44,
   "hfov": 8.27
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05F5541_CE56_5D1C_41E5_B842B29CD6FD",
   "yaw": 141.37,
   "pitch": -25.44,
   "hfov": 8.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D9DA8C2C_CE7E_536B_41E8_63AF5FF1F288",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F, this.camera_860E89D2_CEB2_B53C_41C7_99ACC29507AD); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -179.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.77,
   "hfov": 6.83
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E064053A_CE56_5D6C_41DB_46E2AEF36A90",
   "yaw": -179.44,
   "pitch": -41.77,
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C0B8B66B_CE56_7FED_41E7_75EAD7E88FE5",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282, this.camera_865A29BF_CEB2_B564_41E7_B7D36796DA94); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 4.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.59,
   "hfov": 5.6
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DCC82B38_CE51_B56B_41A2_E1180242ACDB",
   "yaw": 4.7,
   "pitch": -6.59,
   "hfov": 5.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C0BE05AA_CE56_7D6C_41D3_5EF003329E89",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD, this.camera_8669A9C5_CEB2_B525_41E1_634BA7C6BABA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -178.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.03,
   "hfov": 6.58
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DA05C2CC_CE56_7724_41E2_3441EBD70375",
   "yaw": -178.19,
   "pitch": -44.03,
   "hfov": 6.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DFC07DF1_CE51_CCFC_41E0_0F0B0E794DCF",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E, this.camera_87F9B9FF_CEB2_B4E4_418E_6AF7D84F1EEC); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 101.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.94,
   "hfov": 8.16
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E059E541_CE56_5D1C_41B1_184582055AAE",
   "yaw": 101.67,
   "pitch": -26.94,
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D22C1CBE_CE73_F364_41DF_619530D45637",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2, this.camera_8654D9BA_CEB2_B56F_41D9_7DE2E82D2BB9); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -173.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.74,
   "hfov": 7.43
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E0595541_CE56_5D1C_41E4_5551E5968496",
   "yaw": -173.41,
   "pitch": -35.74,
   "hfov": 7.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D067169B_CE71_DF2C_41CA_29DE6C637BA4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27B8C05_CE52_F324_41DF_3341CA41455D, this.camera_86B769AD_CEB2_B564_41E8_9F28790CC2D5); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 15.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.88,
   "hfov": 5.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E0590541_CE56_5D1C_418F_A9177A0AA789",
   "yaw": 15.25,
   "pitch": -12.88,
   "hfov": 5.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D326CB56_CE4E_D527_41CF_3B669A818307",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -11.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.62,
   "hfov": 5.52
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05EC541_CE56_5D1C_41E2_9E7F3D9FBF43",
   "yaw": -11.12,
   "pitch": -11.62,
   "hfov": 5.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D3FCFDF9_CE4E_4CEC_41D0_1A4BCD2355E6",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410, this.camera_864539B3_CEB2_B563_41B2_3298269A4E91); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -99.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.96,
   "hfov": 7.85
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2BC7146_CEB2_5524_41D3_B150D20E99E9",
   "yaw": -99.55,
   "pitch": -30.96,
   "hfov": 7.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FB1B184A_CED1_B32C_41DC_58B88C810C54",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214, this.camera_8593AAE5_CEB2_B4E4_41CF_46919ACD1D79); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -9.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.24,
   "hfov": 7.29
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2BCF146_CEB2_5524_41D2_AC9DBC38CDA0",
   "yaw": -9.62,
   "pitch": -37.24,
   "hfov": 7.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F8FF28A2_CED1_D31F_41D5_78D85687C0F7",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8, this.camera_858C2ADF_CEB2_B725_41E8_13D3AAA08B12); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 131.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.71,
   "hfov": 4.85
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E0521542_CE56_5D1C_41E9_963168F6223D",
   "yaw": 131.07,
   "pitch": -30.71,
   "hfov": 4.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6FC97B4_CE72_7D64_41BC_2DE6C6DA6368",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483, this.camera_87041A2F_CEB2_B764_41B8_6D0F2DD7FBF6); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -6.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -59.35,
   "hfov": 4.67
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E053D542_CE56_5D1C_4179_2048BDB69F1B",
   "yaw": -6.6,
   "pitch": -59.35,
   "hfov": 4.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ECA27FD9_CE52_4D2C_41D5_0822BC23A85A",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659, this.camera_870BEA34_CEB2_B764_41DB_AE26D4501D8F); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 135.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.52,
   "hfov": 4.15
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2BFA147_CEB2_5525_41BA_36B8F2D28F54",
   "yaw": 135.84,
   "pitch": -42.52,
   "hfov": 4.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC6E490C_CED2_752B_41CA_273E14212024",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8, this.camera_84A4FA74_CEB2_B7E4_41E0_697AC1FFC964); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -98.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.48,
   "hfov": 4.7
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2BE2147_CEB2_5525_41D4_D4317A0D9A2E",
   "yaw": -98.05,
   "pitch": -33.48,
   "hfov": 4.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FDC6C82D_CED1_B364_41D8_F27EBB7BDD54",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20, this.camera_84AA4A7B_CEB2_B7ED_41DF_2DF3B63DC7D6); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 46.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.43,
   "hfov": 8.33
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E0580541_CE56_5D1C_41E2_6B7A0833C6DB",
   "yaw": 46.15,
   "pitch": -24.43,
   "hfov": 8.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D216570F_CE72_BD24_4184_D421F52C345F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744, this.camera_84CCFA4E_CEB2_B724_41CB_D80EA0471056); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 97.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.24,
   "hfov": 4.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E050A54A_CE56_5D2F_41D1_81671FD7965F",
   "yaw": 97.4,
   "pitch": -36.24,
   "hfov": 4.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D00543F1_CE52_54FD_41D3_C6726AEA043B",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483, this.camera_85A13AEB_CEB2_B4EC_41E6_939248596925); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -2.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.14,
   "hfov": 5.44
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E050354A_CE56_5D2F_41D8_8B242CD98B91",
   "yaw": -2.83,
   "pitch": -15.14,
   "hfov": 5.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D0903E71_CE53_CFFC_41E6_FDB0C04E0D64",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C, this.camera_85477AF8_CEB2_B4EB_419D_54FBA9F59B7F); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -45.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.49,
   "hfov": 7.26
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E051954A_CE56_5D2F_41D1_442841A4824B",
   "yaw": -45.79,
   "pitch": -37.49,
   "hfov": 7.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D1AC5445_CE56_5324_41DA_85824356E29B",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483, this.camera_85B06AF2_CEB2_B4FF_41D8_1866971BE3E2); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -104.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.69,
   "hfov": 5.04
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E051454A_CE56_5D2F_41E4_58AC16359BD5",
   "yaw": -104.83,
   "pitch": -26.69,
   "hfov": 5.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D1B7A8B8_CE56_B36C_41E5_5A85CC3D405E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA, this.camera_85564B00_CEB2_B51C_41E8_0179A9002952); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -148.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.73,
   "hfov": 4.69
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05E5541_CE56_5D1C_41DD_19A00E3611B0",
   "yaw": -148.29,
   "pitch": -33.73,
   "hfov": 4.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D8AE2E35_CE7E_4F64_41E9_90FC8BDFA8C0",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884, this.camera_87E5E9F4_CEB2_B4E4_41D3_4B223A3451CA); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -71.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.94,
   "hfov": 8.23
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05E0541_CE56_5D1C_41D0_7B6F6577CB6C",
   "yaw": -71.42,
   "pitch": -25.94,
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D9E244A3_CE7E_731C_41DF_F376ACF48924",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7, this.camera_87EA29FA_CEB2_B4EC_41BB_980B58AD5C01); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -1.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.72,
   "hfov": 7.7
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DA0572CC_CE56_7724_41CA_6B3222821007",
   "yaw": -1.58,
   "pitch": -32.72,
   "hfov": 7.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DEB6CF4D_CE52_4D24_41DD_56B107E6F740",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5, this.camera_879EEA0A_CEB2_B72F_41E8_3C2414D64D45); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -135.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -48.05,
   "hfov": 6.12
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DA0522CC_CE56_7724_41D5_38D04AF5AC50",
   "yaw": -135.73,
   "pitch": -48.05,
   "hfov": 6.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DF137E97_CE52_CF25_41E8_5C96C4126C0F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD, this.camera_87AD9A0F_CEB2_B724_41DD_3B024D44638E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -177.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -68.39,
   "hfov": 3.37
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05D7542_CE56_5D1C_41E0_4ED3E243ECE3",
   "yaw": -177.94,
   "pitch": -68.39,
   "hfov": 3.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ECC5C27B_CE52_57EC_41CB_83A16C0B837F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9, this.camera_873D4A48_CEB2_B72C_41E0_C73B87E2E21D); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 90.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.57,
   "hfov": 5.56
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05D2542_CE56_5D1C_41C1_7519A1C25593",
   "yaw": 90.62,
   "pitch": -52.57,
   "hfov": 5.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA13A82A_CE53_D36F_41E1_AC93042DB559",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA, this.camera_872FAA41_CEB2_B71D_4183_EA39E827DB0B); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -84.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -54.33,
   "hfov": 5.34
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E052B542_CE56_5D1C_41E2_B3100ADA4FA9",
   "yaw": -84.73,
   "pitch": -54.33,
   "hfov": 5.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EBE0239F_CE52_7524_41A8_F12FBB486A76",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06, this.camera_87197A3A_CEB2_B76C_41CE_974D949CB1D9); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 48.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.23,
   "hfov": 7.48
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB9B7BEF_CEF3_F4E4_41E3_841086F7FA1B",
   "yaw": 48.41,
   "pitch": -35.23,
   "hfov": 7.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E40513A4_CEF2_D51B_41DB_4E66540EEEA2",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6, this.camera_87D659EF_CEB2_B4E5_41E4_FF1AD2E1F968); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -16.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.94,
   "hfov": 8.16
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05C8542_CE56_5D1C_41D6_CA183B5770D3",
   "yaw": -16.4,
   "pitch": -26.94,
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D9ADD729_CE72_7D6D_41C5_A3D611991508",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7, this.camera_85CBCAC3_CEB2_B71C_41D6_66BEEA54B3C7); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 61.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.2,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05C5542_CE56_5D1C_41A9_2D4BFAD82E86",
   "yaw": 61.48,
   "pitch": -29.2,
   "hfov": 7.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6293F02_CE72_4D1C_41D8_DACEABA0EED8",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA4520F_CE72_D724_41CA_442EC6273E92, this.camera_85DA9ACA_CEB2_B72C_41E2_05AC396470E2); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 146.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.14,
   "hfov": 5.41
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05C3542_CE56_5D1C_41DE_A5B7B3C7901B",
   "yaw": 146.89,
   "pitch": -16.14,
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6E7ED8C_CE72_4D24_41E6_6E125FFE76E4",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9, this.camera_85FD7AD8_CEB2_B72C_41E5_16BD27299367); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -152.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.14,
   "hfov": 5.41
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05DE542_CE56_5D1C_41AB_96A06C3FDDC2",
   "yaw": -152.81,
   "pitch": -16.14,
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D02A6214_CE52_B724_41C1_0C41A1C8D549",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99, this.camera_85E8DAD2_CEB2_B73C_41D7_7FDA4C3EF296); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -59.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46.29,
   "hfov": 6.33
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E050C549_CE56_5D2D_41E6_9040B2D40BF3",
   "yaw": -59.36,
   "pitch": -46.29,
   "hfov": 6.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E8F002DC_CE52_572B_41E2_6AA189DCBF5F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA, this.camera_87769A2A_CEB2_B76F_41C3_21996E8DC92B); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 111.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.65,
   "hfov": 5.37
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB9ABBEF_CEF3_F4E4_41A9_3978A9D4A3D7",
   "yaw": 111.22,
   "pitch": -17.65,
   "hfov": 5.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E3094F50_CEF1_CD3C_41C8_B7AF39CD96CB",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517, this.camera_87B3FA15_CEB2_B725_41D5_156D40B95206); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -118.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.48,
   "hfov": 4.65
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB997BEE_CEF3_F4E4_41A4_5BBF74A2E694",
   "yaw": -118.4,
   "pitch": -34.48,
   "hfov": 4.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E4779EC4_CEF2_4F24_41E1_945D5C0F6488",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744, this.camera_87506A1F_CEB2_B724_41E0_AA9E9C99358E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -20.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.4,
   "hfov": 5.38
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB99BBEE_CEF3_F4E4_4196_5269A9B9958B",
   "yaw": -20.92,
   "pitch": -17.4,
   "hfov": 5.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E50966AD_CEF3_DF65_41E6_B3E1E6900E27",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517, this.camera_8742EA1A_CEB2_B72C_41E3_BA074625A6EC); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 2.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.2,
   "hfov": 8.07
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB982BEF_CEF3_F4E4_41D1_7E3D4151CC2F",
   "yaw": 2.94,
   "pitch": -28.2,
   "hfov": 8.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E594F98F_CEF2_B524_41D8_4C4B1E3EAF20",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6, this.camera_87673A24_CEB2_B764_41DD_557F02291E58); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 2.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.19,
   "hfov": 8.14
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DCCFFB38_CE51_B56B_41D1_D370410CAF13",
   "yaw": 2.44,
   "pitch": -27.19,
   "hfov": 8.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C00BD195_CE52_5524_41D3_6B7795D422E9",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD, this.camera_8435BAB4_CEB2_B764_41C6_216615A7094D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -179.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.04,
   "hfov": 6.24
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05D3543_CE56_5D1C_41DF_1F286798C8AF",
   "yaw": -179.95,
   "pitch": -47.04,
   "hfov": 6.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ED76CA9C_CE5E_D72B_41DE_E3A11F2D23DA",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659, this.camera_844E7A86_CEB2_B724_41C5_E602D4D08864); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -51.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.77,
   "hfov": 6.83
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E0529543_CE56_5D1C_41E4_006CE34DFAFB",
   "yaw": -51.07,
   "pitch": -41.77,
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB1EAD16_CE5F_CD27_41AE_12A2E904DF2B",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73, this.camera_845DEA8D_CEB2_B724_41DC_3DE8BA87C280); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 128.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.72,
   "hfov": 4.79
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2BEB147_CEB2_5525_41BF_6C6A393E0DE3",
   "yaw": 128.3,
   "pitch": -31.72,
   "hfov": 4.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC510E6C_CED6_CFEB_41C4_7F905A861E8E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982, this.camera_878F6A04_CEB2_B724_41E8_71F49B14A5AF); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -100.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.2,
   "hfov": 7.99
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2BDE146_CEB2_5524_41D9_E3031AD1B61F",
   "yaw": -100.31,
   "pitch": -29.2,
   "hfov": 7.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FD17FD88_CED6_4D2C_41E5_42C734BD868E",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D, this.camera_84726A9B_CEB2_B72D_41C2_D0A95BAD5E02); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 25.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.94,
   "hfov": 8.16
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8C07EBA3_CEB6_F51D_41C2_CDEFFE5C4B11",
   "yaw": 25.55,
   "pitch": -26.94,
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F2EAF6AD_CEB2_5F64_41DB_35F7C8063ACD",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7, this.camera_84637A94_CEB2_B724_41C3_2084CE557903); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 93.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.7,
   "hfov": 8.1
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05F3542_CE56_5D1C_41D5_E122AE87F7DF",
   "yaw": 93.89,
   "pitch": -27.7,
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D3417818_CE4E_B32C_41E2_36DC244C6576",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483, this.camera_84266AAD_CEB2_B764_41DB_3A6125010147); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -157.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.96,
   "hfov": 7.93
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05B0540_CE56_5D1C_41E0_CBF78E02F93E",
   "yaw": -157.59,
   "pitch": -29.96,
   "hfov": 7.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DDEB3FD7_CE72_4D24_41E3_0C93E894B113",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884, this.camera_850AAB1B_CEB2_B52C_41D1_DB32C3068F8B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -44.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.48,
   "hfov": 7.63
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E058C540_CE56_5D1C_41C8_6BC5C8DFB75E",
   "yaw": -44.54,
   "pitch": -33.48,
   "hfov": 7.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA99EAFE_CE73_D4E7_41E9_1C17C37A12D8",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744, this.camera_85198B22_CEB2_B51F_41E1_F73D3D62689A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 26.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.05,
   "hfov": 8.42
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E0584540_CE56_5D1C_41E5_29C5EDFC740B",
   "yaw": 26.31,
   "pitch": -23.05,
   "hfov": 8.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DD8DAF08_CE72_4D2D_41E5_71ABA33A66E9",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -176.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.67,
   "hfov": 5.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E05AD53B_CE56_5D6C_41C6_3BDC2594C0DA",
   "yaw": -176.18,
   "pitch": -22.67,
   "hfov": 5.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DE10BC1D_CE52_5324_41E3_865DA224C1CB",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD, this.camera_84E14A5B_CEB2_B72D_41D1_283FC637E2EF); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -44.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.29,
   "hfov": 6.21
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DA3A22CC_CE56_7724_41DA_2B93C454EBD5",
   "yaw": -44.54,
   "pitch": -47.29,
   "hfov": 6.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DEC5FD65_CE52_4DE4_41E2_68AF6BB7B6E5",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E, this.camera_84F0EA60_CEB2_B71C_41E3_8392B343017B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": -4.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.69,
   "hfov": 8.18
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DA3AE2CC_CE56_7724_41A7_D596304B27B0",
   "yaw": -4.09,
   "pitch": -26.69,
   "hfov": 8.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DFC40ABB_CE53_D76D_41DD_EA13EFCA6382",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C2753BB7_CE52_D564_41CA_8C4627237884, this.camera_84D3CA54_CEB2_B724_41E1_8003537B6ADD); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 31.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.14,
   "hfov": 5.41
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2BF7146_CEB2_5524_41E4_A9F516CF0A1B",
   "yaw": 31.83,
   "pitch": -16.14,
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC700DF7_CED2_CCE4_41E0_A89375AF0CA6",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982, this.camera_86A119A8_CEB2_B56C_41D7_160B50DC301D); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 78.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.48,
   "hfov": 7.55
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2BF1147_CEB2_5525_41E3_E206B15D82CC",
   "yaw": 78.56,
   "pitch": -34.48,
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FBF8523F_CED3_F764_41E1_34202CB314C5",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7, this.camera_869DB9A2_CEB2_B51C_41B8_50FEB7CF8665); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 178.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.54,
   "hfov": 6.18
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E056D54A_CE56_5D2F_41D2_219B319C86CA",
   "yaw": 178.55,
   "pitch": -47.54,
   "hfov": 6.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D1315144_CE52_5524_41A3_358654C370EF",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 02b"
 },
 "maps": [
  {
   "yaw": 115.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.9,
   "hfov": 5.33
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E056B54A_CE56_5D2F_41E4_9B3CE5E9B1DE",
   "yaw": 115.49,
   "pitch": -18.9,
   "hfov": 5.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE773CF1_CE56_4CFC_41D2_0CD93AFE085F",
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_F2B8C145_CEB2_5524_41D1_4E694E3F18D6",
 "levels": [
  {
   "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FB98FBEF_CEF3_F4E4_41E6_B093265249F0",
 "levels": [
  {
   "url": "media/panorama_E7678929_CECE_B56C_41E9_69D5FD939CD6_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E056054A_CE56_5D2F_41BB_F904EC4FD98E",
 "levels": [
  {
   "url": "media/panorama_DB8395C4_CE72_BD24_41CE_CAD1446F0F3C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_F2BAB146_CEB2_5527_41D5_F6B832E18628",
 "levels": [
  {
   "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_F2BD5146_CEB2_5527_41DD_A5715D3E0F58",
 "levels": [
  {
   "url": "media/panorama_FBFC9C33_CEDF_D37C_41C0_E84D01F0625D_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E0524543_CE56_5D1C_41E6_2CD3B181E78E",
 "levels": [
  {
   "url": "media/panorama_DBDA8F70_CE72_4DFD_41C0_0AB73A60EC73_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_FB9BEBEF_CEF3_F4E4_41C9_F542A8E48A00",
 "levels": [
  {
   "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_FB9A3BEF_CEF3_F4E4_41E9_AFC0A60BE9DC",
 "levels": [
  {
   "url": "media/panorama_E5975FA6_CECE_4D64_41C7_65CE94F19517_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E05A653B_CE56_5D6C_41E0_4F8AD3BB040A",
 "levels": [
  {
   "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E05BF53B_CE56_5D6C_41C5_D5B9F5A4CE11",
 "levels": [
  {
   "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E05BB53B_CE56_5D67_41DE_B607E745598D",
 "levels": [
  {
   "url": "media/panorama_C2753BB7_CE52_D564_41CA_8C4627237884_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E053D543_CE56_5D27_41E2_6F5BFD7BE5D8",
 "levels": [
  {
   "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E0538549_CE56_5D2D_41DD_22A8EBE8B425",
 "levels": [
  {
   "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E0531549_CE56_5D2D_41D6_D7D9CF41EE2B",
 "levels": [
  {
   "url": "media/panorama_DBD83BA2_CE72_551F_41E4_F4AB009E2CFA_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E05FE541_CE56_5D1C_41D0_B64D7AF32E61",
 "levels": [
  {
   "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E05F5541_CE56_5D1C_41E5_B842B29CD6FD",
 "levels": [
  {
   "url": "media/panorama_DBDFB4C8_CE72_F32C_41E1_EFFE960FD2E7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E064053A_CE56_5D6C_41DB_46E2AEF36A90",
 "levels": [
  {
   "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_DCC82B38_CE51_B56B_41A2_E1180242ACDB",
 "levels": [
  {
   "url": "media/panorama_C2732D3C_CE52_4D64_41E5_33FCD747C5AD_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DA05C2CC_CE56_7724_41E2_3441EBD70375",
 "levels": [
  {
   "url": "media/panorama_C2779A7F_CE52_57E5_41DE_2BA4BD5C25C5_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E059E541_CE56_5D1C_41B1_184582055AAE",
 "levels": [
  {
   "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E0595541_CE56_5D1C_41E4_5551E5968496",
 "levels": [
  {
   "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E0590541_CE56_5D1C_418F_A9177A0AA789",
 "levels": [
  {
   "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E05EC541_CE56_5D1C_41E2_9E7F3D9FBF43",
 "levels": [
  {
   "url": "media/panorama_C27BCB73_CE52_B5FC_41E4_4B4AD4644744_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_F2BC7146_CEB2_5524_41D3_B150D20E99E9",
 "levels": [
  {
   "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_F2BCF146_CEB2_5524_41D2_AC9DBC38CDA0",
 "levels": [
  {
   "url": "media/panorama_FCF8D28D_CEDE_5724_41C0_3E17F5E58CF7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E0521542_CE56_5D1C_41E9_963168F6223D",
 "levels": [
  {
   "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E053D542_CE56_5D1C_4179_2048BDB69F1B",
 "levels": [
  {
   "url": "media/panorama_DBA6E6AE_CE72_5F64_41E5_8FCC740463A9_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_F2BFA147_CEB2_5525_41BA_36B8F2D28F54",
 "levels": [
  {
   "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_F2BE2147_CEB2_5525_41D4_D4317A0D9A2E",
 "levels": [
  {
   "url": "media/panorama_FDCC64A2_CEDE_D31C_41E6_BDC13FFB5982_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E0580541_CE56_5D1C_41E2_6B7A0833C6DB",
 "levels": [
  {
   "url": "media/panorama_C27D2C4D_CE52_D324_41E4_29483DE84EB2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E050A54A_CE56_5D2F_41D1_81671FD7965F",
 "levels": [
  {
   "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E050354A_CE56_5D2F_41D8_8B242CD98B91",
 "levels": [
  {
   "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E051954A_CE56_5D2F_41D1_442841A4824B",
 "levels": [
  {
   "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E051454A_CE56_5D2F_41E4_58AC16359BD5",
 "levels": [
  {
   "url": "media/panorama_D94E4E41_CE72_4F1C_41E7_B673C7F9DA99_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E05E5541_CE56_5D1C_41DD_19A00E3611B0",
 "levels": [
  {
   "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E05E0541_CE56_5D1C_41D0_7B6F6577CB6C",
 "levels": [
  {
   "url": "media/panorama_D86134FA_CE72_DCEC_41E1_43D048C9254F_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DA0572CC_CE56_7724_41CA_6B3222821007",
 "levels": [
  {
   "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DA0522CC_CE56_7724_41D5_38D04AF5AC50",
 "levels": [
  {
   "url": "media/panorama_C262BA6A_CE52_77EC_41A5_2CF9FD2E2D9E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E05D7542_CE56_5D1C_41E0_4ED3E243ECE3",
 "levels": [
  {
   "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E05D2542_CE56_5D1C_41C1_7519A1C25593",
 "levels": [
  {
   "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E052B542_CE56_5D1C_41E2_B3100ADA4FA9",
 "levels": [
  {
   "url": "media/panorama_DBDAB9F0_CE72_B4FB_41C3_249B25724659_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FB9B7BEF_CEF3_F4E4_41E3_841086F7FA1B",
 "levels": [
  {
   "url": "media/panorama_E49E14BF_CECE_D365_41D5_EB96C3DBA612_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E05C8542_CE56_5D1C_41D6_CA183B5770D3",
 "levels": [
  {
   "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E05C5542_CE56_5D1C_41A9_2D4BFAD82E86",
 "levels": [
  {
   "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E05C3542_CE56_5D1C_41DE_A5B7B3C7901B",
 "levels": [
  {
   "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E05DE542_CE56_5D1C_41AB_96A06C3FDDC2",
 "levels": [
  {
   "url": "media/panorama_DBA76E37_CE72_CF64_41B2_8FAA16D29483_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E050C549_CE56_5D2D_41E6_9040B2D40BF3",
 "levels": [
  {
   "url": "media/panorama_DBDAE839_CE73_B36D_41CF_D7652DF6C653_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_FB9ABBEF_CEF3_F4E4_41A9_3978A9D4A3D7",
 "levels": [
  {
   "url": "media/panorama_E498EB1F_CECE_5525_41E1_10F7C79D9C0E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_FB997BEE_CEF3_F4E4_41A4_5BBF74A2E694",
 "levels": [
  {
   "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_FB99BBEE_CEF3_F4E4_4196_5269A9B9958B",
 "levels": [
  {
   "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_FB982BEF_CEF3_F4E4_41D1_7E3D4151CC2F",
 "levels": [
  {
   "url": "media/panorama_E470ADEA_CECE_4CEC_41D4_E7A53A791410_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DCCFFB38_CE51_B56B_41D1_D370410CAF13",
 "levels": [
  {
   "url": "media/panorama_C27D6FF0_CE52_4CFC_41C7_54EC44E74282_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E05D3543_CE56_5D1C_41DF_1F286798C8AF",
 "levels": [
  {
   "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E0529543_CE56_5D1C_41E4_006CE34DFAFB",
 "levels": [
  {
   "url": "media/panorama_DBDF82DF_CE72_7725_41E6_2159E9647C06_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_F2BEB147_CEB2_5525_41BF_6C6A393E0DE3",
 "levels": [
  {
   "url": "media/panorama_FCF18FCF_CEDE_CD24_41C4_95DE08549F20_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_F2BDE146_CEB2_5524_41D9_E3031AD1B61F",
 "levels": [
  {
   "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_8C07EBA3_CEB6_F51D_41C2_CDEFFE5C4B11",
 "levels": [
  {
   "url": "media/panorama_FCE52783_CEDF_BD1C_41E7_B2A6F7E44214_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E05F3542_CE56_5D1C_41D5_E122AE87F7DF",
 "levels": [
  {
   "url": "media/panorama_DBA4520F_CE72_D724_41CA_442EC6273E92_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E05B0540_CE56_5D1C_41E0_CBF78E02F93E",
 "levels": [
  {
   "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E058C540_CE56_5D1C_41C8_6BC5C8DFB75E",
 "levels": [
  {
   "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E0584540_CE56_5D1C_41E5_29C5EDFC740B",
 "levels": [
  {
   "url": "media/panorama_C27B8C05_CE52_F324_41DF_3341CA41455D_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E05AD53B_CE56_5D6C_41C6_3BDC2594C0DA",
 "levels": [
  {
   "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DA3A22CC_CE56_7724_41DA_2B93C454EBD5",
 "levels": [
  {
   "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_DA3AE2CC_CE56_7724_41A7_D596304B27B0",
 "levels": [
  {
   "url": "media/panorama_C2790AC3_CE52_B71C_41E7_84B4B481DDAD_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_F2BF7146_CEB2_5524_41E4_A9F516CF0A1B",
 "levels": [
  {
   "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_F2BF1147_CEB2_5525_41E3_E206B15D82CC",
 "levels": [
  {
   "url": "media/panorama_FCF82DFD_CEDE_4CE5_41E2_16F325B862E8_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 6,
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_E056D54A_CE56_5D2F_41D2_219B319C86CA",
 "levels": [
  {
   "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
},
{
 "rowCount": 5,
 "frameDuration": 41,
 "frameCount": 20,
 "id": "AnimatedImageResource_E056B54A_CE56_5D2F_41E4_9B3CE5E9B1DE",
 "levels": [
  {
   "url": "media/panorama_DBBA9B69_CE72_55EC_41B7_EB2D4FF6F728_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  }
 ],
 "class": "AnimatedImageResource",
 "colCount": 4
}],
 "width": "100%",
 "overflow": "visible",
 "borderRadius": 0,
 "paddingRight": 0,
 "vrPolyfillScale": 1,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "propagateClick": false,
 "borderSize": 0,
 "height": "100%",
 "minHeight": 20,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "contentOpaque": false,
 "minWidth": 20,
 "class": "Player",
 "data": {
  "name": "Player475"
 },
 "scrollBarVisible": "rollOver",
 "scripts": {
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "downloadEnabled": false,
 "paddingBottom": 0,
 "paddingTop": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
